<script lang="ts">
  import pentagonSvg from "../../assets/images/bg-pentagon.svg";
  import GameIcon from "./components/GameIcon/GameIcon.svelte";

  import {
    Choice,
    playerChoice,
    setPlayerChoice,
  } from "../../store/ScoreStore";
  import { gameIcons } from "../../utilities/gameUtil";

  const handlePlayerChoice = (iconName?: Choice) => {
    setPlayerChoice(iconName);
  };
  let gameSection: HTMLElement;
  playerChoice.subscribe((choice) => {
    if (gameSection) {
      if (choice) {
        setTimeout(() => {
          gameSection.style.display = "none";
        }, 1000);
      } else {
        gameSection.style.display = "grid";
        gameSection.style.height = "";
      }
    }
  });
</script>

<section id="game-section" bind:this={gameSection}>
  <div class="pentagon" class:invisible={$playerChoice}>
    <img src={pentagonSvg} loading="lazy" alt="Pentagon" />
    {#each gameIcons as { iconImage, iconName }}
      <GameIcon
        isPlayer={false}
        isTheHouse={false}
        {iconImage}
        {iconName}
        {handlePlayerChoice}
      />
    {/each}
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
    .pentagon {
      position: relative;
      animation: circling 50s infinite;

      &.invisible {
        opacity: 0;
      }

      img {
        width: 100%;
      }

      @keyframes circling {
        0% {
          transform: scale(70%) rotate(0deg);
        }
        100% {
          transform: scale(70%) rotate(360deg);
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    #game-section {
      .pentagon {
        @keyframes circling {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
</style>
