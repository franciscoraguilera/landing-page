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
          <div className="flex flex-row items-center justify-center space-x-4 sm:space-x-6 mb-8">
            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToDashboard}
                className="bg-[#FDB532] hover:bg-[#fda300] text-primary font-bold px-6 py-4 md:px-8 md:py-6 rounded-full text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgb(253,181,50,0.4)] whitespace-nowrap relative overflow-hidden group"
              >
                <span className="relative z-10">Ver datos</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="https://chequeodigital.mipymes.gov.py/User/Registrar#!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black font-bold px-6 py-4 md:px-8 md:py-6 rounded-full text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)] flex items-center gap-3 md:gap-4 whitespace-nowrap group relative overflow-hidden"
                >
                  <span className="relative z-10">Realizá el chequeo</span>
                  <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 transition-all duration-300 group-hover:rotate-45 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="text-white/90 cursor-pointer"
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            onClick={scrollToDashboard}
          >
            <ChevronDown className="h-6 w-6" />
            </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

