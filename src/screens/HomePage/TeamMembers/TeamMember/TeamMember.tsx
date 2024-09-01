import { useViewFile } from "hooks/useViewFile";
import { TeamMemberProps, useTeamMember } from "./useTeamMember";
const TeamMember: React.FC<TeamMemberProps> = (props) => {
  const { imgSrc, fullName, description } = useTeamMember(props);

  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item text-center rounded overflow-hidden">
        <div className="rounded-circle overflow-hidden m-4">
          <img className="img-fluid" src={useViewFile(imgSrc)} alt="" />
        </div>
        <h5 className="mb-0">{fullName}</h5>
        <small>{description}</small>
        <div className="d-flex justify-content-center mt-3">
          <a className="btn btn-square btn-primary mx-1">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-square btn-primary mx-1">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-square btn-primary mx-1">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
