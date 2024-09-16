<script lang="ts">
  import balloonYellow from "../../assets/images/balloon-yellow.svg";
  import balloonBlue from "../../assets/images/balloon-blue.svg";
  import balloonCoral from "../../assets/images/balloon-coral.svg";
  import balloonGreen from "../../assets/images/balloon-green.svg";
  import balloonRed from "../../assets/images/balloon-red.svg";
  import { currentResult } from "../../store/ScoreStore";

  const balloons = [
    balloonYellow,
    balloonBlue,
    balloonCoral,
    balloonGreen,
    balloonRed,
  ];
  let effectSection: HTMLElement;
</script>

<section bind:this={effectSection} id="effect">
  {#each balloons as balloon}
    <img
      class="balloon"
      class:fly={$currentResult === 1}
      src={balloon}
      loading="lazy"
      alt="balloon"
    />
  {/each}
</section>

<style lang="scss">
  #effect {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    .balloon {
      position: absolute;
      top: 100%;
      width: 5rem;
      transition: 10s;

      &.fly {
        top: 0;
      }
    }
    @for $i from 1 through 5 {
      .balloon:nth-child(#{$i}) {
        left: #{random(100) + "%"};
      }
    }
  }
</style>
