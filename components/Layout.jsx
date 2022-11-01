import React from "react";
import Head from "next/head";

//Import components
import { Footer } from "./index";
import { Navbar } from "./index";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title className="head-title">MetaNodes labs.</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </>
  );
}
