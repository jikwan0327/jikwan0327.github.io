import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type ListProps = {
  children: ReactNode
} & HTMLAttributes<HTMLOListElement>

const List = styled.ol`
  margin-left: 20px;
  padding: 30px 0;
`

export default function OrderedList({ children, ...props }: ListProps) {
  return <List {...props}>{children}</List>
}
