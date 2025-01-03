import { GatsbyBrowser } from 'gatsby'
import Layout from './src/components/common/Layout'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
