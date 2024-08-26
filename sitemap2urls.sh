#!/bin/bash

cat sitemap.xml | grep loc | sed s/\<loc\>//g | sed s#\</loc\>##g 

