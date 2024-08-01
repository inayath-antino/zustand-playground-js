// state updation when immer middleware is used


export const userSlice = (set) => ({
    email: '',
    name: '',
    setEmail: (email) => set((state) => {state.email = email}),
    setName: (name) => set((state) => {state.name = name})
})