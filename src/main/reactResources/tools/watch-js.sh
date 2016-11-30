#!/usr/bin/env bash

watchify client/main.jsx \
--outfile ../webapp/mbr/bundle.js \
--verbose --debug --extension=jsx \
--poll

