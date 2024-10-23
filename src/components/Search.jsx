import { useEffect, useState } from "react"
import styles from "./search.module.css"
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "1ca2909c75d04cbabfdaa3763a067433"
export default function Search({footData, setfoodData}) {
  const [query, setQuery] = useState("")
  useEffect(() => {
    async function fetchFood() {
    const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    setfoodData(data.results);
  }
  fetchFood()
  }, [query])
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.inputContainer}
        type="text"
        value={query}
        placeholder="Enter to search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}