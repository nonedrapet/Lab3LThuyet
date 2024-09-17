// screens/SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Linking } from 'react-native';

const SettingsScreen = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);

  const toggleSwitch = () => setIsNotificationsEnabled(previousState => !previousState);

  const handleContactSupport = () => {
    Linking.openURL('https://www.facebook.com/');
  };

  return (
    <View style={styles.screen}>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Thông báo</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleSwitch}
        />
      </View>
      
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Thay đổi màu sắc giao diện</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.settingItem} onPress={handleContactSupport}>
        <Text style={styles.settingText}>Liên hệ hỗ trợ</Text>
      </TouchableOpacity>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
