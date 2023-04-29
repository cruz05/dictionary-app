import { useEffect, useState } from "react";
import { Phonetic, Meaning, Word } from "./types";
import WordCard from "./components/Word";

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export default function App() {
  const [word, setWord] = useState('welcome')
  const [response, setResponse] = useState([])


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(word) {
      getDefinition(word)
    }

  }

  const getDefinition = (word: string) => {
    fetch(`${API_URL}/${word}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setResponse(data)
      }).catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    getDefinition(word)
  }, [])

  return (
    <main className="App">
      <h1>Dictionary</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setWord(e.target.value)}placeholder='Insert a word' />
        <input className="btn-submit" type='submit'value='Search'/>
      </form>
      <div className="words">
      {
        response.length > 0
        ? response.map((item: Word, index) => <WordCard key={index} name={item.word} definition={item.meanings} phonetic={item.phonetic} />)
        : <p>No definitions found for the word {word}.</p>
      }
      </div>
    </main>
  )
}