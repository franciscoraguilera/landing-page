"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "./ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
import { LineChart, BarChart, PieChart } from "lucide-react"

function DashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const isMobile = window.innerWidth <= 440

  return (
    <section id="dashboard" ref={ref} className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dashboard Interactivo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explorá los datos del Chequeo Digital del Paraguay a través de nuestro dashboard interactivo. Analiza
            tendencias, compara sectores y descubre insights valiosos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="insights" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                <span className="hidden sm:inline">Insights</span>
              </TabsTrigger>
              <TabsTrigger value="sectors" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                <span className="hidden sm:inline">Sectores</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] md:aspect-[21/9] w-full">
                    <iframe
                      src={isMobile ? "https://lookerstudio.google.com/embed/reporting/2dae2c07-611b-499a-8afb-a16bca4c3b2b/page/p_nbib8nofqd" : "https://lookerstudio.google.com/embed/reporting/4b188df0-8581-48c9-bfb7-92563039236a/page/p_0deh8bzymd"}
                      className="w-full h-full"
                      allowFullScreen
                      style={{ border: 0 }}
                      title="Dashboard Chequeo Digital"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights">
              <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] md:aspect-[21/9] w-full">
                    {/* <iframe
                      src="https://lookerstudio.google.com/embed/reporting/7b69a928-023f-40c0-81af-c49fca824982/page/p_0deh8bzymd"
                      className="w-full h-full"
                      allowFullScreen
                      style={{ border: 0 }}
                      title="Insights Chequeo Digital"
                    /> */}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sectors">
              <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] md:aspect-[21/9] w-full">
                    {/* <iframe
                      src="https://lookerstudio.google.com/embed/reporting/7b69a928-023f-40c0-81af-c49fca824982/page/p_0deh8bzymd"
                      className="w-full h-full"
                      allowFullScreen
                      style={{ border: 0 }}
                      title="Sectores Chequeo Digital"
                    /> */}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

export default DashboardSection

