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
cd "d:\Website\Company Profile Teknoflase"
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

### 8. Implementasi Custom Class Berbasis Pengenal Elemen Semantik

* **Penerapan Class Custom Pengenal Elemen di Seluruh Komponen**:
  * Menambahkan class identifier semantik pada setiap elemen di komponen landing page:
    * **App**: `.app-layout`
    * **Navbar**: `.navbar`, `.navbar-container`, `.navbar-wrapper`, `.navbar-brand`, `.navbar-logo`, `.navbar-brand-content`, `.navbar-brand-name`, `.navbar-brand-tagline`, `.navbar-menu-desktop`, `.navbar-link`, `.navbar-actions-desktop`, `.navbar-cta-btn`, `.navbar-mobile-toggle`, `.navbar-toggle-btn`, `.navbar-drawer`, `.navbar-drawer-nav`, `.navbar-drawer-link`, `.navbar-drawer-actions`, `.navbar-drawer-cta-btn`.
    * **Hero**: `.hero-section`, `.hero-gradient-overlay`, `.hero-container`, `.hero-content`, `.hero-title`, `.hero-highlight`, `.hero-description`, `.hero-slider-nav`, `.hero-slider-label`, `.hero-slider-dot`, `.hero-actions`, `.hero-cta-btn`, `.hero-learn-btn`, `.hero-badges-container`, `.hero-badges-list`, `.hero-badge-item`, `.hero-badge-check`.
    * **About**: `.about-section`, `.about-container`, `.about-header`, `.about-title`, `.about-description`, `.about-grid`, `.about-pillars-column`, `.about-pillars-track`, `.about-pillar-card`, `.about-pillar-icon`, `.about-pillar-title`, `.about-pillar-desc`, `.about-pillars-dots`, `.about-pillars-dot`, `.about-stats-card`, `.about-stats-badge`, `.about-stats-title`, `.about-stats-list`, `.about-stat-row`, `.about-stat-label`, `.about-stat-value`, `.about-stats-footnote`, `.about-team-wrapper`, `.about-team-toggle`, `.about-team-content`, `.about-team-header`, `.about-team-title`, `.about-team-desc`, `.about-team-track`, `.about-team-card`, `.about-team-avatar`, `.about-team-name`, `.about-team-role`, `.about-team-bio`, `.about-team-social-box`, `.about-team-social-link`, `.about-team-dots`, `.about-team-dot`.
    * **Services**: `.services-section`, `.services-container`, `.services-header`, `.services-title`, `.services-description`, `.services-filter-wrapper`, `.services-filter-bar`, `.services-filter-btn`, `.services-slider-container`, `.services-slider-viewport`, `.services-slider-track`, `.services-slide-item`, `.services-card`, `.services-card-grid`, `.services-card-media`, `.services-card-image`, `.services-card-content`, `.services-card-header`, `.services-card-icon-box`, `.services-card-badge-group`, `.services-badge-duration`, `.services-badge-category`, `.services-card-title`, `.services-card-description`, `.services-card-features-box`, `.services-card-features-heading`, `.services-card-features-list`, `.services-card-feature-item`, `.services-card-scope-box`, `.services-card-actions`, `.services-card-cta-btn`, `.services-card-demo-btn`, `.services-card-detail-btn`, `.services-slider-nav`, `.services-slider-counter`, `.services-slider-dots`, `.services-slider-dot`, `.services-assurance-banner`, `.services-assurance-title`, `.services-assurance-desc`, `.services-assurance-btn`, `.services-modal-backdrop`, `.services-modal-container`, `.services-modal-header`, `.services-modal-title`, `.services-modal-close-btn`, `.services-modal-body`, `.services-modal-footer`.
    * **FAQ**: `.faq-section`, `.faq-container`, `.faq-header`, `.faq-title`, `.faq-description`, `.faq-controls`, `.faq-search-wrapper`, `.faq-search-input`, `.faq-search-clear-btn`, `.faq-categories-wrapper`, `.faq-categories-track`, `.faq-category-btn`, `.faq-accordion-container`, `.faq-accordion-track`, `.faq-accordion-item`, `.faq-accordion-trigger`, `.faq-item-category`, `.faq-item-question`, `.faq-item-icon-box`, `.faq-accordion-body`, `.faq-item-answer`.
    * **Contact**: `.contact-section`, `.contact-container`, `.contact-header`, `.contact-title`, `.contact-description`, `.contact-callout-wrapper`, `.contact-callout-card`, `.contact-callout-title`, `.contact-callout-desc`, `.contact-callout-btn`, `.contact-info-wrapper`, `.contact-info-track`, `.contact-info-card`, `.contact-info-icon-box`, `.contact-info-body`, `.contact-info-label`, `.contact-info-value`, `.contact-info-dots`, `.contact-info-dot`.
    * **Footer**: `.footer-section`, `.footer-container`, `.footer-layout`, `.footer-brand-box`, `.footer-brand-header`, `.footer-brand-badge`, `.footer-brand-name`, `.footer-brand-desc`, `.footer-social-list`, `.footer-social-item`, `.footer-social-link`, `.footer-links-wrapper`, `.footer-links-col`, `.footer-col-title`, `.footer-links-list`, `.footer-links-item`, `.footer-service-btn`, `.footer-nav-link`, `.footer-bottom`, `.footer-copyright`, `.footer-modal-backdrop`, `.footer-modal-container`, `.footer-modal-header`, `.footer-modal-title`, `.footer-modal-close-btn`, `.footer-modal-body`, `.footer-modal-footer`.
    * **Workflow**: `.workflow-section`, `.workflow-container`, `.workflow-header`, `.workflow-title`, `.workflow-description`, `.workflow-grid`, `.workflow-card`, `.workflow-card-badge-row`, `.workflow-step-badge`, `.workflow-step-icon-box`, `.workflow-step-title`, `.workflow-step-desc`.
