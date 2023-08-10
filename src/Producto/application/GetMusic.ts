
import { ProductoRepository } from "../domain/Music-repository";


export class getMusica {
    constructor(readonly productoRepository: ProductoRepository) { }

    async AllProducto() {
        return this.productoRepository.getMusic()
            .then((productoResolve) => {
                console.log(productoResolve);
                return productoResolve;
            }).catch((error) => {
                console.log(error)
            })
            
    }
}