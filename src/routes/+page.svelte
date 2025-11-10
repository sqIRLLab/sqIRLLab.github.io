<script lang="ts">
    import Navbar from "$lib/navbar.svelte";
    import News from "$lib/news.svelte";
    import news from "$data/news.json";
    import sponsors from "$data/sponsors.json";
</script>

<Navbar />

<div class="columns">
    <div class="column is-3">
        <div class="box has-text-centered">
            <figure class="image is-128x128 is-inline-block">
                <img src="sqirl.png" alt="sqirl" />
            </figure>
            <!-- <h4 class="subtitle is-4"> <b> sqIRL </b> </h4> -->

            <h6 class="subtitle is-6"> Interpretable Representation Learning </h6>

            <hr />
            <div class="block">
                <span class="icon"><i class="fas fa-envelope"></i> </span>
                <span> <a href="mailto:doomsthomas@gmail.com"> Email </a></span>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="box">
            <div class="content">
                <p> 
                    The Interpretable Representation Learning lab, sqIRL, at the University of Antwerp pursues fundamental research at the intersection of machine learning and interpretability/explainability.
                    Our research focuses on the inner-workings of AI systems and the learning processes that produce them.
                    We aim to develop AI systems that are interpretable/explainable and more efficient in their use of data and computational resources.
                </p>
            </div>
        </div>

        <h5 class="title is-5 ml-2 mb-1"> News </h5>
        {#each news as n}
            <News {...n} />
        {/each}

        <!-- <h5 class="title is-5 ml-2 mb-1"> Sponsors </h5>
        {#each sponsors as s}
        <div class="tag is-large"> {s} </div>
        {/each}
         -->
    </div>
</div>
