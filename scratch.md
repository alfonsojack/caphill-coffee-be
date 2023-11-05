bol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      'x-powered-by': [Array],
      'access-control-allow-origin': [Array]
    },
    [Symbol(errored)]: null,
    [Symbol(kHighWaterMark)]: 16384,
    [Symbol(kRejectNonStandardBodyWrites)]: false,
    [Symbol(kUniqueHeaders)]: null
  },
  body: {},
  route: Route { path: '/', stack: [ [Layer] ], methods: { get: true } },
  [Symbol(kCapture)]: false,
  [Symbol(kHeaders)]: {
    host: 'caphill-coffee-be-indol.vercel.app',
    forwarded: 'for=71.205.15.7;host=caphill-coffee-be-indol.vercel.app;proto=https;sig=0QmVhcmVyIDYzY2M5NGQxMDJlOTJiMTQzM2EwNzM5ZDRjODI5OTBjZjJkYzA5MzhmN2U0Yjg5NWYzOTZkNGMxYWFmMzVhYzc=;exp=1699146772',
    'x-real-ip': '71.205.15.7',
    'x-vercel-proxy-signature-ts': '1699146772',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-dest': 'empty',
    'x-vercel-deployment-url': 'caphill-coffee-io1yusrnz-jack-alfonsos-projects.vercel.app',
    referer: 'https://caphill-coffee-brown.vercel.app/',
    'x-forwarded-for': '71.205.15.7',
    'x-vercel-ip-latitude': '39.696',
    'x-vercel-forwarded-for': '71.205.15.7',
    'x-forwarded-host': 'caphill-coffee-be-indol.vercel.app',
    'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
    'x-vercel-id': 'sfo1::smb6m-1699146472702-c9b8637c6fad',
    origin: 'https://caphill-coffee-brown.vercel.app',
    'sec-ch-ua-platform': '"macOS"',
    'access-control-allow-origin': '*',
    'x-vercel-ip-longitude': '-105.0346',
    accept: '*/*',
    'x-vercel-proxied-for': '71.205.15.7',
    'x-vercel-proxy-signature': 'Bearer 63cc94d102e92b1433a0739d4c82990cf2dc0938f7e4b895f396d4c1aaf35ac7',
    'x-vercel-ip-country': 'US',
    'x-forwarded-proto': 'https',
    'x-vercel-ip-timezone': 'America/Denver',
    'accept-encoding': 'gzip, deflate, br',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'accept-language': 'en-US,en;q=0.9,es-ES;q=0.8,es;q=0.7',
    'x-vercel-ip-city': 'Denver',
    'sec-fetch-mode': 'cors',
    'x-vercel-ip-country-region': 'CO',
    connection: 'close'
  },
  [Symbol(kHeadersCount)]: 66,
  [Symbol(kTrailers)]: null,
  [Symbol(kTrailersCount)]: 0
}
Unhandled Promise Rejection 	{"errorType":"Runtime.UnhandledPromiseRejection","errorMessage":"Error: Unable to acquire a connection","reason":{"errorType":"Error","errorMessage":"Unable to acquire a connection","stack":["Error: Unable to acquire a connection","    at Client_PG.acquireConnection (/var/task/node_modules/knex/lib/client.js:311:13)","    at Runner.ensureConnection (/var/task/node_modules/knex/lib/execution/runner.js:305:46)","    at Runner.run (/var/task/node_modules/knex/lib/execution/runner.js:30:30)","    at Target.then (/var/task/node_modules/knex/lib/builder-interface-augmenter.js:24:43)","    at /var/task/index.js:20:20","    at Layer.handle [as handle_request] (/var/task/node_modules/express/lib/router/layer.js:95:5)","    at next (/var/task/node_modules/express/lib/router/route.js:144:13)","    at Route.dispatch (/var/task/node_modules/express/lib/router/route.js:114:3)","    at Layer.handle [as handle_request] (/var/task/node_modules/express/lib/router/layer.js:95:5)","    at /var/task/node_modules/express/lib/router/index.js:284:15"]},"promise":{},"stack":["Runtime.UnhandledPromiseRejection: Error: Unable to acquire a connection","    at process.<anonymous> (file:///var/runtime/index.mjs:1276:17)","    at process.emit (node:events:529:35)","    at emit (node:internal/process/promises:149:20)","    at processPromiseRejections (node:internal/process/promises:283:27)","    at process.processTicksAndRejections (node:internal/process/task_queues:96:32)"]}
Unknown application error occurred
Runtime.Unknown
