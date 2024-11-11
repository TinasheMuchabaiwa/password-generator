FROM node:21

WORKDIR /app

COPY package*.json ./
RUN npm install

# Install vite globally
RUN npm install -g vite

COPY . .

EXPOSE 5183

# Start development server with host set to 0.0.0.0 to allow external access.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
