import { store } from "../store";

export const selecNews = (state: ReturnType<typeof store.getState>) => state.news;