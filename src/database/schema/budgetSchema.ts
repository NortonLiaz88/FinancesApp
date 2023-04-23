import {tableSchema } from "@nozbe/watermelondb";

const budgetSchema = tableSchema({
    name: 'budgets',
    columns: [
        {name: 'budget_id', type: 'string'},
        {name: 'date', type: 'number'},
        {name: 'value', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'currency', type: 'string'},
        {name: 'category', type: 'string'},
    ]
})

export {budgetSchema}