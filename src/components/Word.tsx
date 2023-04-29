import { Meaning } from "../types"

interface Props {
    name: string,
    definition: Meaning[],
    phonetic: string
}

export default function WordCard({name, definition, phonetic}:Props) {
  return (
    <div className="word-card">
        <h2>{name.toUpperCase()}</h2>
        <h3>Phonetics</h3>
          <p>{phonetic}</p>
        <h3>Definitions</h3>
          {definition.map(({partOfSpeech}, index) => <p key={index}>{partOfSpeech}</p>)}
        <h3>Synonyms</h3>
        <h3>Antonyms</h3>
    </div>
  )
}
