import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  Alert
} from "react-native";
import styles from "./styles/Home";
import { useAuth } from "../../contexts/AuthContext";

const HomeScreen = () => {
  const { user, addChild } = useAuth();
  
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const getLatestMeasurement = (measurements: number[]) => {
    return measurements.length > 0 ? measurements[measurements.length - 1] : 0;
  };

  const handleAddChild = () => {
    Alert.prompt(
      "Tambah Anak",
      "Masukkan nama anak:",
      [
        { text: "Batal", style: "cancel" },
        { 
          text: "Tambah", 
          onPress: (name) => {
            if (name) {
              const newChild = {
                id: Date.now().toString(),
                name: name,
                birthDate: new Date().toISOString().split('T')[0],
                gender: 'male' as const,
                weight: [],
                height: [],
                weightDates: [],
                heightDates: [],
              };
              addChild(newChild);
            }
          }
        }
      ]
    );
  };

  const features = [
    { id: 1, title: "Pantau Nutrisi", icon: "🍎", screen: "NutritionTracker" },
    { id: 2, title: "Tips Kesehatan", icon: "💡", screen: "HealthTips" },
    { id: 3, title: "Layanan Medis", icon: "🏥", screen: "Services" },
    { id: 4, title: "Edukasi", icon: "📚", screen: "Education" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.profileImage} />
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>
            Halo, {user?.name || "Orang Tua"}! 👋
          </Text>
          <Text style={styles.subGreeting}>
            Mari pantau kesehatan si kecil
          </Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Text style={{ fontSize: 20 }}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Children Section */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>Anak-anak Saya</Text>
        
        {user?.children.map((child) => (
          <View key={child.id} style={styles.childCard}>
            <Text style={styles.childName}>{child.name}</Text>
            <Text style={styles.childAge}>
              {calculateAge(child.birthDate)} tahun
            </Text>
            <View style={styles.childStats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {getLatestMeasurement(child.weight) || '--'}
                </Text>
                <Text style={styles.statLabel}>kg</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {getLatestMeasurement(child.height) || '--'}
                </Text>
                <Text style={styles.statLabel}>cm</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>Normal</Text>
                <Text style={styles.statLabel}>Status</Text>
              </View>
            </View>
          </View>
        ))}

        <TouchableOpacity 
          style={styles.addChildButton}
          onPress={handleAddChild}
        >
          <Text style={styles.addChildText}>+ Tambah Anak</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>Fitur Utama</Text>
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <TouchableOpacity 
              key={feature.id} 
              style={styles.featureCard}
              onPress={() => {
                Alert.alert("Info", `Fitur ${feature.title} akan segera hadir!`);
              }}
            >
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <Text style={styles.featureTitle}>{feature.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
