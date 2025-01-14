import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'

const options: Options = {}

export default function useRenderRichText({
  raw,
  references,
}: Queries.ContentfulPostContent) {
  if (!raw) return null

  return renderRichText(
    {
      raw,
      references: references as unknown as ContentfulRichTextGatsbyReference[],
    },
    options,
  )
}
