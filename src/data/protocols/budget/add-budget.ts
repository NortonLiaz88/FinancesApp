import { BudgetDTO } from "../../models/Budget";

export interface AddBudgetRepository {
    add: (budget: BudgetDTO) => Promise<void>;
}