import { GatsbySSR } from 'gatsby'
import Layout from './src/components/common/Layout'

const HeadComponents = [
  <link
    rel="stylesheet"
    as="style"
    crossOrigin="anonymous"
    href="<https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css>"
    key="pretendard-font"
  />,
]

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  setHeadComponents(HeadComponents)
}

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
