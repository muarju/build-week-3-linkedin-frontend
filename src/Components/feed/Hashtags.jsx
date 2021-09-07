import React from 'react'
import {FaSlackHash} from 'react-icons/fa'

export default function Hashtags(props) {
  
	return (
            <>
            <div><p className="font-weight-bold">{props.title}</p></div>
            <ul className="hastags">
                <li>
                    <a className="text-muted" href="#">
                    <div class="align-items-center">
                    <FaSlackHash />
                    <span dir="ltr" className="text-truncate">markets</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a className="text-muted" href="#">
                    <div class="align-items-center">
                    <FaSlackHash />
                    <span dir="ltr" className="text-truncate">hiring</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a className="text-muted" href="#">
                    <div class="align-items-center">
                    <FaSlackHash />
                    <span dir="ltr" className="text-truncate">recruitment</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a className="text-muted" href="#">
                    <div class="align-items-center">
                    <FaSlackHash />
                    <span dir="ltr" className="text-truncate">economy</span>
                    </div>
                    </a>
                </li>
            </ul>
            </>
            
  )
}
