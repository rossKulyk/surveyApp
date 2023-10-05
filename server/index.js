const express = require("express");
const app = express();
require("./services/passport");

// require("./routes/auth").(app);
const authRoutes = require("./routes/auth");
authRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
