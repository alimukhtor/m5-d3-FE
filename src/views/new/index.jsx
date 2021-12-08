import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
export default class NewBlogPost extends Component {
    state = {
      blogPosts: {
        title: "",
        cover: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",    
        category: "",
        text: "" 
      } 
  
  
  
  };

    handleInput =(fieldName, value)=> {
      this.setState({
        blogPosts:{
          ...this.state.blogPosts,
          [fieldName]: value
        }
      })

    }

  
  handleSubmit = async e => {
    e.preventDefault()
    try {
        let response = await fetch(`${process.env.REACT_APP_BE_REMOTE_URL}/author/`, {
            method: 'POST',
            body: JSON.stringify(this.state.blogPosts),
            headers: {
                'Content-type': 'application/json'
            }
        })

        if (response.ok) {
            alert('OK!')
            this.setState({
              blogPosts:{
                title: "ali",
                cover: "http://localhost:3004/img/authors/download.jpghttps://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",  
                category: "",
                text: "" 

              }
            })
        } else {
            alert('ERROR')
        }
    } catch (error) {
        console.log(error)
    }
}

// handleFileChange = async  (e) => {
//   try {

//     const file = e.target.files[0]

//     const formData = new FormData()

//     formData.append('avatarPic',file)
//     let response = await fetch(`${process.env.REACT_APP_BE_REMOTE_URL}/author/g2pcd9tkkwnvepv4/uploadAvatar`, {
//         method: 'POST',
//         body: formData
//     })

//     if (response.ok) {
//         alert('OK!')
         
//     } else {
//         alert('ERROR')
//     }
// } catch (error) {
//     console.log(error)
// }
// }
  render() {
    return (
      <Container className="new-blog-container">
        <Form className="mt-5" onSubmit={this.handleSubmit}>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>

            <Form.Control size="lg" 
            value={this.state.blogPosts.title}
            type="text"
            onChange={(e)=> this.handleInput('title', e.target.value)}
            />
             {/* <Form.Control size="lg" 
             type="file"
            onChange={this.handleFileChange}
            /> */}
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Cover</Form.Label>
            <Form.Control size="lg" 
            value={this.state.blogPosts.cover}
            onChange={(e)=> this.handleInput('cover', e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control size="lg" as="select"
            value={this.state.blogPosts.category}
            onChange={(e)=> this.handleInput('category', e.target.value)}
            
            >
              <option>Horror</option>
              <option>Fantasy</option>
              <option>Romance</option>
              <option>Action</option>
              <option>Adventure</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              value={this.state.blogPosts.text}
              onChange={(e)=> this.handleInput('text', e)}
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
