import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  navigation,
  navigationItem,
  heading,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navigation}>
          <li className={navigationItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={navigationItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={navigationItem}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
