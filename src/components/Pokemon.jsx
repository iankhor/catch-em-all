import { useStore } from './../store'

export default function Pokemon() {
  const { selected } = useStore()
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
