import { version } from "../../package.json";

type NODE_ENV_TYPE = "development" | "test" | "production";

// const BASE_URL = process.env.VITE_APP_BASE_URL as string
const BASE_URL = "https://localhost:7045/";
const FRONT_URL = process.env.VITE_APP_FRONT_URL as string;
const NODE_ENV = process.env.NODE_ENV as NODE_ENV_TYPE;
const TIMEOUT = process.env.VITE_APP_TIMEOUT as number | undefined;
const VERSION = version;

const Config = {
  BASE_URL,
  NODE_ENV,
  FRONT_URL,
  VERSION,
  IS_PROD: NODE_ENV === "production",
  APP_NAME: "Hybrid Waiter",
  TIMEOUT: TIMEOUT || 15000,
};

export default Config;