* **Deklarasi Class Stylesheet Terpusat**:
  * Menambahkan blok pendefinisian lengkap untuk seluruh class pengenal elemen di [`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css) sehingga mempermudah inspeksi DOM, integrasi testing (E2E / QA automation), dan kustomisasi CSS terstruktur.

### 9. Kustomisasi Styling Background Grey pada Komponen Services Modal Header

* **Penetapan Warna Background Grey**:
  * Menambahkan properti `background-color: #e2e8f0;` (slate grey) pada selektor `.services-modal-header` di [`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css).
* **Penyelarasan Komponen React**:
  * Menghapus class utilitas `bg-slate-50/70` pada elemen modal header di [`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx) agar background header sepenuhnya dikendalikan oleh class kustom `.services-modal-header`.
  * Memperbarui border pemisah ke `border-slate-300/80` guna menghasilkan garis batas yang tegas dan kontras yang proporsional dengan latar belakang grey.

### 10. Pembersihan Komponen Indikator Dot Pilar Layanan (about-pillars-dots)

* **Hasil Pemeriksaan Komponen**:
  * Komponen `.about-pillars-dots` di section `#about` sebelumnya ditujukan sebagai indikator titik scroll horizontal untuk kartu pilar layanan pada layar mobile/tablet (`lg:hidden`).
  * Dalam implementasinya, komponen ini tidak berfungsi optimal karena perhitungan pembagian scroll width tidak sinkron dengan scroll snap native, serta method `scrollIntoView` pada kontainer snap horizontal tidak konsisten di berbagai browser mobile.
* **Penghapusan & Refactoring**:
  * Menghapus elemen `.about-pillars-dots` dan `.about-pillars-dot` dari [`src/components/About.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/About.tsx).
  * Membersihkan state yang tidak terpakai (`activePillarIdx`), referensi DOM (`pillarsScrollRef`), dan event listener scroll (`handlePillarsScroll`) pada elemen track pilar.
  * Menghapus deklarasi class `.about-pillars-dots` dan `.about-pillars-dot` dari [`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css).
  * Pengalaman navigasi pada perangkat mobile kini mengandalkan scroll horizontal native yang mulus (*smooth snap-x scroll*), lebih ringan, dan bebas dari elemen mati yang membingungkan pengguna.

### 11. Reposisi Judul Pilar Layanan ke Samping Kanan Ikon (about-pillar-card)

* **Restrukturisasi Layout Kartu Pilar ([`src/components/About.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/About.tsx))**:
  * Mengelompokkan elemen ikon `.about-pillar-icon` dan judul `.about-pillar-title` ke dalam satu baris horizontal (`.about-pillar-header flex items-center gap-3.5 mb-3.5`).
  * Judul `h3.about-pillar-title` kini berada persis di sebelah kanan ikon pilar secara horizontal sejajar (*aligned*), dengan tipografi `leading-snug` yang proporsional.
  * Deskripsi pilar `.about-pillar-desc` tetap berada di bawah baris header dengan pembagian ruang yang bersih dan seimbang.
* **Penambahan Class Semantik CSS ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menambahkan deklarasi `.about-pillar-header { display: flex; align-items: center; }` untuk standardisasi stylesheet proyek.

### 12. Penyusunan Vertikal Daftar Tautan Footer (Perusahaan & Konsultasi)

* **Restrukturisasi List Tautan ([`src/components/Footer.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Footer.tsx))**:
  * Menerapkan class `flex flex-col space-y-3 text-sm list-none p-0 m-0` pada tag `<ul>` kolom **Perusahaan** dan kolom **Konsultasi**.
  * Setiap tautan kini tersusun rapi ke bawah (vertikal) secara berurutan dengan jarak antar-baris yang proporsional (`space-y-3`), menghilangkan perilaku baris horizontal yang tidak sengaja terpicu sebelumnya.
* **Standardisasi CSS Stylesheet ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menambahkan `flex-direction: column;` pada class `.footer-links-list` agar seluruh daftar tautan navigasi di area footer otomatis tersusun vertikal secara default.

### 13. Pemosisian Central untuk Elemen Kartu Kontak (contact-info-track)

* **Restrukturisasi Layout Koordinat Kontak ([`src/components/Contact.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Contact.tsx))**:
  * Mengubah kontainer `.contact-info-track` menjadi layout grid responsif yang terpusat (`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 justify-center items-stretch w-full`) di dalam pembungkus `.contact-info-wrapper max-w-2xl mx-auto`.
  * Mengonfigurasi kedua kartu kontak (`.contact-info-card`) dengan class `flex items-center justify-center w-full` sehingga kedua elemen kartu berada persis di tengah (central), baik pada layar mobile (vertikal bertumpuk di tengah) maupun tablet/desktop (berdampingan di tengah).
  * Menyelaraskan konten internal setiap kartu (ikon dan teks) agar berada di posisi tengah kartu secara proporsional.
  * Menghapus slider dots `.contact-info-dots` dan logic scroll horizontal yang tidak lagi diperlukan, menghasilkan navigasi yang lebih bersih dan bebas elemen mati.
* **Penyelarasan CSS Stylesheet ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menambahkan `justify-content: center; align-items: center;` pada class `.contact-info-track` dan `.contact-info-card`.
  * Menghapus class yang tidak terpakai `.contact-info-dots` dan `.contact-info-dot`.

### 14. Penyeragaman Label "Lokasi" pada Admin Panel CMS dan Landing Page

* **Pembaruan Label Admin Panel ([`src/components/AdminPanel.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/AdminPanel.tsx))**:
  * Mengubah label input field dari `"Lokasi Kantor / Studio"` menjadi `"Lokasi"` pada menu pengelolaan Kontak & Call to Action.
* **Penyelarasan Landing Page ([`src/components/Contact.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Contact.tsx))**:
  * Menyelaraskan label kartu koordinat kontak dari `"Lokasi Studio & Kantor"` menjadi `"Lokasi"`, sehingga konsisten 100% dengan istilah pada formulir Admin Panel.

### 15. Dukungan Multi-Image Upload dan Image Slider pada Komponen Layanan (services-card-media)

* **Pembaruan Admin Panel CMS ([`src/components/AdminPanel.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/AdminPanel.tsx))**:
  * Memperluas tipe interface `PortfolioItem` dengan properti opsional `images?: string[]` untuk menampung banyak gambar, sembari mempertahankan `image?: string` demi kompatibilitas ke belakang (*backward compatibility*).
  * Menghadirkan modul manajemen multi-image pada formulir Layanan & Portofolio:
    * **Upload Berkas Multi-File**: Input `<input type="file" multiple accept="image/*" />` dengan pembacaan otomatis via `FileReader` ke format Base64.
    * **Input Gambar via URL**: Field input teks untuk menambahkan URL gambar eksternal (Unsplash, CDN, dll.) langsung ke dalam galeri.
    * **Galeri Thumbnail Interaktif**: Menampilkan daftar seluruh gambar yang terunggah dengan badge status `★ Cover` pada gambar utama.
    * **Pengaturan Urutan & Cover**: Tombol kontrol urutan geser kiri/kanan (`◀`, `▶`), tombol penentu gambar cover utama (`★ Jadikan Cover`), dan tombol hapus individual per gambar.
    * **Tombol Bersihkan Semua**: Aksi sekali klik untuk mengosongkan seluruh foto yang terpasang.
  * Memperbarui aksi `addProject` dan `duplicateProject` agar inisialisasi dan duplikasi data foto jamak terkelola dengan aman.

* **Pembaruan Landing Page & Komponen Slider ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx))**:
  * Menambahkan subkomponen galeri interaktif `ServiceCardMediaGallery`:
    * Jika sebuah layanan hanya memiliki **1 gambar**, komponen merender elemen gambar statis tunggal sesuai spesifikasi awal `.services-card-media` dengan efek hover zoom (`group-hover:scale-105`).
    * Jika memiliki **lebih dari 1 gambar**, komponen otomatis bertransformasi menjadi slider gambar interaktif dengan transisi mulus (*crossfade transition*).
    * Fitur slider mencakup:
      1. Tombol navigasi Previous (`◀`) dan Next (`▶`) dengan efek backdrop blur modern.
      2. Indikator titik (*stepper dots*) di bagian bawah untuk berpindah ke foto tertentu secara langsung.
      3. Counter pill (*badge indeks* `X/N`) di pojok kanan atas.
      4. Dukungan gestur swipe sentuh (*touch swipe*) pada layar perangkat mobile/tablet.
  * Menambahkan subkomponen `ModalMediaGallery` untuk menampilkan slider serupa pada popup modal detail layanan.

