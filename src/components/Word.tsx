import { Fragment } from 'react'
import { Word } from '../types'

export default function WordCard({
  word,
  meanings,
  phonetic,
  phonetics
}: Word) {
  return (
    <div className='word-card'>
      <h2>
        {word.toUpperCase()} <span className='phonetic'>{phonetic}</span>
      </h2>
      <h3>Phonetics</h3>
      <ul>
        {phonetics.map(({ text, audio }, i) => (
          <Fragment key={i}>
            <li>{text}</li>
            {audio && <audio controls src={audio}></audio>}
          </Fragment>
        ))}
      </ul>
      <h3>Definitions</h3>
      <div>
        {meanings.map(
          ({ partOfSpeech, definitions, synonyms, antonyms }, i) => (
            <div className='definition' key={i}>
              <p>{partOfSpeech}</p>
              <ul>
                {definitions.map(({ definition }, i) => (
                  <li key={i}>{definition}</li>
                ))}
              </ul>
              {synonyms.length > 0 && <h4>Synonyms: </h4>}
              <p>{synonyms.join(', ')}</p>
              {antonyms.length > 0 && <h4>Antonyms: </h4>}
              <p>{antonyms.join(', ')}</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}
