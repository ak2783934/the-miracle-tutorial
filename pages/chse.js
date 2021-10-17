import React from "react";
import Layout from "../layout";
import DemoRegistrationPage from "../components/DemoRegistrationPage";
import Head from "next/head";

export default function CHSE() {
  return (
    <Layout>
      <Head>
        <title>The miracle tutorial</title>
        <link rel="icon" href="/tmt.png" />
      </Head>
      <DemoRegistrationPage
        title="Higher Secondary Education (CHSE)"
        content="The Council of Higher Secondary Education, Odisha was established in accordance with the Odisha Higher Secondary Education Act 1982 to regulate, control and develop Higher Secondary Education in the State of Orissa. The board conducts final examinations every spring for Higher Secondary Examination (HSE), Council of Higher Secondary Education Examinations (C.H.S.E.) and examinations of other courses prescribed by the Board for Class 12."
      />
    </Layout>
  );
}
