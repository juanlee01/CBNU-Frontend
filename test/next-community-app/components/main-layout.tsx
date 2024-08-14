//import { NextPage } from "next";

import Header from "@/components/header";
import Footer from "./footer";
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
