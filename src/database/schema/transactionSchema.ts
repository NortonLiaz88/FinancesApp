import { TableSchema, tableSchema } from "@nozbe/watermelondb";

const transactionSchema = tableSchema({
    name: 'transactions',
    columns: [
        {name: 'transaction_id', type: 'string'},
        {name: 'date', type: 'string'},
        {name: 'value', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'currency', type: 'string'},
        {name: 'category', type: 'string'},

    ]
})

export {transactionSchema}