* **Inisialisasi Data Default & Migrasi Otomatis ([`src/App.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/App.tsx))**:
  * Memperbarui data default `DEFAULT_CONTENT.portfolioItems[0]` dengan array `images` berisi 3 foto berkualitas tinggi untuk mendemonstrasikan fitur slider secara instan.
  * Menambahkan logika auto-migrasi `localStorage` agar data portofolio yang tersimpan sebelumnya otomatis memiliki field `images` tanpa menghilangkan foto yang sudah diinput oleh pengguna.

* **Penambahan Class Stylesheet ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Mendaftarkan kelas semantik pendukung: `.services-card-media-slider`, `.services-media-nav-prev`, `.services-media-nav-next`, `.services-media-counter`, `.services-media-dot`, `.services-modal-media-slider`, `.services-modal-media-prev`, dan `.services-modal-media-next`.

### 16. Implementasi Komponen Accordion pada Menu Hero Slides di Panel Admin CMS

* **Refactoring Kartu Slide Hero ke Format Accordion ([`src/components/AdminPanel.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/AdminPanel.tsx))**:
  * Mengubah daftar kartu slide hero yang sebelumnya terbuka penuh memanjang (*expanded by default*) menjadi komponen **Accordion interaktif** yang dapat dilipat dan dibuka secara fleksibel.
  * **Header Ringkasan Kompak (*Summary Row Header*)**:
    * Menampilkan badge nomor slide (`#1`, `#2`, dst.) dengan warna aktif kontras.
    * Menampilkan pratinjau judul slide dan highlight teks berwarna secara langsung tanpa perlu membuka accordion.
    * Menampilkan chip metadata ringkas: swatch warna/gradien highlight, ukuran font judul, dan teks tombol CTA.
    * Dapat diklik langsung (*clickable bar*) atau menggunakan tombol keyboard `Enter`/`Space` untuk toggle buka/tutup (*collapsible*).
  * **Aksi Cepat pada Header**:
    * **Kontrol Pengurutan**: Tombol geser urutan slide ke atas (`⬆️`) dan ke bawah (`⬇️`) langsung dari header tanpa harus membuka isi formulir.
    * **Tombol Hapus Cepat**: Tombol `🗑️ Hapus` dengan pencegahan event bubbling (`e.stopPropagation()`).
    * **Tombol Status Expand / Collapse**: Tombol pill `Edit ▾` / `Tutup ▴` dengan ikon chevron yang berputar halus 180°.
  * **Kontrol Masal & Manajemen State**:
    * Menambahkan state `openHeroSlideIndices: number[]` (default: slide #1 terbuka, slide lainnya terlipat rapi untuk efisiensi ruang).
    * Menambahkan tombol aksi masal **"Buka Semua"** dan **"Tutup Semua"** pada toolbar header daftar slide.
    * Menambahkan fungsi auto-expand pada slide baru yang ditambahkan melalui tombol `+ Tambah Slide Baru`.
    * Mempertahankan sinkronisasi indeks slide saat dihapus maupun digeser posisinya.

### 17. Penghapusan Komponen Counter & Tag Layanan Aktif pada Slider Layanan

* **Pembersihan Elemen Slider Nav ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx))**:
  * Menghapus komponen `.services-slider-counter` yang sebelumnya menampilkan teks indeks slide (`Layanan: 01 dari 06 (Company Profile)`).
  * Menghapus elemen tag kategori aktif di sudut kanan (`<span class="text-blue-600 font-sans font-medium">`).
  * Mengatur tata letak pembungkus `.services-slider-nav` menjadi terpusat di tengah (*center-aligned*) dengan `flex items-center justify-center px-2`, sehingga baris navigasi bawah kartu layanan tampak lebih minimalis, bersih, dan fokus pada titik indikator slide (*stepper dots*).
* **Pembersihan CSS Stylesheet ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menghapus deklarasi class `.services-slider-counter` dari stylesheet.

### 18. Pengurangan Margin Top Komponen Navigasi Slider Layanan (services-slider-nav)

* **Penyesuaian Jarak Margin ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx))**:
  * Mengurangi jarak atas (*margin-top*) komponen `.services-slider-nav` sebesar 50%, dari sebelumnya `mt-7` (1.75rem / 28px) menjadi `mt-3.5` (0.875rem / 14px).
  * Penyesuaian ini membuat posisi titik indikator slide (*stepper dots*) menjadi lebih dekat dan padat secara proporsional dengan kartu layanan di atasnya.

### 19. Pengurangan 75% Margin Top Banner Konsultasi Layanan (services-assurance-banner)

* **Penyesuaian Jarak Margin ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx))**:
  * Mengurangi jarak atas (*margin-top*) banner penjaminan / konsultasi `.services-assurance-banner` sebesar 75%, dari sebelumnya `mt-16` (4rem / 64px) menjadi `mt-4` (1rem / 16px).
  * Menghilangkan celah kosong berlebih antara indikator slider layanan dan banner konversi, menghasilkan aliran visual yang lebih rapat, padat, dan mulus.

### 20. Pengaturan Margin Top Bernilai Nol pada Komponen Navigasi Slider Layanan (services-slider-nav)

* **Pembaruan CSS Stylesheet ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menetapkan aturan eksplisit `margin-top: 0;` pada class selector `.services-slider-nav`.
* **Penyelarasan Komponen JSX ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx))**:
  * Mengubah utility class margin-top pada elemen `.services-slider-nav` menjadi `mt-0`.
  * Menghilangkan seluruh jarak pemisah atas pada baris indikator slide layanan sehingga langsung menempel rapat dengan area kartu layanan.

### 21. Penambahan 55% Margin Top Banner Konsultasi Layanan (services-assurance-banner)

* **Pembaruan CSS Stylesheet ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menetapkan aturan `margin-top: 24.8px;` pada class selector `.services-assurance-banner`.
* **Penyelarasan Komponen JSX ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx))**:
  * Mengubah utility class margin-top pada elemen `.services-assurance-banner` dari `mt-4` (16px) menjadi `mt-[24.8px]` (+55% / 24.8px).
  * Memberikan ruang bernafas yang seimbang dan proporsional antara titik navigasi slide layanan dan banner konsultasi di bawahnya.

### 22. Standardisasi Jarak Konsisten Antara Services Card dan Slider Nav pada Seluruh Slide

* **Standardisasi Ketinggian Kartu Seragam (*Uniform Card Height*) ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx) & [`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menerapkan `items-stretch` pada `.services-slider-track`, serta `h-full flex flex-col` pada `.services-slide-item` dan `.services-card`.
  * Menerapkan `flex-1 h-full` pada `.services-card-grid` dan `flex-1 justify-between` pada `.services-card-content`.
  * Solusi ini memastikan seluruh kartu layanan (slide 1 hingga 6) memiliki ketinggian yang **100% seragam dan terkunci rata** tanpa memandang variasi panjang teks deskripsi atau jumlah fitur. Garis batas bawah setiap kartu kini berada pada level vertikal yang persis sama.
* **Penetapan Jarak Bersih & Profesional ke Slider Nav**:
  * Mengatur jarak pemisah atas komponen `.services-slider-nav` sebesar `1.5rem` (24px) melalui kelas `mt-6` di JSX dan `margin-top: 1.5rem;` di stylesheet CSS.
  * Menghilangkan fenomena jarak berfluktuasi/berubah-ubah antar slide, menciptakan jarak yang presisi, rapi, bersih, dan konsisten saat berpindah antar slide layanan.

### 23. Perancangan UI Elegan dan Modern pada Komponen footer-modal-container (Modern Modal UI)

* **Arsitektur Kontainer & Elevasi Bertingkat ([`src/components/Footer.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Footer.tsx))**:
  * Meningkatkan kapasitas kontainer menjadi `max-w-2xl` dengan kurva sudut modern `rounded-3xl` dan elevasi bayangan multi-layer `shadow-2xl shadow-slate-950/20 ring-1 ring-black/5`.
  * Memperbarui backdrop dengan warna gelap transparan `bg-slate-950/60` dan efek blur halus `backdrop-blur-md` untuk kedalaman visual yang imersif.
* **Header Bernuansa Mewah (*Refined Header*)**:
  * Menerapkan latar belakang bergradien halus `bg-gradient-to-b from-slate-50 via-slate-50/80 to-white border-b border-slate-100/90`.
  * Menampilkan badge pill ganda: pill kategori solusi beraksen biru dengan ikon (`✨ Detail Solusi Bisnis`) dan badge nama paket layanan mono.
  * Tipografi judul tebal `font-black text-xl sm:text-2xl tracking-tight leading-snug`.
  * Tombol tutup squircle bulat melayang dengan efek hover scale `hover:scale-105 active:scale-95`.
