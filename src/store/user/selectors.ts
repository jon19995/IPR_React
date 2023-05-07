import { store } from "../store";

export const selectUsers = (state: ReturnType<typeof store.getState>) => state.users.users;