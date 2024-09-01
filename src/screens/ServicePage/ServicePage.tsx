import React from 'react'
import ServiceList from './ServiceList/ServiceList'
import ScreenHeader from 'components/Layout/ScreenHeader/ScreenHeader'
const ServicePage = () => {
  return (
      <div className="container-xxl bg-white p-0">
        <ScreenHeader
        PageName = {'Services'}
        ItemName={'SERVICE'}
        />
        <ServiceList />
      </div>
  )
}

export default ServicePage
