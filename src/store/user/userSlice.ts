import { createSlice } from '@reduxjs/toolkit'

export interface IUser {
    username: string,
    password: string,
}

export interface IUsers {
    users: IUser[],
}

const initialState: IUsers = {
    users: [
        {
            username: "Admin",
            password: "1234",
        },
    ],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})