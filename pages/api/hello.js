export default function handler(req, res) { res.status(200).json({ message: "Hello from pages/api!", timestamp: new Date().toISOString() }) }
