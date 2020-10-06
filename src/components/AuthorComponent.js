import React from "react";
import authorStyle from "./AuthorComponent.module.scss";
import meImg from './jerome-drago.jpg';

const AuthorComponent = ({ userData }) => {
    return (
        <div className={authorStyle.container}>
            <img alt="author" src={meImg} />
            <p className={authorStyle.name}>{userData?.name}</p>
            <p className={authorStyle.mailphone}>{userData?.email} - {userData?.phone}</p>
            <p className={authorStyle.website}>{userData?.website}</p>
        </div>
    )
};

export default AuthorComponent;
