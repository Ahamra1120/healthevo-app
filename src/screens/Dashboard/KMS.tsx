import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import KMSChart from '../../components/KMSChart';

const KMSScreen = () => {
  const [childAge, setChildAge] = useState('');
  const [childWeight, setChildWeight] = useState('');
  const [childHeight, setChildHeight] = useState('');
  const [gender, setGender] = useState<'laki' | 'perempuan'>('laki');
  const [chartType, setChartType] = useState<'weight' | 'height'>('weight');
  const [showChart, setShowChart] = useState(false);

  const handleAnalyze = () => {
    const age = parseInt(childAge);
    const weight = parseFloat(childWeight);
    const height = parseFloat(childHeight);

    if (!age || age < 0 || age > 60) {
      Alert.alert('Error', 'Umur harus antara 0-60 bulan');
      return;
    }

    if (chartType === 'weight' && (!weight || weight <= 0)) {
      Alert.alert('Error', 'Berat badan harus diisi dan lebih dari 0');
      return;
    }

    if (chartType === 'height' && (!height || height <= 0)) {
      Alert.alert('Error', 'Tinggi badan harus diisi dan lebih dari 0');
      return;
    }

    setShowChart(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>📊 Kartu Menuju Sehat</Text>
          <Text style={styles.subtitle}>
            Pantau pertumbuhan anak dengan standar KMS Indonesia
          </Text>
        </View>

        {!showChart && (
          <View style={styles.inputContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Jenis Kelamin</Text>
              <View style={styles.genderButtons}>
                <TouchableOpacity
                  style={[
                    styles.genderButton,
                    gender === 'laki' && styles.genderButtonActive
                  ]}
                  onPress={() => setGender('laki')}
                >
                  <Text
                    style={[
                      styles.genderButtonText,
                      gender === 'laki' && styles.genderButtonTextActive
                    ]}
                  >
                    👦 Laki-laki
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.genderButton,
                    gender === 'perempuan' && styles.genderButtonActive
                  ]}
                  onPress={() => setGender('perempuan')}
                >
                  <Text
                    style={[
                      styles.genderButtonText,
                      gender === 'perempuan' && styles.genderButtonTextActive
                    ]}
                  >
                    👧 Perempuan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Jenis Analisis</Text>
              <View style={styles.genderButtons}>
                <TouchableOpacity
                  style={[
                    styles.genderButton,
                    chartType === 'weight' && styles.genderButtonActive
                  ]}
                  onPress={() => setChartType('weight')}
                >
                  <Text
                    style={[
                      styles.genderButtonText,
                      chartType === 'weight' && styles.genderButtonTextActive
                    ]}
                  >
                    ⚖️ Berat Badan
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.genderButton,
                    chartType === 'height' && styles.genderButtonActive
                  ]}
                  onPress={() => setChartType('height')}
                >
                  <Text
                    style={[
                      styles.genderButtonText,
                      chartType === 'height' && styles.genderButtonTextActive
                    ]}
                  >
                    📏 Tinggi Badan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Umur Anak (bulan) *</Text>
              <TextInput
                style={styles.input}
                value={childAge}
                onChangeText={setChildAge}
                placeholder="Contoh: 24"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
              <Text style={styles.helperText}>
                Rentang: 0-60 bulan (0-5 tahun)
              </Text>
            </View>

            {chartType === 'weight' && (
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Berat Badan (kg) *</Text>
                <TextInput
                  style={styles.input}
                  value={childWeight}
                  onChangeText={setChildWeight}
                  placeholder="Contoh: 12.5"
                  keyboardType="decimal-pad"
                  placeholderTextColor="#999"
                />
                <Text style={styles.helperText}>
                  Dalam kilogram (kg)
                </Text>
              </View>
            )}

            {chartType === 'height' && (
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Tinggi Badan (cm) *</Text>
                <TextInput
                  style={styles.input}
                  value={childHeight}
                  onChangeText={setChildHeight}
                  placeholder="Contoh: 85.5"
                  keyboardType="decimal-pad"
                  placeholderTextColor="#999"
                />
                <Text style={styles.helperText}>
                  Dalam sentimeter (cm)
                </Text>
              </View>
            )}

            <TouchableOpacity style={styles.analyzeButton} onPress={handleAnalyze}>
              <Text style={styles.analyzeButtonText}>
                📈 Analisis Pertumbuhan
              </Text>
            </TouchableOpacity>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>ℹ️ Tentang KMS</Text>
              <Text style={styles.infoText}>
                Kartu Menuju Sehat (KMS) adalah alat untuk memantau pertumbuhan anak berdasarkan standar WHO dan Kementerian Kesehatan Indonesia. Grafik menunjukkan kurva pertumbuhan normal dan membantu deteksi dini masalah gizi.
              </Text>
            </View>
          </View>
        )}

        {showChart && (
          <View>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setShowChart(false)}
            >
              <Text style={styles.backButtonText}>← Kembali ke Input</Text>
            </TouchableOpacity>

            <KMSChart
              gender={gender}
              childAge={parseInt(childAge)}
              childWeight={chartType === 'weight' ? parseFloat(childWeight) : undefined}
              childHeight={chartType === 'height' ? parseFloat(childHeight) : undefined}
              chartType={chartType}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9
  },
  inputContainer: {
    paddingHorizontal: 20
  },
  inputGroup: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333'
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic'
  },
  genderButtons: {
    flexDirection: 'row',
    gap: 10
  },
  genderButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center'
  },
  genderButtonActive: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50'
  },
  genderButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500'
  },
  genderButtonTextActive: {
    color: '#fff'
  },
  analyzeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  analyzeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  backButton: {
    backgroundColor: '#6c757d',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    margin: 20
  },
  backButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500'
  },
  infoBox: {
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    padding: 15,
    marginTop: 10
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 8
  },
  infoText: {
    fontSize: 14,
    color: '#1565c0',
    lineHeight: 20
  }
});

export default KMSScreen;
