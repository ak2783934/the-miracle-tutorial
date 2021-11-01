import React, { useState, useEffect } from "react";
import Layout from "../layout";
import Head from "next/head";
import Event from "../components/Event";
import { api } from "../pages/api/index";

const gallery = () => {
  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    await api
      .get("/gallery")
      .then((res) => {
        console.log(res.data.gallery);
        setEvents(res.data.gallery);
      })
      .catch((err) => {
        console.log("Error while fetching events");
        console.log(err);
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
      {events
        ?.slice(0)
        .reverse()
        .map((val, index) => (
          <Event eventName={val.eventName} images={val.images} key={index} />
        ))}
    </Layout>
  );
};

export default gallery;
