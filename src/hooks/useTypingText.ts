import { useEffect, useRef, useState } from 'react'

interface UseTypingTextOptions {
  text: string
  speed?: number
  startDelay?: number
  enabled?: boolean
}

export function useTypingText({
  text,
  speed = 80,
  startDelay = 400,
  enabled = true,
}: UseTypingTextOptions) {
  const [displayedText, setDisplayedText] = useState(enabled ? '' : text)
  const [isComplete, setIsComplete] = useState(!enabled)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true

    if (!enabled) {
      return
    }

    const startTimeout = setTimeout(() => {
      if (!isMountedRef.current) return

      let currentIndex = 0
      setDisplayedText('')
      setIsComplete(false)

      const typingInterval = setInterval(() => {
        if (!isMountedRef.current) {
          clearInterval(typingInterval)
          return
        }

        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(typingInterval)
        }
      }, speed)

      return () => clearInterval(typingInterval)
    }, startDelay)

    return () => {
      isMountedRef.current = false
      clearTimeout(startTimeout)
    }
  }, [text, speed, startDelay, enabled])

  return { displayedText, isComplete }
}
