<script lang="ts">
  import pentagonSvg from "../../assets/images/bg-pentagon.svg";
</script>

<section id="game-section">
  <div class="pentagon">
    <img src={pentagonSvg} loading="lazy" alt="Pentagon" />
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
    img {
      width: 100%;
    }
  }
</style>
