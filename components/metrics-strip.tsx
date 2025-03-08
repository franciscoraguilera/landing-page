"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BarChart3, Users, MapPin, PieChart, LayoutGrid } from "lucide-react"
import { Card } from "@/components/ui/card"
import CountUp from "@/components/count-up"

const metrics = [
  {
    id: 1,
    value: 508,
    label: "Empresas encuestadas",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    value: 8,
    label: "Departamentos alcanzados",
    icon: MapPin,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: 3,
    value: 20,
    label: "Distritos alcanzados",
    icon: LayoutGrid,
    color: "bg-green-50 text-green-600",
    prefix: "+",
  },
  {
    id: 4,
    value: 30,
    label: "Sectores analizados",
    icon: PieChart,
    color: "bg-purple-50 text-purple-600",
    prefix: "+",
  },
  {
    id: 5,
    value: 6,
    label: "Dimensiones evaluadas",
    icon: BarChart3,
    color: "bg-rose-50 text-rose-600",
  },
]

export default function MetricsStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="metrics"
      ref={ref}
      className="py-8 md:py-12 px-4 bg-white shadow-md" // Reduced padding
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary" // Reduced margin
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Principales Indicadores
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`p-3 rounded-full mb-4 ${metric.color}`}>
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#f5592b] flex items-center justify-center">
                  {metric.prefix && <span>{metric.prefix}</span>}
                  <CountUp end={metric.value} />
                </div>
                <p className="mt-2 text-gray-600">{metric.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

