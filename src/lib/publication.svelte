<script lang="ts">
    export let link: string | undefined = undefined;  // arxiv.com?mycoolpaper
    export let title: string;       // captivating title
    export let date: string;        // jan 1970
    export let image: string;       // myface.jpg
    export let published: string;   // arxiv
    export let description: string; // We proved that that one apple a day keeps the doctor away
</script>

<style>
    .box {
        transition: transform 0.3s ease-in-out;
    }
    .box:hover {
        transform: scale(1.02);
    }
</style>

<svelte:element this={link ? 'a' : 'div'} class="box" href={link}>
    <div class="columns is-vcentered">
        <div class="column is-narrow is-hidden-mobile">
            <figure class="image is-48x48 is-inline-block">
                <img class="is-rounded" src={image} alt='' />
            </figure>
        </div>
        <div class="column">
            <div class="columns mb-0">
                <div class="column mb-0 pb-1">
                    <b class="title is-6 mb-0"> {title} </b>
                </div>
                <div class="column mb-0 pb-1 is-narrow is-hidden-mobile" style="text-align:right">
                    <b class="title is-6 mb-0"> {published} </b>
                    <small style="display: inline"> ({date}) </small>
                </div>
            </div>
        
            <p> {description} </p>
        </div>
    </div>
</svelte:element>