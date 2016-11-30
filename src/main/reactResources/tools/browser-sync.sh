#!/usr/bin/env bash

# delay é importante para esperar o watchify terminar
browser-sync start --reload-delay 200 --no-open \
--proxy . \
--files "../webapp/mbr/*.js" \
--index index.html
