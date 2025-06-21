import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles/Login';
import { AuthStackParamList } from '../../navigation/types';

type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  
  const handleRegister = async () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();
  
    if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
      Alert.alert('Error', 'Mohon isi semua field');
      return;
    }
  
    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    if (!isValidEmail(trimmedEmail)) {
      Alert.alert('Error', 'Mohon masukkan email yang valid');
      return;
    }
  
    if (trimmedPassword.length < 6) {
      Alert.alert('Error', 'Password minimal 6 karakter');
      return;
    }
  
    if (trimmedPassword !== trimmedConfirmPassword) {
      Alert.alert('Error', 'Password tidak cocok!');
      return;
    }
  
    setIsLoading(true);
    try {
      // Simulasi register - dalam implementasi nyata, ini akan menghubungi API
      setTimeout(() => {
        Alert.alert('Berhasil', 'Akun berhasil dibuat!', [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Pendaftaran gagal. Silakan coba lagi.');
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🏥 HealthEvo</Text>
        <Text style={styles.welcomeText}>Buat Akun</Text>
        <Text style={styles.caption}>Bergabunglah untuk memantau kesehatan balita Anda!</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Masukkan nama lengkap"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Masukkan email"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Masukkan password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            secureTextEntry
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Konfirmasi Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Konfirmasi password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            secureTextEntry
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleRegister}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Daftar</Text>
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.linkText}>
        Sudah punya akun?{' '}
        <Text onPress={handleLogin} style={styles.linkTextHighlight}>
          Masuk di sini
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Register;
