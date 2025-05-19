import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath } from "node:url";
import path, { dirname, resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const isBuild = command === "build";
    return {
        plugins: [
            react(),
            tailwindcss(),
            keycloakify({
                accountThemeImplementation: "none",
                postBuild: async (buildContext) => {
                    if (!isBuild) return;
                    const { buildEmailTheme } = await import("keycloakify-emails");
                    const root = process.cwd();

                    await buildEmailTheme({
                        templatesSrcDirPath: path.join(root, "emails", "templates"),
                        i18nSourceFile: path.join(root, "emails", "i18n.ts"),
                        themeNames: buildContext.themeNames,
                        keycloakifyBuildDirPath: buildContext.keycloakifyBuildDirPath,
                        locales: ["en", "pl"],
                        cwd: root
                    });
                },
            }),
        ],
    };
});
