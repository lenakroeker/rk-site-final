const fs = require("fs");
const logStream = fs.createWriteStream("/path/to/your/Server/logs/server.log", {
  flags: "a",
});

console.log = function (message) {
  logStream.write(message + "\n");
  process.stdout.write(message + "\n");
};
