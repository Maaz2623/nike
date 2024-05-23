import { services } from '@/constants'
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section className="max-container flex justify-center gap-9 flex-wrap">
      {services.map((service) => (
        <ServiceCard imgUrl={service.imgURL} key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services