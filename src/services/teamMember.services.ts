import { ITeamMember } from "models/ITeamMember";
import { http } from "utils/http";

const getTeamMembers = async () => {
  return await http.get<ITeamMember[], any>("TeamMember");
};

const TeamMemberServices = {
  getTeamMembers,
};

export default TeamMemberServices;
