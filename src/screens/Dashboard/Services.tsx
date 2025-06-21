import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';
import styles from './styles/Home'; // Reuse styles

const ServicesScreen = () => {
  const hospitalServices = [
    {
      id: 1,
      name: "RS Anak dan Bunda Harapan Kita",
      address: "Jl. Letjen S. Parman Kav. 87, Jakarta Barat",
      phone: "(021) 5668284",
      services: ["Konsultasi Gizi", "Pemeriksaan Tumbuh Kembang", "Vaksinasi"],
      icon: "🏥"
    },
    {
      id: 2,
      name: "RSUD Dr. Soetomo",
      address: "Jl. Mayjen Prof. Dr Moestopo No.6-8, Surabaya",
      phone: "(031) 5501078",
      services: ["Klinik Anak", "Poliklinik Gizi", "Rawat Inap Anak"],
      icon: "🏥"
    },
    {
      id: 3,
      name: "RS Cipto Mangunkusumo",
      address: "Jl. Diponegoro No.71, Jakarta Pusat",
      phone: "(021) 31900001",
      services: ["Spesialis Anak", "Konsultasi Stunting", "Laboratorium"],
      icon: "🏥"
    }
  ];

  const incubatorServices = [
    {
      id: 4,
      name: "Medika Rental",
      address: "Jakarta, Surabaya, Bandung",
      phone: "0812-3456-7890",
      services: ["Sewa Inkubator", "Perawatan 24 Jam", "Teknisi Siap Siaga"],
      price: "Rp 150.000/hari",
      icon: "🔧"
    },
    {
      id: 5,
      name: "Homecare Plus",
      address: "Layanan Se-Indonesia",
      phone: "0857-1234-5678",
      services: ["Inkubator Portable", "Perawat Khusus Bayi", "Konsultasi Medis"],
      price: "Rp 200.000/hari",
      icon: "🔧"
    },
    {
      id: 6,
      name: "Baby Care Equipment",
      address: "Area Jabotabek",
      phone: "0821-9876-5432",
      services: ["Inkubator Modern", "Monitoring Vital Sign", "Support 24/7"],
      price: "Rp 175.000/hari",
      icon: "🔧"
    }
  ];

  const emergencyContacts = [
    {
      name: "Ambulans Jakarta",
      number: "021-65303118",
      type: "Ambulans"
    },
    {
      name: "PMI Jakarta",
      number: "021-7992325",
      type: "Ambulans"
    },
    {
      name: "Telemed Konsultasi Online",
      number: "0804-1-SEHAT",
      type: "Konsultasi"
    }
  ];

  const handleCall = (phoneNumber: string) => {
    Alert.alert(
      "Panggilan",
      `Hubungi ${phoneNumber}?`,
      [
        { text: "Batal", style: "cancel" },
        { 
          text: "Hubungi", 
          onPress: () => {
            Linking.openURL(`tel:${phoneNumber.replace(/\D/g, '')}`);
          }
        }
      ]
    );
  };

  const showServiceDetails = (service: any) => {
    const details = service.services.join('\n• ');
    const message = `Alamat: ${service.address}\n\nLayanan:\n• ${details}\n\nTelepon: ${service.phone}`;
    
    Alert.alert(
      service.name,
      message,
      [
        { text: "Tutup", style: "cancel" },
        { 
          text: "Hubungi", 
          onPress: () => handleCall(service.phone)
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={[styles.greetingText, { textAlign: 'center' }]}>
          🏥 Layanan Kesehatan
        </Text>
        <Text style={[styles.subGreeting, { textAlign: 'center' }]}>
          Rumah sakit dan layanan pendukung
        </Text>
      </View>

      {/* Hospital Services */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>🏥 Rumah Sakit Terdekat</Text>
        {hospitalServices.map((hospital) => (
          <TouchableOpacity 
            key={hospital.id} 
            style={styles.childCard}
            onPress={() => showServiceDetails(hospital)}
          >
            <Text style={styles.featureIcon}>{hospital.icon}</Text>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.childName}>{hospital.name}</Text>
              <Text style={styles.childAge} numberOfLines={2}>
                {hospital.address}
              </Text>
              <Text style={[styles.childAge, { marginTop: 5 }]}>
                {hospital.services.slice(0, 2).join(' • ')}
              </Text>
            </View>
            <TouchableOpacity 
              onPress={() => handleCall(hospital.phone)}
              style={{ padding: 10 }}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>📞</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* Incubator Rental */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>🔧 Sewa Inkubator</Text>
        {incubatorServices.map((service) => (
          <TouchableOpacity 
            key={service.id} 
            style={styles.childCard}
            onPress={() => showServiceDetails(service)}
          >
            <Text style={styles.featureIcon}>{service.icon}</Text>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.childName}>{service.name}</Text>
              <Text style={styles.childAge}>{service.address}</Text>
              <Text style={[styles.childAge, { color: '#90EE90', fontWeight: 'bold' }]}>
                {service.price}
              </Text>
            </View>
            <TouchableOpacity 
              onPress={() => handleCall(service.phone)}
              style={{ padding: 10 }}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>📞</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* Emergency Contacts */}
      <View style={styles.childrenSection}>
        <Text style={styles.sectionTitle}>🚨 Kontak Darurat</Text>
        {emergencyContacts.map((contact, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.childCard, { backgroundColor: 'rgba(255, 0, 0, 0.2)' }]}
            onPress={() => handleCall(contact.number)}
          >
            <Text style={styles.featureIcon}>🚨</Text>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.childName}>{contact.name}</Text>
              <Text style={styles.childAge}>{contact.type}</Text>
            </View>
            <Text style={styles.statValue}>{contact.number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Information */}
      <View style={styles.childrenSection}>
        <View style={styles.childCard}>
          <Text style={styles.childName}>ℹ️ Informasi Penting</Text>
          <Text style={styles.childAge}>
            • Selalu konsultasi dengan dokter anak untuk masalah kesehatan balita{'\n'}
            • Simpan nomor darurat di kontak cepat HP Anda{'\n'}
            • Untuk sewa inkubator, pastikan ada perawat terlatih{'\n'}
            • Dalam keadaan darurat, segera hubungi 118 atau 119
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ServicesScreen;
