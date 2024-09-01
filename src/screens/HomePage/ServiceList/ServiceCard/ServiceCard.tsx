import { ServiceCardProps, useServiceCard } from "./useServiceCard";
const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const { icon, name, description } = useServiceCard(props);

  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <i className={`fa fa-3x ${icon} text-primary mb-4`} />
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