* **Body Terstruktur dengan Kartu Interaktif Mikro**:
  * **Highlight Nilai Bisnis**: Kartu fokus solusi dengan latar `bg-slate-50/70 border border-slate-200/70` dan badge icon biru `💡`.
  * **Fitur Terpasang 2-Kolom**: Daftar fitur diubah menjadi grid kartu interaktif 2 kolom pada layar tablet/desktop dengan ikon checkmark hijau emerald bulat dan efek hover aksen border biru.
  * **Deliverables & Standar Pengerjaan**: Kartu bergradien subtle dengan chip label pengerjaan (`⚡ Siap Pakai`, `📱 Responsif Seluruh Layar`, `🔍 Ramah Indeks Google`).
* **Footer Aksi Berorientasi Konversi**:
  * Tombol WhatsApp konsultasi utama beraksen panah dinamis dengan efek micro-interaction `hover:scale-[1.02] active:scale-[0.98]`.
  * Tombol sekunder Buka Preview Demo dengan border aksen biru serta tombol Tutup yang bersih.
* **Animasi & Custom Scrollbar ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menambahkan keyframes animasi pop-in halus `@keyframes footerModalIn` dengan kurva bezier `cubic-bezier(0.16, 1, 0.3, 1)`.
  * Menerapkan custom slim scrollbar halus pada `.footer-modal-body` untuk mencegah scrollbar default yang kaku.

### 24. Penerapan Desain Full Colour pada Header dan Footer Modal Layanan Footer

* **Header Full Colour (Royal Blue to Indigo Gradient) ([`src/components/Footer.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Footer.tsx))**:
  * Mengubah latar belakang header modal menjadi berwarna penuh dengan gradien elegan `bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700` dengan garis pemisah bawah semi-transparan `border-blue-500/30`.
  * Menambahkan dekorasi cahaya ambient melingkar yang lembut (`radial ambient lights`) di sudut header untuk kedalaman visual khas tech korporat modern.
  * Tipografi judul modal putih berkilau `font-black text-white text-xl sm:text-2xl drop-shadow-xs`.
  * Menghadirkan badge pill frosted glass `bg-white/20 text-white border-white/30 backdrop-blur-md` dan badge nama layanan mono `bg-white/10 text-blue-100 border-white/20`.
  * Tombol tutup melayang bergaya translucent pill `bg-white/15 hover:bg-white/25 text-white border-white/25 backdrop-blur-md`.
* **Footer Full Colour (Deep Slate to Navy Gradient)**:
  * Mengubah latar belakang footer modal menjadi berwarna gelap penuh berwibawa `bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 border-t border-slate-800`.
  * Tombol utama WhatsApp Konsultasi menggunakan warna hijau emerald kontras `bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/25` yang ramah konversi dan sangat menonjol di atas latar gelap.
  * Tombol sekunder Buka Preview Demo dengan outline putih transparan `bg-white/10 hover:bg-white/20 text-white border-white/20` serta tombol Tutup beraksen dark slate modern.
* **Harmoni Visual "Framed Modal"**:
  * Mengombinasikan **Header Full Colour** (atas), **Body Bersih & Ringan** (tengah), dan **Footer Full Colour** (bawah) menghasilkan tampilan modal yang berbobot, berkelas tinggi, dan sangat nyaman dibaca.

### 25. Pembuatan Halaman Kebijakan Privasi & Integrasi Modul CMS Admin Panel

* **Halaman Baru Kebijakan Privasi ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx))**:
  * Merancang dan membangun halaman khusus Kebijakan Privasi (*Privacy Policy Page*) berpenampilan bersih, elegan, berwibawa, dan responsif di seluruh layar gadget.
  * **Top Navigation Bar Khusus**: Dilengkapi logo identitas brand, tombol *"← Kembali ke Beranda"*, dan tombol *CTA Konsultasi WhatsApp*.
  * **Hero Header Section**: Menampilkan badge resmi *Dokumen Legal & Kebijakan Privasi*, tanggal pembaruan terakhir (*last updated*), judul halaman, subjudul, dan kartu komitmen perlindungan data TEKNOFLASE (*Intro Card*).
  * **Struktur Pasal / Poin Kebijakan Standar UU PDP No. 27/2022**:
    1. *Informasi & Data yang Kami Kumpulkan* (Data kontak, rincian proyek, data log anonim).
    2. *Tujuan Penggunaan Informasi* (Penyusunan RAB/proposal, eksekusi proyek, komunikasi teknis).
    3. *Kerahasiaan & Keamanan Data Tingkat Tinggi* (Enkripsi SSL/TLS 256-bit & jaminan 100% tidak menjual data ke pihak ketiga).
    4. *Kepemilikan Penuh Aset & Source Code Klien* (*100% Client Ownership*, tanpa *vendor lock-in*).
    5. *Kebijakan Cookie & Teknologi Pelacak Analitik*.
    6. *Hak Pengguna atas Data Pribadi* (Hak konfirmasi, pembaruan, dan penghapusan data).
    7. *Pembaruan Kebijakan Privasi*.
    8. *Kontak & Saluran Pengaduan Privasi*.
  * **Bantuan & Kontak Privasi**: Callout banner bergradien gelap di bagian bawah halaman dengan tombol kontak cepat ke WhatsApp resmi dan tombol kembali ke beranda.
  * **Integrasi Footer Komprehensif**: Merender komponen [`Footer.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Footer.tsx) di bagian dasar halaman untuk konsistensi navigasi.
  * Dilengkapi efek otomatis scroll ke atas (`window.scrollTo({ top: 0, behavior: 'instant' })`) saat halaman dimuat.

* **Modul CMS Kebijakan Privasi pada Admin Panel ([`src/components/AdminPanel.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/AdminPanel.tsx))**:
  * Menambahkan tab kategori baru **"🛡️ Kebijakan Privasi"** pada navigasi sidebar Admin Panel.
  * Memperluas tipe interface `LandingPageContent` dengan objek `privacyPolicy?: PrivacyPolicyContent`.
  * **Fitur Pengelolaan Konten CMS**:
    * Pengeditan Judul Halaman, Subjudul, Tanggal Terakhir Diperbarui, dan Teks Pengantar (*Intro Card*).
    * Modul Manajemen Pasal/Poin Kebijakan dengan **desain Accordion ringkas hemat ruang**:
      * Header accordion dengan nomor urut pasal, pratinjau judul, ringkasan isi, tombol pengurutan urutan ke atas/bawah (`▲` / `▼`), dan tombol hapus pasal (`🗑️`).
      * Tombol aksi masal: **"Buka Semua"** dan **"Tutup Semua"** accordion pasal.
      * Tombol **"+ Tambah Pasal Baru"** dengan otomatis membuka accordion pasal yang baru dibuat.
      * Textarea isi ketentuan pasal multi-baris yang mendukung pemformatan paragraf dan simbol bullet point (`•`).
    * Tombol **"👁️ Buka Halaman"** untuk melihat pratinjau langsung halaman Kebijakan Privasi pada tab baru.
    * Tombol **"🔄 Reset Standar"** untuk mengembalikan konten ke draf standar resmi TEKNOFLASE.

* **Arsitektur Hash Routing & Migrasi Otomatis ([`src/App.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/App.tsx))**:
  * Memperluas sistem router internal dari tipe `'landing' | 'admin'` menjadi `'landing' | 'admin' | 'privacy'`.
  * Mendeteksi fragment hash URL `#privacy` dan `#kebijakan-privasi` secara otomatis via event listener `hashchange`.
  * Menyesuaikan judul tab browser (*document title*) secara dinamis: `"Kebijakan Privasi | TEKNOFLASE"`.
  * Menambahkan logika migrasi otomatis pada `localStorage` sehingga jika pengguna telah memiliki data lama, field `privacyPolicy` otomatis terisi dengan template default lengkap dan tautan footer langsung diperbarui ke `#privacy`.

* **Penyelarasan Tautan Footer ([`src/components/Footer.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Footer.tsx))**:
  * Mengarahkan tautan *"Kebijakan Privasi"* di kolom Legalitas footer ke `#privacy` dengan fungsi scroll otomatis ke atas halaman.

### 26. Standardisasi Nama Kelas Berbasis Komponen pada Halaman Kebijakan Privasi (Page #privacy)

* **Penerapan Kelas Semantik pada Komponen ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx))**:
  * Mengintegrasikan penamaan kelas semantik terstruktur dengan prefiks nama komponen (`privacy-...`) pada seluruh elemen DOM halaman Kebijakan Privasi (`#privacy`):
    * **Struktur Halaman Utama**: `.privacy-page`
    * **Header & Navigasi Atas**: `.privacy-header`, `.privacy-header-container`, `.privacy-header-brand`, `.privacy-header-logo`, `.privacy-header-brand-info`, `.privacy-header-brand-name`, `.privacy-header-brand-tagline`, `.privacy-header-actions`, `.privacy-header-back-btn`, `.privacy-header-back-icon`, `.privacy-header-back-text`, `.privacy-header-cta-btn`, `.privacy-header-cta-text`, `.privacy-header-cta-icon`.
    * **Hero Banner Legal**: `.privacy-hero-section`, `.privacy-hero-bg-glow-right`, `.privacy-hero-bg-glow-left`, `.privacy-hero-container`, `.privacy-hero-badges`, `.privacy-hero-badge-legal`, `.privacy-hero-badge-date`, `.privacy-hero-badge-icon`, `.privacy-hero-date-highlight`, `.privacy-hero-title`, `.privacy-hero-subtitle`.
    * **Kartu Pernyataan Perlindungan Data**: `.privacy-notice-card`, `.privacy-notice-icon-box`, `.privacy-notice-icon`, `.privacy-notice-content`, `.privacy-notice-title`, `.privacy-notice-desc`.
    * **Area Konten & Pasal Kebijakan**: `.privacy-content-section`, `.privacy-content-container`, `.privacy-sections-list`, `.privacy-section-card`, `.privacy-section-header`, `.privacy-section-number`, `.privacy-section-title`, `.privacy-section-body`.
    * **Kartu Bantuan & Kontak Privasi**: `.privacy-contact-card`, `.privacy-contact-layout`, `.privacy-contact-info`, `.privacy-contact-badge`, `.privacy-contact-badge-icon`, `.privacy-contact-title`, `.privacy-contact-desc`, `.privacy-contact-actions`, `.privacy-contact-wa-btn`, `.privacy-contact-wa-text`, `.privacy-contact-wa-icon`, `.privacy-contact-back-btn`, `.privacy-contact-back-text`.
* **Pendaftaran Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menambahkan section deklarasi `/* ─── Privacy Policy Page Elements ─── */` pada bagian *Custom Element Identifier Classes* di `src/index.css` agar hierarki DOM terstandarisasi penuh dan konsisten dengan komponen section lainnya (Navbar, Hero, Services, About, FAQ, Contact, Footer, Workflow).

### 27. Implementasi Fitur Accordion Interaktif pada privacy-section-header Halaman Kebijakan Privasi

* **Interaktivitas Accordion pada Header Pasal ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx))**:
  * Menjadikan seluruh elemen `.privacy-section-header` sebagai pemicu interaktif (*interactive toggle button*) yang dapat diklik atau diaktifkan melalui keyboard (`role="button"`, `tabIndex={0}`, `aria-expanded`, `aria-controls`, `Enter`/`Space`).
  * Menambahkan indikator chevron interaktif (`.privacy-section-chevron`) yang berputar halus 180° saat pasal dibuka/ditutup, lengkap dengan label penanda status (`.privacy-section-toggle-label`: *"Tutup"* / *"Lihat"*).
  * **Tampilan Fleksibel Saat Terbuka & Tertutup**:
    * **Saat Terbuka**: Elemen `.privacy-section-body` menampilkan seluruh klausul kebijakan secara lengkap dengan pemisah garis halus (`border-t border-slate-100`) dan badge nomor urut aktif berlatar biru royal kontras.
    * **Saat Tertutup**: Menampilkan cuplikan ringkas satu baris (`.privacy-section-preview`) dengan teks terpotong rapi (*truncated snippet*) sehingga pembaca sekilas memahami topik pasal sebelum membukanya.
  * **Toolbar Navigasi & Aksi Masal**:
    * Menambahkan toolbar `.privacy-sections-toolbar` di atas daftar pasal dengan informasi jumlah pasal aktif (`.privacy-sections-count`) dan pill indikator pasal yang sedang terbuka (`.privacy-sections-status`).
    * Menghadirkan tombol aksi cepat **"Buka Semua"** (`.privacy-sections-btn-expand`) dan **"Tutup Semua"** (`.privacy-sections-btn-collapse`) untuk kenyamanan eksplorasi pembaca.
    * Default awal: Pasal #1 terbuka secara otomatis sebagai panduan visual intuitif bagi pengguna.
