import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {Formik} from 'formik';
import * as yup from 'yup';

import globalStyles from '../../styles/globalStyles';
import styles from '../../styles/components/Day7Remain/Day7Remain';

const Day7Remain = () => {
  // FOR BASIC VALIDATION
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formState.name, formState.email, formState.password]);

  const validateForm = () => {
    let errors = {};

    // validating name
    if (!formState.name) {
      errors.name = 'Please enter a name';
    }

    // validating email
    if (!formState.email) {
      errors.email = 'Please enter an email';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Email is invalid.';
    }

    // validating passwords
    if (!formState.password) {
      errors.password = 'Password is required.';
    } else if (formState.password.length < 8) {
      errors.password = 'Password must be at least 8 characters.';
    }

    // setting errors
    setErrors(errors);
    setIsValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isValid) {
      console.warn('Submitted successfully');
      setFormState({
        name: '',
        email: '',
        password: '',
      });
    } else {
      console.warn('Form is not valid');
    }
  };

  // USING YUP AND FORMIK
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email address')
      .required('Email address is required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters long`)
      .required('Password is required'),
  });

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={[globalStyles.innerContainer]}>
        <Text>Form Validation</Text>
        {/* BASIC FORM VALIDATION */}
        <View style={[globalStyles.mainDiv, styles.mainDiv]}>
          <Text>Basic Form Validation</Text>
          <TextInput
            style={styles.textDiv}
            placeholder="Enter a name"
            onChangeText={text => setFormState({...formState, name: text})}
            value={formState.name}
          />
          <TextInput
            style={styles.textDiv}
            placeholder="Enter a valid email"
            onChangeText={text => setFormState({...formState, email: text})}
            value={formState.email}
          />
          <TextInput
            style={styles.textDiv}
            placeholder="Enter a password (at least 8 characters long)"
            secureTextEntry={true}
            onChangeText={text => setFormState({...formState, password: text})}
            value={formState.password}
          />
          <TouchableOpacity
            style={[
              globalStyles.gotoButton,
              styles.submitButton,
              {opacity: formState.isValid ? 1 : 0.5},
            ]}
            disabled={!isValid}
            onPress={handleSubmit}>
            <Text style={{textAlign: 'center'}}>Submit</Text>
          </TouchableOpacity>
          {Object.values(errors).map((error, index) => (
            <Text key={index} style={styles.error}>
              {error}
            </Text>
          ))}
        </View>

        {/* FORMIK AND YUP VALIDATION */}
        <View style={[globalStyles.mainDiv, styles.mainDiv]}>
          <Text>Form Validation with Formik and Yup</Text>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.warn(values)}
            validationSchema={loginValidationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={[styles.textDiv, {marginBottom: 5, marginTop: 15}]}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && (
                  <Text style={{fontSize: 15, color: 'red'}}>
                    {errors.email}
                  </Text>
                )}

                <TextInput
                  name="password"
                  placeholder="Password"
                  style={[styles.textDiv, {marginBottom: 5, marginTop: 15}]}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && (
                  <Text style={{fontSize: 15, color: 'red'}}>
                    {errors.password}
                  </Text>
                )}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={[globalStyles.gotoButton, styles.submitButton]}
                  disabled={!isValid}>
                  <Text>Submit</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default Day7Remain;
