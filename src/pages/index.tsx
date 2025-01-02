import { PageProps, graphql } from 'gatsby'
import Layout from '../components/common/Layout'

export default function Index({
  data: {
    allContentfulPost: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  return (
    <Layout>
      {nodes.map(({ title, slug, date }) => (
        <div key={slug}>
          {title} / {date} / {slug}
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => (
  <link
    rel="stylesheet"
    as="style"
    crossOrigin="anonymous"
    href="<https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css>"
  />
)

export const query = graphql`
  query IndexPage {
    allContentfulPost(sort: { date: DESC }) {
      nodes {
        title
        slug
        date
      }
    }
  }
`
