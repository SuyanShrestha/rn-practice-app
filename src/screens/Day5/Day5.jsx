import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import axios from 'axios';

const Day5 = () => {
  const [showData, setShowData] = useState(false);
  const [apiData, setApiData] = useState(null);

  const [showAxiosData, setShowAxiosData] = useState(false);

  const [posts, setPosts] = useState(null);
  const [axiosPosts, setAxiosPosts] = useState(null);

  const [loading, setLoading] = useState(true);

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const postId = Math.floor(Math.random() * 10) + 1;
    if (showData) {
      console.warn('Fetching the data');
      fetch(`https://dummyjson.com/products/${postId}`)
        .then(response => response.json())
        .then(data => {
          setApiData(data);
        })
        .catch(error => console.error(error));
    }
  }, [showData]);

  useEffect(() => {
    const postId2 = Math.floor(Math.random() * 100) + 1;
    const URL = `https://jsonplaceholder.typicode.com/posts/${postId2}`;
    const fetchPosts = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.warn(error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [showData]);

  useEffect(() => {
    const postId2 = Math.floor(Math.random() * 100) + 1;
    const URL = `https://jsonplaceholder.typicode.com/posts/${postId2}`;
    const fetchWithAxios = async () => {
      try {
        const response = await axios.get(URL);
        setAxiosPosts(response.data);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchWithAxios();
  }, [showAxiosData]);

  // STYLESHEET
  const combinedStyle = StyleSheet.compose(
    [globalStyles.mainDiv, styles.container],
    isActive ? styles.activeButton : styles.inactiveButton
  );

  const combinedStyle2 = [styles.container, globalStyles.mainDiv]
  const flattenedStyle = StyleSheet.flatten(combinedStyle2)

  return (
    <ScrollView contentContainerStyle={globalStyles.innerContainer}>
      <Text>Day5</Text>
      {/* example 1 */}
      <View style={[globalStyles.mainDiv, {backgroundColor: 'skyblue'}]}>
        <Text>With fetch ()</Text>
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => setShowData(prev => !prev)}>
          <Text>{showData ? 'Remove data' : 'Get data'}</Text>
        </TouchableOpacity>
        {showData && apiData && (
          <View>
            <Text style={globalStyles.innerContainer}>{apiData.title}</Text>
            <Text>{posts.title}</Text>
          </View>
        )}
      </View>

      {/* example for axios*/}
      <View style={[globalStyles.mainDiv, {backgroundColor: 'skyblue'}]}>
        <Text>With axios</Text>
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => setShowAxiosData(prev => !prev)}>
          <Text>{showAxiosData ? 'Remove data' : 'Get data'}</Text>
        </TouchableOpacity>
        {showAxiosData && posts && (
          <View>
            <Text style={globalStyles.innerContainer}>{axiosPosts.title}</Text>
          </View>
        )}
      </View>

      {/* STYLESHEET.compose() */}
      <View style={combinedStyle}>
        <TouchableOpacity
          style={globalStyles.gotoButton}
          onPress={() => setIsActive(prev => !prev)}
        >
          <Text>Toggle background</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  activeButton: {
    backgroundColor: 'skyblue'
  },
  inactiveButton: {
    backgroundColor: 'gray'
  }
})

export default Day5;
