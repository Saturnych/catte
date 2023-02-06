import { env } from '$env/dynamic/public';

export const ENV = Object.assign(env, import.meta.env);
