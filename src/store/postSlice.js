// state updation without immer

export const postSlice = (set) => ({
    title: "",
    body: "",

    likes: 0,

    // set merges the new state with previous so there is no need to specify the state which is not being changed
    setTitle: (title) => set(() => ({title})),
    setBody: (body) => set(() => ({body})),
    
    incLikes: () => set((state) => ({likes: state.likes + 1})),
    decLikes: (num) => set((state) => ({likes: state.likes - 1}))
})

