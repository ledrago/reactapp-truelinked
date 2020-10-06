import React, { useState, useEffect } from 'react';
import PostService from '../services/PostService';

import TableComponent from '../components/TableComponent';




const Posts = () => {
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        getPostsList()
    }, []);

    const getPostsList = () => {
        PostService.getPosts().then(res => {
            setPostsList(res.data);
            console.log('res : ', res.data)
        })
    }
    return (
        <div>
            <TableComponent rowsData={postsList} />}
        </div>
        
    )
}

export default Posts;
