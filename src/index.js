import React from "react";
import GetBlogPost from "./BlogPost";
import ReactDOM from 'react-dom/client';
import "./styles.scss";

const blogPosts =  document.getElementById("blog-posts");
const root = ReactDOM.createRoot(blogPosts);
root.render(<GetBlogPost />)


