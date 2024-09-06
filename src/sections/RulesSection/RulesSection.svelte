<script lang="ts">
  import rules from "../../assets/images/image-rules-bonus.svg";
  import iconClose from "../../assets/images/icon-close.svg";

  export let closeRules: () => void;
</script>

<section id="rules-section">
  <img src={rules} loading="lazy" alt="The rules" />
  <button on:click={closeRules} type="button">
    <img src={iconClose} loading="lazy" alt="Close Icon" />
  </button>
</section>

<style lang="scss" scoped>
  #rules-section {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100vw - 4rem);
    max-width: 20rem;
    height: calc(100vh - 4rem);
    background-color: white;
    display: grid;
    place-items: center;
    padding: 2rem;
    z-index: 1;
    animation: dissolve 0.3s;
    img {
      width: 100%;
    }

    button {
      background-color: transparent;
      width: 2rem;
      aspect-ratio: 1;
      border: none;
      padding: 0;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @keyframes dissolve {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1024px) {
    #rules-section {
      height: unset;
    }
  }
</style>
