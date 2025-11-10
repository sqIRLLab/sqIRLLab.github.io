<script lang="ts">
    import Publication from "$lib/publication.svelte";
    import publications from "$data/publications.json";
</script>


{#each publications as publication}
    <Publication {...publication} />
{/each}
