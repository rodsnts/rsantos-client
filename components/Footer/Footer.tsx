'use client'
import React from 'react'
import Link from 'next/link'

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Copyright © 2023 Rodrigo Santos</div>

      <div>
        <ul>
          <li className={styles.github}>
            <Link href="https://github.com/rodsnts" passHref>
              <AiFillGithub />
            </Link>
          </li>

          <li className={styles.linkedin}>
            <Link href="https://www.linkedin.com/in/rodsnts" passHref>
              <AiFillLinkedin />
            </Link>
          </li>

          <li className={styles.twitter}>
            <Link href="https://twitter.com/rod_snts" passHref>
              <AiOutlineTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
