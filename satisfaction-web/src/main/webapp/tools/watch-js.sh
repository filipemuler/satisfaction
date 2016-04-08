#!/usr/bin/env bash

watchify client/main.jsx \
--outfile mbr/bundle.js \
--verbose --debug --extension=jsx \
--poll

