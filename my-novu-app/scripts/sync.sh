#!/bin/bash

# Start the server, log the output to a file, and run in the background
npm run start:server > server_output.log &

# Capture the process ID of the server (since tee is no longer used)
SERVER_PID=$!

# Wait for a few seconds to allow the output to appear
sleep 15

# Extract the bridge URL directly from the log file
BRIDGE_URL=$(grep -o 'https://.*\.trycloudflare\.com' server_output.log)

echo "====================> Bridge URL: $BRIDGE_URL"

# Run the novu sync command with the extracted URL
npx novu sync -b $BRIDGE_URL/api/novu -s 5d8e8966bc3060ab827482ed2e4a78f0

# Monitor the server log file in real-time (optional)
tail -f server_output.log &

# Keep the server running in the foreground
wait $SERVER_PID