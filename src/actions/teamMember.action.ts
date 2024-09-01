import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITeamMember } from "models/ITeamMember";
import TeamMemberServices from "services/teamMember.services";

const prefix = "teamMember/";

export const getTeamMembers = createAsyncThunk<ITeamMember[]>(
  `${prefix}get-team-members`,
  async () => {
    return await TeamMemberServices.getTeamMembers();
  }
);
