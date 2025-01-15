import { createElement, HTMLAttributes } from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import styled from 'styled-components'

type HeadingProps = {
  type: BLOCKS.HEADING_1 | BLOCKS.HEADING_2 | BLOCKS.HEADING_3
} & HTMLAttributes<HTMLHeadingElement>

const Components = {
  [BLOCKS.HEADING_1]: styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 40px;

    * + & {
      margin-top: 100px;
    }

    hr + & {
      margin-top: 0;
    }
  `,
  [BLOCKS.HEADING_2]: styled.h2`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 35px;

    * + & {
      margin-top: 90px;
    }

    hr + & {
      margin-top: 0;
    }
  `,
  [BLOCKS.HEADING_3]: styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;

    * + & {
      margin-top: 80px;
    }

    hr + & {
      margin-top: 0;
    }
  `,
}

export default function Heading({ type, children, ...props }: HeadingProps) {
  return createElement(Components[type], props, children)
}
