import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'


export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({fact})

  const handleGetNewFact = async () => {
    refreshFact()
  }
  return (
    <main >
      <h1>App de gatitos</h1>
      <button onClick={handleGetNewFact}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}

      {/* <Otro/> */}
    </main>

  )
}
