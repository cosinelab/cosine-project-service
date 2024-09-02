# Use a Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Generate Prisma Client
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3002

# Start the application
CMD ["npm", "start"]
