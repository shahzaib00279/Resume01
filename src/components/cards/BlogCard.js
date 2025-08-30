import React from 'react'

export default function BlogCard({post}) {
  return (
    <li className="blog-post-item">
              <a href="#">

                <figure className="blog-banner-box">
                  <img src={post.image} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">{post.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>

                  <p className="blog-text">
                    {post.text}
                  </p>

                </div>

              </a>
            </li>
  )
}
