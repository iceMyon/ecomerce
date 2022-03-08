import React from 'react';
import Layout from "./Layout";
import {useSelector} from "react-redux";

const Home = () => {
  const state = useSelector(state=>state)
  return (
    <div>
      <Layout title="冰冰商城" subTitle="敬请期待" >Home {JSON.stringify(state)}</Layout>
    </div>
  );
};

export default Home;
