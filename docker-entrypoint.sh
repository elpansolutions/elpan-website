#!/bin/sh

# Start the Node.js backend server in the background
cd /app/backend && node index.js &

# Start nginx in the foreground
nginx -g "daemon off;" 