//V1LLO29
import { Request, Response } from 'express';
import { CreateMusica } from '../application/CreateMusic';
import { getMusica } from '../application/GetMusic';
import { GetMusicid } from '../application/GetMusicid';
import { DelMusicId } from '../application/DeleteMusic';

export class ProductosController {

    constructor(readonly createMusica: CreateMusica, readonly getmusica: getMusica, readonly getmusicid:GetMusicid, readonly delmusicid:DelMusicId) { }

    deleteById = async (req: Request, res: Response) => {
        try {
            console.log("Este es el producto");
            const {id}=req.params
            const consul = await this.delmusicid.Musicid(Number(id));
            //V1LLO29
            console.log("Esto contiene nuestra base de datos", consul)
            res.status(200).json(consul);
        } catch {
            res.status(500).json({ error: "intenta de nuevo" })
        }
    }

    getMusica = async (req: Request, res: Response) => {
        try {
            console.log("Estto son los productos");
            const consul = await this.getmusica.AllProducto();
            console.log("Esto contiene nuestra base de datos", consul)
            res.status(200).json(consul);
        } catch {
            //V1LLO29
            res.status(500).json({ error: "intenta de nuevo" })
        }
    }


getProductoid = async (req: Request, res: Response) => {
        try {
            console.log("Este es el producto");
            const {id}=req.params
            const consul = await this.getmusicid.Productoid(Number(id));
            console.log("Esto contiene nuestra base de datos", consul)
            res.status(200).json(consul);
        } catch {
            res.status(500).json({ error: "intenta de nuevo" })
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const { id, name, duration } = req.body
            const dataproducto = await this.createMusica.createProducto(id, name, duration);
            res.status(200).json(dataproducto)
        } catch (error) {
            //V1LLO29
            res.status(500).json({ error: "servidor error" })
        }
    }
}
