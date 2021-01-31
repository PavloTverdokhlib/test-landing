import * as React from "react";
import { Header } from "../../components/Header";
import { Introduction } from "../../components/Introduction";
import { Features } from "../../components/Features";
import { OurClients } from "../../components/OurClients";
import { Footer } from "../../components/Footer";

export const Main = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Features />
      <OurClients />
      <Footer />
    </>
  );
};
