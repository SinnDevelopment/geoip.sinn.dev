import { Hono } from "hono";

// Start a Hono app
const app = new Hono();

const geoFeeds =
	'23.182.72.0/25,CA,CA-ON,Stratford,\n' +
	//'23.182.72.128/25,US'
	'198.134.186.0/24,CA,CA-ON,Stratford,\n' +
	'2602:F8A1::/40,CA,CA-ON,Stratford,'

app.get('/geofeed.csv', (c) => c.text(geoFeeds))
app.get('/', (c) => c.text(geoFeeds))
// Export the Hono app
export default app;
