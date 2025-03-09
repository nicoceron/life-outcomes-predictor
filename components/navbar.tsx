"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            STUDIO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Work
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Get in Touch</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t">
          <div className="flex flex-col space-y-4">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
              Work
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">
              Contact
            </Link>
            <Button className="w-full">Get in Touch</Button>
          </div>
        </div>
      )}
    </header>
  )
}

