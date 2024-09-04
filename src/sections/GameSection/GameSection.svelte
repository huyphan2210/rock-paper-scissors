<script lang="ts">
  import pentagonSvg from "../../assets/images/bg-pentagon.svg";
  import type { GameIconProps } from "./components/GameIcon/GameIcon.svelte";
  import iconRock from "../../assets/images/icon-rock.svg";
  import iconPaper from "../../assets/images/icon-paper.svg";
  import iconScissors from "../../assets/images/icon-scissors.svg";
  import iconLizard from "../../assets/images/icon-lizard.svg";
  import iconSpock from "../../assets/images/icon-spock.svg";
  import GameIcon from "./components/GameIcon/GameIcon.svelte";

  const gameIcons: GameIconProps[] = [
    {
      iconImage: iconRock,
      iconName: "Rock",
    },
    {
      iconImage: iconPaper,
      iconName: "Paper",
    },
    {
      iconImage: iconScissors,
      iconName: "Scissors",
    },
    {
      iconImage: iconLizard,
      iconName: "Lizard",
    },
    {
      iconImage: iconSpock,
      iconName: "Spock",
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
  $base-scale: 80%;
  @mixin responsive-scale($scale-factor) {
    @media (min-width: 1024px) {
      transform: scale($scale-factor * 1.2);
    }
  }

  #game-section {
    width: 100%;
    height: 50vh;
    margin-top: 10vh;
    display: grid;
    place-items: center;
  }

  .pentagon {
    position: relative;
    transform: scale($base-scale);
    @include responsive-scale(1);
    img {
      width: 100%;
    }
  }
</style>
