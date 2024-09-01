import React from 'react'
import ScreenHeader from 'components/Layout/ScreenHeader/ScreenHeader'
import Booking from './Booking/Booking'
const BookPage = () => {
  return (
    <div className="container-xxl bg-white p-0">
        <ScreenHeader
        PageName = {'Booking'}
        ItemName={'BOOKING'}
        />
         <Booking/>
      </div>
  )
}

export default BookPage
