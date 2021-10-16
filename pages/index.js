import React from "react";
import Layout from "../layout";
import Focus from "../components/Focus";
import AboutUs from "../components/AboutUs";
import Boards from "../components/Boards";
import NoticeDemo from "../components/NoticeDemo";
import MySlider from "../components/MySlider";

export default function Home() {
  return (
    <Layout>
      <MySlider />
      <Boards />
      <NoticeDemo />
      <AboutUs />
      <Focus />
    </Layout>
  );
}
