const express = require("express")
const app = express();

app.set("port", process.env.port || process.env.PORT || 5000);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Bem-vindo ao servidor Web!"));

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado na porta: " + app.get("port"));
});