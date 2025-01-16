import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from 'gatsby-source-contentful/rich-text'
import { getImage } from 'gatsby-plugin-image'
import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import {
  Blockquote,
  Heading,
  Image,
  HorizontalRule,
  OrderedList,
  UnorderedList,
  Link,
  Code,
} from './node'

export const HEADERS = [
  BLOCKS.HEADING_1,
  BLOCKS.HEADING_2,
  BLOCKS.HEADING_3,
] as const
const CODE_METADATA_REGEX = /^language::(\w+)/

const options: Options = {
  renderMark: {
    [MARKS.CODE]: text => {
      const isBlock = !!text && CODE_METADATA_REGEX.test(text.toString())

      if (!isBlock) return <Code>{text}</Code>
      else
        return (
          <Code
            isBlock
            className={`language-${CODE_METADATA_REGEX.exec(text.toString())?.[1]}`}
          >
            {text.toString().replace(CODE_METADATA_REGEX, '').trimStart()}
          </Code>
        )
    },
  },
  renderNode: {
    ...HEADERS.reduce<{ [block: string]: NodeRenderer }>((nodes, header) => {
      nodes[header] = (node, children) => (
        <Heading type={header}>{children}</Heading>
      )

      return nodes
    }, {}),
    [BLOCKS.OL_LIST]: (_node, children) => (
      <OrderedList>{children}</OrderedList>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => (
      <UnorderedList>{children}</UnorderedList>
    ),
    [BLOCKS.HR]: () => <HorizontalRule />,
    [BLOCKS.QUOTE]: (_node, children) => <Blockquote>{children}</Blockquote>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { gatsbyImageData, description } = node.data.target
      const image = getImage(gatsbyImageData)

      if (image) return <Image image={image} alt={description} />
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <Link
        href={node.data.uri as string}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    ),
  },
}

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
