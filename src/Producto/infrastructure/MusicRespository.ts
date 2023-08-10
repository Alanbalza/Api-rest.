import { database } from './Database'
import { Producto } from '../domain/ProducMusic'
import { ProductoRepository } from "../domain/Music-repository"
import { QueryError } from 'mysql2'

export class productoRepositori implements ProductoRepository {
  
  async deleteById(id: number): Promise<Producto | null> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      mysql.connection.query(`Delete  FROM Musica.music WHERE id = ${id}`, (error: QueryError, rows: Producto) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows)
          //PURO 4LETRAS ALV 
        }
      });
    });
  }

  
  async getById(id: number): Promise<Producto | null> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      mysql.connection.query(`SELECT * FROM Musica.music WHERE id = ${id}`, (error: QueryError, rows: Producto) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows)
        }
      });
    });
  }
  async getMusic(): Promise<Producto[] | null> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      mysql.connection.query("SELECT * FROM Musica.music", (error: QueryError, rows: Producto[]) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows)
        }
      });
      //PURO 4LETRAS ALV 
    });
  };


  async create(id: number, name: string, duration: number): Promise<Producto> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      const sql = `INSERT INTO Musica.music(id,name,duration) VALUES ('${id}','${name}','${duration}')`;
      mysql.connection.query(sql, (error: QueryError, results: Producto) => {
        if (error) {
          reject(error)
          //PURO 4LETRAS ALV 
        } else {
          resolve(results);
        }
      });
    })
  };


}
