#!/usr/bin/env bash

# delay é importante para esperar o watchify terminar
browser-sync start --reload-delay 200 --no-open \
--server . \
--files "mbr/*.js" \
--index index.html