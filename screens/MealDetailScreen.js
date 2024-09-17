// screens/MealDetailScreen.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext'; // Nhập FavoritesContext

const MealDetailScreen = ({ route }) => {
  const { mealTitle, mealImage, mealId, mealPrice, meals } = route.params;
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext); // Sử dụng context

  const handleOrder = () => {
    alert(`Đặt hàng món: ${mealTitle}`);
  };

  const renderMealItem = ({ item }) => {
    return (
      <View style={styles.mealItem}>
        <Image source={{ uri: item.imageUrl }} style={styles.mealImage} />
        <Text style={styles.mealTitle}>{item.title}</Text>
      </View>
    );
  };

  const isFavorite = favorites.some((favMeal) => favMeal.id === mealId); // Kiểm tra nếu món ăn là yêu thích

  return (
    <View style={styles.screen}>
      <Image source={{ uri: mealImage }} style={styles.image} />
      
      <Text style={styles.title}>{mealTitle}</Text>
      <Text style={styles.price}>{mealPrice}</Text>
      
      <Text style={styles.subTitle}>Các món ăn trong combo:</Text>
      
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.flatListContent}
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleOrder}>
          <Text style={styles.buttonText}>Đặt hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            isFavorite ? removeFavorite(mealId) : addFavorite({ id: mealId, title: mealTitle, imageUrl: mealImage, price: mealPrice });
          }}
        >
          <Text style={styles.buttonText}>{isFavorite ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Thay đổi màu nền
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10, // Bo góc cho hình ảnh
    marginBottom: 15,
    elevation: 5, // Thêm bóng đổ cho hình ảnh (chỉ áp dụng cho Android)
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Thay đổi màu chữ
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8, // Tăng khoảng cách giữa các mục
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff', // Thay đổi màu nền của mục
    elevation: 3, // Thêm bóng đổ cho các mục (chỉ áp dụng cho Android)
  },
  mealImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 10,
  },
  mealTitle: {
    fontSize: 18,
    color: '#333',
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1, // Để hai nút có cùng chiều rộng
    marginHorizontal: 5, // Khoảng cách giữa hai nút
    height: 50, // Đặt chiều cao cho nút
    backgroundColor: '#6200ee', // Thay đổi màu nền cho nút
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    borderRadius: 5, // Bo góc cho nút
    elevation: 3, // Thêm bóng đổ cho nút (chỉ áp dụng cho Android)
  },
  buttonText: {
    textAlign: 'center', // Căn giữa nội dung theo chiều ngang
    fontSize: 16, // Kích thước chữ
    fontWeight: 'bold', // Đậm chữ
    color: '#fff', // Màu chữ cho nút
  },
});

export default MealDetailScreen;
