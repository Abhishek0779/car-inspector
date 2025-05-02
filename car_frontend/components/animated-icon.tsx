"use client"

import { type ReactNode, useEffect, useRef } from "react"
import gsap from "gsap"

interface AnimatedIconProps {
  children: ReactNode
  animation: "pulse" | "float" | "spin" | "bounce" | "shake" | "flip"
  delay?: number
  duration?: number
  className?: string
}

export function AnimatedIcon({ children, animation, delay = 0, duration = 2, className = "" }: AnimatedIconProps) {
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!iconRef.current) return

    const element = iconRef.current

    switch (animation) {
      case "pulse":
        gsap.to(element, {
          scale: 1.2,
          duration: duration / 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: delay,
        })
        break
      case "float":
        gsap.to(element, {
          y: -10,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: delay,
        })
        break
      case "spin":
        gsap.to(element, {
          rotation: 360,
          duration: duration,
          repeat: -1,
          ease: "none",
          delay: delay,
          transformOrigin: "center center",
        })
        break
      case "bounce":
        gsap.to(element, {
          y: -15,
          duration: duration / 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: delay,
        })
        break
      case "shake":
        gsap.to(element, {
          x: 5,
          duration: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: delay,
        })
        break
      case "flip":
        gsap.to(element, {
          rotationY: 360,
          duration: duration,
          repeat: -1,
          ease: "power1.inOut",
          delay: delay,
          transformOrigin: "center center",
        })
        break
    }

    return () => {
      gsap.killTweensOf(element)
    }
  }, [animation, delay, duration])

  return (
    <div ref={iconRef} className={`inline-block ${className}`}>
      {children}
    </div>
  )
}

