# 🚀 Trinovagroup — Landing Page & Admin CMS E-Commerce UMKM

Website profil perusahaan dan landing page modern teroptimasi SEO untuk jasa pembuatan toko online / e-commerce UMKM, dilengkapi dengan **Admin Panel Content Management System (CMS)** dinamis.

---

## 📋 Daftar Isi
1. [Panduan Instalasi & Menjalankan di Terminal](#-panduan-instalasi--menjalankan-di-terminal)
2. [Informasi Port & Alamat Akses Lengkap](#-informasi-port--alamat-akses-lengkap)
3. [Kredensial Login Admin Panel (CMS)](#-kredensial-login-admin-panel-cms)
4. [Daftar Navigasi & Anchor URL](#-daftar-navigasi--anchor-url)
5. [Tautan Demo Produk](#-tautan-demo-produk)
6. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)

---

## 💻 Panduan Instalasi & Menjalankan di Terminal

Pastikan perangkat Anda telah terpasang **[Node.js](https://nodejs.org/)** (versi 18 ke atas) dan **npm**.

### 1. Buka Terminal / Command Prompt / PowerShell
Arahkan direktori terminal ke folder proyek:
```bash
cd "d:\Website\Company Profile trinovagroup"
```

### 2. Instalasi Dependensi (Packages)
Jalankan perintah berikut untuk mengunduh seluruh dependensi yang diperlukan:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan Lokal (Dev Server)
Mulai local dev server dengan perintah:
```bash
npm run dev
```
Setelah server berjalan, buka browser dan akses tautan: `http://localhost:5173`

### 4. Perintah Tambahan (Build & Production)
* **Build Proyek (Kompilasi ke folder `dist`):**
  ```bash
  npm run build
  ```
* **Preview Hasil Build Produksi:**
  ```bash
  npm run preview
  ```
* **Pengecekan Kode (Linting):**
  ```bash
  npm run lint
  ```

---

## 🌐 Informasi Port & Alamat Akses Lengkap

| Parameter | Keterangan / Nilai |
| :--- | :--- |
| **Port Bawaan (Default)** | `5173` |
| **Local Host Server** | `http://localhost:5173/` |
| **Network Host Server** | Ditampilkan pada terminal saat menjalankan `npm run dev` |
| **Penyimpanan Konten CMS** | Browser `localStorage` (Kunci: `trinovagroup_landing_content`) |
| **Sesi Autentikasi Admin** | `sessionStorage` (Otomatis logout saat tab browser ditutup) |

---

## 🔑 Kredensial Login Admin Panel (CMS)

Gunakan kredensial berikut untuk mengakses portal dashboard manajemen konten:

* **URL Akses Admin**: [http://localhost:5173/#admin](http://localhost:5173/#admin)
* **Username**: ``
* **Password**: ``

### Fitur yang Dapat Dikelola di Admin Panel:
1. **General Info**: Nama Brand, Judul Utama (Hero), Tagline, Call-to-Action.
2. **Hero Slides**: Mengatur urutan slide carousel hero, teks promo, dan tombol CTA.
3. **Alur Kerja (Workflow)**: 4 langkah fase pengerjaan proyek.
4. **Struktur Tim**: Foto, inisial, nama, jabatan, deskripsi, dan tautan LinkedIn anggota tim.
5. **Katalog Produk**: Daftar kartu produk, deskripsi kategori, dan fitur e-commerce.
6. **Kontak**: Alamat Email, Nomor WhatsApp, Akun Instagram, dan Lokasi Kantor.
7. **Footer & Produk**: Teks deskripsi footer, tautan legal, serta konfigurasi modal detail produk (nama produk, fitur, cakupan MVP, sakelar toggle on/off, dan tautan demo).

---

## 🔗 Daftar Navigasi & Anchor URL

| Bagian Website | URL Akses Langsung | Fungsi / Konten |
| :--- | :--- | :--- |
| **Halaman Utama (Beranda)** | [http://localhost:5173/](http://localhost:5173/) | Landing page keseluruhan |
| **Hero Carousel** | [http://localhost:5173/#hero](http://localhost:5173/#hero) | Banner interaktif dan penawaran utama |
| **Tentang Kami** | [http://localhost:5173/#about](http://localhost:5173/#about) | Visi, fitur unggulan e-commerce, & profil tim |
| **Alur Kerja** | [http://localhost:5173/#workflow](http://localhost:5173/#workflow) | 4 langkah tahapan pembuatan toko online |
| **Katalog Produk** | [http://localhost:5173/#portfolio](http://localhost:5173/#portfolio) | Kartu produk & modal popup detail rincian produk |
| **Kontak & Konsultasi** | [http://localhost:5173/#contact](http://localhost:5173/#contact) | Formulir konsultasi & tombol WhatsApp resmi |
| **Portal Admin CMS** | [http://localhost:5173/#admin](http://localhost:5173/#admin) | Dashboard pengelolaan konten website |

---

## 📦 Tautan Demo Produk

Tautan default untuk tombol **"Coba Produk"** pada modal detail produk (dapat diubah kapan saja via Admin Panel):

| Nama Produk | URL Uji Coba (Demo Link) | Status Bawaan |
| :--- | :--- | :---: |
| **Website E-Commerce** | `https://demo.trinovagroup.com/ecommerce` | Aktif (ON) |
| **Katalog WhatsApp** | `https://demo.trinovagroup.com/catalog` | Aktif (ON) |
| **Kasir POS & Stok** | `https://demo.trinovagroup.com/pos` | Aktif (ON) |
| **Dashboard Keuangan** | `https://demo.trinovagroup.com/dashboard` | Aktif (ON) |

---

## 🛠️ Teknologi yang Digunakan

* **Framework UI**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool & Bundler**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Penyimpanan State**: `localStorage` (Persistent autosave) & `sessionStorage` (Security auth)
