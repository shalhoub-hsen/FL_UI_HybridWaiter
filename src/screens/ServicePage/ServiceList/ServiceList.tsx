import React from 'react'
import { ServiceListProps, useServiceList } from './useServiceList'
import ServiceCard from '../ServiceCard/ServiceCard';
const ServiceList: React.FC<ServiceListProps> = (props) => {
    const { services } = useServiceList(props);
  return (
    <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    {
                        services.map((val,index)=>{
                            return (
                                <>
                                <React.Fragment key={index}>
                                <ServiceCard
                                    Name={val.name}
                                    Description={val.description}
                                    Icon={val.icon}
                                />
                                </React.Fragment>
                            </>);
                        })
                    }
                    
                    
                </div>
            </div>
        </div>
  )
}

export default ServiceList
