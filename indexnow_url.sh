#!/bin/bash

URL=$1
HOST=prof.mancusoa.it
KEY=ca4da581221f4508a43073c9f36356ef
LOC=http://$HOST/$KEY.txt
ENDPOINT=https://www.bing.com/indexnow

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
