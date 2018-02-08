#!/bin/bash

if [ "$1" == "" ]; then
    echo "Please provide the host"
    exit 0
fi

REACT_NATIVE_PACKAGER_HOSTNAME="$1" exp start
