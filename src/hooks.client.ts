import type { HandleClientError } from '@sveltejs/kit';
import { errorHandler } from '$lib/utils';

export const handleError: HandleClientError = errorHandler;
