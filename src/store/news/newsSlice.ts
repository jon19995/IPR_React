import { createSlice } from '@reduxjs/toolkit'
import news from '../../mocks/news.json'

interface Inew {
    title: string,
    author: string,
    genre: string,
    content: string,
}

interface Inews {
    total: number,
    data: Inew[]
}

const initialState: Inews = news

export const newsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})