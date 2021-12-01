import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
export default class NewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "",  
      text: "" ,
      category: ""
  
  
  
  };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }
  handleSubmit = async e => {
    e.preventDefault()
    try {
        let response = await fetch('http://localhost:3004/author/', {
            method: 'POST',
            body: JSON.stringify(this.state.text),
            headers: {
                'Content-type': 'application/json'
            }
        })

        if (response.ok) {
            alert('OK!')
           this.handleChange()
        } else {
            alert('ERROR')
        }
    } catch (error) {
        console.log(error)
    }
}
  render() {
    return (
      <Container className="new-blog-container">
        <Form className="mt-5" onSubmit={this.handleSubmit}>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control size="lg" placeholder="Title" />
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Cover</Form.Label>
            <Form.Control size="lg"  />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control size="lg" as="select">
              <option>Category1</option>
              <option>Category2</option>
              <option>Category3</option>
              <option>Category4</option>
              <option>Category5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              className="new-blog-content"
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
