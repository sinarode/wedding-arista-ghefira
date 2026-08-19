// ==========================================================
// KONFIGURASI NAMA SHEET
// ==========================================================
// Sheet untuk ucapan/doa tamu (sudah ada sebelumnya)
const SHEET_WISH = 'wish';

// Sheet baru untuk daftar tamu yang sudah dikirimi undangan
// (dipakai oleh generator.html & rekap-generator.html)
// Tidak perlu dibuat manual - akan dibuat otomatis oleh script jika belum ada.
const SHEET_TAMU = 'tamu';

function doGet(e) {
  // Jika tidak ada parameter type, tolak
  if (!e || !e.parameter || !e.parameter.type) {
    return jsonResponse({ result: 'error', message: 'Parameter type tidak ditemukan' });
  }

  const type = e.parameter.type;
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  switch (type) {
    case 'get_wishes':
      return getWishes(ss);

    case 'add_wish':
      return addWish(ss, e.parameter);

    // generator.html (cek duplikat) & rekap-generator.html (tampilkan rekap)
    // sama-sama membaca sheet "tamu"
    case 'get_list':
    case 'get_rekap_generator':
      return getGuestList(ss);

    // dipanggil generator.html setiap kali link undangan dikirim/disalin
    case 'add_list':
      return addGuest(ss, e.parameter);

    default:
      return jsonResponse({ result: 'error', message: 'Tipe tidak valid' });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ----------------------------------------------------
// WISH / UCAPAN
// ----------------------------------------------------
function getWishes(ss) {
  const sheet = ss.getSheetByName(SHEET_WISH);
  const data = sheet.getDataRange().getValues();
  const wishes = [];

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][1]) {
      wishes.push({
        nama: data[i][0],
        ucapan: data[i][1],
        waktu: data[i][2]
      });
    }
  }

  wishes.reverse(); // Terbaru di atas
  return jsonResponse(wishes);
}

function addWish(ss, params) {
  const sheet = ss.getSheetByName(SHEET_WISH);
  const nama = params.nama;
  const pesan = params.pesan;

  if (nama && pesan) {
    sheet.appendRow([nama, pesan, new Date()]);
    return jsonResponse({ result: 'success' });
  }
  return jsonResponse({ result: 'error', message: 'Nama dan Ucapan tidak boleh kosong' });
}

// ----------------------------------------------------
// DAFTAR TAMU TERKIRIM (Generator & Rekap)
// Kolom: A = Nama, B = WA, C = Waktu  (tanpa status/VIP)
// ----------------------------------------------------
function getTamuSheet(ss) {
  let sheet = ss.getSheetByName(SHEET_TAMU);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_TAMU);
    sheet.appendRow(['Nama', 'WA', 'Waktu']);
  }
  return sheet;
}

function getGuestList(ss) {
  const sheet = getTamuSheet(ss);
  const data = sheet.getDataRange().getValues();
  const list = [];

  for (let i = 1; i < data.length; i++) {
    if (data[i][0]) {
      list.push({
        nama: data[i][0],
        wa: data[i][1] || '-',
        waktu: data[i][2]
      });
    }
  }

  list.reverse(); // Terbaru di atas
  return jsonResponse(list);
}

function addGuest(ss, params) {
  const sheet = getTamuSheet(ss);
  const nama = params.nama;
  const wa = params.wa || 'Manual';

  if (nama) {
    sheet.appendRow([nama, wa, new Date()]);
    return jsonResponse({ result: 'success' });
  }
  return jsonResponse({ result: 'error', message: 'Nama tidak boleh kosong' });
}
