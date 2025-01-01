import { graphql, PageProps } from 'gatsby'

export default function Index({
  data: {
    allContentfulPost: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  return (
    <div>
      {nodes.map(({ title, slug, date }) => (
        <div key={slug}>
          {title} / {date} / {slug}
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query IndexPage {
    allContentfulPost {
      nodes {
        title
        slug
        date
      }
    }
  }
`
