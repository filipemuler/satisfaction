#!/usr/bin/env bash

rm -f mbr/bundle.css

cat mbr/mbr.css >> mbr/bundle.css
cat node_modules/react-selectize/dist/index.css >> mbr/bundle.css