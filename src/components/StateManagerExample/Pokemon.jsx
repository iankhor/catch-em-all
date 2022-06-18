import { useStore } from './store'
import shallow from 'zustand/shallow'

export default function Pokemon() {
  const { selected, loading } = useStore(({ selected, loading }) => ({ selected, loading }), shallow)

  if (loading) return <div style={{ backgroundColor: "grey" }}>Loading...</div>
  if (loading && !selected) return null

  if(selected) {
    const { name, weight, height, sprites } = selected
    const images = Object.values(sprites || {}).filter(Boolean)

    return (
      <div>
        <h1>{name}</h1>
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
        {images.map((url, index) => <img key={index} src={url} />)}
  
      </div>
    )
  }
}
