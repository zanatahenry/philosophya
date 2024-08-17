export default function LoadingText () {
  return (
    <div className='flex space-x-2 justify-center items-center'>
      <span className="text-neutral-50">Carregando</span>

      <div className='h-2 w-2 bg-neutral-50 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-2 w-2 bg-neutral-50 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-2 w-2 bg-neutral-50 rounded-full animate-bounce'></div>
    </div>
  )
}
