import { gql } from "@apollo/client";

export const postsQuery = gql`
  query {
    posts {
      data {
        id
        attributes {
          Title
          Description
          Date
          slug
          publishedAt
        }
      }
    }
  }
`;

export const getPostBySlug = gql`
  query getPostBySlug($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          Title
          Description
          Date
          Cover {
            data {
              attributes {
                url
                blurhash
              }
            }
          }
          slug
          publishedAt
          Body
        }
      }
    }
  }
`;
