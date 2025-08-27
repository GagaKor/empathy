#!/bin/sh
if [ -n "$HUSKY_DEBUG" ]; then
  set -x
fi

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

if command_exists node; then
  exec node "$0" "$@"
else
  echo "Cannot find node" >&2
  exit 1
fi
