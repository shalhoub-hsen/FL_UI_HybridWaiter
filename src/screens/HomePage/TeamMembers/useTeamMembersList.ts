import { useEffect } from "react";
import { useAppDispatch } from "hooks/redux";
import { useTeamMemberState } from "reducers/teamMember.reducer";
import { getTeamMembers } from "actions/teamMember.action";

export interface TeamMembersListProps {}

export const useTeamMembersList = (props: TeamMembersListProps) => {
  const dispatch = useAppDispatch();
  const teamMemberState = useTeamMemberState();
  const { teamMembers } = teamMemberState;

  useEffect(() => {
    dispatch(getTeamMembers());
  }, []);

  return { ...props, teamMembers };
};
