import React from 'react'
import blogpic1 from "../../assets/blog-1.jpg"
import blogpic2 from "../../assets/blog-2.jpg"
import blogpic3 from "../../assets/blog-3.jpg"
import blogpic4 from "../../assets/blog-4.jpg"
import blogpic5 from "../../assets/blog-5.jpg"
import blogpic6 from "../../assets/blog-6.jpg"
import BlogCard from '../../components/cards/BlogCard'


export default function Blog() {
  const blogpost = [
    { image: blogpic1,
       alt: "Design conferences in 2022",
        category: "Design", 
        date: "Fab 23, 2022", 
        title: "Design conferences in 2022",
         text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo." },
    { image: blogpic2, 
      alt: "Best fonts every designer", 
      category: "Design", 
      date: "Fab 23, 2022", 
      title: "Best fonts every designer", 
      text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi." },
    { image: blogpic3, 
      alt: "Design digest #80", category: "Design", 
      date: "Fab 23, 2022", 
      title: "Design digest #80", 
      text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit." },
    { image: blogpic4,
       alt: "UI interactions of the week",
        category: "Design", 
        date: "Fab 23, 2022",
         title: "UI interactions of the week", 
         text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi." },
    { image: blogpic5, 
      alt: "The forgotten art of spacing", 
      category: "Design",
       date: "Fab 23, 2022",
        title: "The forgotten art of spacing", 
        text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { image: blogpic6, 
      alt: "Design digest #79",
       category: "Design", 
       date: "Fab 23, 2022", 
       title: "Design digest #79",
        text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum." } ] 

  return (
    <article className="blog active" data-page="blog">

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

          <ul className="blog-posts-list">

            {
              blogpost.map((post, index)=>{
                return <BlogCard key={index} post={post}/>

              


            })}

          </ul>

        </section>

      </article>
  )
}
