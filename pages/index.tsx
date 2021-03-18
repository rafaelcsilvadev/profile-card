import React from "react";
import Layout from "../components/layout";
import Form from "../components/form";
import UserInfo from "../components/userInfo";
import Head from "next/head";

const Home: React.FC = () => (
  <Layout>
    <Head>
      <link
        rel="shortcut icon"
        href="/images/favicon.ico"
        type="image/x-icon"
      />
      <title>Home | Profile Card</title>
    </Head>
    <Form />
    <UserInfo />
  </Layout>
);

export default Home;
