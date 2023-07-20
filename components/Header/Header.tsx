"use client";
import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div>
          <h1>rsantos.dev</h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
