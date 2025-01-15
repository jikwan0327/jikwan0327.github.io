import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type ListProps = {
  children: ReactNode
} & HTMLAttributes<HTMLUListElement>

const List = styled.ul`
  margin-left: 20px;
  padding: 30px 0;
`

export default function UnorderedList({ children, ...props }: ListProps) {
  return <List {...props}>{children}</List>
}
