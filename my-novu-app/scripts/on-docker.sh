#!/bin/bash

source .env

npm run start > server_output.log &

# Capture the process ID of the server (since tee is no longer used)
SERVER_PID=$!

sleep 15

npx novu sync -b $HOST_URL/api/novu -s $NOVU_SECRET_KEY

# Monitor the server log file in real-time (optional)
tail -f server_output.log &

# Keep the server running in the foreground
wait $SERVER_PID