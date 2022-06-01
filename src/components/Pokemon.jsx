export default function Pokemon({ pokemon }) {
  const { name, weight, height, sprites } = pokemon
  const images = Object.values(sprites || {}).filter(Boolean)

  return (
    <div>
      <h1>{name}</h1>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      {images.map((url) => <img src={url} />)}

    </div>
  )

}
