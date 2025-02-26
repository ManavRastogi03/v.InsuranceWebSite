import { createClient } from "redis";

const redisClient = createClient();

// 🛠️ Connect to Redis
redisClient.connect()
  .then(() => console.log("🔥 Redis Connected"))
  .catch((err) => console.error("❌ Redis Connection Error:", err));

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));

export default redisClient;
