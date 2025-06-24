# Fitur Kartu Menuju Sehat (KMS) - HealthEvo

## Deskripsi
Fitur KMS (Kartu Menuju Sehat) adalah sistem pemantauan pertumbuhan anak berdasarkan standar WHO dan Kementerian Kesehatan Indonesia. Fitur ini membantu orang tua dan tenaga kesehatan untuk memantau pertumbuhan anak dan mendeteksi dini masalah gizi seperti stunting dan obesitas.

## Fitur Utama

### 1. Input Data Anak
- **Jenis Kelamin**: Laki-laki atau Perempuan
- **Umur**: 0-60 bulan (0-5 tahun)
- **Berat Badan**: Dalam kilogram (kg)
- **Tinggi Badan**: Dalam sentimeter (cm)
- **Jenis Analisis**: Berat Badan atau Tinggi Badan

### 2. Grafik Pertumbuhan
- **Kurva Standar**: Menampilkan kurva pertumbuhan standar berdasarkan data KMS Indonesia
- **Titik Data Anak**: Menampilkan posisi pertumbuhan anak pada grafik
- **Threshold Zones**: 
  - **Merah**: Kurang/Stunting
  - **Kuning**: Risiko
  - **Hijau**: Normal/Ideal
  - **Biru**: Berlebih/Tinggi

### 3. Analisis Otomatis
#### Analisis Berat Badan:
- **Berat Badan Kurang**: < -2 SD
- **Berat Badan Normal**: -2 SD hingga +1 SD
- **Risiko Berat Badan Berlebih**: > +1 SD

#### Analisis Tinggi Badan:
- **Stunting**: < -3 SD
- **Terindikasi Stunting**: -3 SD hingga -2 SD
- **Tinggi Badan Normal**: -2 SD hingga +3 SD
- **Tinggi Badan Lebih**: > +3 SD

### 4. Rekomendasi
Sistem memberikan rekomendasi berdasarkan hasil analisis:
- **Konsultasi dengan ahli gizi**
- **Perbaikan pola makan**
- **Peningkatan aktivitas fisik**
- **Intervensi medis** (jika diperlukan)

## Data Standar KMS
Data KMS berdasarkan standar WHO dan disesuaikan dengan kondisi anak Indonesia:

### Data Berat Badan (BB/U)
- **Laki-laki**: Data dari CSV "Data KMS BB Laki-Laki.csv"
- **Perempuan**: Data dari CSV "Data KMS BB Perempuan.csv"

### Data Tinggi Badan (TB/U)
- **Laki-laki**: Data dari CSV "Data KMS TB Laki-Laki.csv"
- **Perempuan**: Data dari CSV "Data KMS TB Perempuan.csv"

## Penggunaan

### Mobile App (React Native)
1. Buka aplikasi HealthEvo
2. Pilih tab "KMS" di bottom navigation
3. Masukkan data anak:
   - Pilih jenis kelamin
   - Pilih jenis analisis (BB atau TB)
   - Masukkan umur dalam bulan
   - Masukkan berat badan (kg) atau tinggi badan (cm)
4. Tekan "Analisis Pertumbuhan"
5. Lihat grafik dan hasil analisis

### Web Test Version
1. Buka file `kms-web-test.html` di browser
2. Ikuti langkah yang sama seperti mobile app
3. Hasil akan ditampilkan dalam bentuk grafik interaktif

## File Terkait

### React Native Components
- `src/components/KMSChart.tsx` - Komponen utama untuk grafik KMS
- `src/screens/Dashboard/KMS.tsx` - Screen untuk input dan tampilan KMS
- `src/navigation/BottomTabNavigator.tsx` - Navigasi yang sudah termasuk tab KMS

### Web Test
- `kms-web-test.html` - Versi web sederhana untuk testing fitur KMS

### Data CSV
- `Data KMS BB Laki-Laki.csv` - Data standar berat badan laki-laki
- `Data KMS BB Perempuan.csv` - Data standar berat badan perempuan
- `Data KMS TB Laki-Laki.csv` - Data standar tinggi badan laki-laki
- `Data KMS TB Perempuan.csv` - Data standar tinggi badan perempuan

## Dependencies
```json
{
  "react-native-chart-kit": "^6.12.0",
  "react-native-svg": "^15.7.1"
}
```

## Algoritma Interpolasi
Sistem menggunakan interpolasi linear untuk menghitung threshold pada umur yang tidak tepat berada di data standar, memastikan akurasi analisis untuk semua umur dalam rentang 0-60 bulan.

## Validasi Input
- **Umur**: 0-60 bulan
- **Berat Badan**: > 0 kg
- **Tinggi Badan**: > 0 cm
- **Jenis Kelamin**: Wajib dipilih
- **Jenis Analisis**: Wajib dipilih

## Status Pertumbuhan
### Indikator Warna:
- 🔴 **Merah**: Perlu perhatian segera
- 🟡 **Kuning**: Perlu dipantau
- 🟢 **Hijau**: Normal/Sehat
- 🔵 **Biru**: Di atas rata-rata

## Cara Testing

### 1. Testing di Mobile (Expo Go)
```bash
npm start
# Scan QR code dengan Expo Go app
```

### 2. Testing di Web Browser
```bash
# Buka file kms-web-test.html di browser
open kms-web-test.html
```

### 3. Contoh Data Testing
- **Laki-laki, 24 bulan, 10 kg**: Normal
- **Perempuan, 12 bulan, 7 kg**: Normal
- **Laki-laki, 36 bulan, 80 cm**: Terindikasi Stunting
- **Perempuan, 48 bulan, 20 kg**: Risiko Berat Berlebih

## Catatan Penting
1. **Data Akurat**: Pastikan data anak diukur dengan benar
2. **Konsultasi Medis**: Hasil analisis bukan pengganti konsultasi medis profesional
3. **Pemantauan Rutin**: Lakukan pemantauan secara berkala untuk hasil optimal
4. **Update Data**: Data standar dapat diupdate sesuai dengan panduan terbaru Kemenkes

## Pengembangan Selanjutnya
- [ ] Integrasi dengan database untuk menyimpan riwayat pertumbuhan
- [ ] Notifikasi pengingat untuk pemantauan rutin
- [ ] Export hasil analisis ke PDF
- [ ] Grafik pertumbuhan multiple time points
- [ ] Integrasi dengan sistem posyandu
