import React from 'react'
import { BackButton, HeaderWrapper, Title } from './styles'
import { useNavigation } from '@react-navigation/native'

export const TransactionHeader: React.FC = () => {
  const {goBack} = useNavigation();

  const handleBack = () => {
    goBack()
  }

  return (<HeaderWrapper>
    <BackButton  onPress={handleBack}/>
    <Title>Add Transaction</Title>
  </HeaderWrapper>)
}
