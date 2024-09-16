<script lang="ts">
  import EffectSection from "./sections/EffectSection/EffectSection.svelte";
  import GameSection from "./sections/GameSection/GameSection.svelte";
  import ResultSection from "./sections/ResultSection/ResultSection.svelte";
  import RulesSection from "./sections/RulesSection/RulesSection.svelte";
  import ScoreSection from "./sections/ScoreSection/ScoreSection.svelte";
  import { playerChoice } from "./store/ScoreStore";

  let isRulesOn = false;
  let isResultRevealed = false;
  const toggleRules = () => {
    isRulesOn = !isRulesOn;
  };

  playerChoice.subscribe((value) => {
    if (value) {
      setTimeout(() => {
        isResultRevealed = true;
      }, 1000);
    } else {
      isResultRevealed = false;
    }
  });
</script>

<ScoreSection />
<GameSection />
<RulesSection {isRulesOn} closeRules={toggleRules} />
{#if isResultRevealed}
  <ResultSection />
{/if}
<EffectSection />
<button on:click={toggleRules} type="button">RULES</button>

<style lang="scss" scoped>
  button {
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
      align-self: flex-end;
    }
  }
</style>
