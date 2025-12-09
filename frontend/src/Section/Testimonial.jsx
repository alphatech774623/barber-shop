import React from "react";
import "../App.css"

const Testimonial = () =>{
      const reviews = [
    {
      name: "Rahul Verma",
      text: "Best haircut I ever had! Professional staff and great ambiance. Highly recommended.",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Aman Gupta",
      text: "Amazing service and friendly barbers. They really understand your style.",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Priya Sharma",
      text: "Loved the beard styling! Perfect place for modern grooming.",
      img: "https://i.pravatar.cc/100?img=3",
    },
  ];


    return (
        <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <img src={review.img} alt={review.name} />
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
    )
}

export default Testimonial
