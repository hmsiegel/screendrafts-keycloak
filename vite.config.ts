import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        keycloakify({
            accountThemeImplementation: "none",
            postBuild: async (buildContext) => {
                const { buildEmailTheme } = await import("keycloakify-emails");
                const root = new URL(import.meta.url).pathname;

                await buildEmailTheme({
                    templatesSrcDirPath: `${root}/emails/templates`,
                    i18nSourceFile: `${root}/emails/i18n.ts`,
                    themeNames: buildContext.themeNames,
                    keycloakifyBuildDirPath: buildContext.keycloakifyBuildDirPath,
                    locales: ["en", "pl"],
                    cwd: root
                });
            },
        }),
    ],
});
