import React, { useState, useEffect } from "react";
import Layout from "../layout";
import Head from "next/head";
import Event from "../components/Event";
import { api } from "../pages/api/index";

const gallery = () => {
  const images = [
    "/firstImg.jpg",
    "/secondImg.jpg",
    "/thirdImg.jpg",
    "/fourthImg.jpg",
    "/fifthImg.jpg",
  ];

  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    await api.get("/gallery").then((res) => {
      console.log(res.data.gallery);
      setEvents(res.data.gallery);
    });
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <Layout>
      <Head>
        <title>The miracle tutorial</title>
        <link rel="icon" href="/tmt.png" />
      </Head>
      <hr className="border-t-4" />
      <div className="py-3 text-4xl font-medium text-center">GALLERY</div>
      {events?.map((val, index) => (
        <Event eventName={val.eventName} images={val.images} key={index} />
      ))}

      {/* <Event eventName="Teachers Day" images={images} />
      <Event eventName="Teachers Day" images={images} />
      <Event eventName="Teachers Day" images={images} />
      <Event eventName="Teachers Day" images={images} /> */}
    </Layout>
  );
};

export default gallery;
