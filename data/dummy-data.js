// data/dummy-data.js
const COMBOS = [
  {
    id: 'c1',
    title: 'Combo 1',
    imageUrl: 'https://th.bing.com/th/id/OIP.3_dOhLUqJb2-YH8VChbajQHaEL?rs=1&pid=ImgDetMain', // Thay đổi với URL thực tế
    price: '50.000đ',
    meals: [
      { title: 'Thịt diềm luộc', imageUrl: 'https://cdn.tgdd.vn/2022/07/CookDish/cach-lam-mam-chua-thit-luoc-dam-da-hap-dan-vi-ngon-kho-cuong-avt-1200x676.jpg' },
      { title: 'Bắp bò ngâm mắm', imageUrl: 'https://th.bing.com/th/id/R.ac9789a284fe7c85ab56bd6568988ece?rik=6mz%2bRXrbIdTmNQ&pid=ImgRaw&r=0' },
      { title: 'Cà pháo', imageUrl: 'https://th.bing.com/th/id/OIP.fk9uiZa0gMexPW7ThTfONQHaIw?rs=1&pid=ImgDetMain' },
      { title: 'Hoa quả tráng miệng', imageUrl: 'https://th.bing.com/th/id/OIP.LVf4UhDnMpddL8YIdm-1JwHaES?rs=1&pid=ImgDetMain' },
    ],
  },
  {
    id: 'c2',
    title: 'Combo 2',
    imageUrl: 'url_to_image_2',
    price: '60.000đ',
    meals: [
      { title: 'Khoai tây xào thịt bò', imageUrl: 'url_to_meal_image_5' },
      { title: 'Cá kho', imageUrl: 'url_to_meal_image_6' },
      { title: 'Bí đỏ xào thịt xay', imageUrl: 'url_to_meal_image_7' },
      { title: 'Hoa quả tráng miệng: kiwi, dứa, dâu tây', imageUrl: 'url_to_meal_image_8' },
    ],
  },
  {
    id: 'c3',
    title: 'Combo 3',
    imageUrl: 'url_to_image_3',
    price: '70.000đ',
    meals: [
      { title: 'Tôm hấp xả gừng', imageUrl: 'url_to_meal_image_9' },
      { title: 'Rau cải luộc', imageUrl: 'url_to_meal_image_10' },
      { title: 'Su hào xào lòng mè', imageUrl: 'url_to_meal_image_11' },
      { title: 'Canh chua', imageUrl: 'url_to_meal_image_12' },
      { title: 'Hoa quả trái cây: bưởi, xoài', imageUrl: 'url_to_meal_image_13' },
    ],
  },
];

export default COMBOS;
