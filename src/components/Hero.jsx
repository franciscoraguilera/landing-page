"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "./ui/Button"

function Hero() {
  const scrollToDashboard = () => {
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.section
      className="relative bg-gradient-to-br from-[#8B2818] to-[#C13C27] text-white py-12 md:py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
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
          className="flex flex-col items-center space-y-4"
        >
          <Button
            onClick={scrollToDashboard}
            className="bg-[#FDB532] hover:bg-[#fda300] text-primary font-bold px-8 py-6 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            Ver datos
          </Button>

          <motion.div
            className="text-white/90 cursor-pointer"
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
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

