import React from "react";
import Layout from "../layout";
import DemoRegistrationPage from "../components/DemoRegistrationPage";
import Head from "next/head";

export default function BSE() {
  return (
    <Layout>
      <Head>
        <title>The miracle tutorial</title>
        <link rel="icon" href="/tmt.png" />
      </Head>
      <DemoRegistrationPage
        title="Board Secondary Education (BSE)"
        content="The Board of Secondary Education, Odisha is a Body Corporate constituted under the Odisha Secondary Education Act, 1953. It regulates, controls and developes Secondary Education in the State of Odisha. It Provides varied courses in order to equip students for different occupations, to prepare them for University education and to equip them for various cultural purposes. Secondary School Certificate is a public exam for classes 9 and 10 separately. Class 9 exam is called SSC part-1 and class 10 exam is called SSC part-2. This exam is conducted by government boards, officially known as Boards of Intermediate and Secondary Education, or simply BISE."
      />
    </Layout>
  );
}
