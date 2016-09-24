mkdir dist
mkdir dist/images
mkdir dist/fonts
../../node_modules/.bin/babel scripts/*.js -d dist -s false
../../node_modules/.bin/babel home.js -d dist -s false
../../node_modules/.bin/babel yh.js -d dist -s false
../../node_modules/.bin/babel info-list.js -d dist -s false
../../node_modules/.bin/babel common.js -d dist -s false
cp ../../node_modules/jquery/dist/jquery.min.js dist
cp -d ../images/* dist/images
cp -d ../fonts/* dist/fonts
cp ../../.tmp/myk/index.css dist
cp ../../.tmp/myk/platform.css dist
cp ../../.tmp/myk/home.html dist
cp ../../.tmp/myk/yh.html dist
cp ../../.tmp/myk/info-list.html dist
cp ../../.tmp/myk/info-detail.html dist
cp ../../.tmp/myk/about.html dist
cp ../../.tmp/myk/contact.html dist
cp ../../.tmp/myk/platform1.html dist
cp ../../.tmp/myk/platform2.html dist
