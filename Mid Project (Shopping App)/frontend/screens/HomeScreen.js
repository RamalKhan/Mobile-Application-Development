import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../themes/colors';
import AnnouncementBar from '../components/AnnouncementBar';
import AppHeader from '../components/AppHeader';
import IconRow from '../components/IconRow';
import BottomNavigationBar from '../components/BottomNavigationBar';
import styles from './HomeScreen.styles';
import ProductCard from '../components/ProductCard';
import { FlatList } from 'react-native';
import  { useState } from 'react';
import SideMenu from '../components/SideMenu';

const HomeScreen = ({ navigation }) => {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <AnnouncementBar text="Buy 3 Get 25% Off, Shop Now >>" />
      <AppHeader onPressMenu={() => { console.log('MENU PRESSED'); setMenuOpen(true); }} />

      <IconRow />
      
      <SideMenu
        visible={menuOpen}
        onClose={() => setMenuOpen(false)}
        navigation={navigation} 
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ---------- SALE BANNER ---------- */}

        <View style={styles.bannerWrap}>
          <ImageBackground
            source={require('../assets/images/banner.png')}   // your banner image
            style={styles.banner}
            resizeMode="cover"
          >
            {/* darken the image so white text pops */}
            <View style={styles.bannerShade} />

            <View style={styles.bannerContent}>
              <View style={styles.discountRow}>
                <Text style={styles.discountNum}>60–30%</Text>
                <Text style={styles.discountOff}> OFF</Text>
              </View>

              <Text style={styles.bannerSub}>COSY CHICK DEALS!</Text>

              <Pressable style={styles.ghostBtn} onPress={() => { }}>
                <Text style={styles.ghostBtnText}>Shop Now</Text>
                <Image
                  source={require('../assets/icons/arrow-right.png')}
                  style={styles.ghostBtnIcon}
                />
              </Pressable>
            </View>
          </ImageBackground>
        </View>

        {/* ---------- SEARCH + SORT/FILTER ---------- */}
        <View style={styles.searchRow}>
          <View style={styles.inputWrap}>
            <Image
              source={require('../assets/icons/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search any product..."
              placeholderTextColor="#9C8F85"
              style={styles.input}
            />
          </View>

          <Pressable style={styles.smallBtn} onPress={() => console.log('Sort')}>
            <Image
              source={require('../assets/icons/sort.png')}
              style={styles.smallIcon}
            />
          </Pressable>

          <Pressable style={styles.smallBtn} onPress={() => console.log('Filter')}>
            <Image
              source={require('../assets/icons/filter.png')}
              style={styles.smallIcon}
            />
          </Pressable>
        </View>
        {/* ---------- TOP TRENDING ---------- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Trending</Text>
          <Pressable onPress={() => console.log('See all')}>
            <Text style={styles.seeAll}>See all  <Text style={styles.arrow}>&gt;</Text></Text>
          </Pressable>
        </View>

        <FlatList
          data={[
            { id: '1', title: 'Mustard Chunky Cable Knit Sweater', price: '£35', img: require('../assets/images/product1.png') },
            { id: '2', title: 'Totally Feel Good Oversized Crew Sweatshirt', price: '£25', img: require('../assets/images/product2.png') },
            { id: '3', title: 'Lovely Double Brown Leather Belt', price: '£15', img: require('../assets/images/product3.png') },

          ]}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productList}
          renderItem={({ item }) => (
            <ProductCard
              image={item.img}
              title={item.title}
              price={item.price}
              onPress={() => console.log('open product', item.id)}
              onWish={() => console.log('wish', item.id)}
              onAdd={() => console.log('add to cart', item.id)}
            />
          )}
        />
        {/* ---- second row of Top trending ---- */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productList}   // reuse same spacing
        >
          <ProductCard
            image={require('../assets/images/product4.png')}
            title="Beige Cozy Cotton Sweater"
            price="£40"
            onPress={() => { }}
            onWish={() => { }}
            onAdd={() => { }}
          />
          <ProductCard
            image={require('../assets/images/product5.png')}
            title="Soft Wool Knit Pullover"
            price="£45"
            onPress={() => { }}
            onWish={() => { }}
            onAdd={() => { }}
          />
          <ProductCard
            image={require('../assets/images/product6.png')}
            title="Golden Brown Scarf"
            price="£20"
            onPress={() => { }}
            onWish={() => { }}
            onAdd={() => { }}
          />
        </ScrollView>


      </ScrollView>

      {/* ---------- BOTTOM NAVIGATION ---------- */}
      <BottomNavigationBar navigation={navigation} active="Home" />
    </SafeAreaView>
  );
};

export default HomeScreen;

