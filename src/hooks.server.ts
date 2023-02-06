import { sequence } from '@sveltejs/kit/hooks';
import { parseCookieHeader, errorHandler } from '$lib/utils';
import { DEBUG, APP_NAME } from '$lib/vars';

if (DEBUG) console.log('app:', APP_NAME);

async function checkResponse({ event, resolve }) {
	event.locals.status = 200;
	event.locals.lang = 'en';
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.locals.lang)
	});
	event.locals.status = response.status;
	const cookies = parseCookieHeader(response.headers?.get('set-cookie') || '');
	if (DEBUG) console.log('hooks cookies:', cookies);
	return response;
}

export const handle: Handle = sequence(checkResponse);

export const handleError: HandleServerError = errorHandler;
