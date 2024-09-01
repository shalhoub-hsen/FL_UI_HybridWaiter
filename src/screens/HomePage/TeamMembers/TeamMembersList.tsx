import React from "react";
import TeamMember from "./TeamMember/TeamMember";
import { TeamMembersListProps, useTeamMembersList } from "./useTeamMembersList";
const TeamMembersList: React.FC<TeamMembersListProps> = (props) => {
  const { teamMembers } = useTeamMembersList(props);

  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Team Members
          </h5>
          <h1 className="mb-5">Our Master Chefs</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <TeamMember
                  imgSrc={val.imageURL}
                  fullName={`${val.firstName} ${val.lastName}`}
                  description={val.description}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMembersList;
