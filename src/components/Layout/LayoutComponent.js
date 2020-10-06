import React from "react";

import Header from "../Header/HeaderComponent";
import Footer from "../Footer/FooterComponent";

import layoutStyle from "./LayoutComponent.module.scss";

const Layout = (props) => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        <div className={layoutStyle.main}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
