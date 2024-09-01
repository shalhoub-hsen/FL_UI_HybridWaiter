import { createReducer } from "@reduxjs/toolkit";
import { getTeamMembers } from "actions/teamMember.action";
import { useAppSelector } from "hooks/redux";
import { ITeamMember } from "models/ITeamMember";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export interface TeamMemberState {
  teamMembers: ITeamMember[];
}

const initialTeamMemberState: TeamMemberState = {
  teamMembers: [],
};

const teamMemberReducer = createReducer(initialTeamMemberState, (builder) => {
  builder.addCase(getTeamMembers.fulfilled, (state, action) => {
    state.teamMembers = action.payload;
  });
});

const persisted = persistReducer(
  {
    key: "teamMemberReducer",
    storage,
    whitelist: ["teamMembers"],
    timeout: 2000,
  },
  teamMemberReducer
);

export const useTeamMemberState = () =>
  useAppSelector(({ teamMemberReducer }) => teamMemberReducer);

export default persisted;
