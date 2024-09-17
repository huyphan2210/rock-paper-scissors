<script lang="ts">
  import balloonYellow from "../../assets/images/balloon-yellow.svg";
  import balloonBlue from "../../assets/images/balloon-blue.svg";
  import balloonCoral from "../../assets/images/balloon-coral.svg";
  import balloonGreen from "../../assets/images/balloon-green.svg";
  import balloonRed from "../../assets/images/balloon-red.svg";
  import whiteFlag from "../../assets/images/white-flag.svg";
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
  <img
    class="white-flag"
    class:reveal={$currentResult === -1}
    src={whiteFlag}
    loading="lazy"
    alt="White Flag"
  />
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
      width: 10rem;

      &.fly {
        animation: win 10s normal;
      }
    }

    @for $i from 1 through 5 {
      .balloon:nth-child(#{$i}) {
        left: #{($i - 1) * 20 + "%"};
      }
    }
  }

  .white-flag {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10%;
    min-width: 10rem;
    opacity: 0;
    &.reveal {
      opacity: 1;
      animation: lose 2s alternate-reverse infinite;
    }
  }

  @keyframes win {
    0% {
      top: 100%;
    }
    100% {
      top: 0;
      transform: translateY(-100%);
    }
  }

  @keyframes lose {
    0% {
      rotate: -15deg;
    }
    100% {
      rotate: 30deg;
    }
  }

  @media screen and (min-width: 720px) {
    .white-flag {
      top: 80%;
    }
  }
</style>
