import * as React from 'react';
import BottomTabs from './BottomTabs/BottomTabs';
import ProductDetail from '../screens/productDetail/ProductDetail';
import Cart from '../screens/cart';

const AppStack = Stack => {
  return (
    <>
      <Stack.Screen name={"BottomTabs"} component={BottomTabs} />
      <Stack.Screen name={"ProductDetail"} component={ProductDetail} />
      <Stack.Screen name={"Cart"} component={Cart} />
    </>
  );
};

export default AppStack;
