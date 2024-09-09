<script lang="ts">
  import GameSection from "./sections/GameSection/GameSection.svelte";
  import RulesSection from "./sections/RulesSection/RulesSection.svelte";
  import ScoreSection from "./sections/ScoreSection/ScoreSection.svelte";
  import { playerChoice } from "./store/ScoreStore";

  let isRulesOn = false;

  const toggleRules = () => {
    isRulesOn = !isRulesOn;
  };
</script>

<ScoreSection />
{#if !$playerChoice}
  <GameSection />
{/if}
{#if isRulesOn}
  <RulesSection closeRules={toggleRules} />
{/if}
<button on:click={toggleRules} type="button">RULES</button>

<style lang="scss" scoped>
  button {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    background-color: transparent;
    border: solid 0.125rem var(--header-outline);
    border-radius: 0.5rem;
    color: white;
    letter-spacing: 0.125rem;
    &:hover {
      cursor: pointer;
      background-color: white;
      border-color: white;
      color: var(--dark-text);
    }
  }

  @media screen and (min-width: 1024px) {
    button {
      right: 2rem;
      left: unset;
      transform: none;
    }
  }
</style>
