import {useEffect, useState} from 'react'

/**
 * ER WORDT NIET VERWACHT DAT JE DEZE CODE AL BEGRIJPT, USE_EFFECT WORDT IN EEN LATERE LES BESPROKEN.
 *
 * Telt af naar 0 vanaf de opgegeven waarde en geeft de huidige waarde terug.
 *
 * @param countdownInSeconds Het aantal seconden dat gewacht moet worden.
 */
const useCountdown = (countdownInSeconds: number) => {
  const [counter, setCounter] = useState(countdownInSeconds)

  useEffect(() => {
    if (counter === 0) return
    const id = setInterval(() => setCounter(counter => counter - 1), 1000)
    return () => clearInterval(id)
  }, [counter])

  return counter
}

export default useCountdown
