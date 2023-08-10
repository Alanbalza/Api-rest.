import express from "express"
//PURO 4LETRAS ALV 
import {productosController} from "./Dependencias";
export const routes = express.Router();
routes.post('/', productosController.create.bind(productosController));
routes.get('/', productosController.getMusica.bind(productosController))
routes.get('/:id', productosController.getProductoid.bind(productosController))
routes.delete('/:id', productosController.deleteById.bind(productosController))