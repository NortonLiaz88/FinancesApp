import { Budget } from "../../../database/model/Budget";

export interface LoadBudgetByMonthRepository {
    loadByMonth: (month: Date) => Promise<Budget[]>;
}