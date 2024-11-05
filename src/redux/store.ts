import {IUser} from "../models/IUser";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {IPost} from "../models/IPost";

type UserSliceType = {
    users: IUser[],
    user: IUser | null
}
const userInitState: UserSliceType = {
    users: [],
    user: null
}
type PostSliceType = {
    posts: IPost[]
}


const postInitState:PostSliceType = {
    posts: []
}

export let userSlice = createSlice({
    name: 'userSlicek',
    initialState: userInitState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        }
    }
});

export let postSlice = createSlice({
    name:'postikSlice',
    initialState: postInitState,
    reducers:{
        getPosts:(state, actions:PayloadAction<IPost[]>)=>{
            state.posts = actions.payload
        }
    }
})


export const store = configureStore({
    reducer: {
        userSliceForStore: userSlice.reducer,
        postSliceForStore:postSlice.reducer
    }
});

export let {loadUsers} = userSlice.actions;
export let {getPosts} = postSlice.actions;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();