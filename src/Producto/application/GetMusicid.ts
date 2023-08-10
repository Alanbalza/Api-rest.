
import { ProductoRepository } from "../domain/Music-repository";


export class GetMusicid {
    constructor(readonly productoRepository: ProductoRepository) { }

    async Productoid (id:number) {
        return this.productoRepository.getById(id)
            .then((productoResolve) => {
                console.log(productoResolve);
                //PURO 4LETRAS ALV 
                return productoResolve;
            }).catch((error) => {
                console.log(error)
            })
    }
}



