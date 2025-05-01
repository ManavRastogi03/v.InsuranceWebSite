import { createClient } from "redis";

// ✅ Use your Upstash Redis URL (set it in an env variable)
const redisClient = createClient({
  url: process.env.REDIS_URL, 
});

redisClient.connect()
  .then(() => console.log("🔥 Redis Connected"))
  .catch((err) => console.error("❌ Redis Connection Error:", err));

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));

export default redisClient;
