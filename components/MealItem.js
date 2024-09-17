// components/MealItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MealItem = ({ meal, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View>
        <Image source={{ uri: meal.imageUrl }} style={{ width: '100%', height: 200 }} />
        <Text>{meal.title}</Text>
        <Text>{meal.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MealItem;
