import React from 'react'
import {Card} from 'react-bootstrap'

export default function TopCourses(props) {
  
	return (
            <Card className="mt-2">
            <Card.Body className="leftSidebarCardBody">
            <h2 style={{fontSize:"16px"}}>{props.title}</h2>
            <ul className="topCourseList">
                <li><a href="#" className="text-truncate">1. Digital Marketing Trends
                <span>Vernā Myers and Arianna Huffington</span>
                </a></li>
                <li><a href="#">2. Unconscious Bias
                <span>Stacey Gordon</span>
                </a></li>
                <li><a href="#">3. Diversity, Inclusion, and Belonging
                <span>Pat Wadors</span></a></li>
            </ul>
            <a href="" className="text-muted font-weight-bold">Show more on LinkedIn Learning</a>
            </Card.Body>
            </Card>
  )
}
