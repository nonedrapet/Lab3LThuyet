// screens/MealsScreen.js
import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import COMBOS from '../data/dummy-data';

const MealsScreen = ({ route, navigation }) => {
  const { comboId } = route.params;
  const selectedCombo = COMBOS.find(combo => combo.id === comboId);

  const renderMealItem = (meal) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('MealDetail', { mealTitle: meal.title, mealImage: meal.imageUrl })}
        style={styles.mealItem}
      >
        <Image source={{ uri: meal.imageUrl }} style={styles.mealImage} />
        <Text style={styles.mealTitle}>{meal.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.comboTitle}>{selectedCombo.title}</Text>
      <FlatList
        data={selectedCombo.meals}
        renderItem={({ item }) => renderMealItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  comboTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealItem: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginVertical: 5,
  },
  mealImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  mealTitle: {
    fontSize: 18,
  },
});

export default MealsScreen;
