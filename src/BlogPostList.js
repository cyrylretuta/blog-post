import React from 'react';

const BlogPostList = ({posts}) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;