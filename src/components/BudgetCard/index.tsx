import React from 'react'
import { AmountText, BudgetCardWrapper, BudgetDate, BudgetIcon, BudgetIconWrapper, BudgetName, DescriptionWrapper, IdentificationWrapper } from './styles'

export const BudgetCard = () => {
    return (
        <BudgetCardWrapper>
            <DescriptionWrapper>
                <BudgetIconWrapper>
                    <BudgetIcon name='briefcase' />
                </BudgetIconWrapper>
                <IdentificationWrapper>
                    <BudgetName>Travel</BudgetName>
                    <BudgetDate>Travel</BudgetDate>
                </IdentificationWrapper>
            </DescriptionWrapper>
            <AmountText>$ 1200</AmountText>
        </BudgetCardWrapper>
    )
}
