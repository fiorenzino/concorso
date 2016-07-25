### concorso


# to start with this project

- npm install

#  all npm run tasks:

- "test": "echo \"Error: no test specified\" && exit 1",
- "clean": "rm -rf dist",
- "typings": "typings install",
- "serve": "http-server . -p 5556",
- "postinstall": "npm run typings",
- "build": "npm run clean && tsc ",
- "build_prod": "npm run build && browserify -s main dist/*.js > dist/bundle.js && npm run minify && gzip dist/bundle.min.js",
- "minify": "uglifyjs dist/bundle.js --screw-ie8 --compress --mangle --output dist/bundle.min.js"

# credits:

- http://blog.mgechev.com/2016/06/26/tree-shaking-angular2-production-build-rollup-javascript/