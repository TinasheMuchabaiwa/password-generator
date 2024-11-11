FROM node:21

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5183

# start development server with host set to 0.0.0.0 to allow external access.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5183"]