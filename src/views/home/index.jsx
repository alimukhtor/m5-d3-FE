import React, { Component } from "react";
import {Card} from 'react-bootstrap'
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

export default class Home extends Component {
  state = {
    newPost: [],
  };

  componentDidMount = () => {
    console.log("i am fetching now");
    this.fetchPosts();
  };

  fetchPosts = async () => {
    const response = await fetch("http://localhost:3004/author/");

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
  };
  render() {
    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <Card>
          {
            this.state.newPost.map(post => (`
          <Card.Img variant="top" src=${post.avatar} />
          <Card.Body>
            <Card.Title>${post.title}</Card.Title>
            <Card.Text>
            ${post.category}
            </Card.Text>
          </Card.Body>
`
            ))
          }
        </Card>
        <BlogList />
      </Container>
    );
  }
}
