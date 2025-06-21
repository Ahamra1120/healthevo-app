import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  Alert
} from 'react-native';
import styles from './styles/NutritionTracker';

interface FoodItem {
  id: number;
  name: string;
  icon: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  category: 'healthy' | 'caution' | 'avoid';
}

const NutritionTrackerScreen = () => {
  const [dailyIntake, setDailyIntake] = useState<FoodItem[]>([]);

  const healthyFoods: FoodItem[] = [
    {
      id: 1,
      name: 'Bubur Nasi dengan Sayuran',
      icon: '🍚',
      calories: 120,
      protein: 3,
      carbs: 25,
      fat: 1,
      fiber: 2,
      category: 'healthy'
    },
    {
      id: 2,
      name: 'Pisang Lumat',
      icon: '🍌',
      calories: 89,
      protein: 1,
      carbs: 23,
      fat: 0.3,
      fiber: 2.6,
      category: 'healthy'
    },
    {
      id: 3,
      name: 'Alpukat Lumat',
      icon: '🥑',
      calories: 160,
      protein: 2,
      carbs: 9,
      fat: 15,
      fiber: 7,
      category: 'healthy'
    },
    {
      id: 4,
      name: 'Telur Rebus Lumat',
      icon: '🥚',
      calories: 68,
      protein: 6,
      carbs: 0.6,
      fat: 4.8,
      fiber: 0,
      category: 'healthy'
    },
    {
      id: 5,
      name: 'Puree Ubi Jalar',
      icon: '🍠',
      calories: 86,
      protein: 2,
      carbs: 20,
      fat: 0.1,
      fiber: 3,
      category: 'healthy'
    }
  ];

  const cautionFoods: FoodItem[] = [
    {
      id: 6,
      name: 'Biskuit Bayi',
      icon: '🍪',
      calories: 50,
      protein: 1,
      carbs: 8,
      fat: 2,
      fiber: 0.5,
      category: 'caution'
    },
    {
      id: 7,
      name: 'Jus Buah Kemasan',
      icon: '🧃',
      calories: 60,
      protein: 0.2,
      carbs: 15,
      fat: 0.1,
      fiber: 0.1,
      category: 'caution'
    }
  ];

  const addFoodToIntake = (food: FoodItem) => {
    setDailyIntake([...dailyIntake, food]);
    Alert.alert('Berhasil', `${food.name} ditambahkan ke catatan harian`);
  };

  const getTotalNutrition = () => {
    return dailyIntake.reduce(
      (total, food) => ({
        calories: total.calories + food.calories,
        protein: total.protein + food.protein,
        carbs: total.carbs + food.carbs,
        fat: total.fat + food.fat,
        fiber: total.fiber + food.fiber,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
    );
  };

  const recommendations = [
    {
      title: "Hindari Makanan Berpengawet",
      text: "Untuk balita, pilih makanan segar dan alami. Hindari makanan kemasan yang mengandung pengawet berlebih."
    },
    {
      title: "Variasi Warna Makanan",
      text: "Berikan makanan dengan berbagai warna untuk memastikan nutrisi yang beragam - hijau, kuning, merah, dan putih."
    },
    {
      title: "Tekstur Sesuai Usia",
      text: "Sesuaikan tekstur makanan dengan usia anak. Mulai dari puree halus hingga finger foods."
    }
  ];

  const totalNutrition = getTotalNutrition();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pantau Nutrisi</Text>
        <Text style={styles.subtitle}>Catat asupan harian si kecil</Text>
      </View>

      {/* Daily Nutrition Summary */}
      {dailyIntake.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ringkasan Nutrisi Hari Ini</Text>
          <View style={styles.nutritionSummary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Kalori</Text>
              <Text style={styles.summaryValue}>{totalNutrition.calories} kal</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Protein</Text>
              <Text style={styles.summaryValue}>{totalNutrition.protein.toFixed(1)} g</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Karbohidrat</Text>
              <Text style={styles.summaryValue}>{totalNutrition.carbs.toFixed(1)} g</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Lemak</Text>
              <Text style={styles.summaryValue}>{totalNutrition.fat.toFixed(1)} g</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Serat</Text>
              <Text style={styles.summaryValue}>{totalNutrition.fiber.toFixed(1)} g</Text>
            </View>
          </View>
        </View>
      )}

      {/* Healthy Foods */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🟢 Makanan Sehat untuk Balita</Text>
        {healthyFoods.map((food) => (
          <View key={food.id} style={styles.foodCard}>
            <Text style={styles.foodIcon}>{food.icon}</Text>
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodDetails}>
                {food.calories} kal | Protein: {food.protein}g | Serat: {food.fiber}g
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => addFoodToIntake(food)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Caution Foods */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🟡 Makanan yang Perlu Dibatasi</Text>
        {cautionFoods.map((food) => (
          <View key={food.id} style={styles.foodCard}>
            <Text style={styles.foodIcon}>{food.icon}</Text>
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodDetails}>
                {food.calories} kal | Gula tinggi - berikan secukupnya
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Recommendations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💡 Tips Nutrisi</Text>
        {recommendations.map((rec, index) => (
          <View key={index} style={styles.recommendationCard}>
            <Text style={styles.recommendationTitle}>{rec.title}</Text>
            <Text style={styles.recommendationText}>{rec.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default NutritionTrackerScreen;
