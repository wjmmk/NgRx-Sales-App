import { createSelector } from "@ngrx/store";
import { RootState } from "..";
import { AuthState } from "./auth.state";

export interface AppState {
    feature: RootState,
}


export const selectAuthFeatureState = (state: RootState) => state.auth


export const selectIsLoadingLogin = createSelector(
    selectAuthFeatureState,
    (state: AuthState) => state.isLiading
)

export const selectIsErrorLogin = createSelector(
    selectAuthFeatureState,
    (state: AuthState) => state.isError
)