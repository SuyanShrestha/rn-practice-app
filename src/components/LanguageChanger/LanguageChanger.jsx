import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';

// i18next imports
import i18next, {languageResources} from '../../services/i18next';
import {useTranslation} from 'react-i18next';
import languageList from '../../services/languageList';

import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from '../../styles/components/LanguageChanger/LanguageChanger';

const LanguageChanger = () => {
  const {t, i18n} = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);

  const changeLng = async lng => {
    await AsyncStorage.setItem('language', lng);
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <FlatList
          style={styles.languageList}
          data={Object.keys(languageResources)}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.language}
              onPress={() => changeLng(item)}>
              <Text>{languageList[item].nativeName}</Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
      <Text style={styles.textDiv}>{t('welcome')}</Text>
      <TouchableOpacity
        style={styles.buttonDiv}
        onPress={() => setVisible(true)}>
        <Text>{t('change-language')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LanguageChanger;
