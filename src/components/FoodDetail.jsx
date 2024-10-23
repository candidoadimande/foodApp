import { useEffect, useState } from "react"
import styles from "./foodDetail.module.css"
import Ingredients from "./Ingredients"
export default function FoodDetail({foodId}) {
  const [food, setFood] = useState({})
  const [isLoading, setisLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY = "1ca2909c75d04cbabfdaa3763a067433"
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setisLoading(false);
    }
    fetchFood()
  }, [foodId])
  return (
    <div className={styles.foodetailContainer}>
      <div>
        <h1 className={styles.title}>{food.title}</h1>
        <img className={styles.imgContainer} src={food.image}/>
      </div>
      <div>
      <span>
        <strong>{food.readyInMinutes}</strong>
      </span>
      </div>
      <Ingredients food={food} isLoading={isLoading}/>
      <div>
      <ol>
      <h3>Instructions</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => (
          <li>{step.step}</li>))
        )}
      </ol>
      </div>
    </div>
  )
}