* **Penyelarasan Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Mendaftarkan kelas semantik pendukung accordion: `.privacy-sections-toolbar`, `.privacy-sections-toolbar-info`, `.privacy-sections-count`, `.privacy-sections-status`, `.privacy-sections-toggle-all`, `.privacy-sections-btn-expand`, `.privacy-sections-btn-collapse`, `.privacy-section-card-open`, `.privacy-section-card-closed`, `.privacy-section-header-left`, `.privacy-section-toggle`, `.privacy-section-toggle-label`, `.privacy-section-chevron`, dan `.privacy-section-preview`.

### 28. Penyejajaran Tombol Demo dan Detail Layanan pada Tampilan Mobile Responsive Kartu Layanan (services-card)

* **Restrukturisasi Tata Letak Tombol Aksi Mobile ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx))**:
  * Menyesuaikan komponen pembungkus `.services-card-actions` dengan utility layout responsif `flex flex-col sm:flex-row items-stretch sm:items-center gap-3`.
  * **Kondisi Khusus Ketika Ada Tombol Demo (`project.demoUrl`)**:
    * Pada layar mobile (`< sm`):
      * Tombol utama **"Konsultasi Layanan Ini"** (`.services-card-cta-btn`) diposisikan di baris pertama dengan lebar penuh (`w-full`) sehingga tampil menonjol sebagai fokus konversi utama.
      * Menghadirkan pembungkus aksi sekunder `.services-card-secondary-actions` dengan tata letak horizontal `flex flex-row items-center gap-2.5 w-full`.
      * Di dalam baris kedua ini, tombol **Demo** (`.services-card-demo-btn`) dan tombol **Detail Layanan** (`.services-card-detail-btn`) masing-masing diberi kelas `flex-1`, sehingga **sejajar berdampingan secara horizontal** dengan pembagian lebar simetris 50% - 50% dan ketinggian seragam (`min-h-[44px]`).
    * Pada layar tablet & desktop (`sm:` ke atas):
      * Pembungkus sekunder kembali ke perilaku pas konten (`sm:w-auto`), tombol CTA kembali fleksibel (`sm:flex-1`), serta tombol Demo dan Detail kembali berukuran proporsional (`sm:flex-initial sm:w-auto`), menyajikan 1 baris tombol horizontal yang elegan.
  * **Kondisi Tanpa Tombol Demo**:
    * Jika sebuah layanan tidak memiliki URL demo, tombol **Detail Layanan** tetap fleksibel (`w-full sm:w-auto`) mendampingi tombol Konsultasi tanpa ruang kosong yang timpang.
