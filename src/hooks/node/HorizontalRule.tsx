import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Component = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 80px 0;
`

export default function HorizontalRule(props: HTMLAttributes<HTMLHRElement>) {
  return <Component {...props} />
}
