import React from "react";
import articleStyle from "./ArticleComponent.module.scss";
import blogImage from './blogPostImg.jpg'

const ArticleComponent = ({ articleData }) => {
    return (
        <div className={articleStyle.container}>
            <h2>{articleData?.title}</h2>
            <img alt="blog post" src={blogImage} />
            <div className={articleStyle.postBody}>
                <p>{articleData?.body}</p>
            </div>
        </div>
    );
};

export default ArticleComponent;