* **Pendaftaran Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Mendaftarkan kelas `.services-card-secondary-actions { display: flex; }` pada kelompok *Services Section Elements* di stylesheet proyek.

### 29. Penyesuaian Tata Letak Vertikal (Y-Row) Komponen Kontak Privasi pada Resolusi 800 x 1280 px

* **Restrukturisasi Responsive Layout ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx))**:
  * Mengubah breakpoint layout `.privacy-contact-layout` dari `sm:flex-row` menjadi `flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6`.
  * Pada layar tablet portrait termasuk resolusi **800 x 1280 px** (viewport 800px):
    * Komponen `.privacy-contact-layout` tersusun secara vertikal (*y-row* / kolom).
    * Komponen `.privacy-contact-actions` (tombol WhatsApp dan tombol Kembali ke Beranda) kini berada **tepat di bawah** komponen `.privacy-contact-info`, memberikan ruang baca yang luas dan tidak berhimpitan.
    * Teks paragraf deskripsi `.privacy-contact-desc` disesuaikan menjadi `max-w-2xl` agar lebih proporsional di layar tablet.
    * Pada layar desktop (`lg:` / 1024px ke atas), tata letak kembali ke posisi horizontal berdampingan (`lg:flex-row`).
* **Pemberian Aturan Media Query Eksplisit ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menambahkan aturan `@media (max-width: 1023px)` untuk `.privacy-contact-layout` dengan `flex-direction: column !important; items-start !important;` serta `.privacy-contact-actions { width: 100% !important; }` untuk menjamin tata letak vertikal (y-row) stabil di resolusi 800 x 1280 px dan tablet sejenisnya.

### 30. Implementasi Hamburger Navigasi dan Integrasi Menu Landing Page pada Halaman Kebijakan Privasi (#privacy)

* **Hamburger Navigasi & Drawer Mobile Responsive ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx))**:
  * Menghadirkan tombol hamburger navigasi `.privacy-mobile-toggle` dan `.privacy-toggle-btn` pada tampilan layar mobile & tablet (`< 1024px` / `lg:hidden`) dengan standar aksesibilitas minimum tap target 44px (`min-h-[44px]`).
  * Tombol hamburger dilengkapi ikon SVG dinamis dan teks state yang jelas: **"Menu"** (tiga garis) saat tertutup dan **"Tutup"** (tanda silang) saat drawer terbuka.
  * Menghadirkan panel drawer responsif `.privacy-drawer` dengan daftar menu navigasi lengkap yang sama persis dengan landing page:
    1. **Beranda** (`#`)
    2. **Tentang Kami** (`#about`)
    3. **Layanan** (`#services`)
    4. **FAQ** (`#faq`)
    5. **Kontak** (`#contact`)
  * Di bagian bawah drawer navigasi, disediakan aksi cepat `.privacy-drawer-actions`:
    * Tombol **"Konsultasi WhatsApp"** (`.privacy-drawer-cta-btn`) dengan sorotan warna biru royal.
    * Tombol **"Kembali ke Beranda"** (`.privacy-drawer-back-btn`) dengan gaya netral slate.
* **Integrasi Navigasi Desktop Header**:
  * Pada tampilan monitor desktop (`lg:flex` / ≥ 1024px), menu navigasi landing page juga dihadirkan secara elegan di header `.privacy-header-menu-desktop` dengan tautan `.privacy-header-nav-link`, berdampingan dengan logo di sisi kiri dan tombol aksi di sisi kanan.
