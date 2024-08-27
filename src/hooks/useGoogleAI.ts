export const useGoogleAI = () => {
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const phrase: { data: string } = await response.json()
      if (!phrase?.data) return null

      const splitPhrase = phrase?.data.split("-")

      const treatedPhrase = splitPhrase[0].replace(/"/g, "").trim()
      const treatedAuthor = splitPhrase[1].replace(/\*/g, "").trim()
      
      return {
        author: treatedAuthor,
        phrase: treatedPhrase
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    handleSubmit
  }
}
