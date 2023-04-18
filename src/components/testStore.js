import {create} from "zustand";
import{persist} from "zustand/middleware";

let testStore = (set)=>({
    dopen:true,
    updateOpen:(dopen) => set((state)=>({dopen:dopen})),
});

testStore = persist(testStore,{name:"my_test_store"});
export const useTestStore = create(testStore);