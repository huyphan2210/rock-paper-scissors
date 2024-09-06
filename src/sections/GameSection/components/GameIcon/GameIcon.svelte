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
    setPlayerChoice(iconName);
  };
</script>

<button on:click={handlePlayerChoice} type="button" title={iconName}>
  <img src={iconImage} loading="lazy" alt={iconName} />
</button>

<style lang="scss" scoped>
  button {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 0;
    border: none;
    background-color: transparent;
    padding: 0;

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
</style>
