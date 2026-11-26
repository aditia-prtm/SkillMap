const SAMPLE_JOB = {
  text: `Lowongan: Frontend Developer (Magang / Junior)

Kualifikasi Wajib:
- Menguasai dasar-dasar web: HTML, CSS, dan JavaScript (ES6+).
- Berpengalaman membangun antarmuka dengan React.
- Terbiasa menggunakan Git untuk version control.
- Memahami integrasi data dengan REST API.

Nilai Tambah:
- Pernah menggunakan Tailwind CSS untuk styling cepat.
- Kemampuan komunikasi yang baik dalam tim.`,
  extraction: {
    posisi: "Frontend Developer",
    skills: [
      { nama: "HTML", kategori: "bahasa", wajib: true },
      { nama: "CSS", kategori: "bahasa", wajib: true },
      { nama: "JavaScript", kategori: "bahasa", wajib: true },
      { nama: "React", kategori: "framework", wajib: true },
      { nama: "Tailwind CSS", kategori: "framework", wajib: false },
      { nama: "Git", kategori: "tools", wajib: true },
      { nama: "REST API", kategori: "tools", wajib: true },
      { nama: "Komunikasi", kategori: "soft_skill", wajib: false }
    ]
  }
};

const SAMPLE_ROADMAPS = {
  react: {
    skill: "React",
    ringkasan: "Setelah selesai, kamu bisa membangun aplikasi web interaktif dengan komponen React dan mengambil data dari API.",
    langkah: [
      {
        urutan: 1,
        judul: "JSX dan Komponen Fungsi",
        deskripsi: "Pelajari sintaks JSX, aturan penulisan komponen fungsi, dan cara memecah UI menjadi bagian kecil. Latihan: buat komponen kartu profil."
      },
      {
        urutan: 2,
        judul: "Props dan Rendering List",
        deskripsi: "Pahami pengiriman data dari parent ke child memakai props serta render array dengan map dan key. Latihan: tampilkan daftar produk."
      },
      {
        urutan: 3,
        judul: "State dan Event Handling",
        deskripsi: "Gunakan hook useState dan event handler untuk membuat komponen interaktif. Latihan: buat aplikasi counter dan to-do list sederhana."
      },
      {
        urutan: 4,
        judul: "Side Effect dan Fetch API",
        deskripsi: "Pelajari useEffect untuk mengambil data dari REST API serta menangani status loading dan error. Latihan: tampilkan daftar data dari API publik."
      },
      {
        urutan: 5,
        judul: "Routing dan Proyek Mini",
        deskripsi: "Gabungkan beberapa halaman dengan React Router dan rapikan struktur folder. Latihan: buat aplikasi katalog dengan halaman detail."
      }
    ],
    source: "sample"
  },
  git: {
    skill: "Git",
    ringkasan: "Setelah selesai, kamu bisa mengelola versi kode dan berkolaborasi dalam tim menggunakan Git dan GitHub.",
    langkah: [
      {
        urutan: 1,
        judul: "Inisialisasi dan Commit Dasar",
        deskripsi: "Pelajari git init, git status, git add, dan git commit untuk mencatat perubahan kode. Latihan: buat repo lokal dan lakukan 3 commit."
      },
      {
        urutan: 2,
        judul: "Branching dan Merging",
        deskripsi: "Pahami cara membuat branch fitur, berpindah branch, dan menggabungkannya kembali ke main. Latihan: simulasi konflik merge sederhana."
      },
      {
        urutan: 3,
        judul: "Remote Repository dan Pull Request",
        deskripsi: "Pelajari git push, git pull, dan alur pull request di GitHub untuk kerja tim. Latihan: push branch ke GitHub dan buat pull request."
      }
    ],
    source: "sample"
  },
  javascript: {
    skill: "JavaScript",
    ringkasan: "Setelah selesai, kamu bisa menulis logika frontend modern dengan ES6+, manipulasi DOM, dan pemrograman asinkron.",
    langkah: [
      {
        urutan: 1,
        judul: "Dasar Sintaks dan Tipe Data",
        deskripsi: "Pahami let, const, tipe data primitif, operator, percabangan, dan perulangan. Latihan: buat fungsi perhitungan sederhana."
      },
      {
        urutan: 2,
        judul: "Fungsi, Array, dan Object",
        deskripsi: "Pelajari arrow function, destructuring, serta method array seperti map, filter, dan reduce. Latihan: olah daftar data mahasiswa."
      },
      {
        urutan: 3,
        judul: "Manipulasi DOM dan Event",
        deskripsi: "Gunakan querySelector, createElement, dan addEventListener untuk mengubah tampilan halaman. Latihan: buat form validasi interaktif."
      },
      {
        urutan: 4,
        judul: "Asynchronous JavaScript",
        deskripsi: "Pahami Promise, async/await, dan try/catch untuk menangani proses asinkron. Latihan: buat fungsi simulasi delay dengan Promise."
      },
      {
        urutan: 5,
        judul: "Fetch API dan JSON",
        deskripsi: "Pelajari cara memanggil HTTP request dengan fetch, parse JSON, dan menampilkan data ke DOM. Latihan: tampilkan daftar user dari API."
      }
    ],
    source: "sample"
  }
};

const SKILL_ALIASES = {
  "reactjs": "react",
  "react.js": "react",
  "node": "node.js",
  "nodejs": "node.js",
  "js": "javascript",
  "ts": "typescript",
  "postgres": "postgresql",
  "k8s": "kubernetes",
  "golang": "go",
  "vuejs": "vue",
  "vue.js": "vue",
  "nextjs": "next.js"
};
