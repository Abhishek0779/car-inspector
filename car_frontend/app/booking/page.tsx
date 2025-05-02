"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle } from "lucide-react";
import { createBooking } from "@/lib/auth";
export default function BookingPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    package: "standard",
    carMake: "",
    carModel: "",
    carYear: "",
    carRegistration: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });
  console.log("formData", formData);
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await createBooking({
        package: formData.package,
        car_make: formData.carMake,
        car_model: formData.carModel,
        year: formData.carYear,
        registration_number: formData.carRegistration,
        schedule_date: formData.date,
        schedule_time: formData.time,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        card_number: formData.cardNumber,
        expiry_date: formData.expiryDate,
        cvv: formData.cvv,
        card_holder_name: formData.nameOnCard,
      });

      toast({
        title: "Booking Confirmed!",
        description: `Reference: ${response?.reference_number}`,
      });
      localStorage.setItem("booking-reference", response.reference_number);

      router.push("/booking/confirmation");
    } catch (error) {
      toast({
        title: "Booking failed",
        description: "Please check your inputs and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const packages = [
    {
      id: "standard",
      name: "Standard Package",
      price: "₹1,299",
      description: "Basic inspection for pre-owned cars",
    },
    {
      id: "premium",
      name: "Premium Package",
      price: "₹2,599",
      description: "Comprehensive inspection for pre-owned cars",
    },
    {
      id: "pdi",
      name: "PDI for New Cars",
      price: "₹1,999",
      description: "Pre-delivery inspection for new cars",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const carMakes = [
    "Maruti Suzuki",
    "Hyundai",
    "Tata",
    "Mahindra",
    "Honda",
    "Toyota",
    "Kia",
    "MG",
    "Volkswagen",
    "Skoda",
    "Ford",
    "Other",
  ];

  const years = Array.from({ length: 25 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Book Your Car Inspection
              </h1>
              <p className="text-lg text-muted-foreground">
                Complete the form below to schedule your car inspection.
              </p>
            </div>

            <div className="flex justify-between mb-8">
              <div
                className={`flex flex-col items-center ${
                  step >= 1 ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 1 ? "bg-primary text-white" : "bg-muted"
                  } ${step === 1 ? "pulse-animation" : ""}`}
                >
                  1
                </div>
                <span className="text-sm">Select Package</span>
              </div>
              <div
                className={`flex flex-col items-center ${
                  step >= 2 ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 2 ? "bg-primary text-white" : "bg-muted"
                  } ${step === 2 ? "pulse-animation" : ""}`}
                >
                  2
                </div>
                <span className="text-sm">Car Details</span>
              </div>
              <div
                className={`flex flex-col items-center ${
                  step >= 3 ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 3 ? "bg-primary text-white" : "bg-muted"
                  } ${step === 3 ? "pulse-animation" : ""}`}
                >
                  3
                </div>
                <span className="text-sm">Schedule</span>
              </div>
              <div
                className={`flex flex-col items-center ${
                  step >= 4 ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 4 ? "bg-primary text-white" : "bg-muted"
                  } ${step === 4 ? "pulse-animation" : ""}`}
                >
                  4
                </div>
                <span className="text-sm">Payment</span>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && "Select Inspection Package"}
                  {step === 2 && "Enter Car Details"}
                  {step === 3 && "Schedule Inspection"}
                  {step === 4 && "Review & Payment"}
                </CardTitle>
                <CardDescription>
                  {step === 1 &&
                    "Choose the inspection package that suits your needs"}
                  {step === 2 && "Provide details about your car"}
                  {step === 3 && "Select a convenient date and time"}
                  {step === 4 &&
                    "Review your booking details and proceed to payment"}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {step === 1 && (
                  <RadioGroup
                    value={formData.package}
                    onValueChange={(value) => handleChange("package", value)}
                    className="space-y-4"
                  >
                    {packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className={`flex items-start space-x-3 border rounded-lg p-4 cursor-pointer transition-colors ${
                          formData.package === pkg.id
                            ? "border-primary bg-primary/5"
                            : "border-border"
                        }`}
                        onClick={() => handleChange("package", pkg.id)}
                      >
                        <RadioGroupItem
                          value={pkg.id}
                          id={pkg.id}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor={pkg.id}
                            className="text-lg font-medium cursor-pointer"
                          >
                            {pkg.name} - {pkg.price}
                          </Label>
                          <p className="text-muted-foreground">
                            {pkg.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="carMake">Car Make</Label>
                        <Select
                          value={formData.carMake}
                          onValueChange={(value) =>
                            handleChange("carMake", value)
                          }
                        >
                          <SelectTrigger id="carMake">
                            <SelectValue placeholder="Select make" />
                          </SelectTrigger>
                          <SelectContent>
                            {carMakes.map((make) => (
                              <SelectItem key={make} value={make}>
                                {make}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="carModel">Car Model</Label>
                        <Input
                          id="carModel"
                          value={formData.carModel}
                          onChange={(e) =>
                            handleChange("carModel", e.target.value)
                          }
                          placeholder="e.g., Swift, i20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="carYear">Year</Label>
                        <Select
                          value={formData.carYear}
                          onValueChange={(value) =>
                            handleChange("carYear", value)
                          }
                        >
                          <SelectTrigger id="carYear">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            {years.map((year) => (
                              <SelectItem key={year} value={year}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="carRegistration">
                          Registration Number
                        </Label>
                        <Input
                          id="carRegistration"
                          value={formData.carRegistration}
                          onChange={(e) =>
                            handleChange("carRegistration", e.target.value)
                          }
                          placeholder="e.g., GJ01AB1234"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) => handleChange("time", value)}
                        >
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          handleChange("address", e.target.value)
                        }
                        placeholder="Enter your address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        Booking Summary
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Package:
                          </span>
                          <span className="font-medium">
                            {
                              packages.find(
                                (pkg) => pkg.id === formData.package
                              )?.name
                            }
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Car:</span>
                          <span className="font-medium">
                            {formData.carYear} {formData.carMake}{" "}
                            {formData.carModel}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Registration:
                          </span>
                          <span className="font-medium">
                            {formData.carRegistration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Date & Time:
                          </span>
                          <span className="font-medium">
                            {formData.date} at {formData.time}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Name:</span>
                          <span className="font-medium">{formData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Contact:
                          </span>
                          <span className="font-medium">
                            {formData.email} | {formData.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        Payment Details
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between text-lg">
                          <span>Total Amount:</span>
                          <span className="font-bold text-primary">
                            {
                              packages.find(
                                (pkg) => pkg.id === formData.package
                              )?.price
                            }
                          </span>
                        </div>

                        <div className="p-4 bg-primary/10 rounded-lg">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <p className="font-medium">Secure Payment</p>
                              <p className="text-sm text-muted-foreground">
                                Your payment information is processed securely.
                                We do not store credit card details.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            onChange={(e) =>
                              handleChange("cardNumber", e.target.value)
                            }
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              onChange={(e) =>
                                handleChange("expiryDate", e.target.value)
                              }
                              placeholder="MM/YY"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              onChange={(e) =>
                                handleChange("cvv", e.target.value)
                              }
                              placeholder="123"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="nameOnCard">Name on Card</Label>
                          <Input
                            id="nameOnCard"
                            onChange={(e) =>
                              handleChange("nameOnCard", e.target.value)
                            }
                            placeholder="Enter name as on card"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex justify-between">
                {step > 1 && (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                )}

                {step < 4 ? (
                  <Button onClick={handleNext} className="ml-auto">
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="ml-auto"
                  >
                    {loading ? "Processing..." : "Confirm & Pay"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
