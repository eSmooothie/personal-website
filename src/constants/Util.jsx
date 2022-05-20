import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
});

export function LoremGenerateSetences(num){
    return lorem.generateSentences(num);
}

export function LoremGenerateWords(num){
    return lorem.generateWords(num);
}

export function LoremGenerateParagraphs(num){
    return lorem.generateParagraphs(num);
}