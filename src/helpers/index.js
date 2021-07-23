
export function getMemes(setMemes) {
  const rand = Math.random().toString(36).substring(4)
  fetch('https://meme-api-bc.web.app/memes?x='+rand)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMemes(data)
      })
      .catch(err => console.error(err))
}