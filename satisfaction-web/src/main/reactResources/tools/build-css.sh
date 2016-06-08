#!/usr/bin/env bash

rm -f ../webapp/mbr/bundle.css

cat ../webapp/mbr/mbr.css >> ../webapp/mbr/bundle.css
cat node_modules/react-selectize/dist/index.css >> ../webapp/mbr/bundle.css