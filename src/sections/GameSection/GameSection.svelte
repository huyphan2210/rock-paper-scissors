<script lang="ts">
  import pentagonSvg from "../../assets/images/bg-pentagon.svg";
  import type { GameIconProps } from "./components/GameIcon/GameIcon.svelte";
  import iconRock from "../../assets/images/rock.svg";
  import iconPaper from "../../assets/images/paper.svg";
  import iconScissors from "../../assets/images/scissors.svg";
  import iconLizard from "../../assets/images/lizard.svg";
  import iconSpock from "../../assets/images/spock.svg";
  import GameIcon from "./components/GameIcon/GameIcon.svelte";

  import {
    Choice,
    playerChoice,
    setPlayerChoice,
  } from "../../store/ScoreStore";

  const gameIcons: GameIconProps[] = [
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

  const handlePlayerChoice = (iconName?: Choice) => {
    setPlayerChoice(iconName);
  };
</script>

<section id="game-section">
  <div class="pentagon" class:no-animation={$playerChoice}>
    <img
      class:invisible={$playerChoice}
      src={pentagonSvg}
      loading="lazy"
      alt="Pentagon"
    />
    {#each gameIcons as { iconImage, iconName }}
      <GameIcon
        isTheHouse={false}
        {iconImage}
        {iconName}
        {handlePlayerChoice}
      />
    {/each}
    <GameIcon
      isTheHouse
      iconImage={iconLizard}
      iconName={Choice.Lizard}
      {handlePlayerChoice}
    />
  </div>
</section>

<style lang="scss" scoped>
  @use "sass:math";
  #game-section {
    width: 100%;
    height: 50vh;
    margin-top: 10vh;
    display: grid;
    place-items: center;
  }

  .pentagon {
    position: relative;
    animation: circling 50s infinite;

    &.no-animation {
      animation-play-state: paused;
    }

    img {
      width: 100%;

      &.invisible {
        opacity: 0;
      }
    }
  }

  @keyframes circling {
    0% {
      transform: scale(70%);
    }
    @for $i from 1 through 300 {
      #{math.div($i, 3) + "%"} {
        transform: scale(70%) rotate(#{1.2 * $i}deg);
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .pentagon {
      transform: scale(1);
    }

    @keyframes circling {
      @for $i from 1 through 300 {
        #{math.div($i, 3) + "%"} {
          transform: rotate(#{1.2 * $i}deg);
        }
      }
    }
  }
</style>
