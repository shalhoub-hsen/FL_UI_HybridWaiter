/// <reference types="vite/client" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_APP_BASE_URL: string;
      VITE_APP_FRONT_URL: string;
      VITE_APP_VERSION: string;
      NODE_ENV: 'development' | 'test' | 'production';
    }
  }
}

export {};
