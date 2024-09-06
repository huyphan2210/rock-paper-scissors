<script lang="ts">
  import pentagonSvg from "../../assets/images/bg-pentagon.svg";
  import type { GameIconProps } from "./components/GameIcon/GameIcon.svelte";
  import iconRock from "../../assets/images/rock.svg";
  import iconPaper from "../../assets/images/paper.svg";
  import iconScissors from "../../assets/images/scissors.svg";
  import iconLizard from "../../assets/images/lizard.svg";
  import iconSpock from "../../assets/images/spock.svg";
  import GameIcon from "./components/GameIcon/GameIcon.svelte";

  import { Choice } from "../../store/ScoreStore";

  const gameIcons: GameIconProps[] = [
    {
      iconImage: iconPaper,
      iconName: Choice.Paper,
    },
    {
      iconImage: iconScissors,
      iconName: Choice.Scissors,
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
      iconImage: iconRock,
      iconName: Choice.Rock,
    },
  ];
</script>

<section id="game-section">
  <div class="pentagon">
    <img src={pentagonSvg} loading="lazy" alt="Pentagon" />
    {#each gameIcons as { iconImage, iconName }}
      <GameIcon {iconImage} {iconName} />
    {/each}
  </div>
</section>

<style lang="scss" scoped>
  #game-section {
    width: 100%;
    height: 50vh;
    margin-top: 10vh;
    display: grid;
    place-items: center;
  }

  .pentagon {
    position: relative;
    transform: scale(70%);
    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 1280px) {
    .pentagon {
      transform: scale(1);
    }
  }
</style>
