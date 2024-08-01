import { create } from "zustand";
import { userSlice } from "./userSlice";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer"; 
import { postSlice } from "./postSlice";
import { asyncUpdateSlice } from "./asyncUpdate";


const useStore = create(devtools(immer((...s) => ({
    ...userSlice(...s),
    ...postSlice(...s),
    ...asyncUpdateSlice(...s)
}))));


export default useStore;