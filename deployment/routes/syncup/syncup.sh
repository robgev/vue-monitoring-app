#!/bin/bash

source ~/apollo/qa_env/apollo_run.sh

apollo-cd-project $1

git reset --hard origin/master

git checkout $2
