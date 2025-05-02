"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, PenToolIcon as Tool, Car, FileSpreadsheet, Wrench, Gauge, Cpu, FileText } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AnimatedIcon } from "@/components/animated-icon"

export default function ServicesPage() {
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

  const standardFeatures = [
    { icon: <Wrench className="h-6 w-6 text-primary" />, name: "Body inspection" },
    { icon: <Car className="h-6 w-6 text-primary" />, name: "Test drive" },
    { icon: <Gauge className="h-6 w-6 text-primary" />, name: "Engine failure check" },
    { icon: <FileText className="h-6 w-6 text-primary" />, name: "Basic electrical check" },
    { icon: <Tool className="h-6 w-6 text-primary" />, name: "Suspension check" },
  ]

  const premiumFeatures = [
    ...standardFeatures,
    { icon: <Cpu className="h-6 w-6 text-primary" />, name: "OBD scanning" },
    { icon: <FileSpreadsheet className="h-6 w-6 text-primary" />, name: "Repaint detection" },
    { icon: <FileText className="h-6 w-6 text-primary" />, name: "Car RTO history" },
    { icon: <FileText className="h-6 w-6 text-primary" />, name: "Detailed report with repair estimates" },
  ]

  const pdiFeatures = [
    { icon: <FileText className="h-6 w-6 text-primary" />, name: "VIN verification" },
    { icon: <Gauge className="h-6 w-6 text-primary" />, name: "ODO meter check" },
    { icon: <Cpu className="h-6 w-6 text-primary" />, name: "OBD scanning" },
    { icon: <Car className="h-6 w-6 text-primary" />, name: "Bumper-to-bumper inspection" },
    { icon: <FileText className="h-6 w-6 text-primary" />, name: "Delivery checklist" },
  ]

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Car Inspection Services</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We offer comprehensive inspection services for both pre-owned and new cars. Our expert technicians will
                thoroughly inspect your car and provide a detailed report.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/booking">Book an Inspection</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="standard" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="standard">Standard Package</TabsTrigger>
                <TabsTrigger value="premium">Premium Package</TabsTrigger>
                <TabsTrigger value="pdi">PDI for New Cars</TabsTrigger>
              </TabsList>

              <TabsContent value="standard" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Standard Package</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Our basic inspection package for pre-owned cars. Perfect for a quick assessment of a used car's
                      condition.
                    </p>
                    <div className="flex items-center text-3xl font-bold text-primary mb-6">₹1,299</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {standardFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <AnimatedIcon animation="pulse" delay={index * 0.2} className="text-primary">
                            {feature.icon}
                          </AnimatedIcon>
                          <span>{feature.name}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="mt-8">
                      <Link href="/booking">Book This Package</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Standard Inspection"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="premium" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Most Popular
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Premium Package</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Our comprehensive inspection package for pre-owned cars. Includes detailed analysis and
                      documentation.
                    </p>
                    <div className="flex items-center text-3xl font-bold text-primary mb-6">₹2,599</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {premiumFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <AnimatedIcon animation="pulse" delay={index * 0.2} className="text-primary">
                            {feature.icon}
                          </AnimatedIcon>
                          <span>{feature.name}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="mt-8">
                      <Link href="/booking">Book This Package</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Premium Inspection"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pdi" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">PDI for New Cars</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Pre-delivery inspection for new cars. Ensure your new car is in perfect condition before taking
                      delivery.
                    </p>
                    <div className="flex items-center text-3xl font-bold text-primary mb-6">₹1,999</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pdiFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <AnimatedIcon animation="pulse" delay={index * 0.2} className="text-primary">
                            {feature.icon}
                          </AnimatedIcon>
                          <span>{feature.name}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="mt-8">
                      <Link href="/booking">Book This Package</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="PDI Inspection"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Premium Package Perks */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Package Perks</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our premium package offers additional benefits to help you make an informed decision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <FileSpreadsheet className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Detailed Report</CardTitle>
                  <CardDescription>
                    Comprehensive inspection report with photos and documentation of all findings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our detailed report includes high-quality photos of all inspected areas, with clear annotations and
                    explanations. You'll receive a complete assessment of the car's condition.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>PDI Assurance</CardTitle>
                  <CardDescription>Pre-Delivery Inspection assurance with certified technicians.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our certified technicians follow a comprehensive checklist to ensure your car meets all quality
                    standards. We verify everything from mechanical components to cosmetic details.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Repair Cost Estimates</CardTitle>
                  <CardDescription>
                    Faulty parts list with estimated repair costs for price negotiation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Use our detailed repair cost estimates as leverage during price negotiations. Know exactly what
                    issues need to be fixed and how much they'll cost before finalizing your purchase.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Inspection Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a systematic approach to ensure a thorough inspection of your car.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Booking</h3>
                <p className="text-muted-foreground">
                  Book an inspection online or by phone. Select your preferred package and schedule a convenient time.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Inspection</h3>
                <p className="text-muted-foreground">
                  Our certified technicians perform a comprehensive inspection of your car following a detailed
                  checklist.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Report Generation</h3>
                <p className="text-muted-foreground">
                  We generate a detailed report with photos, findings, and recommendations based on the inspection.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-muted-foreground">
                  Our experts explain the findings and provide recommendations to help you make an informed decision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Car Inspected?</h2>
              <p className="text-lg mb-8 text-white/80">
                Book an inspection today and make an informed decision about your car purchase. Our expert technicians
                are ready to help you.
              </p>

              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/booking">Book Your Inspection Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

