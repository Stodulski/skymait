"use client"

import { useState } from "react"
import {Code, Globe, Zap, Calendar, Menu, X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Image from "next/image"

interface NavbarProps {
  onWhatsAppClick: () => void;
}

export function Navbar({ onWhatsAppClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-4 sm:p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" width="100" height={200} alt="Logo Skyma IT" className="w-32"/>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-white hover:text-[#FFD600] transition-colors">
            Servicios
          </a>
          <a href="#agendar" className="text-white hover:text-[#FFD600] transition-colors">
            Agendar
          </a>
         
          <Button 
            onClick={onWhatsAppClick}
            className="bg-[#FFD600] text-[#0F0F0F] font-semibold hover:bg-[#FFD600]/80 hover:scale-105 hover:cursor-pointer active:scale-95 transition-all duration-300"
          >
            Comenzar Proyecto
          </Button>
        </div>

        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-[#0F0F0F] border-l border-[#FF007F]/20 p-6 shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FF007F] to-[#00E5FF] rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#FF007F] to-[#00E5FF] bg-clip-text text-transparent">
                SKYMA IT
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors flex items-center space-x-2 group"
            >
              <Globe className="w-5 h-5 group-hover:text-[#FFD600] transition-colors" />
              <span className="group-hover:text-[#FFD600] transition-colors">Servicios</span>
            </a>
            <a
              href="#agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors flex items-center space-x-2 group"
            >
              <Calendar className="w-5 h-5 group-hover:text-[#FFD600] transition-colors" />
              <span className="group-hover:text-[#FFD600] transition-colors">Agendar</span>
            </a>
           

            <div className="pt-4 mt-4 border-t border-[#FF007F]/20">
              <Button
                onClick={() => {
                  onWhatsAppClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#FFD600] text-[#0F0F0F] font-semibold hover:bg-[#FFD600]/80 hover:scale-105 hover:cursor-pointer active:scale-95 transition-all duration-300"
              >
                Comenzar Proyecto
              </Button>
            </div>

            <div className="mt-auto pt-6">
              <div className="flex items-center space-x-4 justify-center">
                <a
                  href="#"
                  className="text-white/60 hover:text-[#FFD600] transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#FFD600] transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Code className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#FFD600] transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Zap className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
