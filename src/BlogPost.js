import React from "react";

const blogPostsData = [
  {
    title: "post 1",
    desc: "post 1 description",
    image: "https://picsum.photos/300",
    id: 0,
  },
  {
    title: "post 2",
    desc: "post 2 description",
    image: "https://picsum.photos/300",
    id: 1,
  },
  {
    title: "post 3",
    desc: "post 3 description",
    image: "https://picsum.photos/300",
    id: 2,
  },
  {
    title: "post 4",
    desc: "post 4 description",
    image: "https://picsum.photos/300",
    id: 4,
  },
];

function GetBlogPost() {
  const post = blogPostsData.map((post) => (
    <div className="blog-post" key={post.id} style={{backgroundImage: `url(${post.image})`}}>
      <h2 className="blog-title">{post.title}</h2>
      <p className="blog-description">{post.desc}</p>
      <div id="overlay"></div>
    </div>
  ))

  return (
    <React.Fragment>
      {post}
    </React.Fragment>
  )
}

export default GetBlogPost;
