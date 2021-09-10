import SinglePost from "./SinglePost";
import Loading from "../Loading";
import {useState, useEffect } from "react";
import NewPost from "./NewPost";

export default function PostsContainer(props) {
  const [state, setState] = useState({
    loading: false,
    posts: [],
    display: false,
  });
 

  async function fetchPosts() {
    const accesstoken=localStorage.getItem('accesstoken');
    setState({
      ...state,
      loading: true,
    });
    try {
      let response = await fetch( `${process.env.REACT_APP_API_URL}/post`,
        {
          headers: {
            'authentication':  `${accesstoken}`,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setState({
          loading: false,
          posts: data,
          display: true,
        });
      } else {
        console.log("Error");
        setState({
          ...state,
          loading: false,
        });
      }
    } catch (err) {
      console.log(err);
      setState({
        ...state,
        loading: false,
      });
    }
  };
  useEffect(() => {
    fetchPosts();
    
  }, []);

 
return (
     <>
      <NewPost fetch={fetchPosts}/>
      <div className="all-posts-container">
        <hr style={{margin:"10px 0px"}} />
        {state.loading && <Loading />}
        {state.display && state.posts.sort((a,b) => a.createdAt <  b.createdAt? 1 : -1)
.map((p) => <SinglePost user={p.user} post={p} fetch={fetchPosts}/>)}
      </div>
     </>
    );
}

