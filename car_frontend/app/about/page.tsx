"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, CheckCircle } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (pageRef.current) {
      const sections = pageRef.current.querySelectorAll("section")

      sections.forEach((section) => {
        gsap.fromTo(
          section.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          },
        )
      })
    }
  }, [])

  const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary float-animation" />,
      title: "Integrity",
      description: "We provide honest and transparent assessments of every vehicle we inspect.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary float-animation" style={{ animationDelay: "0.5s" }} />,
      title: "Excellence",
      description: "We strive for excellence in every inspection we perform, ensuring no detail is overlooked.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary float-animation" style={{ animationDelay: "1s" }} />,
      title: "Customer Focus",
      description: "Our customers' needs and satisfaction are at the center of everything we do.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary float-animation" style={{ animationDelay: "1.5s" }} />,
      title: "Timeliness",
      description: "We respect your time and ensure prompt and efficient service delivery.",
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Rajesh has over 15 years of experience in the automotive industry and founded Car Inspectors to help car buyers make informed decisions.",
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Priya oversees all operational aspects of Car Inspectors, ensuring smooth service delivery and customer satisfaction.",
    },
    {
      name: "Amit Patel",
      position: "Chief Technical Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Amit leads our technical team and brings extensive knowledge of automotive engineering and diagnostics to our inspection processes.",
    },
    {
      name: "Neha Singh",
      position: "Customer Relations Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Neha ensures that every customer receives personalized attention and that their concerns are addressed promptly and effectively.",
    },
  ]

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Car Inspectors</h1>
              <p className="text-lg text-muted-foreground">
                We are a team of automotive experts dedicated to helping car buyers make informed decisions through
                comprehensive vehicle inspections.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4">
                  <p>
                    Car Inspectors was founded in 2018 with a simple mission: to help car buyers make informed
                    decisions. Our founder, Rajesh Kumar, saw firsthand how many people were purchasing used cars
                    without proper knowledge of their condition, often leading to expensive repairs and regrets.
                  </p>
                  <p>
                    What started as a small operation in Ahmedabad has now grown to serve multiple cities across
                    Gujarat. Our team of certified technicians has inspected thousands of vehicles, saving our customers
                    from potential pitfalls and helping them find reliable cars that meet their needs and budget.
                  </p>
                  <p>
                    Today, Car Inspectors is recognized as a trusted name in pre-purchase car inspections, known for our
                    thoroughness, honesty, and commitment to customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Car Inspectors Team"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do at Car Inspectors.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Inspection Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a systematic approach to ensure a thorough inspection of every vehicle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Visual Inspection</h3>
                <p className="text-muted-foreground">
                  We start with a comprehensive visual inspection of the exterior and interior, looking for signs of
                  damage, wear, or previous repairs.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Mechanical Inspection</h3>
                <p className="text-muted-foreground">
                  Our technicians thoroughly check the engine, transmission, suspension, brakes, and other mechanical
                  components.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Electronic Diagnostics</h3>
                <p className="text-muted-foreground">
                  We use advanced diagnostic tools to check the vehicle's electronic systems and identify any stored
                  error codes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team of experts is dedicated to providing you with the best car inspection service.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-center">{member.name}</h3>
                    <p className="text-primary text-center mb-4">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-primary" />
                    ))}
                  </div>
                  <p className="mb-4">
                    "Car Inspectors saved me from making a terrible purchase. Their detailed report showed hidden issues
                    that the seller didn't disclose. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt="Customer"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-bold">Rajesh Patel</p>
                      <p className="text-sm text-muted-foreground">Ahmedabad</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-primary" />
                    ))}
                  </div>
                  <p className="mb-4">
                    "The premium inspection package was worth every rupee. The technician was thorough and explained
                    everything in detail. I felt confident in my purchase decision."
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt="Customer"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-bold">Priya Shah</p>
                      <p className="text-sm text-muted-foreground">Surat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-primary" />
                    ))}
                  </div>
                  <p className="mb-4">
                    "I had my new car inspected before taking delivery. They found a few minor issues that the dealer
                    fixed immediately. Great service and very professional team."
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt="Customer"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-bold">Amit Desai</p>
                      <p className="text-sm text-muted-foreground">Vadodara</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

