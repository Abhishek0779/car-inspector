"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, PenToolIcon as Tool, Car, FileSpreadsheet } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function ServiceHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".service-card")

      gsap.fromTo(
        cards,
        { y: 100, opacity: 0 },
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

  const services = [
    {
      title: "Standard Package",
      price: "₹1,299",
      description: "Basic inspection for pre-owned cars",
      features: ["Body inspection", "Test drive", "Engine failure check", "Basic electrical check", "Suspension check"],
      icon: (
        <div className="icon-animation">
          <Tool className="h-10 w-10 text-primary" />
        </div>
      ),
    },
    {
      title: "Premium Package",
      price: "₹2,599",
      description: "Comprehensive inspection for pre-owned cars",
      features: [
        "All standard features",
        "OBD scanning",
        "Repaint detection",
        "Car RTO history",
        "Detailed report with repair estimates",
      ],
      icon: (
        <div className="icon-animation">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
      ),
      highlighted: true,
    },
    {
      title: "PDI for New Cars",
      price: "₹1,999",
      description: "Pre-delivery inspection for new cars",
      features: [
        "VIN verification",
        "ODO meter check",
        "OBD scanning",
        "Bumper-to-bumper inspection",
        "Delivery checklist",
      ],
      icon: (
        <div className="icon-animation">
          <Car className="h-10 w-10 text-primary" />
        </div>
      ),
    },
  ]

  useEffect(() => {
    if (sectionRef.current) {
      const icons = sectionRef.current.querySelectorAll(".icon-animation")

      icons.forEach((icon) => {
        gsap.to(icon.firstChild, {
          rotation: 360,
          duration: 2,
          ease: "elastic.out(1, 0.3)",
          transformOrigin: "center center",
          scrollTrigger: {
            trigger: icon,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Inspection Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right inspection package for your needs. Our expert technicians will thoroughly inspect your car
            and provide a detailed report.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`service-card ${service.highlighted ? "border-primary shadow-lg" : ""}`}>
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <FileSpreadsheet className="h-24 w-24 text-primary" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold mb-2">Premium Package Perks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Detailed car inspection report with photos and documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>PDI (Pre-Delivery Inspection) assurance with certified technicians</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Faulty parts list with estimated repair costs for price negotiation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

