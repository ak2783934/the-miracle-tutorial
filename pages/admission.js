import React from "react";
import Layout from "../layout";
import Head from "next/head";
import AdmisssionFrom from "../components/AdmissionFrom";

export default function Admission() {
  return (
    <Layout>
      <Head>
        <title>The miracle tutorial</title>
        <link rel="icon" href="/tmt.png" />
      </Head>
      <hr className="border-t-4" />
      <div className="">
        <div className="py-3 text-xl font-bold text-center sm:text-4xl">
          Admission Form
        </div>
        <div className="pb-2 text-sm text-center sm:text-lg">
          Enter your admission information below
        </div>
        <hr className="border-t-2" />
        <div className="px-10 py-10 sm:px-32">
          <AdmisssionFrom />
        </div>
      </div>
    </Layout>
  );
}
