import iconRock from "../assets/images/rock.svg";
import iconPaper from "../assets/images/paper.svg";
import iconScissors from "../assets/images/scissors.svg";
import iconLizard from "../assets/images/lizard.svg";
import iconSpock from "../assets/images/spock.svg";
import { Choice } from "../store/ScoreStore";

export interface GameIconProps {
  iconImage?: string;
  iconName?: Choice;
}

export const gameIcons: GameIconProps[] = [
  {
    iconImage: iconPaper,
    iconName: Choice.Paper,
  },
  {
    iconImage: iconRock,
    iconName: Choice.Rock,
  },
  {
    iconImage: iconLizard,
    iconName: Choice.Lizard,
  },
  {
    iconImage: iconSpock,
    iconName: Choice.Spock,
  },

  {
    iconImage: iconScissors,
    iconName: Choice.Scissors,
  },
];

export const calculateResult = (
  playerChoice: Choice,
  theHouseChoice: Choice
) => {
  if (playerChoice === theHouseChoice) return 0;
  const win = didPlayerWin(playerChoice, theHouseChoice);
  if (win) return 1;
  return -1;
};

const winConditions: Record<Choice, Choice[]> = {
  [Choice.Rock]: [Choice.Lizard, Choice.Scissors],
  [Choice.Lizard]: [Choice.Spock, Choice.Paper],
  [Choice.Spock]: [Choice.Scissors, Choice.Rock],
  [Choice.Scissors]: [Choice.Paper, Choice.Lizard],
  [Choice.Paper]: [Choice.Rock, Choice.Spock],
};

const didPlayerWin = (playerChoice: Choice, theHouseChoice: Choice) => {
  return winConditions[playerChoice].includes(theHouseChoice);
};
