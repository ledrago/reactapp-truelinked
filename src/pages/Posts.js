import React, { useState, useEffect } from "react";
import PostService from "../services/PostService";

import TableComponent from "../components/TableComponent";
import Layout from "../components/LayoutComponent";

const Posts = () => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    getPostsList();
  }, []);

  const getPostsList = () => {
    PostService.getPosts().then((res) => {
      setPostsList(res.data);
    });
  };
  return (
    <Layout>
      <TableComponent rowsData={postsList} />
    </Layout>
  );
};

export default Posts;
