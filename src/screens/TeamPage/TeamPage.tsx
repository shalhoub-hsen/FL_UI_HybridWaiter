import React from 'react'
import ScreenHeader from 'components/Layout/ScreenHeader/ScreenHeader'
import TeamMembers from '../HomePage/TeamMembers/TeamMembersList'
const TeamPage = () => {
  return (
    <div className="container-xxl bg-white p-0">
        <ScreenHeader
        PageName = {'Our Team'}
        ItemName={'TEAM'}
        />
        <TeamMembers/>
      </div>
  )
}

export default TeamPage
