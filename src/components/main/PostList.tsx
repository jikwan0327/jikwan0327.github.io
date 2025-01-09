import styled from 'styled-components'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid'
import PostItem from './PostItem'

type PostListProps = {
  posts: Queries.IndexPageQuery['allContentfulPost']['nodes']
}

const Wrapper = styled(MasonryInfiniteGrid)`
  margin-top: 40px;
`

export default function PostList({ posts }: PostListProps) {
  return (
    <Wrapper gap={20}>
      {posts.map(({ title, date, category, thumbnail, description, slug }) => (
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
