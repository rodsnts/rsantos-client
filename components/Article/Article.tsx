"use client";
import React from "react";

import Image from "next/image";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import styles from "./styles.module.css";

type ArticleProps = {
  data: {
    id: string;
    attributes: {
      Title: string;
      Description: string;
      Date: string;
      Cover: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      slug: string;
      Body: string;
    };
  }[];
};

const Article = ({ data }: ArticleProps) => {
  const { Title, Date, Body } = data[0].attributes;

  return (
    <>
      <header>
        <h1>{Title}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <p>Rodrigo Santos</p>
          <time>{Date}</time>
        </div>
      </header>
      <article className={styles.article}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: (props) => {
              const loaderProp = ({ src }: { src: string }) => {
                return `${process.env.NEXT_PUBLIC_API_URL}${src}`;
              };

              return (
                <Image
                  src={props.src as string}
                  style={{
                    height: "auto",
                    width: "100%",
                    borderRadius: "0.5rem",
                  }}
                  width={0}
                  height={0}
                  layout="responsive"
                  loading="lazy"
                  loader={loaderProp}
                  alt={props.alt as string}
                />
              );
            },
          }}
        >
          {Body}
        </ReactMarkdown>
      </article>
    </>
  );
};

export default Article;
