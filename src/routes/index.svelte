<script context="module" lang="ts">
	import { client } from "./../core/svqlConfig";
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await client.query({
			query: PRODUCT_LIST,
		});

		if (!res.errors) {
			return { posts: res.data };
		} else {
			this.error(res.errors);
		}
	}
</script>

<script lang="ts">
	import { PRODUCT_LIST, PRODUCT_MUTATE, PRODUCT_SUB } from "../core/queries";

	export let posts;
	let name: string = "";
	const productSubscription = client.subscription({
		query: PRODUCT_SUB,
	});
	$: if ($productSubscription) {
	}

	function handleChange() {
		client.mutate({
			query: PRODUCT_MUTATE,
			variables: { name },
		});
	}
</script>

<h1>SSR</h1>
<code lang="json">
	{JSON.stringify(posts)}
</code>

<h2>subscription</h2>
<div>
	{$productSubscription ? JSON.stringify($productSubscription) : "loading"}
</div>

<div>
	<input type="text" on:change={(e) => (name = e.target.value)} />
	<button on:click={handleChange} value="CHANGE">Change</button>
</div>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>
