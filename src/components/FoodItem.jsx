import styles from "./foodItem.module.css"
export default function FoodItem({ food, setfoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image}/>
      <p> {food.title} </p>
      <button onClick={() => setfoodId(food.id)} >View recipe</button>
    </div>
  )
}