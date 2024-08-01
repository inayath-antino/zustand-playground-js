import { fetchRandomNumApi } from "../utilities/mockApi"

export const asyncUpdateSlice = (set) => ({
    asyncUpdateSlice: {
        randomNum: 0,

        // zustand doesnot care if functions in store are` sync or not. Use set function when data is ready
        fetchRandomNum: async () => {
            const num = await fetchRandomNumApi();
            set((state) => {state.asyncUpdateSlice.randomNum = num})
        }
    }
})