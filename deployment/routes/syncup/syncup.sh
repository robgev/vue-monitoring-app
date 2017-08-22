#!/bin/bash

source ~/apollo/qa_env/apollo_run.sh

apollo-cd-project $1

git reset --hard origin/master

if [ ${1+x} ]; then
	git checkout $2
fi
