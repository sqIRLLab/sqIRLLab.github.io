<script lang="ts">
    export let link: string;        // article.html
    export let title: string;       // talk at NeurIPS'24
    export let date: string;        // 1-7 Jan 2025
    export let image: string;       // myface.jpg
    export let description: string; // i talked about my fears & dreams
</script>


<a class="box" href={link}>
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
                    <small style="display: inline"> ({date}) </small>
                </div>
            </div>
        
            <p> {description} </p>
        </div>
    </div>
</a>

<!-- <div class="columns is-align-items-stretch">
    <div class="column is-narrow">
        {#if kind === "talk"}
        <div class="box" style="height: 100%; background-color:rgb(240, 220, 200);">
            <div class="is-flex is-align-items-center is-justify-content-center is-flex-direction-column" style="height: 100%;">
                <b> {kind} </b>
                <span class="icon is-large">
                    <i class="fas fa-chalkboard-teacher fa-2x"></i>
                </span>
            </div>
        </div>
        {:else if kind === "event"}
        <div class="box" style="height: 100%; background-color:rgb(220, 240, 220);">
            <div class="is-flex is-align-items-center is-justify-content-center is-flex-direction-column" style="height: 100%;">
                <b> {kind} </b>
                <span class="icon is-large">
                    <i class="fas fa-users-between-lines fa-2x"></i>
                </span>
            </div>
        </div>
        {/if}
        
    </div>
    <div class="column">
        <a class="box" href={link} style="height: 100%;">
            <div class="columns">
                <div class="column">
                    <h5 class="title is-5 mb-0">{name}</h5>
                    <p>{description}</p>
                </div>
                <div class="column is-narrow is-hidden-mobile has-text-right">
                    <b class="title is-6 mb-0">{venue}</b>
                    <small>({date})</small>
                </div>
            </div>
        </a>
    </div>
</div> -->