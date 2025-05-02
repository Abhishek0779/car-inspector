"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function ConfirmationPage() {
  const [reference, setReference] = useState("");

  useEffect(() => {
    const ref = localStorage.getItem("booking-reference");
    if (ref) {
      setReference(ref);
    }

    // Animation
    gsap.fromTo(
      ".animate-success",
      { scale: 0, rotation: -30 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
        onComplete: () => {
          gsap.to(".animate-success", {
            keyframes: { y: [0, -10, 0] },
            duration: 1,
            ease: "power1.inOut",
            repeat: -1,
            repeatDelay: 2,
          });
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-primary">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary animate-success" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  Booking Confirmed!
                </CardTitle>
                <CardDescription>
                  Your car inspection has been scheduled successfully.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Booking Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Inspection Date</p>
                          <p className="text-muted-foreground">
                            Monday, April 5, 2025
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Inspection Time</p>
                          <p className="text-muted-foreground">10:00 AM</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">
                            Car Inspectors Service Center
                            <br />
                            123 Car Street, Ahmedabad, Gujarat 380001
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">What's Next?</h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>
                        You will receive a confirmation email with all the
                        details.
                      </li>
                      <li>
                        Our team will call you 24 hours before the inspection to
                        confirm.
                      </li>
                      <li>
                        Bring your car to our service center at the scheduled
                        time.
                      </li>
                      <li>The inspection will take approximately 2-3 hours.</li>
                      <li>
                        You will receive a detailed inspection report after
                        completion.
                      </li>
                    </ol>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Booking Reference</p>
                        <p className="text-muted-foreground">
                          Your booking reference number is{" "}
                          <span className="font-bold">
                            {reference || "..."}
                          </span>
                          . Please keep this for your records.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/">Return to Home</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
