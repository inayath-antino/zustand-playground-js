import { create } from "zustand";
import { userSlice } from "./userSlice";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer"; 
import { postSlice } from "./postSlice";
import { asyncUpdateSlice } from "./asyncUpdate";


const useStore = create(devtools(persist(immer((...s) => ({
    ...userSlice(...s),
    ...postSlice(...s),
    ...asyncUpdateSlice(...s)
})), {
    name: 'store',
    storage: createJSONStorage(() => localStorage)
})));


export default useStore;