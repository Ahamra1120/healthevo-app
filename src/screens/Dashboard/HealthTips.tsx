import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  Alert
} from 'react-native';
import styles from './styles/Home'; // Reuse styles

const HealthTipsScreen = () => {
  const stuntingTips = [
    {
      id: 1,
      title: "Pencegahan Stunting",
      icon: "📏",
      tips: [
        "Berikan ASI eksklusif selama 6 bulan pertama",
        "Mulai MPASI bergizi seimbang pada usia 6 bulan",
        "Pantau pertumbuhan tinggi dan berat badan secara rutin",
        "Berikan makanan kaya protein, zat besi, dan kalsium"
      ]
    },
    {
      id: 2,
      title: "Tanda-tanda Stunting",
      icon: "⚠️",
      tips: [
        "Tinggi badan lebih pendek dari anak seusianya",
        "Berat badan tidak sesuai dengan usia",
        "Perkembangan kognitif terlambat",
        "Sistem imun lemah, mudah sakit"
      ]
    }
  ];

  const obesityTips = [
    {
      id: 3,
      title: "Pencegahan Obesitas",
      icon: "⚖️",
      tips: [
        "Berikan porsi makan sesuai kebutuhan kalori harian",
        "Batasi makanan tinggi gula dan lemak jenuh",
        "Dorong aktivitas fisik sesuai usia",
        "Jangan membiasakan makan sambil menonton TV"
      ]
    },
    {
      id: 4,
      title: "Tanda-tanda Obesitas",
      icon: "🚨",
      tips: [
        "Berat badan berlebih dibanding tinggi badan",
        "Lemak berlebih di perut, lengan, atau paha",
        "Mudah lelah saat beraktivitas",
        "Gangguan pernapasan saat tidur"
      ]
    }
  ];

  const exercises = [
    {
      id: 5,
      title: "Olahraga untuk Balita (1-2 tahun)",
      icon: "🚶",
      activities: [
        "Berjalan jarak pendek (10-15 menit)",
        "Bermain bola lembut",
        "Menari sederhana mengikuti musik",
        "Bermain kejar-kejaran ringan"
      ]
    },
    {
      id: 6,
      title: "Olahraga untuk Balita (3-5 tahun)",
      icon: "🏃",
      activities: [
        "Bersepeda dengan roda bantu",
        "Berenang dengan pengawasan",
        "Senam sederhana",
        "Bermain di playground"
      ]
    }
  ];

  const showDetailTips = (title: string, items: string[]) => {
    Alert.alert(
      title,
      items.map((item, index) => `${index + 1}. ${item}`).join('\n\n'),
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={[styles.greetingText, { textAlign: 'center' }]}>
          💡 Tips Kesehatan Balita
        </Text>
        <Text style={[styles.subGreeting, { textAlign: 'center' }]}>
          Panduan mencegah stunting dan obesitas
        </Text>
      </View>

      {/* Stunting Prevention */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>🔍 Tentang Stunting</Text>
        {stuntingTips.map((tip) => (
          <TouchableOpacity 
            key={tip.id} 
            style={styles.childCard}
            onPress={() => showDetailTips(tip.title, tip.tips)}
          >
            <Text style={styles.featureIcon}>{tip.icon}</Text>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.childName}>{tip.title}</Text>
              <Text style={styles.childAge}>Ketuk untuk melihat detail</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 18 }}>→</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Obesity Prevention */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>⚖️ Tentang Obesitas</Text>
        {obesityTips.map((tip) => (
          <TouchableOpacity 
            key={tip.id} 
            style={styles.childCard}
            onPress={() => showDetailTips(tip.title, tip.tips)}
          >
            <Text style={styles.featureIcon}>{tip.icon}</Text>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.childName}>{tip.title}</Text>
              <Text style={styles.childAge}>Ketuk untuk melihat detail</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 18 }}>→</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Exercise Tips */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>🏃 Olahraga Ringan</Text>
        {exercises.map((exercise) => (
          <TouchableOpacity 
            key={exercise.id} 
            style={styles.childCard}
            onPress={() => showDetailTips(exercise.title, exercise.activities)}
          >
            <Text style={styles.featureIcon}>{exercise.icon}</Text>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.childName}>{exercise.title}</Text>
              <Text style={styles.childAge}>Ketuk untuk melihat aktivitas</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 18 }}>→</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* General Health Tips */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>🌟 Tips Umum</Text>
        <View style={styles.childCard}>
          <Text style={styles.childName}>Jadwal Kontrol Rutin</Text>
          <Text style={styles.childAge}>
            • Usia 0-6 bulan: setiap bulan{'\n'}
            • Usia 6-12 bulan: setiap 2 bulan{'\n'}
            • Usia 1-2 tahun: setiap 3 bulan{'\n'}
            • Usia 2-5 tahun: setiap 6 bulan
          </Text>
        </View>
        
        <View style={styles.childCard}>
          <Text style={styles.childName}>Pola Tidur Sehat</Text>
          <Text style={styles.childAge}>
            • Usia 1-2 tahun: 12-14 jam per hari{'\n'}
            • Usia 3-5 tahun: 10-13 jam per hari{'\n'}
            • Tidur siang 1-3 jam untuk balita
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HealthTipsScreen;
