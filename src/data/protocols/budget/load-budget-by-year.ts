import { Budget } from "../../../database/model/Budget";

export interface LoadBudgetByYearRepository {
    loadByYear: (year: Date) => Promise<Budget[]>;
}