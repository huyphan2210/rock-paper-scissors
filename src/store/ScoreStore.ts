import { writable } from "svelte/store";
export enum Choice {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
  Lizard = "Lizard",
  Spock = "Spock",
}

export const score = writable(0);

export const playerChoice = writable<Choice | undefined>();
export const theHouseChoice = writable<Choice | undefined>();
export const currentResult = writable<number | undefined>();

export const increaseScore = () => {
  score.update((lastScore) => lastScore + 1);
};

export const setPlayerChoice = (choice?: Choice) => {
  playerChoice.update(() => choice);
};

export const setTheHouseChoice = () => {
  theHouseChoice.update(getRandomChoice);
};

export const reset = () => {
  playerChoice.update(() => undefined);
  theHouseChoice.update(() => undefined);
  currentResult.update(() => undefined);
};

const getRandomChoice = () => {
  const values = Object.values(Choice);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex] as Choice;
};
