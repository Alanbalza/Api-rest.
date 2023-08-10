import { getMusica } from "../application/GetMusic";
import { CreateMusica } from "../application/CreateMusic";
import { productoRepositori } from "./MusicRespository";
import { ProductosController } from "./MusicControllers";
import { GetMusicid } from "../application/GetMusicid";
import { DelMusicId } from "../application/DeleteMusic";

const productoRes = new productoRepositori();
const createMusica = new CreateMusica(productoRes)
const getmusic = new getMusica(productoRes)
const getMusicid = new GetMusicid(productoRes)
const deletebyid = new DelMusicId(productoRes)

export const productosController = new ProductosController(createMusica, getmusic, getMusicid, deletebyid)