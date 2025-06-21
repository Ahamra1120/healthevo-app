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
import { AuthStackParamList, RootStackParamList } from '../../navigation/types';
import { useAuth } from '../../contexts/AuthContext';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'> & {
  reset: (params: {
    index: number;
    routes: { name: keyof RootStackParamList }[];
  }) => void;
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login } = useAuth();
  
  const handleLogin = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
  
    if (!trimmedEmail || !trimmedPassword) {
      Alert.alert("Error", "Email dan password tidak boleh kosong.");
      return;
    }
  
    setIsLoading(true);
    try {
      // Simulasi login - dalam implementasi nyata, ini akan menghubungi API
      setTimeout(() => {
        const userData = {
          uid: '1',
          name: 'Demo User',
          email: trimmedEmail,
          children: []
        };
        
        login(userData);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Login gagal. Silakan coba lagi.");
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🏥 HealthEvo</Text>
        <Text style={styles.welcomeText}>Selamat Datang!</Text>
        <Text style={styles.caption}>Masukkan kredensial login Anda...</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Masukkan email Anda"
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
            placeholder="Masukkan password Anda"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            secureTextEntry
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Masuk</Text>
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.linkText}>
        Belum punya akun?{' '}
        <Text onPress={handleRegister} style={styles.linkTextHighlight}>
          Daftar di sini
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Login;
