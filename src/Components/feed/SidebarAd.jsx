import React from 'react'
import {Card} from 'react-bootstrap'
import marcelo from '../../assets/Marcelo-pic.png'
import strive from '../../assets/strivelogo.jpg'
import { useEffect, useState } from "react";

export default function SidebarAd(props) {
const [scrolled,setScrolled]=useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
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
            <Card className={`mt-2 ${scrolled ? 'sidebar-sticky' : ''} d-none d-lg-block`}>
            <Card.Body className="leftSidebarCardBody">
            <p className="text-center text-muted mt-2 mb-1">Get the latest jobs and industry news</p>
            <div className="d-flex justify-content-center">
                  <img src={marcelo} className="rounded-circle mr-3" style={{height:"80px", width:"80px"}}></img>
                  <img src={strive} className="rounded-circle" style={{height:"80px", width:"80px"}}></img>
            </div>
            <p className="text-center" style={{fontSize:"16px"}}>Marcelo Mantilla, explore relevant opportunities with <span className="font-weight-bold">QD Sverige AB</span></p>
            </Card.Body>
            </Card>
  )
}
