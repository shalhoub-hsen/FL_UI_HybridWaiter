export interface TeamMemberProps {
  imgSrc: string;
  fullName: string;
  description: string;
}

export const useTeamMember = (props: TeamMemberProps) => {
  return { ...props };
};
