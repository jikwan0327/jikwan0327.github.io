import styled from 'styled-components'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type PostHeadProps = {
  title: string
  category: string[]
  date: string
  thumbnail: IGatsbyImageData
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  aspect-ratio: 16 / 9;
  padding: 50px;
  border-radius: 20px;
`

const Title = styled.div`
  display: -webkit-box;
  max-height: 2.4em;
  overflow: hidden;
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
`

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #ffffff;
  font-size: 15px;
  font-weight: 300;
  color: #ffffff;
`

const Category = styled.div`
  display: flex;
  gap: 7px;
`

const Thumbnail = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.9) 130%
    );
  }
`

export default function PostHead({
  thumbnail,
  title,
  category,
  date,
}: PostHeadProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Information>
        <Category>
          {category.map(item => (
            <div key={item}>#{item}</div>
          ))}
        </Category>
        <div>{date}</div>
      </Information>

      <Thumbnail image={thumbnail} alt={title} />
    </Wrapper>
  )
}
