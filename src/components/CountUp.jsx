"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

function CountUp({ end, duration = 2000, start = 0 }) {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * (end - start) + start))

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step)
      }
    }

    animationFrame = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(animationFrame)
    }
  }, [start, end, duration, isInView])

  return <span ref={ref}>{count}</span>
}

export default CountUp

