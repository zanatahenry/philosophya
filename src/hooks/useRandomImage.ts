export const useRandomImage = () => {
  const getRandomPosition = (exclusionZone?: DOMRect) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight

    const maxLeft = windowWidth - 500
    const maxTop = windowHeight - 500
    
    let randomLeft, randomTop

    do {
      randomLeft = Math.floor(Math.random() * (windowWidth - 120));
      randomTop = Math.floor(Math.random() * (windowHeight - 120));
    } while (
      randomLeft < Number(exclusionZone?.right) && 
      randomLeft + 60 > Number(exclusionZone?.left) &&
      randomTop < Number(exclusionZone?.bottom) && 
      randomTop + 60 > Number(exclusionZone?.top)
    )

    return { left: randomLeft, top: randomTop }
  }

  const imageFiles = [
    '/book.svg',
    '/vitruviano.svg',
    '/book-lamp.svg',
    '/eye.svg'
  ]

  const generateAndRemoveImage = () => {
    const imageElement = document.createElement('img')
    const randomImageIndex = Math.floor(Math.random() * imageFiles.length)

    const loaderText = document.querySelector("#loader")
    const exclusionZone = loaderText?.getBoundingClientRect()

    const { top, left } = getRandomPosition(exclusionZone)

    imageElement.src = imageFiles[randomImageIndex]
    imageElement.style.position = 'absolute'
    imageElement.style.width='60px'
    imageElement.style.height='60px'
    imageElement.style.top = `${top}px`
    imageElement.style.left = `${left}px`
    imageElement.style.transform = 'translate(-50%, -50%)'
    imageElement.style.transition = 'opacity 1s ease-in-out'

    document.body.appendChild(imageElement)

    setTimeout(() => {
      imageElement.style.opacity = '0'
      setTimeout(() => imageElement.remove(), 500)
    }, 1500);
  }

  return {
    generateAndRemoveImage
  }
}
