// screens/CategoriesScreen.js
import React from 'react';
import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import COMBOS from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate('MealDetail', {
            mealTitle: itemData.item.title,
            mealImage: itemData.item.imageUrl,
            mealId: itemData.item.id,
            mealPrice: itemData.item.price,
            meals: itemData.item.meals,
          });
        }}
      >
        <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{itemData.item.title}</Text>
          <Text style={styles.price}>{itemData.item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={COMBOS}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent} // Thêm để cải thiện khoảng cách
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Màu nền cho màn hình
  },
  gridItem: {
    flex: 1,
    margin: 10, // Giảm khoảng cách giữa các mục
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 3, // Thêm bóng đổ cho mục (chỉ áp dụng cho Android)
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18, // Thay đổi kích thước chữ cho tiêu đề
    fontWeight: 'bold',
    color: '#333', // Màu chữ cho tiêu đề
  },
  price: {
    fontSize: 16, // Thay đổi kích thước chữ cho giá
    color: '#888',
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default CategoriesScreen;
