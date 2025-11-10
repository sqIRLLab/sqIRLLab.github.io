<script lang="ts">
    import Event from "$lib/event.svelte";
    import events from "$data/events.json";
</script>


{#each events as event}
    <Event {...event} />
{/each}
