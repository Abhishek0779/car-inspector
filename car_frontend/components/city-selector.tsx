"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export function CitySelector() {
  const { user, updateUserCity } = useAuth()
  const [selectedCity, setSelectedCity] = useState<string>(user?.city || "")

  useEffect(() => {
    if (user?.city) {
      setSelectedCity(user.city)
    }
  }, [user])

  const handleCityChange = (city: string) => {
    setSelectedCity(city)
    if (updateUserCity) {
      updateUserCity(city)
    }
  }

  const gujaratCities = [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    "Junagadh",
    "Gandhinagar",
    "Anand",
    "Nadiad",
    "Mehsana",
    "Morbi",
    "Surendranagar",
    "Patan",
    "Bharuch",
    "Vapi",
  ]

  return (
    <div className="flex items-center">
      <MapPin className="h-4 w-4 mr-1 text-primary" />
      <Select value={selectedCity} onValueChange={handleCityChange}>
        <SelectTrigger className="w-[140px] h-8 text-sm border-none focus:ring-0">
          <SelectValue placeholder="Select City" />
        </SelectTrigger>
        <SelectContent>
          {gujaratCities.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

