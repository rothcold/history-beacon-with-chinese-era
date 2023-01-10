<script lang="ts">
  const dynasties = ["秦", "西汉"];
  let eraData = {};

  const initData = async () => {
    dynasties.forEach((dynasty) => {
      initDynasty(dynasty);
    });
  };

  const initDynasty = async (dynasty: string) => {
    const resp = await fetch(`/data/${dynasty}.json`);
    const data = await resp.json();
    eraData[dynasty] = data.data;
  };
  initData();
</script>

<main>
  <div class="container">
    <table class="era-table" cellspacing="0">
      {#each dynasties as dynasty}
        {#if dynasty in eraData}
          {#each eraData[dynasty] as era}
            <tr>
              <td> {era.era}</td>
              <td>
                {#each era.events as event}
                  <div>{event}</div>
                {/each}
              </td>
            </tr>
          {/each}
        {/if}
      {/each}
    </table>
  </div>
</main>

<style>
  .container {
    width: 100%;
  }
  .era-table {
    width: 100%;
    padding: 3%;
  }

  .era-table > tr > td:nth-child(odd) {
    width: 20%;
    vertical-align: top;
    border-right: black 1px solid;
  }
  .era-table > tr > td:nth-child(even) {
    width: 80%;
    padding-left: 5%;
  }
</style>
