
import { ProductoRepository } from "../domain/Music-repository";


export class DelMusicId {
    constructor(readonly productoRepository: ProductoRepository) { }

    async Musicid (id:number) {
        return this.productoRepository.deleteById(id)
            .then((productoResolve) => {
                console.log(productoResolve);
                return productoResolve;
            }).catch((error) => {
                console.log(error)
            })
    }
}


