'use client'

import { useRandomImage } from "@/hooks/useRandomImage"
import { useEffect, useMemo } from "react"

export default function LoadingText () {
  const randomLoadingMessages = [
    'Pensando profundamente',
    'Um momento de reflexão',
    'A mente está trabalhando',
    'Buscando a sabedoria que atravessa o tempo',
    'A mente do filósofo está em profunda reflexão',
    'Uma mente inquieta em busca de respostas',
    'O saber filosófico está em formação',
    'Profundas ideias estão emergindo',
    'Questionando as certezas do mundo'
  ]

  const randomNumberByMessage = useMemo(() => {
    return Math.floor(Math.random() * randomLoadingMessages.length)
  }, [randomLoadingMessages])

  const { generateAndRemoveImage } = useRandomImage()

  useEffect(() => {
    const interval = setInterval(() => generateAndRemoveImage(), 1300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex space-x-2 justify-center items-baseline' id="loader">
      <span className="text-neutral-50 text-3xl" suppressHydrationWarning>{randomLoadingMessages[randomNumberByMessage]}</span>

      <div className='h-2 w-2 bg-neutral-50 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-2 w-2 bg-neutral-50 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-2 w-2 bg-neutral-50 rounded-full animate-bounce'></div>
    </div>
  )
}
