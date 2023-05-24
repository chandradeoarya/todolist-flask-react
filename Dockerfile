# Stage 1: Build the React app
FROM node:14 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build


# Stage 2: Serve the built app using a lightweight web server
FROM nginx:1.21-alpine

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]