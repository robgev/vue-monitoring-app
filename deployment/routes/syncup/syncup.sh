#!/bin/bash

source ~/apollo/qa_env/apollo_run.sh
apollo-cd-project $1

git checkout $2
