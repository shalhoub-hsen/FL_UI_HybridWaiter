import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { ServiceListProps, useServiceList } from "./useServiceList";
const ServiceList: React.FC<ServiceListProps> = (props) => {
  const { serviceList } = useServiceList(props);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {serviceList.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <ServiceCard
                  name={val.name}
                  description={val.description}
                  icon={val.icon}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
