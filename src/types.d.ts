export interface Word {
    word: string,
    meanings: Meaning[],
    phonetic: string,
    phonetics: Phonetic[],
    sourceUrls: string[]
}

export interface Phonetic {
    text: string,
    audio: string
}

export interface Definition {
    definition: string,
}
  
export interface Meaning {
    partOfSpeech: string,
    definitions: Definition[],
    antonyms: string[],
    synonyms: string[]
}