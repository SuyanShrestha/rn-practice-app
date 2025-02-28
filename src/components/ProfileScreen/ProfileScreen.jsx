import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {firebase, authentication} from '../../../config';
import {onAuthStateChanged, signOut} from 'firebase/auth';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const signOutUser = () => {
    signOut(authentication)
      .then(() => {
        setUser(null);
        navigation.navigate('LoginScreen');
      })
      .catch(error => console.warn(error));
  };

  // fetching match history
  //   const fetchMatchHistory = async () => {
  //     try {
  //       const list = [];
  //       await firebase
  //         .firestore()
  //         .collection(matches)
  //         .where('userId', '==', user.uid).orderBy("matchTime", "desc").get();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* upper section */}
        <Text>ProfileScreen</Text>
        <Image
          style={styles.userImg}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooEnD32-UtBw55GBfDTxxUZApMhWWnRaoLw&s',
          }}
        />
        <Text style={styles.userName}>Suyan Shrestha</Text>
        <Text style={styles.aboutUser}>heroheeralal always smiles :3</Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>Invite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* lower section */}
        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>22</Text>
            <Text style={styles.userInfoSubTitle}>Matches</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>44.7</Text>
            <Text style={styles.userInfoSubTitle}>Stars</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>72%</Text>
            <Text style={styles.userInfoSubTitle}>Winrate</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
