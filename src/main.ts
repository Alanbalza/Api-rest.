import "./load-env-vars";
import bodyParser from "body-parser";
import express from "express";
import { config } from "./config";
import { routes } from "./Producto/infrastructure/RouteMusic";


  const app = express();

  app.use(bodyParser.json());
app.use("/Musica", routes);
//PURO 4LETRAS ALV 

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - corriendo puerto ${port}`);
  });


