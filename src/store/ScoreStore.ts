import { writable } from "svelte/store";

export const score = writable(0);

export const increaseScore = () => {
  score.update((lastScore) => lastScore + 1);
};
