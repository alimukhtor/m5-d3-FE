import React, { Component } from "react";
import {Card} from 'react-bootstrap'
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

export default class Home extends Component {
  state = {
    newPost: []
  };

  componentDidMount = () => {
    console.log("i am fetching now");
    this.fetchPosts();
  };

  fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_REMOTE_URL}/author/g2pcd9tkkwnuuha4/uploadAvatar`, {
      });
  
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          newPost: data,
        });
      } else {
        alert("Something happened wrong");
      }
      
    } catch (error) {
      console.log("error is ", error);
    }
  };
  render() {
    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
      
        <BlogList oldPost={this.state.newPost}/>
      </Container>
    );
  }
}
