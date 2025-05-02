"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".testimonial-card")

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const testimonials = [
    {
      name: "Rajesh Patel",
      location: "Ahmedabad",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Car Inspectors helped me avoid a bad purchase. Their detailed report showed hidden issues that the seller didn't disclose. Saved me lakhs of rupees!",
    },
    {
      name: "Priya Shah",
      location: "Surat",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "I was buying my first car and wasn't sure what to look for. The premium inspection package was worth every rupee. The technician was thorough and explained everything.",
    },
    {
      name: "Amit Desai",
      location: "Vadodara",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "Got my new car inspected before delivery. They found a few minor issues that the dealer fixed immediately. Great service and very professional team.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our inspection
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="mb-4">{testimonial.text}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t pt-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

