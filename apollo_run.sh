#!/bin/bash

# Function - apollo-run-api-proxy ::: Run api-proxy server on 8081 port

function apollo-run-api-proxy {
  kill $(lsof -t -i:8081)
  cd ~/apollo/qa_env/api-proxy
  npm install
  node app.js &
}

# Function - apollo-run-single-project ::: Run sigle project 

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

# Function - apollo-cd-project ::: Change path to current project

function apollo-cd-project {
  cd ~/apollo/$1/*/CloudFleetManager/ReactApps/apps/$1
}

# define apollo projects
declare -a APOLLO_PROJECTS=(maintenance blog crewing miscellaneous disturbance inspections certificates circulars towage)

# Function - apollo-run ::: Run project (or all projects, when you write apollo-run all)

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

# Function - apollo-update ::: Update projcet (with git pull (on master branch)) or
# update (with git pull on master branch) all cores in all projects

function apollo-update {
  if [ -z ${1+x} ]; then
    echo 'You should write any project name or core'
  else
    if [ "$1" = "core" ]; then
      for i in "${APOLLO_PROJECTS[@]}"
      do
        apollo-cd-project $i
        cd ../../core
        git checkout master
        git pull
      done
    else
      apollo-cd-project $1
      git checkout master
      git pull
    fi
  fi
}
