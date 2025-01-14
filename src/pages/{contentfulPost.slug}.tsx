import { PageProps, graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostHead from '../components/post/PostHead'
import PostBody from '../components/post/PostBody'

export default function Post({
  data: { contentfulPost },
}: PageProps<Queries.PostPageQuery>) {
  return (
    <>
      <PostHead
        title={contentfulPost?.title as string}
        category={contentfulPost?.category as string[]}
        date={contentfulPost?.date as string}
        thumbnail={
          contentfulPost?.thumbnail?.gatsbyImageData as IGatsbyImageData
        }
      />
      <PostBody
        content={contentfulPost?.content as Queries.ContentfulPostContent}
      />
    </>
  )
}

export const query = graphql`
  query PostPage($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      thumbnail {
        gatsbyImageData(width: 1000)
      }
      category
      date
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 774)
            __typename
          }
        }
      }
    }
  }
`
