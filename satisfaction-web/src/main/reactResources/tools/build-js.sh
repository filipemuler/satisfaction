#!/usr/bin/env bash

#cria diretorio de output caso não exista
#mkdir -p scr/mains/webapp/bundle.js

browserify client/main.jsx -o ../webapp/mbr/bundle.js \
--extension=jsx \
#-p [minifyify --compressPath . --no-map]
