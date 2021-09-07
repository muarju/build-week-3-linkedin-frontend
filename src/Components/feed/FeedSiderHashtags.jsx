import React from 'react'
import {Card} from 'react-bootstrap'
import Hashtags from './Hashtags'
import { useEffect, useState } from "react";

export default function FeedSiderHashtags(props) {
  const [scrolled,setScrolled]=useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 400 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
  
	return (
            <Card className={`mt-2 d-none d-lg-block ${scrolled ? 'sidebar-sticky-left' : ''}`}>
            <Card.Body className="leftSidebarCardBody">
            <Hashtags title="Recent"/>
            <Hashtags title="Group"/>
            <Hashtags title="Followed Hastags"/>
            </Card.Body>
            <a href="#">
                <Card.Footer className="text-center font-weight-bold text-muted text-decoration-none">
                Discover More
                </Card.Footer>
            </a>
            </Card>
  )
}
