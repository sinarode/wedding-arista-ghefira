const CONFIG = {
    // URL website undangan yang sudah live (dipakai oleh generator.html untuk membuat link)
    baseUrl: "https://wedding-arista-ghefira.vercel.app/",

    // Pengaturan Foto
    images: [
        "Foto 1.jpg",
        "Foto 2.jpg",
        "Foto 3.jpg"
    ],

    imagesMain: [
        "Foto 5.jpg",
        "Foto 9.jpg",
        "Foto 4.jpg"
    ],

    bgLuarUrl: "Foto 1.jpg",

    countdownBgUrl: "Foto 6.jpg",

    // Tambahkan di dalam objek CONFIG
    galleryImages: [
        "Foto 1.jpg",
        "arista.jpg",
        "ghefira.jpg",
        "Foto 4.jpg",
        "Foto 5.jpg",
        "Foto 9.jpg",
        "Foto 2.jpg"
    ],

    // Pengaturan Warna
    colors: {
        primary: "#c79369", // Warna tombol/aksen
        secondary: "#ffffff", // Warna latar belakang
        accent: "#f7b731",   // Warna nama (ampersand)
        bgbutton: "#a87b56", // Warna tombol
    },

    // Pengaturan Font
    fonts: {
        heading: "'Brother Signature', cursive", // Untuk judul (Nama Pasangan)
        body: "'Scaver', sans-serif"      // Untuk teks tanggal & tombol

    },

    // Pengaturan Teks
    text: {
        groom: {
            nickname: "Aris",
            fullName: "Arista Fatkhur Rozhi. S.T",
            parents: "Putra Pertama dari Bapak Misdiono & Ibu Supri Setyowati, S.Pd",
            instagram: "s.ahmadfadil",
            photo: "arista.jpg"
        },
        bride: {
            nickname: "Ghefira",
            fullName: "Ghefira Ramadhani Fakhruzie",
            parents: "Putri ke 4 dari Bapak M. Zain Fakhruzie & Ibu Isnawaty",
            instagram: "ahanadiya",
            photo: "ghefira.jpg"
        },
        namaPasangan: "Aris & Ghefira"
        
    },

    eventDetails: {
        akad: {
            date: 18, // Ambil angka tanggal saja
            day: "Jum'at",
            month: "September",
            year: "2026",
            location: "Masjid Besar Ainul Yaqin",
            address: "Jl. Prapatan Karangandong, Wringinanom, Kabupaten Gresik, Jawa Timur",
            time: "08.00 WIB - Selesai",
            mapsLink: "https://maps.app.goo.gl/Gc3AMHmctLnxecmf6?g_st=ic",
        },
        resepsi: {
            date: 8, // Ambil angka tanggal saja
            day: "Minggu",
            month: "November",
            year: "2026",
            location: "Aula mesjid Hassanuddin Majedie",
            address: " Jl. Brigjend H. basri, Kayutangi, Kec. Banjarmasin Utara",
            time: "09.00 WITA - Selesai",
            mapsLink: "https://maps.app.goo.gl/TLmoXaYvMKLQZf2PA?g_st=ic"
        }
    },

    // Pengaturan Bagian Penutup (tampil setelah kolom ucapan/wish)
    closing: {
        photo: "Foto 7.jpg", // Ganti dengan foto pasangan yang mau ditampilkan
        message: "Suatu kebahagiaan & kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami"
    },

    // Pengaturan Musik
    musicUrl: "musik.mp3", // Pastikan file lagu berada di folder yang sama

    wishUrl: "https://script.google.com/macros/s/AKfycbwn7w54FBsGXdyB8sIPCDRdHj1-JD1pJLNpYNkAnXh7ZWkKD3NjebD46QHCsF9VYqcF/exec",

    // Pengaturan Footer / Vendor (Wedding Organizer)
    footer: {
        logo: "Logo Sinar Ode WO Emas.png", // Pastikan file logo berada di folder yang sama
        vendorName: "Sinar Ode Organizer",
        whatsapp: "https://wa.me/6283159371090", // Ganti dengan nomor WA vendor (format 62xxxxxxxxxx)
        instagram: "https://instagram.com/sinarode_weddingorganizer", // Ganti dengan username IG vendor
        tiktok: "https://tiktok.com/@sinarode_weddingo" // Ganti dengan username TikTok vendor
    },

    // Pengaturan Wedding Gift
    gift: {
        description: "Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih untuk kami, dapat melalui:",
        banks: [
            {
                name: "BCA",
                account: " 7215345009", // Ganti dengan nomor rekening asli
                recipient: "Ghefira Ramadhani Fakhruzie"
            },
            {
                name: "BCA",
                account: "1841844128", // Ganti dengan nomor rekening asli
                recipient: "Arista Fatkhur Rozi"
            },
        ]
    }
}
