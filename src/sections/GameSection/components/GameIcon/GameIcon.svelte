<script context="module" lang="ts">
  export const defaultProps: GameIconProps = {
    iconImage: "",
    iconName: undefined,
  };
</script>

<script lang="ts">
  import { Choice, playerChoice } from "../../../../store/ScoreStore";
  import type { GameIconProps } from "../../../../utilities/gameUtil";

  export let iconImage: string | undefined = defaultProps.iconImage;
  export let iconName = defaultProps.iconName;
  export let isPlayer: boolean;
  export let isTheHouse: boolean;

  export let handlePlayerChoice = (iconName?: Choice) => {};
</script>

<button
  class:player-choice={$playerChoice && isPlayer}
  class:the-house-choice={isTheHouse}
  class:the-house-reveal={isTheHouse && $playerChoice}
  on:click={() => {
    handlePlayerChoice(iconName);
  }}
  type="button"
  title={iconName}
>
  <img src={iconImage} loading="lazy" alt={iconName} />
</button>

<style lang="scss" scoped>
  @use "sass:math";
  button {
    position: absolute;
    left: 50%;
    top: 0;
    border: none;
    background-color: transparent;
    padding: 0;
    animation: circling 50s infinite;
    &:nth-child(2) {
      left: 100%;
      top: 38%;
    }

    &:nth-child(3) {
      left: 82%;
      top: 100%;
    }

    &:nth-child(4) {
      left: 18%;
      top: 100%;
    }

    &:nth-child(5) {
      left: 0;
      top: 38%;
    }

    &:hover {
      cursor: pointer;
    }

    &.player-choice {
      position: static;
      animation: none;
      cursor: none;
      pointer-events: none;
      width: 30%;
      min-width: 8rem;
      img {
        width: 100%;
      }
    }

    &.the-house-choice {
      position: static;
      cursor: none;
      pointer-events: none;
      animation: none;
      width: 30%;
      min-width: 8rem;
      img {
        width: 100%;
        opacity: 0;
      }
    }

    &.the-house-reveal {
      img {
        opacity: 1;
      }
    }
  }

  @keyframes circling {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
</style>
