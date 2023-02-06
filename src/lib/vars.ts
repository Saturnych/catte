import { env as dynamic_private } from '$env/dynamic/private';
import { env as dynamic_public } from '$env/dynamic/public';

const ENV = Object.assign(dynamic_private, dynamic_public, import.meta.env);

export const NODE_ENV: string = ENV.NODE_ENV || ENV.VITE_USER_NODE_ENV || ENV.MODE || '';
export const DEV_MODE: boolean = (!!NODE_ENV && NODE_ENV.indexOf('dev') > -1) || ENV.DEV;
export const DEBUG: boolean = !!DEV_MODE;
export const APP_NAME: string = ENV.APP_NAME || 'app';
export const PORT: number = Number(ENV.PORT || 3000);

// Redis
export const REDIS_URI: string = ENV.REDIS_URI || '';
