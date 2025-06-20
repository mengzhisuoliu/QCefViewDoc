import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate from "@docusaurus/Translate";

import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import CarouselBox from "../components/CarouselBox";

import CefViewBridge from "../components/CefViewBridge";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={clsx("row", styles.indexRow)}>
          <div className="col">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">
              <Translate id="index.tagLine">
                A QWidget-based WebView Component Integrated with CEF
              </Translate>
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                <Translate
                  id="index.ButtonText.getStated"
                  description="The text for button on index center"
                >
                  Get Started
                </Translate>
              </Link>
            </div>
          </div>
        </div>

        <div className={clsx("row", styles.indexRow)}>
          <div className="col">
            <div className={styles.carousel}>
              <CarouselBox />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
