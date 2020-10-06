import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import PostService from '../services/PostService';
import UserService from '../services/UserService'

import Layout from '../components/LayoutComponent';

const PostItem = () => {

    const location = useLocation();
    const [postItem, setPostItem] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {

        const currentUrl = (location.pathname);
        const urlPostId = currentUrl.split('/')[2];
        getPostAndUserData(urlPostId);

    }, [location])

    const getPostAndUserData = (urlPostId) => {
        PostService.getPost(urlPostId).then(postRes => {
            setPostItem(postRes.data);
            UserService.getUser(postRes.data.userId).then(userRes => {
                setUser(userRes.data)
                console.log('res : ', userRes.data)
            })
            
        })
    }

    return (
        <Layout>
        <p>Post Item</p>
        </Layout>
    )
}

export default PostItem;