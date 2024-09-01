import React from 'react'
import Paper from "components/Paper/Paper"
import IndexWelcome from "../HomePage/IndexWelcome/IndexWelcome";
import TeamMembersList from "../HomePage/TeamMembers/TeamMembersList";
import ScreenHeader from 'components/Layout/ScreenHeader/ScreenHeader';
const AboutPage = () => {
  return (
    
      <Paper title="">
      <div className="container-xxl bg-white p-0">
        <ScreenHeader
        PageName = {'About Us'}
        ItemName={'ABOUT'}
        />
        <IndexWelcome/>
        <TeamMembersList />
      </div>
      </Paper>
  )
}

export default AboutPage

