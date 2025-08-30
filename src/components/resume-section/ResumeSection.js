import React from 'react'

export default function ResumeSection(props) {
  return (
    <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">{props.title}</h3>
          </div>

          <ol className="timeline-list">
            {props.items.map((item, index) => {
                return (
                    <li key={index} className="timeline-item">

              <h4 className="h4 timeline-item-title">{item.title}</h4>

              <span>{item.date}</span>

              <p className="timeline-text">
                {item.description}
              </p>

            </li>
                )
            })}

          </ol>

        </section>
  )
}
