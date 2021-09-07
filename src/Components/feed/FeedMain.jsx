import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeedLeftSidebar from './FeedLeftSidebar'
import FeedRightSidebar from './FeedRightSidebar'
import { withRouter } from 'react-router-dom'
import PostsContainer from "./PostsContainer";
import NewPost from "./NewPost";


class FeedMain extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={3} className="rightSidebar"> <FeedLeftSidebar /></Col>
            <Col sm={5} className="feedMain"> 
              <NewPost />
              <PostsContainer />
              </Col>
            <Col sm={4}> <FeedRightSidebar /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(FeedMain);
