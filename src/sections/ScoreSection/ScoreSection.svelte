<script lang="ts">
  import { score } from "../../store/ScoreStore";
  const titleArray = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
</script>

<section id="score-section">
  <h1 class="title">
    {#each titleArray as title}
      <span>{title}</span>
    {/each}
  </h1>
  <div class="score">
    <label for="score-number">SCORE</label>
    <h2 id="score-number">{$score}</h2>
  </div>
</section>

<style lang="scss" scoped>
  #score-section {
    width: calc(100% - 3.25rem);
    max-width: 37rem;
    border-radius: 0.5rem;
    border: solid 0.125rem var(--header-outline);
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      display: grid;
      color: white;
      margin-block: 0;
      font-size: clamp(1.2rem, 2vw, 2rem);

      span {
        margin-top: -0.5rem;
        &:first-child {
          margin-top: 0;
        }
      }
    }

    .score {
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem 3rem;

      label {
        color: var(--score-text);
        font-weight: 500;
        letter-spacing: 0.1rem;
      }

      #score-number {
        margin-block: 0;
        font-size: clamp(2rem, 3vw, 3rem);
        text-align: center;
      }
    }
  }
</style>
