import React from 'react'
import { AmountText, ArrowDownIcon, ArrowUpIcon, CardWrapper, Title } from './styles'


type FinaceCardTypes = {
    type: 'income' | 'expense';
}

export const FinanceCard: React.FC<FinaceCardTypes> = ({ type }: FinaceCardTypes) => (
    <CardWrapper>
        {
            type === 'income' ?
                <>
                    <ArrowDownIcon />
                    <Title>Income</Title>
                    <AmountText>$676292</AmountText>
                </> :
                <>
                    <ArrowUpIcon />
                    <Title>Expense</Title>
                    <AmountText>$676292</AmountText>
                </>
        }

    </CardWrapper>
)
