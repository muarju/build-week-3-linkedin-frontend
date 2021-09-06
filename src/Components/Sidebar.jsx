import React, { Component } from 'react'
import SidebarSection from './SidebarSection'

export default class Sidebar extends Component {
	render() {
		return (
			<>
        <div className="sidebar-main-container">
  				<SidebarSection title={"People also viewed"}/>
          <SidebarSection title={"People you may know"}/>
  			</div>
      </>
		)
	}
}
