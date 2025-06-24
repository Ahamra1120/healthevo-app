@echo off
echo 🧪 KMS Testing Script - HealthEvo
echo ==================================

echo.
echo 📊 Test Cases untuk KMS:
echo ------------------------
echo 1. Laki-laki, 24 bulan, 12.5 kg - Expected: Normal
echo 2. Perempuan, 12 bulan, 7.2 kg - Expected: Normal  
echo 3. Laki-laki, 36 bulan, 9.5 kg - Expected: Underweight
echo 4. Perempuan, 48 bulan, 20.0 kg - Expected: Overweight
echo 5. Laki-laki, 24 bulan, 80.0 cm - Expected: Stunting
echo 6. Perempuan, 36 bulan, 95.0 cm - Expected: Normal
echo 7. Laki-laki, 48 bulan, 110.0 cm - Expected: Normal
echo 8. Perempuan, 60 bulan, 95.0 cm - Expected: Stunting

echo.
echo 🚀 Menjalankan aplikasi React Native...
echo Pastikan Expo Go sudah terinstall di device Anda

start /B npm start

echo.
echo ⏳ Tunggu 10 detik untuk server startup...
timeout /t 10 /nobreak

echo.
echo 🌐 Membuka web test version...
start kms-web-test.html

echo.
echo ✅ Testing Environment Ready!
echo.
echo 📝 Instruksi Manual Testing:
echo ----------------------------
echo 1. Scan QR code dengan Expo Go untuk test mobile version
echo 2. Test web version yang sudah terbuka di browser
echo 3. Gunakan test cases di atas untuk validasi
echo.
echo 🔍 Yang perlu dicek:
echo - Grafik KMS tampil dengan benar
echo - Titik data anak muncul di posisi yang tepat
echo - Analisis status memberikan hasil yang akurat
echo - Rekomendasi sesuai dengan status pertumbuhan
echo - UI responsif di berbagai ukuran layar
echo.
echo ⚠️  Catatan:
echo - Data didasarkan pada standar KMS Indonesia
echo - Interpolasi linear digunakan untuk umur tidak tepat
echo - Hasil analisis bukan pengganti konsultasi medis
echo.
echo 🛑 Tekan sembarang tombol untuk keluar...
pause
