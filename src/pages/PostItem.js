import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import PostService from '../services/PostService';
import UserService from '../services/UserService'

const PostItem = () => {

    const location = useLocation();
    const [postItem, setPostItem] = useState(null);

    useEffect(() => {

        const currentUrl = (location.pathname);
        const urlPostId = currentUrl.split('/')[2];
        getPostAndUserData(urlPostId);
    }, [location])

    const getPostAndUserData = (urlPostId) => {
        PostService.getPost(urlPostId).then(res => {
            setPostItem(res.data);
            console.log('res : ', res.data)
        }).then((res) => {
            console.log('pipou : ', res);
        })
    }

    return (
        <p>Post Item</p>
    )
}

export default PostItem;