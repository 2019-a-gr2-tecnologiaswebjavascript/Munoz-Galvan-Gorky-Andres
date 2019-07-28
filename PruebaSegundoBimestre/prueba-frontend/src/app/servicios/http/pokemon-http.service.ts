import {Injectable} from '@angular/core';
import {HttpSailsPrincipal} from './http-sails-principal';
import {Pokemon} from '../../dto/pokemon';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class PokemonHttpService extends HttpSailsPrincipal<Pokemon> {

    // tslint:disable-next-line:variable-name
    constructor(private readonly _HttpClient: HttpClient) {
        super(_HttpClient, environment.url, '/Pokemon');
    }
}
