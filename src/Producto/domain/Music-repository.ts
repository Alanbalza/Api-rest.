
import { Producto } from "./ProducMusic";
export interface ProductoRepository {
    create(id: number, name: string, duration: number): Promise<Producto>;
    getMusic(): Promise<Producto[] | null>;
    
    getById(id:number):Promise<Producto | null>
    deleteById(id:number):Promise<Producto | null>
}