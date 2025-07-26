// src/screens/Home.js
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getProducts } from '../api/products';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <View>
      {products.map(p => (
        <Text key={p._id}>{p.name} - {p.quantity}</Text>
      ))}
    </View>
  );
}
