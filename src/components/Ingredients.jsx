export default function Ingrendients({food, isLoading}) {
  return (
    <div>
      <h2>Ingrendients</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : (
      food.extendedIngredients.map((item) => (
        <>
          <img src={`https://spoonacular.com/cdn/ingrendients_100x100/ ${item.image}`}/>
          <p>{item.name}</p>
        </>
      ))
      )}
    </div>
  )
}