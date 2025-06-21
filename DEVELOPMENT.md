# 🛠 Development Guide - HealthEvo

## 📋 Prerequisites

Sebelum memulai development, pastikan Anda memiliki:

### Required Software
- **Node.js** (v16 atau lebih baru)
- **npm** atau **yarn** package manager
- **Git** untuk version control
- **VS Code** (recommended) atau code editor favorit Anda

### Mobile Development Tools
- **Expo CLI**: `npm install -g @expo/cli`
- **Expo Go** app di smartphone untuk testing
- **Android Studio** (untuk Android development)
- **Xcode** (untuk iOS development - hanya di macOS)

## 🚀 Quick Start

### 1. Clone & Setup
```bash
# Clone repository
git clone [repository-url]
cd healthevo-react-native

# Install dependencies
npm install

# Start development server
npm start
```

### 2. Development Server
Setelah menjalankan `npm start`, Anda akan melihat:
- QR code untuk scan dengan Expo Go
- Options untuk buka di simulator/emulator
- Development tools dan options

### 3. Testing di Device
- **iOS**: Download Expo Go dari App Store, scan QR code
- **Android**: Download Expo Go dari Play Store, scan QR code
- **Simulator**: Press `i` untuk iOS simulator, `a` untuk Android emulator

## 📁 Project Structure Deep Dive

```
healthevo-react-native/
├── App.tsx                    # Root application component
├── app.json                   # Expo configuration
├── package.json              # Dependencies dan scripts
├── tsconfig.json             # TypeScript configuration
├── babel.config.js           # Babel configuration
├── README.md                 # Project documentation
├── FEATURES.md               # Feature specifications
├── DEVELOPMENT.md            # This file
├── .gitignore               # Git ignore rules
├── .gitattributes           # Git attributes
├── assets/                  # Static assets
│   ├── icon.svg             # App icon
│   ├── splash.png           # Splash screen
│   └── images/              # Image assets
└── src/                     # Source code
    ├── components/          # Reusable UI components
    │   ├── BottomTabBar.tsx
    │   └── styles/
    │       └── BottomTabBar.ts
    ├── contexts/            # React Context providers
    │   └── AuthContext.tsx   # Authentication & user state
    ├── hooks/               # Custom React hooks
    │   └── useFonts.ts      # Font loading hook
    ├── navigation/          # Navigation configuration
    │   ├── AppNavigator.tsx  # Root navigator
    │   ├── BottomTabNavigator.tsx # Bottom tabs
    │   └── types.ts         # Navigation type definitions
    └── screens/            # Application screens
        ├── Auth/           # Authentication screens
        │   ├── Login.tsx
        │   ├── Register.tsx
        │   └── styles/
        │       └── Login.ts
        └── Dashboard/      # Main application screens
            ├── Home.tsx
            ├── NutritionTracker.tsx
            ├── HealthTips.tsx
            ├── Services.tsx
            ├── Profile.tsx
            └── styles/
                ├── Home.ts
                └── NutritionTracker.ts
```

## 🎨 Styling Guidelines

### Design System
```typescript
// Colors
const Colors = {
  primary: '#4CAF50',
  primaryDark: '#2E7D32',
  primaryLight: '#90EE90',
  white: '#FFFFFF',
  transparent: 'rgba(255, 255, 255, 0.8)',
  danger: 'rgba(255, 0, 0, 0.2)',
};

// Typography
const Typography = {
  h1: { fontSize: 28, fontWeight: 'bold' },
  h2: { fontSize: 24, fontWeight: 'bold' },
  h3: { fontSize: 20, fontWeight: 'bold' },
  body: { fontSize: 16, fontWeight: 'normal' },
  caption: { fontSize: 14, fontWeight: 'normal' },
};

// Spacing
const Spacing = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30,
};
```

### Component Styling
```typescript
// Gunakan StyleSheet.create untuk performance
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: Spacing.lg,
  },
  // ... other styles
});
```

## 🔧 Component Development

