<script lang="ts">
  import { onMount } from "svelte";
  import {
    currentResult,
    increaseScore,
    playerChoice,
    reset,
    setTheHouseChoice,
    theHouseChoice,
  } from "../../store/ScoreStore";
  import { calculateResult, gameIcons } from "../../utilities/gameUtil";
  import GameIcon from "../GameSection/components/GameIcon/GameIcon.svelte";

  let result: number | undefined;

  onMount(() => {
    const interval = setInterval(() => {
      setTheHouseChoice();
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      result = calculateResult($playerChoice!, $theHouseChoice!);
      if (result === 1) {
        increaseScore();
      }
      currentResult.update(() => result);
    }, 5000);
  });
</script>

<section id="result">
  <div class="game-icons-display">
    <GameIcon
      isPlayer
      iconName={$playerChoice}
      iconImage={gameIcons.find((icon) => icon.iconName === $playerChoice)
        ?.iconImage}
      isTheHouse={false}
    />
    <div class="result-declaration desktop" class:reveal={result !== undefined}>
      {#if result === -1}
        <h2>You lose</h2>
      {:else if result === 0}
        <h2>Draw</h2>
      {:else if result === 1}
        <h2>You win</h2>
      {:else}
        <h2>Placeholder</h2>
      {/if}
      <button type="button" on:click={reset}>Play again</button>
    </div>
    <GameIcon
      isPlayer={false}
      iconName={$theHouseChoice}
      iconImage={gameIcons.find((icon) => icon.iconName === $theHouseChoice)
        ?.iconImage}
      isTheHouse
    />
  </div>
  <div class="result-declaration" class:reveal={result !== undefined}>
    {#if result === -1}
      <h2>You lose</h2>
    {:else if result === 0}
      <h2>Draw</h2>
    {:else if result === 1}
      <h2>You win</h2>
    {:else}
      <h2>Placeholder</h2>
    {/if}
    <button type="button" on:click={reset}>Play again</button>
  </div>
</section>

<style lang="scss">
  #result {
    flex: 1;
    width: 100%;
    max-width: 60rem;
    animation: reveal 1s;
    display: grid;
    place-items: center;

    .game-icons-display {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 2rem;
    }
    .result-declaration {
      width: 0;
      overflow: hidden;
      text-transform: uppercase;
      color: white;
      transition: 1s;
      &.desktop {
        display: none;
      }
      h2 {
        display: flex;
        justify-content: center;
        font-size: clamp(3rem, 3.5vw, 3.5rem);
        white-space: nowrap;
        letter-spacing: 0.1rem;
      }

      button {
        display: flex;
        justify-content: center;
        background-color: white;
        font-family: "Barlow Semi Condensed", sans-serif;
        padding: 1rem 2rem;
        border: none;
        width: 100%;
        text-transform: uppercase;
        color: var(--dark-text);
        font-weight: 500;
        white-space: nowrap;
        font-size: clamp(1.5rem, 2vw, 2rem);
        letter-spacing: 0.1rem;
        border-radius: 0.5rem;

        &:hover {
          cursor: pointer;
          color: var(--rock-gradient-1);
        }
      }

      &.reveal {
        width: 100%;
      }
    }
  }

  @keyframes reveal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (min-width: 720px) {
    #result {
      place-items: unset;
      .game-icons-display {
        justify-content: center;
        gap: 5rem;
      }
      .result-declaration {
        display: none;

        &.desktop {
          display: block;
          &.reveal {
            width: 25%;
          }
        }
      }
    }
  }
</style>
