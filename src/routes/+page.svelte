<script lang="ts">
    import Navbar from "$lib/navbar.svelte";
    import News from "$lib/news.svelte";

    const news = [
        {
            date: "Jan 2025",
            title: "Paper accepted",
            description: "Two papers accepted at ICLR'25 on Twin Network Augmentation and Interpretability via Bilinear MLPs.",
            link: ""
        },
        {
            date: "Dec 2024",
            title: "Paper accepted",
            description: "Saja's paper on the interpretability of Capsule Networks was accepted at the journal of Neurocomputing.",
            link: "https://arxiv.org/abs/2305.05349"
        },
        {
            date: "Oct 2024",
            title: "Paper accepted",
            description: "Thomas' work on deeper forward-forward networks got published at TMLR.",
            link: "https://openreview.net/forum?id=a7KP5uo0Fp"
        },
        {
            date: "Oct 2024",
            title: "New member",
            description: "sqIRL welcomes Peter to the lab.",
            link: ""
        },
        {
            date: "Sep 2024",
            title: "Workshop",
            description: "Co-organized the AIMLAI Workshop held in conjunction with ECML-PKDD'24.",
            link: ""
        }
    ]

    const sponsors = [
        "FWO"
    ]
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
                <span> <a href="mailto:doomsthomas@gmail.com"> Email </span>
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
