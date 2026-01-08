import { useEffect, useState, useRef } from 'react'

const AnimatedStatistic = ({ value, label, suffix = '+' }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true)
            setHasAnimated(true)
            // Small delay for smooth entrance
            setTimeout(() => {
              animateValue(0, value, 2000) // 2 second animation
            }, 100)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 } // Trigger when 30% visible
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect()
      }
    }
  }, [value, hasAnimated])

  const animateValue = (start, end, duration) => {
    const startTime = performance.now()
    const range = end - start

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation (ease-out cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start + range * easeOutCubic)
      
      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(end)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <div 
      ref={elementRef} 
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="text-4xl md:text-5xl font-heading font-bold mb-2 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-lg">
        <span className="inline-block">{displayValue}</span>
        <span className="inline-block">{suffix}</span>
      </div>
      <div className="text-lg opacity-90 font-body">{label}</div>
    </div>
  )
}

export default AnimatedStatistic
