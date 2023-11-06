import { User } from "./user";

export interface TokenAuth {
    user: User;
    expiredIn: number;
}