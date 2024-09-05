<script context="module" lang="ts">
  export interface GameIconProps {
    iconImage: string;
    iconName: string;
  }

  export const defaultProps: GameIconProps = {
    iconImage: "",
    iconName: "",
  };
</script>

<script lang="ts">
  export let iconImage: string = defaultProps.iconImage;
  export let iconName: string = defaultProps.iconName;
</script>

<button type="button" title={iconName}>
  <img src={iconImage} loading="lazy" alt={iconName} />
</button>

<style lang="scss" scoped>
  button {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 0;
    border: none;
    background-color: transparent;
    padding: 0;

    &:nth-child(2) {
      left: 100%;
      top: 38%;
    }

    &:nth-child(3) {
      left: 82%;
      top: 100%;
    }

    &:nth-child(4) {
      left: 18%;
      top: 100%;
    }

    &:nth-child(5) {
      left: 0;
      top: 38%;
    }

    &:hover {
      cursor: pointer;
    }
  }
</style>
