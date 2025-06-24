#!/bin/bash

# KMS Testing Script untuk HealthEvo
# Script ini menjalankan serangkaian test untuk fitur KMS

echo "🧪 KMS Testing Script - HealthEvo"
echo "=================================="

# Test cases untuk KMS
test_cases=(
    "male,24,12.5,weight,normal"
    "female,12,7.2,weight,normal"
    "male,36,9.5,weight,underweight"
    "female,48,20.0,weight,overweight"
    "male,24,80.0,height,stunting"
    "female,36,95.0,height,normal"
    "male,48,110.0,height,normal"
    "female,60,95.0,height,stunting"
)

echo ""
echo "📊 Test Cases yang akan dijalankan:"
echo "-----------------------------------"
for i in "${!test_cases[@]}"; do
    IFS=',' read -r gender age value type expected <<< "${test_cases[$i]}"
    echo "$((i+1)). $gender, $age bulan, $value $([ "$type" = "weight" ] && echo "kg" || echo "cm"), Expected: $expected"
done

echo ""
echo "🚀 Menjalankan aplikasi React Native..."
echo "Pastikan Expo Go sudah terinstall di device Anda"

# Start React Native development server
npm start &
SERVER_PID=$!

echo ""
echo "📱 Server PID: $SERVER_PID"
echo "⏳ Tunggu 10 detik untuk server startup..."
sleep 10

echo ""
echo "🌐 Membuka web test version..."

# Open web test version
if command -v open &> /dev/null; then
    open kms-web-test.html
elif command -v xdg-open &> /dev/null; then
    xdg-open kms-web-test.html
elif command -v start &> /dev/null; then
    start kms-web-test.html
else
    echo "❌ Tidak dapat membuka browser secara otomatis"
    echo "   Silakan buka file kms-web-test.html secara manual"
fi

echo ""
echo "✅ Testing Environment Ready!"
echo ""
echo "📝 Instruksi Manual Testing:"
echo "----------------------------"
echo "1. Scan QR code dengan Expo Go untuk test mobile version"
echo "2. Test web version yang sudah terbuka di browser"
echo "3. Gunakan test cases di atas untuk validasi"
echo ""
echo "🔍 Yang perlu dicek:"
echo "- Grafik KMS tampil dengan benar"
echo "- Titik data anak muncul di posisi yang tepat"
echo "- Analisis status memberikan hasil yang akurat"
echo "- Rekomendasi sesuai dengan status pertumbuhan"
echo "- UI responsif di berbagai ukuran layar"
echo ""
echo "⚠️  Catatan:"
echo "- Data didasarkan pada standar KMS Indonesia"
echo "- Interpolasi linear digunakan untuk umur tidak tepat"
echo "- Hasil analisis bukan pengganti konsultasi medis"
echo ""
echo "🛑 Untuk menghentikan server, tekan Ctrl+C"

# Wait for user to stop the server
wait $SERVER_PID
