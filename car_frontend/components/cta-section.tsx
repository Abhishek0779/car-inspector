"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import gsap from "gsap"

export function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Car Inspected?</h2>
          <p className="text-lg mb-8 text-white/80">
            Book an inspection today and make an informed decision about your car purchase. Our expert technicians are
            ready to help you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="feature-icon">
                <CheckCircle className="h-5 w-5 pulse-animation" />
              </div>
              <span>Expert Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="feature-icon">
                <CheckCircle className="h-5 w-5 pulse-animation" />
              </div>
              <span>Detailed Reports</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="feature-icon">
                <CheckCircle className="h-5 w-5 pulse-animation" />
              </div>
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="feature-icon">
                <CheckCircle className="h-5 w-5 pulse-animation" />
              </div>
              <span>Transparent Pricing</span>
            </div>
          </div>

          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <Link href="/booking" className="flex items-center gap-2">
              Book Your Inspection Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

