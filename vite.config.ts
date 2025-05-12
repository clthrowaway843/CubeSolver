
import { defineConfig } from 'vite';
import { resolve } from 'path';
const workerImportMetaUrlRE = /\bnew\s+(?:Worker|SharedWorker)\s*\(\s*(new\s+URL\s*\(\s*('[^']+'|"[^"]+"|`[^`]+`)\s*,\s*import\.meta\.url\s*\))/g;

export default defineConfig({
    base: "/CubeSolver/",
    build: {
        chunkSizeWarningLimit: 2048
    },
    optimizeDeps: {
        exclude: ["cubing"]
    },
    worker: {
        format: 'es',
        plugins: () => [
            {
                name: 'disable-nested-workers',
                enforce: 'pre',
                transform(code, _) {
                    if (code.includes('new Worker') && code.includes('new URL') && code.includes('import.meta.url')) {
                        const result = code.replace(workerImportMetaUrlRE, `((() => { throw new Error('Nested workers are disabled') })()`);
                        return result;
                    }
                }
            }
        ],
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                olltrainer: resolve(__dirname, 'OLLTrainer.html'),
            },
            output: {
                chunkFileNames: 'assets/worker/[name]-[hash].js',
                assetFileNames: 'assets/worker/[name]-[hash].js'
            }
        }
    }
});

