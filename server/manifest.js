const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cat_window_rain.gif","favicon.ico","fonts/jetbrains-mono-v18-latin-300.woff","fonts/jetbrains-mono-v18-latin-300.woff2","fonts/jetbrains-mono-v18-latin-500.woff","fonts/jetbrains-mono-v18-latin-500.woff2","fonts/jetbrains-mono-v18-latin-600.woff","fonts/jetbrains-mono-v18-latin-600.woff2","fonts/jetbrains-mono-v18-latin-700.woff","fonts/jetbrains-mono-v18-latin-700.woff2","fonts/jetbrains-mono-v18-latin-regular.woff","fonts/jetbrains-mono-v18-latin-regular.woff2","fonts/space-grotesk-v15-latin-300.woff","fonts/space-grotesk-v15-latin-300.woff2","fonts/space-grotesk-v15-latin-500.woff","fonts/space-grotesk-v15-latin-500.woff2","fonts/space-grotesk-v15-latin-600.woff","fonts/space-grotesk-v15-latin-600.woff2","fonts/space-grotesk-v15-latin-700.woff","fonts/space-grotesk-v15-latin-700.woff2","fonts/space-grotesk-v15-latin-regular.woff","fonts/space-grotesk-v15-latin-regular.woff2","icons/about.svg","icons/discord.svg","icons/email.svg","icons/fork.svg","icons/github.svg","icons/home.svg","icons/kofi.svg","icons/linkedin.svg","icons/open.svg","icons/resume.svg","icons/star.svg","icons/work.svg","question_mark.png","resume.pdf","sounds/click.wav","sounds/rain-excuse-consuela.mp3","sounds/rain-excuse.mp3","sounds/rain.mp3"]),
	mimeTypes: {".gif":"image/gif",".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml",".png":"image/png",".pdf":"application/pdf",".wav":"audio/wav",".mp3":"audio/mpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.84f27e12.js","app":"_app/immutable/entry/app.395777c5.js","imports":["_app/immutable/entry/start.84f27e12.js","_app/immutable/chunks/scheduler.055b1430.js","_app/immutable/chunks/singletons.af941aff.js","_app/immutable/chunks/index.b6a5c8fc.js","_app/immutable/entry/app.395777c5.js","_app/immutable/chunks/scheduler.055b1430.js","_app/immutable/chunks/index.ca9cb631.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-DAsz9WdW.js')),
			__memo(() => import('./chunks/1-ktKxmyYF.js')),
			__memo(() => import('./chunks/2-CX-0iORh.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/v1/resume",
				pattern: /^\/api\/v1\/resume\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-PB8edvQJ.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
