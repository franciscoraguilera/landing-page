"use client"

import React from 'react'
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs } from "../components/ui/tabs"
import { LineChart, BarChart, PieChart } from "lucide-react"

export default function DashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = React.useState("dashboard")
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const getButtonClasses = (tabValue: string) => {
    const baseClasses = "flex items-center gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    const activeClasses = "bg-background text-foreground shadow-sm"
    
    return activeTab === tabValue 
      ? `${baseClasses} ${activeClasses}` 
      : baseClasses
  }

  return (
    <section id="dashboard" ref={ref} className="py-12 md:py-16 bg-gray-50">
      <div className="mx-auto w-full">
        <motion.div
          className="text-center mb-12 px-4"
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
          className="w-full"
        >
          <Tabs 
            defaultValue="dashboard" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-muted p-1 rounded-md">
              <button
                className={getButtonClasses("dashboard")}
                onClick={() => setActiveTab("dashboard")}
              >
                <LineChart className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </button>
              <button
                className={getButtonClasses("insights")}
                onClick={() => setActiveTab("insights")}
              >
                <BarChart className="h-4 w-4" />
                <span className="hidden sm:inline">Insights</span>
              </button>
              <button
                className={getButtonClasses("sectors")}
                onClick={() => setActiveTab("sectors")}
              >
                <PieChart className="h-4 w-4" />
                <span className="hidden sm:inline">Sectores</span>
              </button>
            </div>

            <div className={activeTab === "dashboard" ? "block" : "hidden"}>
              <div className="mx-auto" style={{ width: '90%' }}>
                {isMobile ? (
                  <iframe 
                    src="https://lookerstudio.google.com/embed/reporting/2dae2c07-611b-499a-8afb-a16bca4c3b2b/page/p_nbib8nofqd" 
                    style={{ 
                      border: 0,
                      width: '100%',
                      height: '800px',
                      display: 'block',
                    }}
                    allowFullScreen
                    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  />
                ) : (
                  <iframe 
                    src="https://lookerstudio.google.com/embed/reporting/4b188df0-8581-48c9-bfb7-92563039236a/page/p_0deh8bzymd" 
                    style={{ 
                      border: 0,
                      width: '100%',
                      height: '850px',
                      display: 'block',
                    }}
                    allowFullScreen
                    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin"
                  />
                )}
              </div>
            </div>

            <div className={activeTab === "insights" ? "block" : "hidden"}>
              <div className="mx-auto" style={{ width: '80%' }}>
                {/* Insights iframe */}
              </div>
            </div>

            <div className={activeTab === "sectors" ? "block" : "hidden"}>
              <div className="mx-auto" style={{ width: '80%' }}>
                {/* Sectors iframe */}
              </div>
            </div>
          </Tabs>
        </motion.div>
      </div>

      <style jsx global>{`

               .dashboard-container {
           width: 80%;
           max-width: 80vw;
         }
         
         .dashboard-frame {
           width: 100%;
           height: auto;
           margin: 0 auto;
           overflow: hidden;
           border-radius: 8px;
           border: 2px solid #ddd;
           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
           background: #ffffff;
         }

        body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        @media (max-width: 768px) {
          section {
            padding: 0;
            margin: 0;
            width: 100%;
            max-width: 100%;
          }
          
          .mx-auto {
            width: 100% !important;
          }
        }

        .dashboard-frame {
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </section>
  )
}

