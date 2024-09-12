<script lang="ts">
  import { playerChoice } from "../../store/ScoreStore";
  import { gameIcons } from "../../utilities/gameUtil";
  import GameIcon from "../GameSection/components/GameIcon/GameIcon.svelte";
</script>

<section id="result">
  <GameIcon
    isPlayer
    iconName={$playerChoice}
    iconImage={gameIcons.find((icon) => icon.iconName === $playerChoice)
      ?.iconImage}
    isTheHouse={false}
  />
  <GameIcon
    isPlayer={false}
    iconName={$playerChoice}
    iconImage={gameIcons.find((icon) => icon.iconName === $playerChoice)
      ?.iconImage}
    isTheHouse
  />
</section>

<style lang="scss">
  #result {
    flex: 1;
    width: 100%;
    gap: 2rem;
    max-width: 60rem;
    animation: reveal 2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @keyframes reveal {
    0% {
      display: none;
      opacity: 0;
    }
    50% {
      opacity: 0;
      display: flex;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (min-width: 720px) {
    #result {
      justify-content: center;
      gap: 5rem;
    }
  }
</style>
