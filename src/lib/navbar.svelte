<script lang="ts">
    export let page: string = '';

    const is_active = (name: string): string => page === name ? "is-active" : "";
    let burger = false;
</script>

<div class="columns is-hidden-mobile">
    <div class="column is-3 has-text-centered">
        <a href="."> <b style="font-weight: 800" class="title is-3"> {"sqIRL"} </b> </a>
    </div>
    <div class="column">
        <div class="tabs is-boxed is-centered">
            <ul>
                <li class={is_active("")}>
                    <a href="/">
                        <span class="icon is-small"><i class="fas fa-house" aria-hidden="true"></i></span>
                        <span>Home</span>
                    </a>
                </li>
                <li class={is_active("people")}>
                    <a href="/people">
                        <span class="icon is-small"><i class="fas fa-people-group" aria-hidden="true"></i></span>
                        <span>People</span>
                    </a>
                </li>
                <li class={is_active("events")}>
                    <a href="/events">
                        <span class="icon is-small"><i class="fas fa-calendar" aria-hidden="true"></i></span>
                        <span>Events</span>
                    </a>
                </li>
                <li class={is_active("publications")}>
                    <a href="/publications">
                        <span class="icon is-small"><i class="fas fa-file-lines" aria-hidden="true"></i></span>
                        <span>Publications</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="is-hidden-desktop">
    <div class="columns is-mobile">
        <div class="column is-3">
            <a href="javascript:void(0)" class="navbar-burger {burger ? 'is-active' : ''}" role="button" aria-label="menu" aria-expanded={burger} tabindex="0" on:click={() => burger = !burger} on:keydown={(e) => e.key === 'Enter' && (burger = !burger)}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="column is-6 has-text-centered">
            <a href="."> <b style="font-weight: 800" class="title is-3"> {"sqIRL"} </b> </a>
        </div>
    </div>
    <div class="navbar-menu {burger ? 'is-active' : ''}">
        <div class="navbar-end">
            <a class="navbar-item has-text-centered" href="/people">
                <span class="icon is-small"><i class="fas fa-people-group" aria-hidden="true"></i></span>
                <span>People</span>
            </a>
            <a class="navbar-item has-text-centered" href="/events">
                <span class="icon is-small"><i class="fas fa-calendar" aria-hidden="true"></i></span>
                <span>Research</span>
            </a>
            <a class="navbar-item has-text-centered" href="/publications">
                <span class="icon is-small"><i class="fas fa-file-lines" aria-hidden="true"></i></span>
                <span>Publications</span>
            </a>
        </div>  
    </div>
</div>