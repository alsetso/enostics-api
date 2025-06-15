export default function handler(req, res) { return res.status(200).json({ message: "Hello from Enostics API!", timestamp: new Date().toISOString() }) }
