import React from 'react'
import { PageWrapper } from '../../components/Screen/styles'
import { TransactionHeader } from '../../modules/Transaction/components/Header'
import { TransactionStepper } from '../../modules/Transaction/components/Stepper'

export const TransactionScreen: React.FC = () => {
  return (<PageWrapper>
   <TransactionHeader />
   <TransactionStepper/>
  </PageWrapper>)
}
