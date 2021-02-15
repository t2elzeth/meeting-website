#!/bin/bash


if ! ls | grep env;
then
	echo "No env"
else
	echo "Env exists"
fi
