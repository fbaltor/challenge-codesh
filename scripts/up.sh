#!/bin/bash

set -e

docker-compose -f docker-compose.yml up --build --force-recreate -V

