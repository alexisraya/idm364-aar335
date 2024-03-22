<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Iceberg&family=Inter:wght@100..900&display=swap" rel="stylesheet">
</svelte:head>

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
    :global(h1, h2, h3, button, a) {
        font-family: "Iceberg", sans-serif;
    }
    :global(p, h4, h5, h6) {
        font-family: "Inter", sans-serif;
    }
    :global(input, select, textarea, label) {
        font-family: "Inter", sans-serif;
    }

    .body{
        margin: 60px;
        padding: 60px 30px;
        background: #E6E4E2;
        border: solid 2px #818180;
        min-height: 65vh;
    }
</style>