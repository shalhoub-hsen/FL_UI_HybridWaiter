import React from 'react'
import {ServiceCardProps} from './useServiceCard'
const ServiceCard:React.FC<ServiceCardProps> = (props) => {
  return (
     <>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className={`fa fa-3x ${props.Icon} text-primary mb-4`} />
            <h5>{props.Name}</h5>
            <p>{props.Description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceCard
