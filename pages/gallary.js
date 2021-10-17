import React from "react";
import Layout from "../layout";
import Head from "next/head";
import Event from "../components/Event";

const gallary = () => {
  const images = [
    "/firstImg.jpg",
    "/secondImg.jpg",
    "/thirdImg.jpg",
    "/fourthImg.jpg",
    "/fifthImg.jpg",
  ];

  return (
    <Layout>
      <Head>
        <title>The miracle tutorial</title>
        <link rel="icon" href="/tmt.png" />
      </Head>
      <hr className="border-t-4" />
      <div className="py-3 text-4xl font-medium text-center">GALLARY</div>
      <Event eventName="Teachers Day" images={images} />
      <Event eventName="Teachers Day" images={images} />
      <Event eventName="Teachers Day" images={images} />
      <Event eventName="Teachers Day" images={images} />
    </Layout>
  );
};

export default gallary;
