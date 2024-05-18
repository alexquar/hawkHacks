#!/usr/bin/env bash
# exit on error
set -o errexit

DISABLE_DATABASE_ENVIRONMENT_CHECK=1

bundle install
bundle exec rails db:migrate