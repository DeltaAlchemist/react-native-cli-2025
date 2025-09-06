import { Text, View } from 'react-native';
import style from './style';

const MyText = ({ name }) => {
  const handleTextClick = () => {
    alert('You just pressed the text component');
  };
  return (
    <View>
      <Text style={[style.text]} onPress={() => handleTextClick()}>
        Hello, {name}
      </Text>
    </View>
  );
};

export default MyText;
