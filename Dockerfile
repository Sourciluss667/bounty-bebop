# Étape de build
FROM node:18-alpine AS builder

WORKDIR /app

# Installation des dépendances nécessaires
RUN apk add --no-cache python3 make g++

# Installation de pnpm
RUN npm install -g pnpm

# Installation des dépendances avec pnpm
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

# Copie des fichiers sources et build
COPY . .
RUN pnpm run build

# Étape de production avec nginx
FROM nginx:alpine

# Configuration de nginx pour React Router
COPY --from=builder /app/build /usr/share/nginx/html

# Configuration nginx pour le routage React
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]