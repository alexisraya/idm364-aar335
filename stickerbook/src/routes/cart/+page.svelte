<script lang="ts">
	import { getCartStore } from "../../stores/cartStore";

    const cart = getCartStore();
</script>

<h1>Your Stickerbook</h1>
{#each cart as item}
    <div>
        <h3>{item.id}</h3>
    </div>
{/each}