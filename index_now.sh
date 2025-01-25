#!/bin/bash

URL=$1
HOST=mancusoa.it
KEY=159f53c326334e3f80007c156afc4b85
LOC=https://$HOST/$KEY.txt
ENDPOINT=https://www.bing.com/indexnow
# ENDPOINT=https://www.indexnow.org/indexnow 

cat > indexnow.json <<EOF
{
  "host": "${HOST}",
  "key": "${KEY}",
  "keyLocation": "${LOC}",
  "urlList": [
      "${URL}",
      ]
}
EOF



echo $URL
echo $KEY
echo $LOC 
echo $ENDPOINT

#curl -v --header "Content-Type: application/json"  --data "$(cat ./indexnow.json)" --trace-ascii trace-json-data-request.log $ENDPOINT
curl -v --header "Content-Type: application/json"  --data "$(cat ./indexnow.json)" $ENDPOINT

rm -f indexnow.json