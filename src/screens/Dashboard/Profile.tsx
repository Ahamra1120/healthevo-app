import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  Alert
} from 'react-native';
import styles from './styles/Home';
import { useAuth } from '../../contexts/AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      "Keluar",
      "Apakah Anda yakin ingin keluar?",
      [
        { text: "Batal", style: "cancel" },
        { text: "Keluar", onPress: logout, style: "destructive" }
      ]
    );
  };

  const profileMenus = [
    {
      id: 1,
      title: "Edit Profile",
      icon: "👤",
      action: () => Alert.alert("Info", "Fitur edit profile akan segera hadir!")
    },
    {
      id: 2,
      title: "Pengaturan Notifikasi",
      icon: "🔔",
      action: () => Alert.alert("Info", "Fitur pengaturan notifikasi akan segera hadir!")
    },
    {
      id: 3,
      title: "Riwayat Pemeriksaan",
      icon: "📋",
      action: () => Alert.alert("Info", "Fitur riwayat pemeriksaan akan segera hadir!")
    },
    {
      id: 4,
      title: "Bantuan & FAQ",
      icon: "❓",
      action: () => Alert.alert("Info", "Fitur bantuan akan segera hadir!")
    },
    {
      id: 5,
      title: "Tentang Aplikasi",
      icon: "ℹ️",
      action: () => Alert.alert(
        "Tentang HealthEvo",
        "HealthEvo v1.0.0\n\nAplikasi kesehatan untuk memantau tumbuh kembang balita dan mencegah stunting serta obesitas.\n\nDikembangkan dengan ❤️ untuk kesehatan si kecil."
      )
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.profileImage} />
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>{user?.name || "Pengguna"}</Text>
          <Text style={styles.subGreeting}>{user?.email || "email@example.com"}</Text>
        </View>
      </View>

      {/* Profile Stats */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>Statistik</Text>
        <View style={styles.childCard}>
          <View style={styles.childStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user?.children?.length || 0}</Text>
              <Text style={styles.statLabel}>Anak</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Hari Aktif</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>8</Text>
              <Text style={styles.statLabel}>Catatan Gizi</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>Menu</Text>
        {profileMenus.map((menu) => (
          <TouchableOpacity 
            key={menu.id} 
            style={styles.childCard}
            onPress={menu.action}
          >
            <Text style={styles.featureIcon}>{menu.icon}</Text>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.childName}>{menu.title}</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 18 }}>→</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* App Information */}
      <View style={styles.childrenSection}>
        <View style={styles.childCard}>
          <Text style={styles.childName}>🌟 HealthEvo - Aplikasi Kesehatan Balita</Text>
          <Text style={styles.childAge}>
            Membantu orang tua memantau kesehatan balita dengan fitur:{'\n'}
            • Pantau nutrisi harian{'\n'}
            • Tips mencegah stunting dan obesitas{'\n'}
            • Informasi layanan kesehatan{'\n'}
            • Edukasi kesehatan balita
          </Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity 
        style={[styles.addChildButton, { backgroundColor: 'rgba(255, 0, 0, 0.3)' }]}
        onPress={handleLogout}
      >
        <Text style={styles.addChildText}>🚪 Keluar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;
