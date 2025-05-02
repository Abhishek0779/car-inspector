import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServiceHighlights } from "@/components/service-highlights"
import { TestimonialSection } from "@/components/testimonial-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default async function Home() {
  const cookieStore = cookies()
  const authToken = (await cookieStore).get("auth-token")

  if (!authToken) {
    redirect("/auth/login")
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServiceHighlights />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </main>
  )
}

