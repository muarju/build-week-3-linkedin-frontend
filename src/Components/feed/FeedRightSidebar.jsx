import React, { Component } from 'react'
import TopCourses from './TopCourses'
import SidebarAd from './SidebarAd'
import FeedsidebarFooter from './FeedSidebarFooter'

export default class FeedRightSidebar extends Component {
	render() {
		return (
			<>
			<TopCourses title="Today’s top courses"/>
			<SidebarAd />
			<FeedsidebarFooter />
      		</>
		)
	}
}
