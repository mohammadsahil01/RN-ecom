import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';

import SearchBar from '../../components/Navbars/SearchBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../App';
import CosItem from '../../components/Item/CosItem';

type HomeProps = NativeStackScreenProps<RootStackParamsList, 'Cosmetics'>;

export type CosProduct = {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number | null;
  category: string;
  product_type: string;
  tag_list: string[];
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: {
    hex_value: string;
    colour_name: string;
  }[];
};

type ProductListProps = CosProduct[];


const Cosmetics = ({ navigation }: HomeProps) => {
  const [data, setData] = useState<ProductListProps>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(data.length===0){
    const getData = async () => {
      try {
        const res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const response = await res.json();
        const slicedData = response.slice(0, 10);
        setData(slicedData);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.loaderContainer]}>
        <ActivityIndicator size={50} color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar navigation={navigation} />
      <FlatList
        data={data}
        renderItem={({ item }) => <CosItem  {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cosmetics;
