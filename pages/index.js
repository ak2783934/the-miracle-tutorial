import React from "react";
import Layout from "../layout";
import Focus from "../components/Focus";
import AboutUs from "../components/AboutUs";
import Boards from "../components/Boards";
import NoticeDemo from "../components/NoticeDemo";
import MySlider from "../components/MySlider";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The miracle tutorial</title>
        <link rel="icon" href="/tmt.png" />
      </Head>

      <MySlider />
      <Boards />
      <NoticeDemo />
      <AboutUs />
      <Focus />
    </Layout>
  );
}
