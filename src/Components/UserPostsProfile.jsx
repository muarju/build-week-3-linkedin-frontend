import React from 'react'
import { Card } from 'react-bootstrap'

export default function UserPostsProfile (props) {
	return (
		<div className="card mb-3 activity-border">
      <div className="row no-gutters">
        <div className="col-md-2">
          <Card.Img
            className="cover-img activity-image"
            variant="top"
            src={""}
            alt="X"
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="activity-body-header">
              Simulation gear reducer
            </h5>
            <p className="card-text">Elon Musk shared this </p>
            <p className="card-text">
              <small className="text-muted">3 React</small>
              <small className="text-muted">1 Comment</small>
            </p>
          </div>
        </div>
      </div>
    </div>
	)
}
