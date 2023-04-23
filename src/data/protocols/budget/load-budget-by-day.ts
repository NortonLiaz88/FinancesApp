import { Budget } from "../../../database/model/Budget";

export interface LoadBudgetByDayRepository {
    loadByDay: (date: Date) => Promise<Budget[]>;
}