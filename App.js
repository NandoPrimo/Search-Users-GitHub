/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Alert,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

const App = () => {
  const [username, onChangeUser] = React.useState('');
  const [users, onChangeUsers] = React.useState([]); 

  const searchUser = () => {
    // Make a request for a user with a given ID
    axios.get('https://api.github.com/search/users?q='+ username)
    .then(function (response) {
      // handle success
      onChangeUsers(response);
    })
  };


  return (
    <>
     
          
    <View style={styles.body}>
      
      <View style={styles.sectionContainer}>

        <Image style={styles.image} source={require('./android/app/src/main/assets/cgu.png')} />
        <Text style={styles.titleText}>Welcome</Text>
        <Text style={styles.titleText}>to</Text>
        <Text style={styles.titleText}>Consult GitHub Users  </Text>

        
        
        <TextInput 
          placeholder='Enter your Username'
          placeholderTextColor= '#FFF'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: '#FFF'}}
          onChangeText={text => onChangeUser(text)}
          value={username}
        />

        <View style={styles.buttonDiv}>
          <Button style={styles.button}
            onPress={searchUser}
            title="Search"
            color="#841584"
          />
        </View>

        <Text style={styles.titleText2}>Favorites  </Text>

      </View>

      
    </View>

    </>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#010016',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  image: {
    marginTop: 150,
  },
  titleText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
  },
  titleText2:{
    color:'gray',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  buttonDiv: {
    marginVertical: 20,
    
  },
});

export default App;
