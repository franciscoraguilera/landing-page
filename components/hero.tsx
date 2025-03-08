"use client"
import { motion } from "framer-motion"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import { Button } from "./ui/button"

function Hero() {
  const scrollToDashboard = () => {
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.section
      className="relative text-white py-12 md:py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://www.rltelecom.co.uk/wp-content/uploads/go-x/u/281d73ed-bd68-4b6b-8fb9-248933800858/image-1200x675.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#8B2818] to-[#C13C27]"
          style={{ 
            mixBlendMode: 'multiply',
            //opacity: 0.85
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-5 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Datos abiertos del Chequeo Digital del Paraguay
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Conocé las principales métricas e indicadores de la digitalización empresarial a nivel nacional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-row items-center justify-center space-x-4 mb-8">
            <Button
              onClick={scrollToDashboard}
              className="bg-[#FDB532] hover:bg-[#fda300] text-primary font-bold px-8 py-6 rounded-full text-lg transition-all duration-300 shadow-lg"
            >
              Ver datos
            </Button>

            <a 
              href="https://chequeodigital.mipymes.gov.py/User/Registrar#!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-[#FDB532] hover:bg-[#fda300] text-primary font-bold px-8 py-6 rounded-full text-lg transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Realizá el chequeo
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </a>
          </div>

          <motion.div
            className="text-white/90 cursor-pointer mt-4"
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            onClick={scrollToDashboard}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

