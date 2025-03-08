"use client"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

function Footer() {
  return (
    <motion.footer
      className="bg-[#0c022f] text-white py-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Chequeo Digital Paraguay</h3>
            <p className="text-white/80 mb-4">
              Iniciativa para medir y promover la digitalización de las empresas en Paraguay.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#FDB532] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-[#FDB532] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-[#FDB532] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white hover:text-[#FDB532] transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-[#FDB532] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#metrics" className="text-white/80 hover:text-[#FDB532] transition-colors">
                  Métricas
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-white/80 hover:text-[#FDB532] transition-colors">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <address className="not-italic text-white/80">
              <p>Ministerio de Industria y Comercio</p>
              <p>Av. Mcal. López 3333</p>
              <p>Asunción, Paraguay</p>
              <p className="mt-2">
                <a href="mailto:info@chequeodigital.gov.py" className="hover:text-[#FDB532] transition-colors">
                  info@chequeodigital.gov.py
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center text-white/60">
          <p>© {new Date().getFullYear()} Chequeo Digital Paraguay. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

