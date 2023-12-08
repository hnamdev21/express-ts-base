import "module-alias/register";
import "dotenv/config";

import app from "./src";

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Exiting..."));
});
