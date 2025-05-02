"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import gsap from "gsap"

export function HeroSection() {
  const { user } = useAuth()
  const circleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (circleRef.current && contentRef.current) {
      // Animate the circle
      gsap.fromTo(
        circleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" },
      )

      // Animate the content
      gsap.fromTo(
        contentRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      )

      // Add floating animation to the car image
      gsap.to(circleRef.current.querySelector(".car-bonnet"), {
        y: [-10, 10, -10],
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
      })

      // Add a pulsing effect to the circular animation
      gsap.to(circleRef.current.querySelector(".circular-animation"), {
        scale: [1, 1.05, 1],
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
      })
    }
  }, [])

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div ref={contentRef} className="md:w-1/2 space-y-6">
            {user && <p className="text-lg text-primary font-medium">Welcome, {user.name}!</p>}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Car Inspection Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Get your car inspected by professionals. We provide comprehensive inspection services for both pre-owned
              and new cars to ensure you make the right decision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/booking">Book Inspection Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>

          <div ref={circleRef} className="md:w-1/2 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
              <div className="absolute inset-0 circular-animation">
                <Image
                  src="/homepage.gif"
                  alt="Car Inspection Animation"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="car-bonnet w-48 h-48 bg-transparent cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Car Bonnet Animation"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

