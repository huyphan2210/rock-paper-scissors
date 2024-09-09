<script context="module" lang="ts">
  export interface GameIconProps {
    iconImage: string;
    iconName?: Choice;
  }

  export const defaultProps: GameIconProps = {
    iconImage: "",
    iconName: undefined,
  };
</script>

<script lang="ts">
  import { Choice, setPlayerChoice } from "../../../../store/ScoreStore";

  export let iconImage: string = defaultProps.iconImage;
  export let iconName = defaultProps.iconName;

  const handlePlayerChoice = () => {
    //To do: add animation
    setPlayerChoice(iconName);
  };
</script>

<button on:click={handlePlayerChoice} type="button" title={iconName}>
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
  }

  @keyframes circling {
    0% {
      transform: translate(-50%, -50%);
    }
    @for $i from 1 through 300 {
      #{math.div($i, 3) + "%"} {
        transform: translate(-50%, -50%) rotate(#{-1.2 * $i}deg);
      }
    }
  }
</style>
