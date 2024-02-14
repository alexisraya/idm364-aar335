<script>
    import Nav from "$lib/Nav.svelte";
</script>

<div class="body">
    <Nav />
    <slot />
</div>


<style>
    :global(body){
        background: #FAF7F5;
    }

    .body{
        margin: 60px;
        padding: 30px;
        background: #E6E4E2;
        border: solid 2px #818180;
    }
</style>