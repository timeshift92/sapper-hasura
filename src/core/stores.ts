import { writable } from "svelte/store";


export const token$ = writable('tscorp');
export const header$ = writable({
	title: 'Default',
	Header: {
		title: 'Default',
		body: 'Body'
	}
})

