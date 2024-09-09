<script lang="ts">
  import rules from "../../assets/images/image-rules-bonus.svg";
  import iconClose from "../../assets/images/icon-close.svg";

  export let closeRules: () => void;
</script>

<section id="rules-section">
  <h2>RULES</h2>
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
    max-width: 25rem;
    height: calc(100vh - 4rem);
    background-color: white;
    display: grid;
    place-items: center;
    padding: 2rem;
    z-index: 1;
    animation: dissolve 0.3s;
    h2 {
      color: var(--dark-text);
      margin-block: 0;
    }
    img {
      width: 100%;
    }

    button {
      background-color: transparent;
      width: 1.5rem;
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
      display: block;
      text-align: left;
      border-radius: 0.5rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      h2 {
        font-size: 2rem;
      }
      button {
        position: absolute;
        right: 2rem;
        top: 2rem;
      }
    }
  }
</style>
