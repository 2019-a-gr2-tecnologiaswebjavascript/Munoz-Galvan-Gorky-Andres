import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class HttpSailsPrincipal<ClaseEntidad> {

    protected url = 'http://localhost:1337';
    protected modelo = '';

    constructor(protected readonly httpClient: HttpClient, url: string, modelo: string) {
        this.url = url;
        this.modelo = modelo;
    }

    crear(nuevoRegistro: ClaseEntidad): Observable<ClaseEntidad> {
        const url = `${this.url}${this.modelo}`;
        return this.httpClient
            .post(url, nuevoRegistro)
            .pipe(
                map(
                    (datos) => {
                        return datos as ClaseEntidad;
                    }
                )
            );
    }

    buscarPokemonPorNombre(parametrosBusqueda): Observable<ClaseEntidad[]> {
        const url = `${this.url}${this.modelo}/buscarPokemon`;
        return this.httpClient.post(url, parametrosBusqueda).pipe(map((datos) => {
            return datos as ClaseEntidad[];
        }));
    }

    buscar(nombreVariable, parametrosBusqueda): Observable<ClaseEntidad[]> {
        const url = `${this.url}${this.modelo}/buscar?${nombreVariable}=${parametrosBusqueda}`;
        return this.httpClient
            .get(url)
            .pipe(
                map(
                    (datos) => {
                        return datos as ClaseEntidad[];
        }));
    }

    borrar(id: number): Observable<ClaseEntidad[]> {
        const url = `${this.url}${this.modelo}/${id}`;
        return this.httpClient
            .delete(url)
            .pipe(
                map(
                    (datos) => {
                        return datos as ClaseEntidad[];
                    }
                )
            );
    }

    actualizar(registroActualizado: ClaseEntidad, id: number): Observable<ClaseEntidad> {
        const url = `${this.url}${this.modelo}/${id}`;
        return this.httpClient
            .patch(url, registroActualizado)
            .pipe(
                map(
                    (datos) => {
                        return datos as ClaseEntidad;
                    }
                )
            );
    }

    buscarPorID(id: number): Observable<ClaseEntidad> {
        const url = `${this.url}${this.modelo}/${id}`;
        return this.httpClient
            .get(url)
            .pipe(
                map(
                    (datos) => {
                        return datos as ClaseEntidad;
                    }
                )
            );
    }

    login(cajero: ClaseEntidad): Observable<ClaseEntidad> {
        const url = `${this.url}${this.modelo}/login`;
        return this.httpClient
            .post(url, cajero)
            .pipe(
                map((datos) => {
            return datos as ClaseEntidad;
        }));
    }

    buscarPorIdEntrenador(idEntrenador): Observable<ClaseEntidad[]> {
        const url = `${this.url}${this.modelo}?idEntrenador=` + idEntrenador;
        return this.httpClient
            .get(url)
            .pipe(
                map((datos) => {
            return datos as ClaseEntidad[];
        }));
    }

    buscarTodos(): Observable<ClaseEntidad[]> {
        const url = `${this.url}${this.modelo}`;
        return this.httpClient
            .get(url)
            .pipe(
                map(
                    (datos) => {
                        return datos as ClaseEntidad[];
                    }
                )
            );
    }
}
