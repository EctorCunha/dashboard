import axios from "axios"
import { useEffect, useState } from "react"



export function UserList(){
 const [games, setGames] = useState([])

 const fetchGames = async () => {
  try {
      const response = await axios.get(`https://api.databinteligencia.com.br/Brasileirao/jogos/2022`)
      const allGames = response.data
      console.log(allGames)
      setGames(allGames)
  } catch (error) {
      console.log(error)
  }
 } 

 useEffect(() => {
   fetchGames()
 }, [])
 

    return (
        <>
        <h1>Lista de Jogos</h1>
        <p>{games}</p>
        </>
    )
}