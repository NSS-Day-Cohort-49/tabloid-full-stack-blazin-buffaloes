import React, { useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { Input, Form, Label, Button } from "reactstrap";
import { addPost } from "../../modules/postManager";
import { FormGroup } from "reactstrap";

export const PostForm = () => {
    const [post, setPost] = useState({})

    const handleInputChange = (event) => {
        event.preventDefault()
        const value = event.target.value
        const key = event.target.id
        const postCopy = {...post}
        postCopy[key] = value
        setPost(postCopy)
    }

    const handleSave = (event) => {
        event.preventDefault()
        addPost(post)
    }

    return (

        <>
        <Form>
            <h1>Post Form</h1>
            <FormGroup>
                <Label for = "title">Title</Label>
                <Input type = "text" name = "title" id = "title" placeholder = "Post Title" value = {post.title} onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for = "content">Content</Label>
                <Input type = "text" name = "content" id = "content" placeholder = "Post Content" value = {post.content} onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for = "imageLocation">Image Location</Label>
                <Input type = "text" name = "imageLocation" id = "imageLocation" placeholder = "Image URL" value = {post.imageLocation} onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for = "publishDateTime">Publish on...</Label>
                <Input type = "datetime" name = "publishDateTime" id = "publishDateTime" value = {post.publishDateTime} onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for = "title">Approval?</Label>
                <Input type = "checkbox" name = "isApproved" id = "isApproved" value = {post.isApproved} onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
                <Label for = "categoryId">Category</Label>
                <Input type = "dropdown" name = "title" id = "title" placeholder = "Post Title" value = {post.Title} onChange={handleInputChange}/>
            </FormGroup>
            <Button onClick={handleSave}>Submit</Button>
        </Form>



        </>
    )
}