### Component Structure
```typescript
// Template untuk component baru
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ComponentProps {
  title: string;
  onPress?: () => void;
}

const CustomComponent: React.FC<ComponentProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // styles here
  },
  title: {
    // styles here
  },
});

export default CustomComponent;
```

### State Management dengan Context
```typescript
// Context creation
const MyContext = createContext<ContextType>({} as ContextType);

// Provider component
export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(initialState);
  
  const value = {
    state,
    updateState: (newState: StateType) => setState(newState),
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

// Hook for using context
export const useMyContext = () => useContext(MyContext);
```

## 🧪 Testing

### Unit Testing Setup
```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
```

### Writing Tests
```typescript
// Component test example
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomComponent from '../CustomComponent';

describe('CustomComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CustomComponent title="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <CustomComponent title="Test" onPress={mockOnPress} />
    );
    
    fireEvent.press(getByText('Test'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 📱 Platform-Specific Development

### iOS Specific
```typescript
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
```

### Android Specific
```typescript
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  // Android-specific code
}
```

## 🔄 State Management Best Practices

### Context Usage
- Gunakan Context untuk global state yang dibutuhkan multiple components
- Pisahkan concerns dengan multiple contexts
- Avoid deep nesting dengan Context composition

### Local State
- Gunakan useState untuk component-specific state
- Gunakan useReducer untuk complex state logic
- Keep state as close to where it's used as possible

### Async Operations
```typescript
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

const fetchData = async () => {
  setLoading(true);
  setError(null);
  
  try {
    const result = await apiCall();
    // handle success
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
```

## 🚀 Performance Optimization

### FlatList Optimization
```typescript
// Untuk list yang panjang
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={10}
/>
```

### Image Optimization
```typescript
// Gunakan optimized image loading
<Image
  source={{ uri: imageUrl }}
  style={styles.image}
  resizeMode="cover"
  defaultSource={require('../assets/placeholder.png')}
/>
```

### Memory Management
- Cleanup timers dan subscriptions di useEffect cleanup
- Avoid memory leaks dengan proper cleanup
- Use React.memo untuk prevent unnecessary re-renders

## 🔧 Debugging

### React Native Debugger
```bash
# Install React Native Debugger
# Windows/Linux: Download from GitHub releases
# macOS: brew install react-native-debugger
```

### Console Logging
```typescript
// Development logging
if (__DEV__) {
  console.log('Debug info:', data);
}

// Use Flipper for advanced debugging
```

### Error Boundaries
```typescript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
```

## 📦 Build & Deployment

### Development Build
```bash
# Start development server
npm start

# Build for specific platform
expo build:android
expo build:ios
```

### Production Build
```bash
# Build production ready app
expo build:android --type app-bundle
expo build:ios --type archive
```

### Over-the-Air Updates
```bash
# Publish updates without app store
expo publish
```

## 🔒 Security Best Practices

### Sensitive Data
- Never hardcode API keys atau sensitive data
- Use Expo SecureStore untuk sensitive data storage
- Validate all user inputs

### API Security
```typescript
// Use environment variables
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

// Implement proper error handling
const apiCall = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    // Handle error appropriately
    throw error;
  }
};
```

## 📚 Additional Resources

### Documentation
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)

### Tools
- [Expo DevTools](https://docs.expo.dev/workflow/development-mode/)
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- [Flipper](https://fbflipper.com/)

### Community
- [React Native Community](https://github.com/react-native-community)
- [Expo Community](https://forums.expo.dev/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

## 🤝 Contributing Guidelines

### Code Style
- Use TypeScript untuk type safety
- Follow ESLint configuration
- Use Prettier untuk code formatting
- Write meaningful commit messages

### Pull Request Process
1. Fork repository
2. Create feature branch
3. Make changes dengan proper testing
4. Update documentation jika perlu
5. Submit pull request dengan clear description

### Issue Reporting
- Use issue templates
- Provide reproduction steps
- Include device/platform information
- Add screenshots jika relevant

---

*Happy coding! 🚀*
