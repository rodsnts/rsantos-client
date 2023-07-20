"use client";
import React from "react";
import Link from "next/link";

type PostCardsProps = {
  data: {
    id: string;
    attributes: {
      Title: string;
      Description: string;
      Date: string;
      slug: string;
      publishedAt: string;
    };
  }[];
};

const PostCards = ({ data }: PostCardsProps) => {
  return (
    <div>
      {data.map((post, index) => (
        <Link href={`/posts/${post.attributes.slug}`} key={index}>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <h3>{post.attributes.Title}</h3>
            <time
              dateTime={post.attributes.publishedAt}
              itemProp="datePublished"
            >
              {post.attributes.Date}
            </time>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostCards;
