<script lang="ts">
    export let link: string;        // article.html
    export let title: string;       // breaking and captivating title
    export let date: string;        // jan 1970
    export let description: string; // something really cool happened here
</script>

<a class="box" href={link}>
    <small> {title} | {date} </small>
    <p> <b> {description} </b> </p>
</a>