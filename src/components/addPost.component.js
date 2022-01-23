import React, { useState } from "react";

import Form from "./common/form.component";
import Input from "./common/Input.component";
import Button from "./common/button.component";
import Textarea from "./common/textarea.component";

const AddPost = ({ toggler, handleSubmit }) => {
    const [formData, setFormData] = useState({
        id: "",
        postTitle: "",
        postContent: "",
        like: false,
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLikeCheck = () => {
        setFormData({
            ...formData,
            like: !formData.like,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(formData);
    };

    return (
        <div
            className="form mb-4"
            style={{ display: toggler ? "block" : "none" }}
        >
            <Form handleSubmit={handleFormSubmit}>
                <Input
                    type="text"
                    name="id"
                    value={formData.id}
                    placeholder="ID"
                    handleChange={handleChange}
                />
                <Textarea
                    name="postTitle"
                    value={formData.postTitle}
                    placeholder="Title"
                    handleChange={handleChange}
                />
                <Textarea
                    name="postContent"
                    value={formData.postContent}
                    placeholder="Discription"
                    handleChange={handleChange}
                />

                <label htmlFor="like">This post are you like.</label>
                <Input
                    type="checkbox"
                    id="like"
                    name="like"
                    checked={formData.like}
                    handleChange={handleLikeCheck}
                />

                <Button type="submit" className="btn btn-secondary">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddPost;
