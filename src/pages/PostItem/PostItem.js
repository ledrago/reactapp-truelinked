import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PostService from "../../services/PostService";
import UserService from "../../services/UserService";

import Layout from "../../components/Layout/LayoutComponent";
import ArticleComponent from "../../components/Article/ArticleComponent";
import AuthorComponent from "../../components/Author/AuthorComponent";

import postItemStyle from "./PostItem.module.scss";

const PostItem = () => {
    const location = useLocation();
    const [postItem, setPostItem] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUrl = location.pathname;
        const urlPostId = currentUrl.split("/")[2];
        getPostData(urlPostId);
    }, [location]);

    useEffect(() => {
        postItem && getUserData();
    }, [postItem]);

    const getPostData = (urlPostId) => {
        PostService.getPost(urlPostId).then((postRes) => {
            setPostItem(postRes.data);
        });
    };

    const getUserData = () => {
        UserService.getUser(postItem.userId).then((userRes) => {
            setUser(userRes.data);
        });
    };

    return (
        <Layout>
            <div className={postItemStyle.container}>
                <ArticleComponent articleData={postItem} />
                <AuthorComponent userData={user} />
            </div>
        </Layout>
    );
};

export default PostItem;
