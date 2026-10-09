import { convertFontWeightToComposeFontWeight } from "expo-router/build/utils/font";
import { ScrollView, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';
import FoodItem from './components/FoodItem';

const items = [
   { text: 'Fish and Chips',
     image: 'https://raw.githubusercontent.com/drpdickinson/FoodImages/main/Images/fish-and-chips.png',
     description: 'Crispy battered fish with golden chips, often served with mushy peas. Hearty, comforting, and iconic.',
     characteristics: {origin: 'UK', difficulty: 6, cost: 5, visualappeal: 7}},
   { text: 'Pizza Napoletana',
     image: 'https://raw.githubusercontent.com/drpdickinson/FoodImages/main/Images/napoletana.png',
     description: 'A thin, chewy crust topped with San Marzano tomatoes, fresh mozzarella, basil, and olive oil. Its simplicity and balance of flavours make it universally loved.',
     characteristics: {origin: 'Italy', difficulty: 6, cost: 4, visualappeal: 8}},
   { text: 'Pad Thai',
     image: 'https://raw.githubusercontent.com/drpdickinson/FoodImages/main/Images/pad-thai.png',
     description: 'Stir-fried noodles with tamarind, fish sauce, peanuts, and lime. A perfect balance of sweet, sour, and salty.',
     characteristics: {origin: 'Thailand', difficulty: 5, cost: 3, visualappeal: 8}},
   { text: 'Hummus',
     image: 'https://raw.githubusercontent.com/drpdickinson/FoodImages/main/Images/hummus.png',
     description: 'Creamy chickpea dip with tahini, garlic, and lemon. Nutritious and perfect for dipping.',
     characteristics: {origin: 'Lebanon', difficulty: 3, cost: 2, visualappeal: 7}},
   { text: 'Xiaolongbao',
     image: 'https://raw.githubusercontent.com/drpdickinson/FoodImages/main/Images/xiaolongbao.png',
     description: 'Dumplings filled with hot broth and meat. A burst of flavour and texture in every bite. ',
     characteristics: {origin: 'China', difficulty: 8, cost: 5, visualappeal: 9}},
   { text: 'Butter Chicken',
     image: 'https://raw.githubusercontent.com/drpdickinson/FoodImages/main/Images/butter-chicken.png',
     description: 'Creamy tomato-based curry with tender chicken and aromatic spices. Rich and comforting.',
     characteristics: {origin: 'India', difficulty: 6, cost: 5, visualappeal: 7}},
   { text: 'Nigiri',
     image: 'https://raw.githubusercontent.com/drpdickinson/FoodImages/main/Images/nigiri.png',
     description: 'Raw fish over vinegared rice, often garnished with wasabi. Elegant and fresh, it is a refined delicacy.',
     characteristics: {origin: 'Japan', difficulty: 7, cost: 7, visualappeal: 9}},
   { text: 'Pão de Queijo',
     image: 'https://raw.githubusercontent.com/drpdickinson/FoodImages/main/Images/pao-de-queijo.png',
     description: 'Chewy cheese bread made with tapioca flour. Crispy outside, gooey inside, and gluten-free.',
     characteristics: {origin: 'Brazil', difficulty: 4, cost: 3, visualappeal: 7}},
   { text: 'Jollof Rice',
     image: 'https://raw.githubusercontent.com/drpdickinson/FoodImages/main/Images/jollof-rice.png',
     description: 'A vibrant one-pot rice dish cooked with tomatoes, onions, peppers, and spices. Often served with meat or fish. Bold, smoky, and deeply satisfying.',
     characteristics: {origin: 'Senegal', difficulty: 5, cost: 3, visualappeal: 8}},
   ];

export default function Index() {
  const router = useRouter();

  const openFoodInfo = (fooditem: typeof items[0]) => {
    router.push({
      pathname: '/FoodInfoScreen',
      params: {
        name: fooditem.text,
        image: fooditem.image,
        description: fooditem.description,
      }
    });
  };

  return (
    <View style={styles.container2}>
      <TitleBar></TitleBar>
      <Link style={styles.link} href="/about">About Screen</Link>
      <Text style={styles.subtitle}>World Foods</Text>
      <ScrollView>
        {/* Map food items from list */}
        {items.map((fooditem, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => openFoodInfo(fooditem)}
            activeOpacity={0.7}
            >
            <FoodItem name={fooditem.text} source={fooditem.image}/>
            </TouchableOpacity>
          )
        )
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
    color: '#fff'
  },
  container2: {
    flex: 1,
    backgroundColor: '#FAF7F2'
  },
  titlebar: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    backgroundColor: '#173B32'
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 22
  },
  subtitle: {
    color: '#E96B45',
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  link: {
    color: '#888',
    marginVertical: 10,
    borderBottomWidth: 1
  }
});

function TitleBar() {
  return (
    <View style={styles.titlebar}>
      <Image style={styles.avatar} source={{uri:'https://www.intlab.co.uk/images/profile_pics/Patrick.png'}}/>
      <Text style={styles.title}>Welcome back, Mario!</Text>
    </View>
  )
}