import React, { useEffect, useState } from "react";

import Post from "./post.component";
import Navbar from "./navbar.component";
import AddPost from "./addPost.component";
import Button from "./common/button.component";
import getPosts from "../data/posts.data";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [toggler, setToggler] = useState(false)

    useEffect(() => {
        setPosts(getPosts());
    },[]);

    const handleSubmit = (newPost) => {
        const addNewPost = {...newPost};
        addNewPost.date = `${new Date().toLocaleDateString()} || ${new Date().toLocaleTimeString()}`
        addNewPost.image = "../images/img.jpg";
        addNewPost.disLike = false;
        addNewPost.likeCount = 0;
        addNewPost.disLikeCount =  0;

        setPosts([ addNewPost, ...posts ]);
        setToggler(!toggler);
    };

    const handleLike = (id) => {
        const updatePosts = [...posts];
        const findPost = updatePosts.find((post) => post.id === id);
        findPost.like = !findPost.like;
        findPost.disLike = false;
        setPosts(updatePosts);
    };

    const handleDisLike = (id) => {
        const updatePosts = [...posts];
        const findPost = updatePosts.find((post) => post.id === id);
        findPost.disLike = !findPost.disLike;
        findPost.like = false;
        setPosts(updatePosts);
    };

    const handleRemove = (id) => {
        const postRemove = posts.filter((post) => post.id !== id);
        setPosts(postRemove);
    };

    const countLike = () => {
        const countLike = posts.filter((post) => post.like === true);
        return countLike.length;
    };

    const countDisLike = () => {
        const countDislike = posts.filter((post) => post.disLike === true);
        return countDislike.length;
    };

    return (
        <>
            <Navbar like={countLike()} disLike={countDisLike()} />
            <div className="posts">
                <Button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setToggler(!toggler)}
                >
                    Add Post
                </Button>
                <AddPost
                    handleSubmit={handleSubmit}
                    toggler={toggler}
                />
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        handleLike={handleLike}
                        handleDisLike={handleDisLike}
                        handleRemove={handleRemove}
                    />
                ))}
            </div>
        </>
    );
}

export default Posts;
