# 📋 Panduan Fitur HealthEvo

## 🎯 Overview
HealthEvo adalah aplikasi mobile yang dirancang khusus untuk membantu orang tua memantau kesehatan balita mereka dengan fokus pada pencegahan stunting dan obesitas.

## 🚀 Fitur-Fitur Utama

### 1. 🏠 Dashboard / Beranda
**Fitur:**
- Greeting personal dengan nama pengguna
- Daftar anak-anak yang terdaftar
- Statistik kesehatan (berat, tinggi, status)
- Tombol cepat untuk menambah anak baru
- Grid fitur utama untuk navigasi mudah

**Cara Penggunaan:**
1. Login ke aplikasi
2. Dashboard akan menampilkan semua anak yang terdaftar
3. Tap "+" untuk menambah anak baru
4. Tap kartu anak untuk melihat detail
5. Gunakan grid fitur untuk navigasi cepat

### 2. 🍎 Pantau Nutrisi
**Fitur:**
- Database makanan sehat untuk balita
- Tracking asupan harian
- Ringkasan nutrisi (kalori, protein, karbohidrat, lemak, serat)
- Kategori makanan (sehat, perlu dibatasi)
- Tips nutrisi dan rekomendasi

**Database Makanan Sehat:**
- Bubur Nasi dengan Sayuran (120 kal)
- Pisang Lumat (89 kal)  
- Alpukat Lumat (160 kal)
- Telur Rebus Lumat (68 kal)
- Puree Ubi Jalar (86 kal)

**Makanan yang Perlu Dibatasi:**
- Biskuit Bayi (50 kal)
- Jus Buah Kemasan (60 kal)

**Cara Penggunaan:**
1. Buka tab "Nutrisi"
2. Pilih makanan dari daftar yang tersedia
3. Tap tombol "+" untuk menambah ke catatan harian
4. Lihat ringkasan nutrisi di bagian atas
5. Baca tips nutrisi untuk panduan lebih lanjut

### 3. 💡 Tips Kesehatan
**Kategori Tips:**

#### 🔍 Tentang Stunting
- **Pencegahan Stunting:**
  - ASI eksklusif 6 bulan pertama
  - MPASI bergizi seimbang mulai 6 bulan
  - Pantau pertumbuhan rutin
  - Makanan kaya protein, zat besi, kalsium

- **Tanda-tanda Stunting:**
  - Tinggi badan lebih pendek dari seusianya
  - Berat badan tidak sesuai usia
  - Perkembangan kognitif terlambat
  - Sistem imun lemah

#### ⚖️ Tentang Obesitas
- **Pencegahan Obesitas:**
  - Porsi makan sesuai kebutuhan kalori
  - Batasi makanan tinggi gula dan lemak jenuh
  - Dorong aktivitas fisik sesuai usia
  - Hindari makan sambil menonton TV

- **Tanda-tanda Obesitas:**
  - Berat badan berlebih
  - Lemak berlebih di perut/lengan/paha
  - Mudah lelah saat beraktivitas
  - Gangguan pernapasan saat tidur

#### 🏃 Olahraga Ringan
**Untuk Balita 1-2 tahun:**
- Berjalan jarak pendek (10-15 menit)
- Bermain bola lembut
- Menari sederhana mengikuti musik
- Bermain kejar-kejaran ringan

**Untuk Balita 3-5 tahun:**
- Bersepeda dengan roda bantu
- Berenang dengan pengawasan
- Senam sederhana
- Bermain di playground

### 4. 🏥 Layanan Kesehatan
**Fitur:**
- Direktori rumah sakit terdekat
- Layanan sewa inkubator
- Kontak darurat
- Informasi layanan medis

**Rumah Sakit yang Tersedia:**
1. **RS Anak dan Bunda Harapan Kita**
   - Jakarta Barat
   - Konsultasi Gizi, Tumbuh Kembang, Vaksinasi
   - Tel: (021) 5668284

