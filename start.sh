#!/bin/sh

export NODE_ENV=production

# Optional: but disable telemetry sent to next.js, read more at https://nextjs.org/telemetry
export NEXT_TELEMETRY_DISABLED=1

echo "Starting node app on $PORT"

yarn start -- -p $PORT
