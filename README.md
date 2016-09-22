offsite-rcstream
================

An example server that consumes the wikimedia rcstream and re-exposes it for
usage in your application.

Development
-----------

Requires `node` >= 4.0.0 and suggested `npm` >= 3.0.0.

There seem to be problems with node > 6 with the old pinned version of socket
io that is needed.

1. `npm install`
2. `npm start`
3. Visit `localhost:8080` for checking the website

Server process will be automatically reloaded/recompiled when changed. Just
reload the page.

Do `npm run format` for formatting the code automatically.

Production
----------

1. Run `npm run prod` to run the server in production mode.
2. Go to `localhost:8080` to see the production site.
