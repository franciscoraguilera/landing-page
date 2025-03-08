import React from 'react'
import Hero from "../components/hero"
import MetricsStrip from "../components/metrics-strip"
import DashboardSection from "../components/dashboard-section"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <MetricsStrip />
        <DashboardSection />
      </main>
      <Footer />
    </div>
  )
}