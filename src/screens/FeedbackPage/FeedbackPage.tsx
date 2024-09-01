import React from 'react'
import ScreenHeader from 'components/Layout/ScreenHeader/ScreenHeader';
import ClientsFeedbacks from '../HomePage/ClientsFeedback/ClientFeedbacks'
const FeedbackPage = () => {
  return (
    <div className="container-xxl bg-white p-0">
        <ScreenHeader
        PageName = {'Testimonial'}
        ItemName={'TESTIMONIAL'}
        />
        <ClientsFeedbacks/>
      </div>
  )
}

export default FeedbackPage
