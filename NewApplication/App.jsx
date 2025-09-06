import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const isDisabled = name.length === 0 || age.length === 0;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={name}
          placeholder={'Enter your name...'}
          onChangeText={value => setName(value)}
          keyboardType={'default'}
          style={styles.textInput}
        />
        <TextInput
          value={age}
          placeholder={'Enter your age...'}
          onChangeText={value => setAge(value)}
          keyboardType={'number-pad'}
          style={styles.textInput}
        />
        {expanded && (
          <ScrollView style={styles.scrollViewUserInfo}>
            {userInfo.map((obj, index) => (
              <Text key={index} style={styles.userInfoText}>
                {obj.name} | Age: {obj.age}
              </Text>
            ))}
          </ScrollView>
        )}
        <View style={styles.switchContainer}>
          <Switch
            style={styles.switch}
            thumbColor={'rgba(60, 86, 233, 0.85)'}
            trackColor={{ true: 'rgba(202, 216, 255, 0.85)' }}
            value={expanded}
            disabled={userInfo.length === 0}
            onValueChange={value => {
              setExpanded(value);
              console.log(userInfo);
            }}
          />
          <Text style={styles.switchText}>Show Users' Information</Text>
        </View>
        <TouchableOpacity
          style={[styles.submitButton, isDisabled && styles.disabledButton]}
          disabled={isDisabled}
          onPress={() => {
            setUserInfo([...userInfo, { name: name, age: age }]);
            setName('');
            setAge('');
            console.log(userInfo);
          }}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.deleteAllButton,
            userInfo.length === 0 && styles.disabledButton,
          ]}
          disabled={userInfo.length === 0}
          onPress={() => {
            setUserInfo([]);
            setName('');
            setAge('');
          }}
        >
          <Text style={styles.deleteAllButtonText}>Delete All</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 25,
    rowGap: 5,
  },
  textInput: {
    borderWidth: 0.5,
    padding: 10,
  },
  scrollViewUserInfo: {
    borderWidth: 0.5,
    padding: 10,
    maxHeight: 200,
    minHeight: 50,
  },
  userInfoText: {
    marginLeft: 2,
    padding: 3,
  },
  switchContainer: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  switch: {},
  switchText: {
    marginLeft: 2,
    padding: 3,
  },
  submitButton: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    padding: 13,
  },
  deleteAllButton: {
    backgroundColor: 'red',
    height: 30,
    alignContent: 'center',
    justifyContent: 'center',
    paddingBottom: 2,
  },
  deleteAllButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default App;
