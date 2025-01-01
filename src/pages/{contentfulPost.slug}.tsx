import { PageProps, graphql } from 'gatsby'

export default function Post({ data }: PageProps<Queries.PostPageQuery>) {
  return (
    <div>
      <div>{data.contentfulPost?.title}</div>
      <div>{data.contentfulPost?.date}</div>
      <div>{data.contentfulPost?.slug}</div>
    </div>
  )
}

export const query = graphql`
  query PostPage($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      date
    }
  }
`
