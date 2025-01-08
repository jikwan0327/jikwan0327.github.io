import styled from 'styled-components'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostItem from './PostItem'

type PostListProps = {
  posts: Queries.IndexPageQuery['allContentfulPost']['nodes']
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
`

export default function PostList({ posts }: PostListProps) {
  return (
    <Wrapper>
      {posts.map(({ title, category, slug, date, thumbnail, description }) => (
        <PostItem
          title={title as string}
          date={date as string}
          category={category as string[]}
          thumbnail={thumbnail?.gatsbyImageData as IGatsbyImageData}
          description={description?.description as string}
          slug={slug as string}
          key={slug}
        />
      ))}
    </Wrapper>
  )
}
