export function attachRealtime(server) {

    const ws  = new WebSocket.Server({ server, path: '/ws' });
}