2. **RSUD Dr. Soetomo**
   - Surabaya
   - Klinik Anak, Poliklinik Gizi, Rawat Inap
   - Tel: (031) 5501078

3. **RS Cipto Mangunkusumo**
   - Jakarta Pusat
   - Spesialis Anak, Konsultasi Stunting, Lab
   - Tel: (021) 31900001

**Layanan Sewa Inkubator:**
1. **Medika Rental** - Rp 150.000/hari
2. **Homecare Plus** - Rp 200.000/hari  
3. **Baby Care Equipment** - Rp 175.000/hari

**Kontak Darurat:**
- Ambulans Jakarta: 021-65303118
- PMI Jakarta: 021-7992325
- Telemed Konsultasi: 0804-1-SEHAT

### 5. 👤 Profil & Pengaturan  
**Fitur:**
- Informasi pengguna dan email
- Statistik penggunaan aplikasi
- Menu pengaturan aplikasi
- Informasi tentang aplikasi
- Logout

**Menu yang Tersedia:**
- Edit Profile
- Pengaturan Notifikasi
- Riwayat Pemeriksaan
- Bantuan & FAQ
- Tentang Aplikasi

## 🎨 Desain dan UX

### Color Scheme
- **Primary**: #4CAF50 (Hijau ramah lingkungan)
- **Secondary**: #2E7D32 (Hijau gelap untuk aksen)
- **Background**: Gradient hijau yang menenangkan
- **Text**: Putih dengan transparansi untuk kontras optimal

### Typography
- **Font**: Poppins (fallback ke system fonts)
- **Hierarchy**: Bold untuk headers, Regular untuk body text
- **Sizes**: Responsive dengan skala yang konsisten

### Navigation
- **Bottom Tab Navigation** dengan 5 tab utama
- **Stack Navigation** untuk Auth flow
- **Gesture Support** untuk navigasi yang natural

### Accessibility
- **Touch Targets**: Minimum 44px untuk touch
- **Contrast**: Ratio yang memenuhi WCAG guidelines
- **Labels**: Accessibility labels untuk screen readers

## 📊 Data Management

### Local Storage
- User profile dan preferensi
- Data anak dan riwayat pertumbuhan
- Cache nutrition data untuk offline access
- Settings dan configurations

### State Management
- **React Context** untuk global state
- **Local State** untuk component-specific data
- **Async Storage** untuk persistence

## 🔒 Privacy & Security

### Data Protection
- Data sensitif anak tidak dikirim ke server eksternal
- Local encryption untuk data penting
- No tracking tanpa consent
- Compliance dengan regulasi perlindungan anak

### Authentication  
- Secure login dengan validation
- Password requirements
- Session management
- Logout functionality

## 🚀 Performance

### Optimization
- **Lazy Loading** untuk screens yang tidak sering diakses
- **Image Optimization** untuk asset management
- **Memory Management** untuk smooth scrolling
- **Bundle Splitting** untuk faster initial load

### Offline Support
- Basic functionality available offline
- Cached nutrition database
- Local data storage untuk tracking

## 🧪 Testing Strategy

### Unit Testing
- Component testing dengan Jest
- Hook testing untuk custom hooks
- Utility function testing

### Integration Testing
- Navigation flow testing
- Context provider testing
- API integration testing

### E2E Testing
- User journey testing
- Critical path testing
- Performance testing

## 📱 Platform Support

### iOS
- Minimum iOS 11.0
- Support untuk iPhone dan iPad
- Native iOS behaviors dan gestures

### Android  
- Minimum Android 6.0 (API 23)
- Support untuk phone dan tablet
- Material Design guidelines

## 🔄 Future Enhancements

### Phase 2 Features
- Growth charts dengan visualisasi
- Photo tracking untuk visual progress
- Medication reminders
- Appointment scheduling
- Multi-language support

### Phase 3 Features
- Healthcare provider integration
- Telemedicine capabilities
- Community features
- AI-powered recommendations
- Advanced analytics

---

*Panduan ini akan terus diupdate seiring dengan perkembangan aplikasi dan feedback dari pengguna.*
