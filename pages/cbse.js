import React from "react";
import Layout from "../layout";
import DemoRegistrationPage from "../components/DemoRegistrationPage";
import Head from "next/head";

export default function CBSE() {
  return (
    <Layout>
      <Head>
        <title>The miracle tutorial</title>
        <link rel="icon" href="/tmt.png" />
      </Head>
      <DemoRegistrationPage
        title="CENTRAL BOARD OF SECONDARY EDUCATON"
        content="The Central Board of Secondary Education (CBSE) is a national level board of education in India for public and private schools, controlled and managed by Union Government of India. The CBSE envisions a robust, vibrant and holistic school education that will engender excellence in every sphere of human endeavour. The Board is committed to provide quality education to promote intellectual, social and cultural vivacity among its learners."
      />
    </Layout>
  );
}
