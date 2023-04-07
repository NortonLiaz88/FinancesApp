import React from 'react'
import { BackButton, HeaderWrapper, Title } from './styles'

export const TransactionHeader: React.FC = () => {
  return (<HeaderWrapper>
    <BackButton />
    <Title>Add Transaction</Title>
  </HeaderWrapper>)
}
