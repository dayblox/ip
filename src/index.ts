Bun.serve({
	fetch(req) {
		return new Response(JSON.stringify(this.requestIP(req)))
	},
})
