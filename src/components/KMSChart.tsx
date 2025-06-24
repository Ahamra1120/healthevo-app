import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface KMSData {
  umur: number;
  bbSangatKurang: number;
  bbKurang: number;
  bbIdealMin: number;
  bbIdealMax: number;
  bbBerlebih: number;
}

interface TBData {
  umur: number;
  tbStunting: number;
  tbTerindikasi: number;
  tbIdealMin: number;
  tbIdealMax: number;
  tbTinggi: number;
}

interface KMSChartProps {
  gender: 'laki' | 'perempuan';
  childAge: number; // dalam bulan
  childWeight?: number; // dalam kg
  childHeight?: number; // dalam cm
  chartType: 'weight' | 'height';
}

const KMSChart: React.FC<KMSChartProps> = ({
  gender,
  childAge,
  childWeight,
  childHeight,
  chartType
}) => {
  const [kmsData, setKmsData] = useState<KMSData[]>([]);
  const [tbData, setTbData] = useState<TBData[]>([]);
  const [analysisResult, setAnalysisResult] = useState<string>('');

  useEffect(() => {
    loadKMSData();
  }, [gender]);

  useEffect(() => {
    if (chartType === 'weight' && childWeight) {
      analyzeWeight();
    } else if (chartType === 'height' && childHeight) {
      analyzeHeight();
    }
  }, [childAge, childWeight, childHeight, chartType, kmsData, tbData]);

  const loadKMSData = () => {
    // Data KMS BB untuk Laki-laki
    const bbLakiData: KMSData[] = [
      { umur: 0, bbSangatKurang: 2, bbKurang: 2.4, bbIdealMin: 2.5, bbIdealMax: 3.9, bbBerlebih: 4 },
      { umur: 1, bbSangatKurang: 2.8, bbKurang: 3.3, bbIdealMin: 3.4, bbIdealMax: 5.1, bbBerlebih: 5.2 },
      { umur: 2, bbSangatKurang: 3.7, bbKurang: 4.2, bbIdealMin: 4.3, bbIdealMax: 6.3, bbBerlebih: 6.4 },
      { umur: 3, bbSangatKurang: 4.3, bbKurang: 4.9, bbIdealMin: 5, bbIdealMax: 7.2, bbBerlebih: 7.3 },
      { umur: 6, bbSangatKurang: 5.6, bbKurang: 6.3, bbIdealMin: 6.4, bbIdealMax: 8.8, bbBerlebih: 8.9 },
      { umur: 12, bbSangatKurang: 6.8, bbKurang: 7.6, bbIdealMin: 7.7, bbIdealMax: 10.8, bbBerlebih: 10.9 },
      { umur: 18, bbSangatKurang: 7.7, bbKurang: 8.7, bbIdealMin: 8.8, bbIdealMax: 12.2, bbBerlebih: 12.3 },
      { umur: 24, bbSangatKurang: 8.5, bbKurang: 9.6, bbIdealMin: 9.7, bbIdealMax: 13.6, bbBerlebih: 13.7 },
      { umur: 36, bbSangatKurang: 9.9, bbKurang: 11.2, bbIdealMin: 11.3, bbIdealMax: 16.2, bbBerlebih: 16.3 },
      { umur: 48, bbSangatKurang: 11.1, bbKurang: 12.6, bbIdealMin: 12.7, bbIdealMax: 18.6, bbBerlebih: 18.7 },
      { umur: 60, bbSangatKurang: 12.3, bbKurang: 14, bbIdealMin: 14.1, bbIdealMax: 21, bbBerlebih: 21.1 }
    ];

    // Data KMS BB untuk Perempuan
    const bbPerempuanData: KMSData[] = [
      { umur: 0, bbSangatKurang: 2, bbKurang: 2.3, bbIdealMin: 2.4, bbIdealMax: 3.7, bbBerlebih: 3.8 },
      { umur: 1, bbSangatKurang: 2.7, bbKurang: 3.1, bbIdealMin: 3.2, bbIdealMax: 4.8, bbBerlebih: 4.9 },
      { umur: 2, bbSangatKurang: 3.4, bbKurang: 3.8, bbIdealMin: 3.9, bbIdealMax: 5.8, bbBerlebih: 5.9 },
      { umur: 3, bbSangatKurang: 4, bbKurang: 4.4, bbIdealMin: 4.5, bbIdealMax: 6.6, bbBerlebih: 6.7 },
      { umur: 6, bbSangatKurang: 5.1, bbKurang: 5.6, bbIdealMin: 5.7, bbIdealMax: 8.2, bbBerlebih: 8.3 },
      { umur: 12, bbSangatKurang: 6.3, bbKurang: 6.9, bbIdealMin: 7, bbIdealMax: 10.1, bbBerlebih: 10.2 },
      { umur: 18, bbSangatKurang: 7.2, bbKurang: 8, bbIdealMin: 8.1, bbIdealMax: 11.6, bbBerlebih: 11.7 },
      { umur: 24, bbSangatKurang: 8.1, bbKurang: 8.9, bbIdealMin: 9, bbIdealMax: 13, bbBerlebih: 13.1 },
      { umur: 36, bbSangatKurang: 9.6, bbKurang: 10.7, bbIdealMin: 10.8, bbIdealMax: 15.8, bbBerlebih: 15.9 },
      { umur: 48, bbSangatKurang: 10.9, bbKurang: 12.2, bbIdealMin: 12.3, bbIdealMax: 18.5, bbBerlebih: 18.6 },
      { umur: 60, bbSangatKurang: 12.1, bbKurang: 13.6, bbIdealMin: 13.7, bbIdealMax: 21.2, bbBerlebih: 21.3 }
    ];

    // Data KMS TB untuk Laki-laki
    const tbLakiData: TBData[] = [
      { umur: 0, tbStunting: 44.2, tbTerindikasi: 46, tbIdealMin: 46.1, tbIdealMax: 55.6, tbTinggi: 55.7 },
      { umur: 6, tbStunting: 61.2, tbTerindikasi: 63.2, tbIdealMin: 63.3, tbIdealMax: 74, tbTinggi: 74.1 },
      { umur: 12, tbStunting: 68.6, tbTerindikasi: 70.9, tbIdealMin: 71, tbIdealMax: 82.9, tbTinggi: 83 },
      { umur: 18, tbStunting: 74.2, tbTerindikasi: 76.8, tbIdealMin: 76.9, tbIdealMax: 90.4, tbTinggi: 90.5 },
      { umur: 24, tbStunting: 78, tbTerindikasi: 81.6, tbIdealMin: 81.7, tbIdealMax: 97, tbTinggi: 97.1 },
      { umur: 36, tbStunting: 85, tbTerindikasi: 88.6, tbIdealMin: 88.7, tbIdealMax: 107.2, tbTinggi: 107.3 },
      { umur: 48, tbStunting: 90.7, tbTerindikasi: 94.8, tbIdealMin: 94.9, tbIdealMax: 115.9, tbTinggi: 116 },
      { umur: 60, tbStunting: 96.1, tbTerindikasi: 100.6, tbIdealMin: 100.7, tbIdealMax: 123.9, tbTinggi: 124 }
    ];

    // Data KMS TB untuk Perempuan
    const tbPerempuanData: TBData[] = [
      { umur: 0, tbStunting: 43.6, tbTerindikasi: 45.3, tbIdealMin: 45.4, tbIdealMax: 54.7, tbTinggi: 54.8 },
      { umur: 6, tbStunting: 58.9, tbTerindikasi: 61.1, tbIdealMin: 61.2, tbIdealMax: 72.5, tbTinggi: 72.6 },
      { umur: 12, tbStunting: 66.3, tbTerindikasi: 68.8, tbIdealMin: 68.9, tbIdealMax: 83.1, tbTinggi: 83.2 },
      { umur: 18, tbStunting: 72, tbTerindikasi: 74.8, tbIdealMin: 74.9, tbIdealMax: 90.6, tbTinggi: 90.7 },
      { umur: 24, tbStunting: 76.7, tbTerindikasi: 79.9, tbIdealMin: 80, tbIdealMax: 95.4, tbTinggi: 95.5 },
      { umur: 36, tbStunting: 83.6, tbTerindikasi: 87.3, tbIdealMin: 87.4, tbIdealMax: 106.5, tbTinggi: 106.6 },
      { umur: 48, tbStunting: 89.8, tbTerindikasi: 94, tbIdealMin: 94.1, tbIdealMax: 115.7, tbTinggi: 115.8 },
      { umur: 60, tbStunting: 95.2, tbTerindikasi: 99.8, tbIdealMin: 99.9, tbIdealMax: 123.7, tbTinggi: 123.8 }
    ];

    if (gender === 'laki') {
      setKmsData(bbLakiData);
      setTbData(tbLakiData);
    } else {
      setKmsData(bbPerempuanData);
      setTbData(tbPerempuanData);
    }
  };

  const analyzeWeight = () => {
    if (!childWeight || !kmsData.length) return;

    // Interpolasi linear untuk mendapatkan threshold pada umur spesifik
    const getThresholdAtAge = (age: number) => {
      if (age <= 0) return kmsData[0];
      if (age >= 60) return kmsData[kmsData.length - 1];

      for (let i = 0; i < kmsData.length - 1; i++) {
        if (age >= kmsData[i].umur && age <= kmsData[i + 1].umur) {
          const ratio = (age - kmsData[i].umur) / (kmsData[i + 1].umur - kmsData[i].umur);
          return {
            umur: age,
            bbSangatKurang: kmsData[i].bbSangatKurang + ratio * (kmsData[i + 1].bbSangatKurang - kmsData[i].bbSangatKurang),
            bbKurang: kmsData[i].bbKurang + ratio * (kmsData[i + 1].bbKurang - kmsData[i].bbKurang),
            bbIdealMin: kmsData[i].bbIdealMin + ratio * (kmsData[i + 1].bbIdealMin - kmsData[i].bbIdealMin),
            bbIdealMax: kmsData[i].bbIdealMax + ratio * (kmsData[i + 1].bbIdealMax - kmsData[i].bbIdealMax),
            bbBerlebih: kmsData[i].bbBerlebih + ratio * (kmsData[i + 1].bbBerlebih - kmsData[i].bbBerlebih)
          };
        }
      }
      return kmsData[0];
    };

    const threshold = getThresholdAtAge(childAge);
    let status = '';
    let recommendation = '';

    if (childWeight < threshold.bbSangatKurang) {
      status = 'Berat Badan Sangat Kurang';
      recommendation = '⚠️ URGENT: Segera konsultasi ke dokter anak atau ahli gizi untuk penanganan malnutrisi berat.';
    } else if (childWeight < threshold.bbKurang) {
      status = 'Berat Badan Kurang';
      recommendation = '📋 Perlu peningkatan asupan gizi. Konsultasi dengan ahli gizi untuk program peningkatan berat badan.';
    } else if (childWeight >= threshold.bbIdealMin && childWeight <= threshold.bbIdealMax) {
      status = 'Berat Badan Ideal';
      recommendation = '✅ Pertahankan pola makan sehat dan seimbang. Lanjutkan pemantauan rutin.';
    } else if (childWeight > threshold.bbBerlebih) {
      status = 'Risiko Berat Badan Berlebih';
      recommendation = '⚠️ Perhatikan asupan kalori dan tingkatkan aktivitas fisik. Konsultasi dengan ahli gizi.';
    }

    setAnalysisResult(`Status: ${status}\n${recommendation}\n\nData: Umur ${childAge} bulan, BB ${childWeight} kg`);
  };

  const analyzeHeight = () => {
    if (!childHeight || !tbData.length) return;

    // Interpolasi linear untuk tinggi badan
    const getHeightThresholdAtAge = (age: number) => {
      if (age <= 0) return tbData[0];
      if (age >= 60) return tbData[tbData.length - 1];

      for (let i = 0; i < tbData.length - 1; i++) {
        if (age >= tbData[i].umur && age <= tbData[i + 1].umur) {
          const ratio = (age - tbData[i].umur) / (tbData[i + 1].umur - tbData[i].umur);
          return {
            umur: age,
            tbStunting: tbData[i].tbStunting + ratio * (tbData[i + 1].tbStunting - tbData[i].tbStunting),
            tbTerindikasi: tbData[i].tbTerindikasi + ratio * (tbData[i + 1].tbTerindikasi - tbData[i].tbTerindikasi),
            tbIdealMin: tbData[i].tbIdealMin + ratio * (tbData[i + 1].tbIdealMin - tbData[i].tbIdealMin),
            tbIdealMax: tbData[i].tbIdealMax + ratio * (tbData[i + 1].tbIdealMax - tbData[i].tbIdealMax),
            tbTinggi: tbData[i].tbTinggi + ratio * (tbData[i + 1].tbTinggi - tbData[i].tbTinggi)
          };
        }
      }
      return tbData[0];
    };

    const threshold = getHeightThresholdAtAge(childAge);
    let status = '';
    let recommendation = '';

    if (childHeight < threshold.tbStunting) {
      status = 'Stunting';
      recommendation = '🚨 URGENT: Anak mengalami stunting. Segera konsultasi ke dokter anak untuk intervensi gizi intensif.';
    } else if (childHeight < threshold.tbTerindikasi) {
      status = 'Terindikasi Stunting';
      recommendation = '⚠️ Risiko stunting tinggi. Perbaiki asupan gizi, terutama protein dan mikronutrien.';
    } else if (childHeight >= threshold.tbIdealMin && childHeight <= threshold.tbIdealMax) {
      status = 'Tinggi Badan Ideal';
      recommendation = '✅ Tinggi badan normal. Pertahankan asupan gizi seimbang dan aktivitas fisik.';
    } else if (childHeight > threshold.tbTinggi) {
      status = 'Tinggi Badan Lebih';
      recommendation = '📈 Tinggi badan di atas rata-rata. Pantau perkembangan secara rutin.';
    }

    setAnalysisResult(`Status: ${status}\n${recommendation}\n\nData: Umur ${childAge} bulan, TB ${childHeight} cm`);
  };

  const prepareChartData = () => {
    const screenWidth = Dimensions.get('window').width;
    
    if (chartType === 'weight') {
      const labels = kmsData.map(d => d.umur.toString());
      const datasets = [
        {
          data: kmsData.map(d => d.bbSangatKurang),
          color: () => '#ff4444',
          strokeWidth: 2
        },
        {
          data: kmsData.map(d => d.bbKurang),
          color: () => '#ff8800',
          strokeWidth: 2
        },
        {
          data: kmsData.map(d => d.bbIdealMin),
          color: () => '#00aa00',
          strokeWidth: 2
        },
        {
          data: kmsData.map(d => d.bbIdealMax),
          color: () => '#00aa00',
          strokeWidth: 2
        },
        {
          data: kmsData.map(d => d.bbBerlebih),
          color: () => '#0088ff',
          strokeWidth: 2
        }
      ];

      // Tambahkan titik anak jika ada data
      if (childWeight) {
        datasets.push({
          data: [childWeight],
          color: () => '#ff0000',
          strokeWidth: 4
        });
      }

      return {
        labels,
        datasets
      };
    } else {
      const labels = tbData.map(d => d.umur.toString());
      const datasets = [
        {
          data: tbData.map(d => d.tbStunting),
          color: () => '#ff4444',
          strokeWidth: 2
        },
        {
          data: tbData.map(d => d.tbTerindikasi),
          color: () => '#ff8800',
          strokeWidth: 2
        },
        {
          data: tbData.map(d => d.tbIdealMin),
          color: () => '#00aa00',
          strokeWidth: 2
        },
        {
          data: tbData.map(d => d.tbIdealMax),
          color: () => '#00aa00',
          strokeWidth: 2
        },
        {
          data: tbData.map(d => d.tbTinggi),
          color: () => '#0088ff',
          strokeWidth: 2
        }
      ];

      // Tambahkan titik anak jika ada data
      if (childHeight) {
        datasets.push({
          data: [childHeight],
          color: () => '#ff0000',
          strokeWidth: 4
        });
      }

      return {
        labels,
        datasets
      };
    }
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726'
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Kartu Menuju Sehat (KMS) - {chartType === 'weight' ? 'Berat Badan' : 'Tinggi Badan'}
      </Text>
      <Text style={styles.subtitle}>
        Anak {gender === 'laki' ? 'Laki-laki' : 'Perempuan'} - {childAge} bulan
      </Text>

      {(chartType === 'weight' ? kmsData : tbData).length > 0 && (
        <View style={styles.chartContainer}>
          <LineChart
            data={prepareChartData()}
            width={Dimensions.get('window').width - 20}
            height={300}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
          
          <View style={styles.legend}>
            <Text style={styles.legendTitle}>Keterangan:</Text>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#ff4444' }]} />
              <Text style={styles.legendText}>
                {chartType === 'weight' ? 'BB Sangat Kurang' : 'Stunting'}
              </Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#ff8800' }]} />
              <Text style={styles.legendText}>
                {chartType === 'weight' ? 'BB Kurang' : 'Terindikasi Stunting'}
              </Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#00aa00' }]} />
              <Text style={styles.legendText}>
                {chartType === 'weight' ? 'BB Ideal' : 'TB Ideal'}
              </Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#0088ff' }]} />
              <Text style={styles.legendText}>
                {chartType === 'weight' ? 'Risiko BB Berlebih' : 'TB Tinggi'}
              </Text>
            </View>
            {(childWeight || childHeight) && (
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: '#ff0000' }]} />
                <Text style={styles.legendText}>Data Anak</Text>
              </View>
            )}
          </View>
        </View>
      )}

      {analysisResult && (
        <View style={styles.analysisContainer}>
          <Text style={styles.analysisTitle}>Hasil Analisis:</Text>
          <Text style={styles.analysisText}>{analysisResult}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333'
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666'
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16
  },
  legend: {
    marginTop: 15
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8
  },
  legendText: {
    fontSize: 12,
    color: '#666'
  },
  analysisContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  analysisText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555'
  }
});

export default KMSChart;
