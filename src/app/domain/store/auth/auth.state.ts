import { ILogin } from "src/app/core/models/auth.model";


export interface AuthState {
    loginData: ILogin | null;
    isLiading: boolean;
    isError: string | null
}