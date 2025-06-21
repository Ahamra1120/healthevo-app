# HealthEvo - Aplikasi Kesehatan Balita

HealthEvo adalah aplikasi mobile yang dirancang khusus untuk membantu orang tua memantau dan mengelola kesehatan balitanya, dengan fokus utama pada pencegahan stunting dan obesitas.

## 🎯 Tujuan Aplikasi

Aplikasi ini bertujuan untuk:
- Membantu orang tua memantau tumbuh kembang balita secara konsisten
- Memberikan edukasi tentang stunting dan obesitas pada anak
- Menyediakan panduan nutrisi yang tepat untuk balita
- Memberikan akses mudah ke layanan kesehatan dan fasilitas medis

## ✨ Fitur Utama

### 🏠 Dashboard Utama
- Profil anak-anak dengan data pertumbuhan
- Statistik kesehatan terkini
- Akses cepat ke semua fitur
- Notifikasi pengingat pemeriksaan

### 🍎 Pantau Nutrisi
- Database makanan bergizi untuk balita
- Kalkulator kalori dan nutrisi harian
- Rekomendasi menu sehat berdasarkan usia
- Tips makanan untuk mencegah stunting dan obesitas

### 💡 Tips Kesehatan
- Panduan pencegahan stunting lengkap
- Strategi mencegah obesitas pada balita  
- Aktivitas fisik yang sesuai untuk setiap usia
- Tanda-tanda yang perlu diwaspadai

### 🏥 Layanan Kesehatan
- Direktori rumah sakit dan klinik terdekat
- Layanan sewa inkubator dan peralatan medis
- Kontak darurat kesehatan anak
- Informasi layanan homecare

### 👤 Profil & Pengaturan
- Manajemen data anak dan orang tua
- Riwayat pemeriksaan kesehatan
- Pengaturan notifikasi
- FAQ dan bantuan

## 🛠 Teknologi yang Digunakan

### Frontend & Mobile
- **React Native dengan Expo** - Framework cross-platform untuk iOS dan Android
- **TypeScript** - Type safety dan better development experience
- **React Navigation** - Navigasi antar screen
- **Context API** - State management untuk data user dan anak

### Design & Styling
- **React Native StyleSheet** - Styling components
- **Expo Vector Icons** - Icon set lengkap
- **Custom Color Scheme** - Tema hijau yang ramah dan menenangkan

## 📱 Cara Menjalankan Aplikasi

### Prerequisites
- Node.js (v14 atau lebih baru)
- npm atau yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app di smartphone (untuk testing)

### Installation

1. Clone repository:
```bash
git clone [repository-url]
cd healthevo-react-native
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Scan QR code dengan Expo Go app untuk testing di device

### Build untuk Production

```bash
# Build untuk Android
expo build:android

# Build untuk iOS (memerlukan Apple Developer Account)
expo build:ios
```

## 📋 Struktur Project

```
healthevo-react-native/
├── App.tsx                 # Main app component
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── BottomTabBar.tsx
│   │   └── styles/
│   ├── contexts/          # React Context untuk state management
│   │   └── AuthContext.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── useFonts.ts
│   ├── navigation/        # Navigation configuration
│   │   ├── AppNavigator.tsx
│   │   ├── BottomTabNavigator.tsx
│   │   └── types.ts
│   └── screens/          # All application screens
│       ├── Auth/         # Login & Register
│       │   ├── Login.tsx
│       │   ├── Register.tsx
│       │   └── styles/
│       └── Dashboard/    # Main app screens
│           ├── Home.tsx
│           ├── NutritionTracker.tsx
│           ├── HealthTips.tsx
│           ├── Services.tsx
│           ├── Profile.tsx
│           └── styles/
├── assets/               # Images, fonts, dan static assets
├── package.json
├── app.json             # Expo configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Design System

### Color Palette
- **Primary Green**: #4CAF50 - Warna utama aplikasi
- **Dark Green**: #2E7D32 - Buttons dan accents
- **Light Green**: #90EE90 - Highlights dan success states
- **White**: #FFFFFF - Text dan backgrounds
- **Semi-transparent**: rgba(255, 255, 255, 0.8) - Subtle text

### Typography
- **Primary Font**: Poppins (Light, Regular, Medium, Bold)
- **Fallback**: System default fonts

## 📊 Data Model

### User
```typescript
type User = {
  uid: string;
  name: string;
  email: string;
  children: Child[];
}
```

### Child
```typescript
type Child = {
  id: string;
  name: string;
  birthDate: string;
  gender: 'male' | 'female';
  weight: number[];      // Array of weight measurements
  height: number[];      // Array of height measurements
  weightDates: string[]; // Corresponding dates for weight
  heightDates: string[]; // Corresponding dates for height
}
```

## 🔒 Security & Privacy

- Data anak disimpan secara lokal dengan enkripsi
- Tidak ada sharing data ke third party tanpa consent
- Implementasi authentication yang aman
- Compliance dengan regulasi perlindungan data anak

## 🚀 Roadmap

### Phase 1 (Current)
- ✅ Basic authentication
- ✅ Dashboard dengan profil anak
- ✅ Nutrition tracker
- ✅ Health tips dan education
- ✅ Healthcare services directory

### Phase 2 (Next)
- 📊 Growth charts dan analytics
- 📅 Appointment scheduling
- 🔔 Smart notifications
- 📱 Offline mode
- 🌐 Multi-language support

### Phase 3 (Future)
- 🏥 Integration dengan healthcare providers
- 🤖 AI-powered recommendations
- 👨‍⚕️ Telemedicine features
- 📈 Advanced analytics dashboard
- 👥 Community features

## 🤝 Contributing

Kontribusi selalu welcome! Silakan:

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Project Link: [https://github.com/yourusername/healthevo-react-native](https://github.com/yourusername/healthevo-react-native)

## 🙏 Acknowledgments

- Inspired by the need to reduce stunting and obesity rates in Indonesia
- Built with love for parents and children's health
- Thanks to the open source community for amazing tools and libraries

---

**HealthEvo** - *Menjaga kesehatan si kecil, membangun masa depan yang lebih sehat* 🌱
