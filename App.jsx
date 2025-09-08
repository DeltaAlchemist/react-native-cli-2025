import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFontFamily } from './assets/fonts/helper';

const App = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 40,
          fontFamily: getFontFamily('Inter', '100'),
        }}
      >
        Hello World!
      </Text>
    </SafeAreaView>
  );
};

export default App;
