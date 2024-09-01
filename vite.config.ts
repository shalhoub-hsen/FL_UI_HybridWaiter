import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const finalEnv = { "process.env": { ...process.env, ...env } };

  const plugins = [react(), tsconfigPaths(), splitVendorChunkPlugin()];

  return {
    plugins,
    define: finalEnv,
    server: { https: false, port: 3000 },
  };
});

export default config;
