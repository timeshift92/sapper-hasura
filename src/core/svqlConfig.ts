//@ts-nocheck
import { svqlConfig } from 'graphql-svelte'
import { graphUrl } from "./configs";
import { token$ } from './stores';
import WebSocket from 'isomorphic-ws';

import 'isomorphic-fetch';
if (!process.browser) {
	global.WebSocket = WebSocket
}
export let client = svqlConfig.getClient({

	url: graphUrl, wsUrl: graphUrl.replace('http', 'ws')
	, wsOptions: {
		reconnect: true,
		lazy: true,
	}
})

export function changeClient(_client) {
	client = _client
}

token$.subscribe(c => {
	svqlConfig.setHeaders({ ...svqlConfig.headers, 'x-hasura-admin-secret': c })
});


export const setHeaders = svqlConfig.setHeaders
export const headers = svqlConfig.headers



