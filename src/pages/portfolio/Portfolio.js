import React from 'react'
import project01 from "../../assets/project-1.jpg"
import project02 from "../../assets/project-2.png"
import project03 from "../../assets/project-3.jpg"
import project04 from "../../assets/project-4.png"
import project05 from "../../assets/project-5.png"
import project06 from "../../assets/project-6.png"
import project07 from "../../assets/project-7.png"
import project08 from "../../assets/project-8.jpg"
import project09 from "../../assets/project-9.png"
import PortfolioCard from '../../components/cards/PortfolioCard'


export default function Portfolio() {
  const project = [{
    img : project01,
    title : "Finance",
    category : "Web Development"
 },
{
  img : project02,
  title : "Orizon",
  category : "Web development"
},
{
  img : project03,
  title : "Orizon",
  category : "Web development"
},{
  img : project04,
  title : "Funto",
  category : "Web Design"
},
{
  img : project05,
  title : "Brawlhalla",
  category : "Applications"

},
{
  img : project06,
  title : "DMS.",
  category : "Web Design"
},
{
img : project07,
  title : "MetaSpark",
  category : "Web Design"
},
{
  img : project08,
  title : "Summary",
  category : "Web Development"
},
{
img : project09,
  title : "Task Manager",
  category : "Web Surge Deploy"
}]
  return (
    <article className="portfolio active" data-page="portfolio">

        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">

          <ul className="filter-list">

            <li className="filter-item">
              <button className="active" data-filter-btn>All</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>

          </ul>

          <div className="filter-select-box">

            <button className="filter-select" data-select>

              <div className="select-value" data-selecct-value>Select category</div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>

            </button>

            <ul className="select-list">

              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>

            </ul>

          </div>

          <ul className="project-list">
            {
              project.map((project, index) =>{
                return <PortfolioCard key={index} image={project.img} title={project.title} category={project.category} />
            })}


          </ul>

        </section>

      </article>
  )
}
