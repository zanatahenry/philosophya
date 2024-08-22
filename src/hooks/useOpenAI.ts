export const useOpenai = () => {
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api", { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: [
            {
              "role": "system",
              "content": "You will be provided with a description of a mood, and your task is to generate the CSS code for a color that matches it. Write your output in json with a single key called \"css_code\"."
            },
            {
              "role": "user",
              "content": "Blue sky at dusk."
            }
          ],
          max_tokens: 64,
          model: 'text-moderation-007',
          top_p: 1
        })
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
