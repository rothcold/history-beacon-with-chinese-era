<script lang="ts">
  let eraData = [];

  const initData = async () => {
    const resp = await fetch("/data.json");
    const data = await resp.json();
    eraData = data.data;
  };
  initData();
</script>

<main>
  <div class="container">
    <table class="era-table" cellspacing="0">
      {#each eraData as era}
        <tr>
          <td> {era.era}</td>
          <td>
            {#each era.events as event}
              <div>{event}</div>
            {/each}
          </td>
        </tr>
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
