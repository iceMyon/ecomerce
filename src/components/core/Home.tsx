import React from 'react';
import Layout from "./Layout";
import {useSelector} from "react-redux";

const Home = () => {
  const state = useSelector(state=>state)
  return (
    <div>
      <Layout>Home {JSON.stringify(state)}</Layout>
    </div>
  );
};

export default Home;
