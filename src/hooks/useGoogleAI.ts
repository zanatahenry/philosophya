export const useGoogleAI = () => {
  const handleSubmit = async () => {
    try {
      console.log('bateu')
      const response = await fetch("http://localhost:3000/api", {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  return {
    handleSubmit
  }
}
