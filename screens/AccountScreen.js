// screens/AccountScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../context/UserContext'; // Nhập UserContext

const AccountScreen = () => {
  const { user } = useContext(UserContext); // Lấy thông tin người dùng từ context

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Thông tin tài khoản</Text>
      <Text style={styles.label}>Email: {user?.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default AccountScreen;
