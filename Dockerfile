# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Only copy package.json and package-lock.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the rest of your app’s source code
COPY . .

# Build the app for production
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Serve the app (using serve for production)
CMD ["npx", "serve", "build"]


