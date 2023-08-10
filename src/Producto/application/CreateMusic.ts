import { ProductoRepository } from "../domain/Music-repository"


export class CreateMusica {
    constructor(readonly productoRepository: ProductoRepository) { }
    async createProducto(id: number, name: string, duration: number) {
        return this.productoRepository.create(id, name, duration)
            .then((createProductos) => {
                console.log(createProductos);
                return createProductos;
                //PURO 4LETRAS ALV 
            }).catch((error) => {
                console.log(error);
            })

    }
}











