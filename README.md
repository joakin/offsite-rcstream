rcstream-dashboard
==================

A dashboard to show activity on wikimedia projects.

Uses the rcstream for piping events.

Development
-----------

Requires `node` >= 4.0.0 and suggested `npm` >= 3.0.0.

1. `npm install`
2. `npm start`
3. Visit `localhost:8080` for checking the website

Server process and frontend assets will be automatically reloaded/recompiled
when changed. Just reload the page.

Do `npm run format` for formatting the code automatically.

Production
----------

1. Run `npm run prod` to compile the assets into `public/`
2. Go to `localhost:8080` to see the production site.
