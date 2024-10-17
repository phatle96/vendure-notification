FROM node:20

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y curl && \
    curl -LO "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64" && \
    mv cloudflared-linux-amd64 /usr/local/bin/cloudflared && \
    chmod +x /usr/local/bin/cloudflared && \
    apt-get remove --purge -y curl && \
    apt-get autoremove -y

COPY package.json ./
COPY package-lock.json ./
RUN npm install --productions
COPY . .
RUN npm run build
# CMD ["sh", "./scripts/sync.sh"]
# EXPOSE 4000