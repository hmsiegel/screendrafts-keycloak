docker run --rm -it `
   -e CHOKIDAR_USEPOLLING=1 `
   -e CHOKIDAR_INTERVAL=300 `
   -p 3000:3000 `
   -v ${PWD}:/app `
   -w /app `
   node:20-bookworm-slim `
   bash -c "corepack enable && npm i && npx email preview ./emails/templates --port 3000 --host --no-open"