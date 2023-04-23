import {appSchema} from '@nozbe/watermelondb';
import {transactionSchema} from './transactionSchema';
import {budgetSchema} from './budgetSchema';

const schemas = appSchema({
  version: 2,
  tables: [transactionSchema, budgetSchema],
});

export {schemas};
