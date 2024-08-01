// state updation when immer middleware is used

import { createJSONStorage, persist } from "zustand/middleware"



export const userSlice = persist((set) => ({
    email: '',
    name: '',
    setEmail: (email) => set((state) => {state.email = email}),
    setName: (name) => set((state) => {state.name = name})
}),
{
    name: 'user-info', // required
    storage: createJSONStorage(() => localStorage) // specify the storage to store userSlice data
} 
);