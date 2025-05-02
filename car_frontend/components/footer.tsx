import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Car Inspectors Logo" width={60} height={60} className="h-14 w-auto" />
              <span className="ml-2 text-xl font-bold">Car Inspectors</span>
            </Link>
            <p className="text-gray-400">
              Professional car inspection services in Gujarat. We help you make informed decisions about your car
              purchase.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="transform hover:scale-125 transition-transform duration-300">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="transform hover:scale-125 transition-transform duration-300">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="transform hover:scale-125 transition-transform duration-300">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="transform hover:scale-125 transition-transform duration-300">
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Standard Inspection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Premium Inspection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  New Car PDI
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Corporate Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 shrink-0" />
                <span className="text-gray-400">123 Car Street, Ahmedabad, Gujarat 380001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 shrink-0" />
                <span className="text-gray-400">info@carinspectors.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Car Inspectors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

