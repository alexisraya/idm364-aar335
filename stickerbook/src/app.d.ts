// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}


declare class Product {
	id: string    // Stripe ID
	name: string  // "Funny Sticker"
	price: number // 5
}

declare class CartItem {
	id: string
	quantity: number
}