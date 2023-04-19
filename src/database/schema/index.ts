import { appSchema } from "@nozbe/watermelondb";
import { transactionSchema } from "./transactionSchema";


const schemas = appSchema({
  version: 2,
  tables: [transactionSchema],
});

export { schemas };
