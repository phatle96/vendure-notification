#!/bin/sh

# Start Server 1
npm run start --port=4000 &

# Store the PID of Server 1
SERVER1_PID=$!

# Wait for Server 1 to be ready (customize this according to your app)
# Example: wait for a specific port to be available
until nc -z localhost 4000; do
  echo "Waiting for API to start..."
  sleep 1
done

echo "API is up!"

# Now start Server 2
npx novu@latest dev --port=2022

# Wait for Server 1 to exit
wait $SERVER1_PID