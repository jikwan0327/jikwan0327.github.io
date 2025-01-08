import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type PostItemProps = {
  title: string
  date: string
  category: string[]
  thumbnail: IGatsbyImageData
  description: string
  slug: string
}

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 320px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
`

const Thumbnail = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  height: 200px;
`

const Contents = styled.div`
  padding: 15px;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  max-height: 2.4em;
  font-size: 18px;
  font-weight: 700;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
`

const Date = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 200;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 5px;
  margin-top: 10px;
  font-size: 12px;
`

const Description = styled.div`
  display: -webkit-box;
  overflow: hidden;
  width: 100%;
  max-height: 3.6em;
  margin-top: 15px;
  font-size: 12px;
  font-weight: 300;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
`

export default function PostItem({
  title,
  date,
  category,
  thumbnail,
  description,
  slug,
}: PostItemProps) {
  return (
    <Wrapper to={slug as string}>
      <Thumbnail>
        <GatsbyImage
          image={thumbnail}
          alt={title as string}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Thumbnail>

      <Contents>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {category?.map(category => <div key={category}>#{category}</div>)}
        </Category>
        <Description>{description}</Description>
      </Contents>
    </Wrapper>
  )
}
