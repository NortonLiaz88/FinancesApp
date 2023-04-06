import React from 'react'
import { FinanceResumeWrapper } from './styles'
import { FinanceCard } from '../FinanceCard'

export const FinanceResume: React.FC = ()  =>{
  return (<FinanceResumeWrapper>
    <FinanceCard type='income'/>
    <FinanceCard type='expense' />
  </FinanceResumeWrapper>)
}
