
import { defineConfig } from 'vite';

const workerImportMetaUrlRE = /\bnew\s+(?:Worker|SharedWorker)\s*\(\s*(new\s+URL\s*\(\s*('[^']+'|"[^"]+"|`[^`]+`)\s*,\s*import\.meta\.url\s*\))/g;

export default defineConfig({
    base: "/CubeSolver/",
    build: {
        chunkSizeWarningLimit: 2048,
        rollupOptions: {
            input: {
                main: 'index.html',
                olltrainer: 'OLLTrainer.html'
            },
        }
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
        ]
    }
});

