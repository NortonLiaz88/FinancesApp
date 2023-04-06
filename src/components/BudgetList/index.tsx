import React from 'react'
import { BudgetFlatList } from './styles'
import { BudgetCard } from '../BudgetCard'

export const BudgetList: React.FC = () => {
  return (
      <BudgetFlatList showsHorizontalScrollIndicator={false} 
        data={Array.from(Array(10).keys())} 
        renderItem={(ele) => <BudgetCard key={ele}/>}
    />
  )
}
