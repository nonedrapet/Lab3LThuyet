// screens/FavoritesScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext'; // Nhập FavoritesContext

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext); // Lấy danh sách món ăn yêu thích từ context
  const [numColumns, setNumColumns] = useState(2); // State cho số cột

  const renderFavoriteItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          // Điều hướng đến màn hình chi tiết món ăn
          navigation.navigate('MealDetail', {
            mealTitle: itemData.item.title,
            mealImage: itemData.item.imageUrl,
            mealId: itemData.item.id,
            mealPrice: itemData.item.price,
            meals: itemData.item.meals, // Nếu có, có thể truyền danh sách các món ăn trong combo
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
      <Text style={styles.headerTitle}>Danh sách yêu thích</Text>
      {favorites.length === 0 ? (
        <Text style={styles.noFavorites}>Chưa có món ăn nào được yêu thích.</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id}
          numColumns={numColumns} // Sử dụng state để xác định số cột
          contentContainerStyle={styles.flatListContent}
          key={`${numColumns}`} // Sử dụng key prop để làm mới FlatList khi thay đổi numColumns
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Thay đổi màu nền
  },
  headerTitle: {
    fontSize: 26, // Thay đổi kích thước chữ tiêu đề
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333', // Thay đổi màu chữ tiêu đề
    textAlign: 'center', // Căn giữa tiêu đề
  },
  noFavorites: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  gridItem: {
    flex: 1,
    margin: 10, // Giảm khoảng cách giữa các mục
    borderRadius: 10,
    backgroundColor: '#fff', // Màu nền cho mục
    elevation: 3, // Thêm bóng đổ cho mục (chỉ áp dụng cho Android)
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10, // Bo góc cho hình ảnh
  },
  textContainer: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Màu chữ cho tiêu đề món ăn
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default FavoritesScreen;
