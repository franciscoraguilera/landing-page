import Header from "./components/Header"
import Hero from "./components/Hero"
import MetricsStrip from "./components/MetricsStrip"
import DashboardSection from "./components/DashboardSection"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <MetricsStrip />
          <DashboardSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

