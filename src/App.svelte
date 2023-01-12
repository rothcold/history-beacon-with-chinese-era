<script lang="ts">
  import qinData from "./data/秦.json";
  const dynasties = ["秦", "西汉"];
</script>

<main>
  <div class="container">
    {#each qinData.data as era}
      {#if era.events.length > 0}
        <div class="era-entry">
          <div class="era-name">
            {era.era}
          </div>
          <div class="era-events">
            {#each era.events as event}
              <div>{event}</div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</main>

<style lang="scss">
  .container {
    width: 100%;
    min-height: 100vh;
  }
  .era-entry {
    display: flex;
    .era-name {
      width: 30%;
      text-align: right;
      border-top: solid 1px;
      border-right: solid 1px;
    }
    .era-events {
      width: 70%;
    }
  }
</style>
