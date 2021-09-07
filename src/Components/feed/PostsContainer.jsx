import SinglePost from "./SinglePost";
import Loading from "../Loading";
import { Component } from "react";

class PostsContainer extends Component {
  state = {
    loading: false,
    posts: [],
    display: false,
  };

  componentDidMount = async () => {
    this.setState({
      ...this.state,
      loading: true,
    });
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          loading: false,
          posts: data,
          display: true,
        });
        console.log(this.state);
      } else {
        console.log("Error");
        this.setState({
          ...this.state,
          loading: false,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        ...this.state,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="all-posts-container">
        <hr style={{margin:"10px 0px"}} />
        {this.state.loading && <Loading />}
        {this.state.display &&
          this.state.posts
            .slice(this.state.posts.length - 10, this.state.posts.length)
            .reverse().map((p) => <SinglePost user={p.user} post={p} />)}
      </div>
    );
  }
}

export default PostsContainer;