* **Transisi Mulus Antar-Halaman (Cross-Route Anchor Smooth Scrolling) ([`src/App.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/App.tsx))**:
  * Mengoptimalkan event listener `hashchange` di `App.tsx` sehingga ketika pengunjung mengklik tautan navigasi landing page (misal `#about`, `#services`, dll.) dari halaman Kebijakan Privasi, route secara otomatis berpindah ke landing page dan langsung melakukan *smooth scrolling* ke elemen target yang dipilih.
* **Penyelarasan Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Mendaftarkan seluruh kelas semantik BEM baru: `.privacy-header-menu-desktop`, `.privacy-header-nav-link`, `.privacy-mobile-toggle`, `.privacy-toggle-btn`, `.privacy-toggle-icon`, `.privacy-toggle-text`, `.privacy-drawer`, `.privacy-drawer-nav`, `.privacy-drawer-badge`, `.privacy-drawer-link`, `.privacy-drawer-actions`, `.privacy-drawer-cta-btn`, `.privacy-drawer-back-btn`, dan `.privacy-drawer-back-icon`.

### 31. Penyederhanaan Teks Tombol CTA WhatsApp Menjadi "WhatsApp Sekarang"

* **Pembaruan Teks Tombol Kontak ([`src/components/Contact.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Contact.tsx))**:
  * Mengubah elemen teks tombol WhatsApp dari:
    ```html
    <span>Mulai Percakapan WhatsApp Sekarang</span>
    ```
    menjadi:
    ```html
    <span>WhatsApp Sekarang</span>
    ```
    sehingga teks tombol lebih ringkas, fokus, *action-oriented*, dan proporsional di seluruh resolusi layar (desktop maupun mobile).
* **Penyelarasan Nilai Default & Auto-Migration ([`src/App.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/App.tsx))**:
  * Memperbarui nilai default `ctaButtonText` pada konfigurasi `DEFAULT_CONTENT` menjadi `'WhatsApp Sekarang'`.
  * Menambahkan mekanisme auto-migrasi data CMS di `localStorage` sehingga konten yang sebelumnya masih bernilai `'Mulai Percakapan WhatsApp Sekarang'` otomatis diperbarui ke `'WhatsApp Sekarang'`.
* **Penyelarasan Input CMS Admin Panel ([`src/components/AdminPanel.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/AdminPanel.tsx))**:
  * Memperbarui label fallback dan input field pada panel administrasi WhatsApp Card.

### 32. Pembersihan Elemen Badge Navigasi pada Drawer Mobile Kebijakan Privasi

* **Penghapusan Elemen Badge ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx))**:
  * Menghapus elemen badge `.privacy-drawer-badge` (`<span>🧭</span> Menu Navigasi Landing Page`) dari dalam drawer navigasi mobile, sehingga tampilan drawer menjadi lebih bersih, minimalis, dan langsung menampilkan item navigasi utama.
* **Pembersihan Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menghapus selector aturan `.privacy-drawer-badge` yang sudah tidak digunakan.

### 33. Pembersihan Elemen Badge Legal & Kepatuhan Privasi pada Hero Section

* **Penghapusan Elemen Badge Legal ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx))**:
  * Menghapus elemen badge `.privacy-hero-badge-legal` (`<span>🛡️</span> Legal & Kepatuhan Privasi`) dari dalam wadah `.privacy-hero-badges`, sehingga bagian atas judul halaman Kebijakan Privasi tampil lebih bersih, fokus, dan hanya menampilkan badge pembaruan tanggal (`.privacy-hero-badge-date`).
* **Pembersihan Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menghapus selector aturan `.privacy-hero-badge-legal` yang sudah tidak digunakan.

### 34. Pembersihan Elemen Badge Tanggal Pembaruan pada Hero Section Kebijakan Privasi

* **Penghapusan Elemen Badge Tanggal & Wadahnya ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx))**:
  * Menghapus elemen `.privacy-hero-badge-date` (`<span>🕒</span> Terakhir Diperbarui: ...`) beserta kontainer `.privacy-hero-badges`, sehingga bagian atas halaman Kebijakan Privasi langsung menyajikan judul utama (`h1`) secara bersih, lega, dan elegan tanpa distraksi badge.
* **Pembersihan Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menghapus selector aturan `.privacy-hero-badges`, `.privacy-hero-badge-date`, `.privacy-hero-badge-icon`, dan `.privacy-hero-date-highlight`.

### 35. Penyembunyian Tombol Kembali ke Beranda & Konsultasi WhatsApp pada Navigasi Bar Tablet (800 x 1280 px)

* **Penyesuaian Breakpoint Tombol Navigasi Bar ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx))**:
  * Mengubah kelas utility pada tombol navigasi bar atas:
    * `.privacy-header-back-btn`: dari `hidden md:inline-flex` menjadi `hidden lg:inline-flex`.
    * `.privacy-header-cta-btn`: dari `hidden sm:inline-flex` menjadi `hidden lg:inline-flex`.
  * Pada layar tablet (termasuk resolusi portrait **800 x 1280 px**) dan mobile (`< 1024px`):
    * Kedua tombol tersebut tidak lagi ditampilkan di navigasi bar atas, sehingga navigasi bar hanya menampilkan logo brand dan tombol hamburger (`.privacy-mobile-toggle`).
    * Seluruh tombol aksi ("Konsultasi WhatsApp" & "Kembali ke Beranda") di dalam drawer hamburger menu (`.privacy-drawer-actions`) tetap dipertahankan utuh dan mudah diakses pengguna saat menu dibuka.
* **Pemberian Aturan Media Query Eksplisit ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Menambahkan aturan `@media (max-width: 1023px)` yang mengunci `display: none !important;` untuk `.privacy-header-back-btn` dan `.privacy-header-cta-btn` guna menjamin kedua tombol tidak muncul di navigasi bar pada resolusi 800 x 1280 px maupun perangkat tablet/ponsel lainnya.

### 36. Implementasi Behavior Click-Outside untuk Menutup Menu Navigasi Hamburger

* **Penerapan Ref & Global Event Listener ([`src/components/PrivacyPolicy.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/PrivacyPolicy.tsx) & [`src/components/Navbar.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Navbar.tsx))**:
  * Memanfaatkan `useRef` React (`headerRef` / `navRef`) yang mengikat kontainer navigasi dan drawer.
  * Menambahkan *lifecycle effect* (`useEffect`) yang mendengarkan event klik mouse (`mousedown`) dan sentuhan layar ponsel/tablet (`touchstart`). Saat terdeteksi interaksi di luar area daftar menu drawer, state hamburger otomatis diubah menjadi `false` (tertutup).
  * Menambahkan dukungan aksesibilitas keyboard: menekan tombol `Escape` (`keydown`) akan langsung menutup menu hamburger secara otomatis.
* **Elemen Backdrop Overlay Responsif**:
  * Menghadirkan backdrop overlay semi-transparan (`.privacy-drawer-backdrop` dan `.navbar-drawer-backdrop`) berlatar `bg-slate-950/25` dengan efek blur halus (`backdrop-blur-[2px]`).
  * Backdrop ini muncul di belakang drawer dropdown saat menu terbuka, sehingga pengguna cukup mengetuk/mengklik area layar mana pun di luar daftar menu untuk menutup hamburger secara instan.
* **Penyelarasan Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Mendaftarkan kelas semantik `.privacy-drawer-backdrop` dan `.navbar-drawer-backdrop` pada stylesheet proyek.

### 37. Penerapan Flex Wrap pada Komponen Kartu Kontak (contact-info-track) untuk Mobile Responsive

* **Pembaruan Layout Responsif ([`src/components/Contact.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Contact.tsx))**:
  * Mengubah kelas utility kontainer `.contact-info-track` dari sebelumnya `grid grid-cols-1 sm:grid-cols-2` menjadi:
    ```html
    <div class="contact-info-track flex flex-wrap sm:grid sm:grid-cols-2 gap-4 sm:gap-6 justify-center items-stretch w-full">
    ```
  * Pada tampilan mobile (`< sm` / layar kecil):
    * Komponen `.contact-info-track` kini menggunakan tata letak `flex flex-wrap` yang fleksibel. Setiap kartu kontak berlebar penuh (`w-full`) terlipat (*wrap*) ke baris baru secara teratur dengan jarak vertikal rapi (`gap-4`).
  * Pada layar tablet & desktop (`sm:` ke atas / ≥ 640px):
    * Tata letak kembali ke sistem grid 2 kolom simetris (`sm:grid sm:grid-cols-2 gap-6`).
* **Penyelarasan Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Memperbarui aturan CSS `.contact-info-track` dengan menambahkan `flex-wrap: wrap;` serta proteksi media query `@media (max-width: 639px)` dengan `display: flex !important; flex-wrap: wrap !important;`.

### 38. Penanganan Anti-Crash Gambar URL & Penyediaan Direktori Media Repository (`public/images/services/`)

* **Analisis Penyebab Gambar URL Crash / Gagal Ditampilkan**:
  * **Hotlink Protection**: Banyak CDN/hosting eksternal (termasuk Unsplash pada kondisi tertentu) memblokir rendering gambar jika browser mengirimkan header `Referer` dari domain berbeda.
  * **HTML Preview vs Direct Link**: Tautan sharing (seperti Google Drive `/file/d/...` atau Dropbox) bukanlah file gambar langsung, melainkan halaman antarmuka web HTML yang tidak bisa dirender oleh tag `<img>`.
  * **Ketiadaan Fallback**: Ketiadaan penanganan *error boundary* atau event `onError` pada tag `<img>` membuat gambar yang gagal dimuat tampak broken atau merusak layout antarmuka.
* **Perbaikan Anti-Crash & Fallback Komponen Layanan ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx))**:
  * Menambahkan fungsi pembantu `getFallbackImage(category, realIndex)` yang mengembalikan URL gambar default beresolusi tinggi berdasarkan kategori layanan saat gambar yang diinput bermasalah.
  * Memasang atribut `referrerPolicy="no-referrer"` pada seluruh elemen `<img>` (kartu layanan tunggal, slider media galeri, dan galeri modal detail) untuk mem-bypass pemblokiran hotlinking dari server eksternal.
  * Memasang event handler `onError` pada setiap elemen `<img>` yang otomatis mengalihkan sumber gambar (`target.src = fallback`) ke gambar default jika link URL eksternal rusak, berstatus 404, atau terblokir.
