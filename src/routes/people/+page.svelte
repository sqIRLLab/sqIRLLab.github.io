<script lang="ts">
  import Person from "$lib/person.svelte";
  import people from "$data/people.json";
</script>



{#each people as person}
  <Person {...person} />
{/each}
