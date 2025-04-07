<script lang="ts">
    export let link: string = '';        // johndoe.github.io
    export let image: string = '';       // john.jpg
    export let name: string = '';        // John Doe
    export let status: string = '';      // PhD student
    export let specialty: string = '';   // resolve famine & disease with AI
</script>

<style>
    .box {
        transition: transform 0.3s ease-in-out;
    }
    .box:hover {
        transform: scale(1.02);
    }
</style>

<a class="box" href={link}>
    <div class="columns is-vcentered">
        <div class="column is-narrow is-hidden-mobile">
            <figure class="image is-64x64 is-inline-block">
                <img class="is-rounded" src={image} alt='' />
            </figure>
        </div>
        <div class="column">
            <h5 class="title is-5 mb-0" style="display: inline"> {name} </h5>
            <small style="display: inline"> ({status}) </small>
            <p> <b> {specialty} </b> </p>
        </div>
    </div>
  </a>