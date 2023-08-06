import {create} from "zustand"
//아래 코드는 타입스크립트에서 선언해주는것
// interface UserStore {
//     user: any;
//     setUser: (user: any) =>void;
//     removeUser: () => void;
// }
//create<UserStore>
const useStore = create((set)=>({
    user:null,
    setUser : (user)=>{
        set((state)=>({ ...state,user}));
    },
    removeUser : () =>{
        set((state)=>({ ...state, user: null}));
    },
}));
export default useStore;