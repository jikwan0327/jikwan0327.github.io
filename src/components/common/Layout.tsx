import { ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const Contents = styled.div`
  margin: 80px 0;

  @media (max-width: 1024px) {
    margin: 50px 0;
  }
`

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <GlobalStyle />

      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </Wrapper>
  )
}
