import { AuthEffects } from "./auth/auth.effects"
import { autReducer } from "./auth/auth.reducer"
import { AuthState } from "./auth/auth.state"

export interface RootState {
    auth: AuthState
}

export const appReducer = {
    auth: autReducer
}

export const appEffects = [ AuthEffects ]