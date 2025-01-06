import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const ProfileImage = styled.div`
  overflow: hidden;
  width: 140px;
  height: 140px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const SubText = styled.div`
  font-size: 30px;
  font-weight: 100;
`

const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;
`

export default function Introduction() {
  return (
    <div>
      <ProfileImage>
        <StaticImage src="../../images/thumbnail.webp" alt="Profile Image" />
      </ProfileImage>

      <SubText>Nice to Meet You!</SubText>
      <MainText>I&apos;m Junior Frontend Developer Jikwan</MainText>
    </div>
  )
}