* **Penyempurnaan Input URL & Normalisasi Link Otomatis di Admin Panel ([`src/components/AdminPanel.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/AdminPanel.tsx))**:
  * Menambahkan fungsi `normalizeImageUrl(url)` pada `handleAddProjectImageUrl` yang otomatis mendeteksi dan mengonversi link Google Drive sharing viewer (`drive.google.com/file/d/...`) menjadi direct raw image CDN (`lh3.googleusercontent.com/d/...`), serta link Dropbox menjadi direct file (`dl.dropboxusercontent.com`).
  * Memperbarui placeholder input teks menjadi: `"Tempel path lokal (/images/services/...) atau URL gambar (https://...)"`.
  * Memasang `referrerPolicy="no-referrer"` dan graceful opacity handler pada thumbnail preview kartu proyek dan thumbnail slide galeri di Admin Panel.
* **Penyediaan Direktori Media Repository Lokal ([`public/images/services/`](file:///D:/Website/Company%20Profile%20Teknoflase/public/images/services))**:
  * Membuat folder permanen `public/images/services/` di dalam struktur repository Git beserta file petunjuk [`README.md`](file:///D:/Website/Company%20Profile%20Teknoflase/public/images/services/README.md).
  * Solusi ini memungkinkan pengguna mengelola berkas gambar langsung di dalam repository proyek tanpa memerlukan database atau third-party storage seperti Supabase. Setiap berkas yang dimasukkan ke folder ini otomatis ikut ter-upload ke web server saat menjalankan `git push`, berkecepatan tinggi, bebas dari masalah kuota browser `localStorage`, dan dapat dipanggil menggunakan format path lokal sederhana: `/images/services/nama-file.jpg`.

### 39. Sinkronisasi Real-Time & Pengaktifan Cover Image Portofolio di Landing Page

* **Analisis Masalah Set Cover Image**:
  * **Sinkronisasi Lintas-Tab Browser**: Saat pengguna mengelola gambar di Admin CMS (`#admin`) dan membuka landing page di tab browser lain secara bersamaan (seperti terlihat pada tab Chrome ganda), browser tidak memicu pembaruan state karena ketiadaan listener event `storage` global di `App.tsx`.
  * **Prioritas Penataan Gambar pada Slider**: Fungsi `getServiceImages` sebelumnya hanya mengembalikan array `images` apa adanya tanpa memastikan apakah gambar sampul (`coverImage` atau `image`) berada di urutan pertama (`#1`), sehingga jika gambar yang dijadikan cover berada di indeks lain, landing page tetap menampilkan foto pertama lama.
  * **State Lifecycle Galeri**: State slide aktif (`currentIdx`) pada `ServiceCardMediaGallery` dan `ModalMediaGallery` bersifat lokal dan tidak me-reset kembali ke gambar cover (`#1`) ketika cover image diubah.
  * **Reconciliasi Elemen DOM Gambar**: Penggunaan key berbasis indeks numerik (`key={i}`) membuat browser menganggap elemen `<img>` sama dan mempertahankan cache render lama saat urutan foto berpindah posisi.
* **Perbaikan Logika Cover Image pada Komponen Layanan ([`src/components/Services.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/Services.tsx))**:
  * Memperbarui fungsi `getServiceImages` agar memprioritaskan `coverImage` atau `image`. Jika gambar sampul berada di urutan non-nol, sistem secara otomatis menata ulang array sehingga cover image selalu menempati urutan pertama (`#1`).
  * Menambahkan lifecycle `useEffect` pada `ServiceCardMediaGallery` dan `ModalMediaGallery` untuk otomatis mereset tampilan slide kembali ke gambar sampul utama (`setCurrentIdx(0)`) setiap kali properti cover image diperbarui.
  * Mengubah key render elemen `<img>` menjadi string unik `key={`${img}-${i}`}` untuk memicu re-render DOM yang bersih dan mulus saat urutan slide ditukar.
  * Menambahkan indikator visual status cover (`.services-badge-cover`) dengan badge `★ Cover` pada sudut kanan atas slider saat slide cover aktif, selaras dengan tampilan di Admin CMS.
* **Integrasi Lintas-Tab & Auto-Migrasi State ([`src/App.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/App.tsx))**:
  * Menambahkan event listener `storage` pada `useEffect` utama di `App.tsx`. Setiap kali pengguna mengklik `★ Cover` atau mengubah konten di tab Admin CMS, seluruh tab landing page yang sedang terbuka otomatis tersinkronisasi seketika secara *real-time*.
  * Menambahkan auto-migrasi `coverImage` pada inisialisasi state `portfolioItems` di `localStorage`.
* **Standardisasi Tipe Data & Handler Admin Panel ([`src/components/AdminPanel.tsx`](file:///D:/Website/Company%20Profile%20Teknoflase/src/components/AdminPanel.tsx))**:
  * Memperluas interface `PortfolioItem` dengan properti `coverImage?: string`.
  * Memperbarui seluruh handler manipulasi gambar (`handleSetPrimaryImage`, `handleAddProjectImageUrl`, `handleUploadProjectImages`, `handleRemoveProjectImage`, `handleMoveProjectImage`, `addProject`, `duplicateProject`) agar selalu menjaga konsistensi `coverImage`, `image`, dan `images[0]`.
* **Penyelarasan Stylesheet Semantik ([`src/index.css`](file:///D:/Website/Company%20Profile%20Teknoflase/src/index.css))**:
  * Mendaftarkan kelas semantik `.services-badge-cover` pada stylesheet proyek.

### 40. Penanganan Error HTTP 502 & Cloudflare 522 (Allowed Hosts, Production Script & Server Stability)

* **Analisis Penyebab Error 502 / Cloudflare 522**:
  * **Ketiadaan Konfigurasi Host & Preview di Vite ([`vite.config.ts`](file:///D:/Website/Company%20Profile%20Teknoflase/vite.config.ts))**: Pada Vite v6+, Vite menerapkan proteksi DNS rebinding yang menolak request dengan header Host domain eksternal (`teknoflase.com`) secara default jika `allowedHosts` tidak dideklarasikan. Selain itu, ketiadaan blok konfigurasi `preview` membuat server produksi yang menjalankan `vite preview` default ke port `4173` pada `localhost` (127.0.0.1), sehingga reverse proxy (Nginx/Cloudflare) yang mengarah ke port `5173` mengalami *connection timeout* (Cloudflare Error 522) atau penolakan koneksi (HTTP 502 Bad Gateway).
  * **Ketiadaan Script `"start"` di [`package.json`](file:///D:/Website/Company%20Profile%20Teknoflase/package.json)**: Sebagian besar platform hosting (PM2, Docker, Node.js App Manager, PaaS) secara otomatis mengeksekusi `npm start` saat container / service dimulai. Ketiadaan script `"start"` menyebabkan Node process langsung crash dan memicu siklus *restart loop* tanpa henti.
  * **Lonjakan Memori (OOM Spike) saat Build**: Eksekusi `tsc -b` pada server VPS dengan RAM terbatas menyita 100% CPU dan ratusan MB memori, sehingga Linux kernel OOM Killer menghentikan proses web server atau menyebabkan latensi tinggi (> 15 detik) yang melampaui batas waktu handshake Cloudflare.
* **Solusi & Penyelarasan Konfigurasi**:
  * **Penyempurnaan Konfigurasi Server & Preview ([`vite.config.ts`](file:///D:/Website/Company%20Profile%20Teknoflase/vite.config.ts))**:
    * Menambahkan `allowedHosts: true` pada blok `server` dan `preview` untuk mengizinkan request domain `teknoflase.com` beserta seluruh subdomain tanpa hambatan.
    * Menambahkan blok `preview` dengan `host: true`, `port: 5173`, `cors: true`, dan security headers lengkap.
  * **Penyediaan Production Script ([`package.json`](file:///D:/Website/Company%20Profile%20Teknoflase/package.json))**:
    * Menambahkan script `"start": "vite preview --host --port 5173"` untuk menjamin kompatibilitas runtime PM2 dan process manager server.
    * Mengoptimalkan `"build": "vite build"` (kompilasi kilat < 500ms tanpa beban RAM tinggi di server) serta menyediakan `"build:tsc": "tsc -b && vite build"` untuk pengujian tipe data lokal.
  * **Penambahan File Fallback SPA ([`public/.htaccess`](file:///D:/Website/Company%20Profile%20Teknoflase/public/.htaccess))**:
    * Menambahkan aturan rewrite URL SPA untuk server berbasis Apache / LiteSpeed / cPanel agar seluruh request rute otomatis diarahkan ke `index.html`.




























