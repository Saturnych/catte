import type { RequestHandler, Response } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const isNumeric = (n: string): boolean => !isNaN(parseFloat(n)) && isFinite(Number(n));

export const isDate = (d: any): boolean => d instanceof Date && !Number.isNaN(d.getTime());

export const getRandomString = (len = 12): string =>
	Math.random()
		.toString(36)
		.slice(-1 * len);

export const getRandomInt = (min: number, max: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const errorHandler = ({ error, event }) => {
	const errorResult = {
		status: event.route?.id ? event.locals.status || 400 : 404,
		message: error.toString(),
		errorId: getRandomString()
	};
	event.locals.status = errorResult.status;
	return errorResult;
};

export const getData = async (
	event: Record<string, any>,
	uri: string,
	type: string = 'json'
): Record<string, any> => {
	try {
		const request = event.fetch || fetch;
		const get = await request(uri);
		if (get.status !== 200) throw new Error('Error!');
		if (type === 'json') return await get.json();
		else return await get.text();
	} catch (e) {
		console.error(e);
	}
};

export const postData = async (
	event: Record<string, any>,
	uri: string,
	data: Record<string, string>,
	method: string = 'POST'
): Record<string, any> => {
	try {
		const request = event.fetch || fetch;
		const post = await request(uri, {
			method,
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' }
		});
		return await post.json();
	} catch (e) {
		console.error(e);
	}
};

export const parseCookieHeader = (header: string): Record<string, string> => {
	const cookies = {};
	if (!!!header) return cookies;
	const arr = header.split(',').map((ck) => {
		const cookie = ck.trim().split(';')[0].split('=');
		cookies[cookie[0]] = cookie[1];
		return {
			[cookie[0]]: cookie[1]
		};
	});
	return cookies;
};

export const returnJson = (
	data: Record<string, any>,
	status: number = 200,
	message: string = 'OK'
): Response => json({ status, message, data });

/**
 * JSON.parse() catching errors
 *
 * @param {String} data
 * @param {Object} json
 *
 */
export const parseJson = (data: string, obj?: object | undefined) => {
	try {
		obj = JSON.parse(data);
	} catch (e) {
		//console.error(e);
	}
	return obj;
};
