import React from 'react';
import Layout from "./Layout";
import {useSelector} from "react-redux";

const Shop = () => {
  const state = useSelector(state=>state)
  return (
    <div>
      <Layout>Shop {JSON.stringify(state)}</Layout>
    </div>
  );
};

export default Shop;
