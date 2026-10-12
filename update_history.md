# REKAPITULASI UPDATE & INFORMASI AKSES PROYEK

## TEKNOFLASE - LANDING PAGE & ADMIN CMS

Berikut adalah detail informasi peluncuran lokal, kredensial akses admin panel, serta riwayat perubahan fitur dan konten yang telah diimplementasikan dalam proyek ini.

---

## 🔑 INFORMASI UTAMA & AKSES SISTEM

| Layanan / Akses | Informasi Detail |
| :--- | :--- |
| **Port Local Development** | Port `5173` (Server Dev: Vite & React) |
| **URL Akses Admin CMS** | [http://localhost:5173/#admin](http://localhost:5173/#admin) |
| **Username Akses** | `admin` |
| **Password Akses** | `teknoflase2025` *(kompatibel juga dengan `jasaweb2025` & `trinova2025`)* |
| **Penyimpanan Data** | `localStorage` (Autosave aktif pada CMS) |
| **Mode Tampilan** | Lighting Professional Theme (Luminous White `#ffffff`, Slate `#0f172a`, Aksen Blue `#2563eb`) |

---

## 💻 PANDUAN STEP-BY-STEP MENJALANKAN TERMINAL (LOCAL REVIEW)

Ikuti langkah-langkah praktis berikut di terminal (PowerShell, Command Prompt, atau Git Bash) untuk menguji dan me-review aplikasi di lingkungan lokal:

### 1. Buka Terminal & Masuk ke Direktori Proyek
Buka aplikasi terminal pilihan Anda, lalu arahkan path ke folder proyek:
```bash
cd "d:\Website\Company Profile trinovagroup"
```

### 2. Instalasi Dependensi (Hanya Saat Pertama Kali / Update Paket)
Jalankan perintah instalasi dependensi jika baru pertama kali meng-clone atau menjalankan proyek:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan Lokal (Dev Server)
Mulai server development Vite dengan mengeksekusi:
```bash
npm run dev
```
Setelah server berjalan, terminal akan menampilkan konfirmasi aktif, contohnya:
```text
  VITE v8.0.14  ready in 180 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 4. Membuka & Me-review Aplikasi di Browser
Buka browser (Google Chrome, Edge, Firefox, dll.), lalu akses alamat berikut:
* **Halaman Publik (Landing Page)**: [http://localhost:5173/](http://localhost:5173/)
  * *Review konsep warna lighting (luminous white `#ffffff`), tipografi Outfit & Plus Jakarta Sans, 4 pilar layanan IT Software House, alur metodologi sprint, portofolio sistem, dan modal interaktif detail layanan.*
* **Halaman Admin CMS**: [http://localhost:5173/#admin](http://localhost:5173/#admin)
  * **Username**: `admin`
  * **Password**: `jasaweb2025` *(kompatibel juga dengan `trinova2025`)*
  * *Review fungsionalitas pengubahan dinamis Brand Name di menu General, edit teks slide, data pilar keahlian, alur kerja, portofolio, dan modal footer.*

### 5. Validasi Build Produksi & Kompilasi TypeScript (Opsional)
Untuk memverifikasi tidak adanya galat sintaks/tipe (*zero error*) dan membuat bundle produksi:
```bash
npm run build
```
Untuk menguji hasil bundle produksi di server lokal:
```bash
npm run preview
```

### 6. Cara Menghentikan Server
Jika proses review selesai dan ingin mematikan server dev di terminal:
* Tekan tombol **`Ctrl + C`** pada keyboard di jendela terminal yang sedang aktif.
* Ketik **`Y`** (bila muncul konfirmasi `Terminate batch job (Y/N)?`), lalu tekan **Enter**.

---

## 🔄 RIWAYAT PEMBARUAN & FITUR (UPDATE LOG)

### 1. Struktur & Navigasi Utama (Landing Page)

* **Pembaruan Urutan Tim**: Mengubah susunan pengurus tim menjadi: **Muhammad Farhan** (CEO) ➔ **William Wirakarya** (COO) ➔ **Rahadian Indra** (CTO) ➔ **Ferdinand Kurnia** (COO & CPO).
* **Hyperlink Sosial Media**: Menambahkan ikon tautan media sosial LinkedIn pada setiap kartu profil anggota tim.
* **Optimalisasi Slider Beranda**:
  * Memindahkan posisi indikator dots slider di atas tombol aksi "Mulai Konsultasi" & "Pelajari Selengkapnya".
  * Memperbaiki status tombol CTA agar diam (tidak ikut bergeser saat transisi slide berjalan).
  * Menghilangkan ornamen badge mengambang di atas teks judul slider.
* **Sinkronisasi Konten Mobile**: Menyelaraskan seluruh data slider hero pada versi mobile responsive agar sama persis dengan versi desktop.
* **Penghapusan Toggle Dark Mode**: Mengunci status tema visual ke Dark Mode secara permanen dan menghapus tombol switch visualnya.

### 2. Responsivitas & Layout Mobile

* **Horizontal Slide Manual (Snapping Physics)**:
  * Mengubah susunan kartu **Struktur Tim** di mobile agar dapat digeser secara horizontal manual dengan efek magnetik snapping.
  * Mengubah susunan kartu **Alur Kerja** di mobile agar dapat digeser secara horizontal manual dengan efek magnetik snapping.

### 3. Infrastruktur Admin CMS & Keamanan

* **Gated Authentication**: Membangun halaman login admin panel premium (`AdminLogin.tsx`) dengan efek shake saat input salah dan toggle show/hide password. Sesi diamankan menggunakan `sessionStorage` (otomatis logout ketika tab browser ditutup).
* **Dynamic Data Binding**: Mengubah semua komponen statis (`Hero`, `About`, `Workflow`, `Portfolio`, `Contact`, `Footer`) menjadi dinamis dengan membaca data state dari `localStorage` melalui properti `content`.
* **Desain Panel Sidebar Baru**:
  * Menambahkan sidebar kustom dengan navigasi menu dinamis: General, Hero Slides, Alur Kerja, Tim, Portofolio, Kontak, dan Footer.
  * Mengubah visual background sidebar navigasi menjadi gelap (`bg-slate-900` & `border-slate-800`) demi keserasian estetika.
  * Mengunci posisi sidebar agar tetap diam/sticky saat form editor di sebelah kanan digulir (scroll).
  * Merapatkan jarak kosong berlebih antara menu Kontak dan tombol aksi bawah (Lihat Landing Page & Logout).

### 4. Peningkatan Editor Footer & Produk

* **Pembaruan Area Utama (Main) & Lebar Workspace**:
  * Menata ulang tab navigasi Footer agar menyatu langsung (flat) di area utama tanpa penumpukan card di dalam card.
  * Memperlebar area pengerjaan editor form dari `max-w-3xl` ke `max-w-5xl` agar terasa lebih luas dan lega.
* **Tabbed Menu Editor Footer**: Membagi konfigurasi footer menjadi 2 sub-tab utama:
  1. **Informasi Footer**: Mengedit deskripsi ringkas, tautan sosmed, tautan bantuan/legal (Tanya Jawab, Kebijakan Privasi, Syarat & Ketentuan), dan teks copyright.
  2. **Produk**: Mengedit nama produk, judul modal, deskripsi detail, daftar fitur, cakupan MVP, serta sakelar on/off dan link demo produk.
* **Terminologi Produk**: Mengganti semua diksi/kata "Layanan" menjadi "Produk" secara global di landing page dan halaman admin panel.

### 5. Penyempurnaan Modal Detail Produk & SEO

* **Sticky Header & Footer Modal**:
  * Menata ulang modal popup detail produk agar judul modal, tombol close (X), serta tombol aksi di bawah tetap diam (sticky) saat konten di dalamnya di-scroll.
* **Interaktivitas Tombol Aksi**:
  * Mengecilkan ukuran lebar tombol WhatsApp agar lebih proporsional.
  * Menambahkan tombol **Coba Produk** yang dikendalikan toggle on/off dari admin panel. Jika berupa tautan luar, otomatis terbuka di tab baru; jika berupa anchor lokal (`#contact`), modal otomatis tertutup.
* **Penyelarasan & Optimasi SEO E-Commerce**:
  * Memperbarui tag metadata di berkas `index.html` untuk memfokuskan kata kunci jasa pembuatan e-commerce dan toko online UMKM.
  * Merestrukturisasi isi salinan data awal (`DEFAULT_CONTENT`) di `App.tsx` ke topik pembuatan toko online/e-commerce.
  * Menambahkan skrip migrasi otomatis untuk mereset data `localStorage` browser pembeli lama secara transparan bila masih memakai teks lama.
* **Pembersihan Footer**: Menghapus tautan eksplisit "Halaman Admin" di footer landing page (akses dialihkan sepenuhnya via input URL hash `#admin`), memosisikan copyright rata tengah, serta menghapus teks kredit tech-stack *"Dibuat menggunakan React, Tailwind CSS, dan Vite."*.

### 6. Transformasi Brand Dinamis Terpusat (`jasaweb.digital`)

* **Penggantian Nama Brand Global**:
  * Mengubah seluruh teks `trinova` / `trinovagroup` / `trinovadigital` / `trinova group` menjadi **`jasaweb.digital`** pada konfigurasi default, email, media sosial, tautan demo produk, hingga meta tag SEO di `index.html`.
* **Fungsi Brand Dinamis Terpusat (Admin > General > Brand Name)**:
  * Mengembangkan fungsi cerdas `handleBrandNameChange` pada Admin CMS. Saat kolom input **Brand Name** diedit, sistem secara otomatis memperbarui nama brand di seluruh teks deskripsi CTA, hero slide, informasi footer, dan detail produk.
* **Komponen 100% Dinamis Terhadap Brand Name**:
  * **Navbar**: Logo inisial huruf dan teks brand nama otomatis menyesuaikan nilai `brandName`.
  * **About**: Subtitle Pilar Keahlian otomatis menampilkan `{content.brandName}`.
  * **Portfolio**: Tag badge visual pada mockup card proyek dinamis menampilkan `{content.brandName}`.
  * **Footer**: Teks hak cipta dan pesan otomatis WhatsApp pada modal produk otomatis menyertakan nama brand.
  * **Tab Browser (SEO Document Title)**: Terintegrasi dengan `useEffect` sehingga judul tab browser otomatis berubah seketika saat `brandName` diganti.
  * **Admin Panel & Login**: Logo avatar dan teks header admin panel secara dinamis menampilkan inisial dan nama brand.
* **Migrasi Otomatis Sisi Klien (Local Storage Auto-Migration)**:
  * Menambahkan skrip migrasi transparan pada state `App.tsx` yang otomatis mendeteksi dan memperbarui cache `localStorage` lama pengguna/pembeli agar seluruh teks lama langsung berubah menjadi `jasaweb.digital`.

### 7. Transformasi Konsep Lighting & Identitas IT Software House

* **Konsep Visual Lighting & Anti-AI Slop**:
  * Mengganti tema gelap generik dengan estetika *lighting* profesional: latar kanvas putih bersih (`#ffffff`), panel pendukung abu-abu ultra-lembut (`#f8fafc`), garis batas presisi (`border-slate-200`), dan kontras teks tinggi (`text-slate-900` dan `text-slate-600`).
  * Menghilangkan ornamen klise AI seperti efek glow neon pudar, kartu bertumpuk pill generik, dan gradien pelangi.
  * Menerapkan tekstur grid teknikal (`bg-tech-grid`) dan dot matrix subtil (`bg-tech-dots`) yang merepresentasikan studio rekayasa perangkat lunak modern.
* **Tipografi & Desain Sistem**:
  * Mengonfigurasi font **Plus Jakarta Sans** (teks isi, tombol, label) dan **Outfit** (heading arsitektural) melalui `@layer base` di `index.css`.
  * Menata hierarki visual dengan micro-copy mono (`font-mono text-xs uppercase tracking-wider`) untuk indikator status sistem, pilar teknologi, dan SLA.
* **Reposisi Identitas IT Software House (4 Pilar Engineering)**:
  * **Web & Cloud Architecture**: Rekayasa platform web mission-critical, portal enterprise, dashboard analitik, dan microservices berkinerja tinggi.
  * **IoT & Embedded Telemetry**: Integrasi sensor cerdas, akuisisi data real-time, protokol MQTT/Modbus, dan pemantauan telemetri industri.
  * **3D Simulation & WebGL**: Visualisasi interaktif digital twin, visualizer produk 3D berbasis WebGL, dan simulasi spasial web.
  * **AI Automation & Intelligent Agents**: Otomatisasi alur kerja end-to-end, integrasi model LLM privat, OCR cerdas, dan bot operasional.
* **Portofolio Kasus Nyata & Alur Kerja Engineering**:
  * Mengganti portofolio e-commerce toko baju menjadi 4 studi kasus rekayasa sistem: *Enterprise ERP & Supply Chain Portal*, *Industrial IoT Telemetry Hub*, *Interactive 3D Digital Twin Visualizer*, dan *Automated Financial Reconciliation Engine*.
  * Merestrukturisasi alur kerja menjadi metodologi software house: *Discovery & Architecture*, *Iterative Sprint Development*, *Verification & QA Testing*, dan *Deployment & Managed SLA*.
* **Penyelarasan Footer & Modal Solusi**:
  * Mengubah footer dan modal rincian layanan ke styling terang dengan badge spesifikasi teknis dan tombol WhatsApp konsultasi arsitektur sistem.
* **Penghapusan Badge Rounded (Pill) di Seluruh Section**:
  * Menghapus seluruh elemen badge pill rounded-full di atas judul setiap section (Hero, About, Tim, Workflow, Portfolio, dan Contact) untuk menghadirkan tampilan header yang lebih bersih, tegas, dan arsitektural.
