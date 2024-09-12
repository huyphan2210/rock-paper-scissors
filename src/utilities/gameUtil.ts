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
  const win = didPlayerWin(playerChoice, theHouseChoice);
  if (win) return 1;
  const lose = didPlayerLose(playerChoice, theHouseChoice);
  if (lose) return -1;
  return 0;
};

const didPlayerWin = (playerChoice: Choice, theHouseChoice: Choice) => {
  switch (playerChoice) {
    case Choice.Rock:
      return theHouseChoice === Choice.Lizard;
    case Choice.Lizard:
      return theHouseChoice === Choice.Spock;
    case Choice.Spock:
      return theHouseChoice === Choice.Scissors;
    case Choice.Scissors:
      return theHouseChoice === Choice.Paper;
    case Choice.Paper:
      return Choice.Rock;
  }
};

const didPlayerLose = (playerChoice: Choice, theHouseChoice: Choice) => {
  switch (theHouseChoice) {
    case Choice.Rock:
      return playerChoice === Choice.Lizard;
    case Choice.Lizard:
      return playerChoice === Choice.Spock;
    case Choice.Spock:
      return playerChoice === Choice.Scissors;
    case Choice.Scissors:
      return playerChoice === Choice.Paper;
    case Choice.Paper:
      return Choice.Rock;
  }
};
