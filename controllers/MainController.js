const chatRouter = require("./ChatController");

chatRouter.enable("trust proxy");
chatRouter.use("/chat", chatRouter);

module.exports = chatRouter;


