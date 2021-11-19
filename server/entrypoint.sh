#!/bin/sh

set -e

echo "Executing Database Migrations..."
cd ./src/
npx sequelize db:migrate

echo "Starting API..."
cd ..
npm start
exec "$@"