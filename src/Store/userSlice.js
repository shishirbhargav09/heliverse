import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  users: [],
  allUsers : [],
  genders: [],
  domains: [],
  team: [],
  
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    all_users: (state, action) => {
      state.users = action.payload;
      state.allUsers = action.payload;
    },
    addGenders: (state, action) => {
      state.genders = action.payload;
    },
    addDomain: (state, action) => {
      state.domains = action.payload;
    },
    addTeam: (state, action) => {
      const team = state.team;
      const newMember = action.payload;
      const isExist = state.team.find((item) => {
        return item.id === newMember.id ;
    });
    const isDomainSame = state.team.find((item) => {
        return item.domain===newMember.domain;
    });
      if (isExist) {
        toast.error("Already Added To Team");
      }
      else if (isDomainSame) {
        toast.error("Similar Domain Member Already Added")
      } else {
        state.team = [...team, action.payload];
        toast.success("Member Added")
      }
    },
    removeTeam: (state, action) => {
        
        const removeMember = action.payload;
        console.log(removeMember);
        state.team = state.team.filter((member) => {
            return member.id!==removeMember.id;

        })
        console.log(state.team);
        toast.error("Member Removed")
      },
    filterData: (state, action) => {
     state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { all_users, addGenders, addDomain, filterData, addTeam, removeTeam } =
  userSlice.actions;

export default userSlice.reducer;
