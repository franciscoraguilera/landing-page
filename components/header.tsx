"use client"

import { motion } from "framer-motion"
import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="bg-primary text-white py-4 px-6 md:px-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <motion.img
            src="https://chequeodigital.mipymes.gov.py/Content/img/mic-1.png"
            alt="Logo MIC"
            className="h-12 w-auto object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          {/* <motion.img
            src="https://chequeodigital.mipymes.gov.py/Content/img/mic-1.png"
            alt="Logo BID"
            className="h-12 w-auto object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          /> */}
                    <motion.img
            src="https://chequeodigital.mipymes.gov.py/Content/img/bid-1.png"
            alt="Logo BID"
            className="h-12 w-auto object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
                    {/* <motion.img
            src="https://chequeodigital.mipymes.gov.py/Content/img/bid-1.png"
            alt="Logo BID"
            className="h-12 w-auto object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          /> */}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-primary-foreground/80 transition-colors">
            Inicio
          </a>
          <a href="#metrics" className="text-white hover:text-primary-foreground/80 transition-colors">
            Métricas
          </a>
          <a href="#dashboard" className="text-white hover:text-primary-foreground/80 transition-colors">
            Dashboard
          </a>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-white">
              <nav className="flex flex-col space-y-6 mt-10">
                <a href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Inicio
                </a>
                <a href="#metrics" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Métricas
                </a>
                <a href="#dashboard" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Dashboard
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

