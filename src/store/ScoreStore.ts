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
export const botChoice = writable<Choice | undefined>();

export const increaseScore = () => {
  score.update((lastScore) => lastScore + 1);
};

export const setPlayerChoice = (choice?: Choice) => {
  playerChoice.update(() => choice);
};

export const setBotChoice = () => {
  botChoice.update(getRandomChoice);
};

const getRandomChoice = () => {
  const values = Object.values(Choice);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex] as Choice;
};
