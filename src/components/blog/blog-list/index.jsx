import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  render() {
    return (
      <Row>
        {this.props.oldPost.map((post) => (
          <>
          <h1>post.title</h1>
          <h1>post.avatar</h1>
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
          </>
        ))}
      </Row>
    );
  }
}
