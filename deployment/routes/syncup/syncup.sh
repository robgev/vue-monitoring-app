#!/bin/bash

source ~/apollo/qa_env/apollo_run.sh

apollo-cd-project $1

git fetch origin

if [ "$1" = crewing ]; then
	git reset --hard origin/development
else
	git reset --hard origin/master
fi

if [ ${2+x} ]; then
	echo 'checkout'
	echo $2
	git checkout $2
fi
