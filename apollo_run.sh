#!/bin/bash

function apollo-run-api-proxy {
  kill $(lsof -t -i:8081)
  cd ~/apollo/api-proxy
  npm install
  node app.js &
}

function apollo-run-single-project {
  echo $1 $2
  kill $(lsof -t -i:$2)
  cd ~/apollo/$1/*/CloudFleetManager/ReactApps/core/
  git checkout master
  git pull
  cd ..
  git submodule update --remote --rebase -- core/
  cd apps/$1
  NODE_ENV=testing grunt qa-env &
}

# define apollo projects
declare -a APOLLO_PROJECTS=(maintenance blog crewing miscellaneous disturbance inspections certificates circulars towage)

function apollo-run {
  if [ -z ${1+x} ]; then
    echo 'You should write any project name or if you want to run all projects write "... all"'
  else
    if [ "$1" = "all" ]; then
      apollo-run-api-proxy
      for i in "${APOLLO_PROJECTS[@]}"
      do
        apollo-run $i
      done
    else
      case "$1" in
        "maintenance" )    apollo-run-single-project $1 8087;;
        "blog" )           apollo-run-single-project $1 8880;;
        "crewing" )        apollo-run-single-project $1 8884;;
        "miscellaneous" )  apollo-run-single-project $1 8882;;
        "disturbance" )    apollo-run-single-project $1 8280;;
        "inspections" )    apollo-run-single-project $1 8089;;
        "certificates" )   apollo-run-single-project $1 8881;;
        "circulars" )      apollo-run-single-project $1 8121;;
        "towage" )         apollo-run-single-project $1 8380;;
      esac
    fi
  fi
}