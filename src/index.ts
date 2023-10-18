const server = Bun.serve({
	fetch(req) {
		return new Response(JSON.stringify(this.requestIP(req)))
	},
})

console.log(`Listening on port ${server.port}`)
