import React from 'react'
import Card from './ui/Card'
import { testimonialsData } from '../assets/assets'
import SectionHeader from './ui/SectionHeader'

const Testimonials = () => {

  return (
    <div className='mt-20'>
    <SectionHeader 
  title="Customer" 
  subtitle="Testimonials" 
  description="Real Stories from Those Who Found Home with Us" 
/>
      <div className="w-full mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-5 px-5 py-5">
      {testimonialsData.map((testimonial, index) => (
        <Card 
          key={index}
          image={testimonial.image}
          name={testimonial.name}
          title={testimonial.title}
          rating={testimonial.rating}
          text={testimonial.text}
          
        />
      ))}
      </div>
    </div>
  )
}

export default Testimonials
