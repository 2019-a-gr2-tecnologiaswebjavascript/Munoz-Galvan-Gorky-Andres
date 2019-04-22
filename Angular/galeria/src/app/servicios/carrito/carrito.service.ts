import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';

@Injectable() //Decorador para servicios
export class CarritoService{

    carritoCompras:ItemCarritoCompras[] = [];

    agregarCarritoDeCompras(
        itemCarrito:ItemCarritoCompras
        ):ItemCarritoCompras[]{

            const identificador = itemCarrito.valor;
            let indiceItem = -1;
            const existeElItem = this.carritoCompras
                .some(
                    (item:ItemCarritoCompras,indice)=>{
                        if(item.valor == identificador){
                            indiceItem = indice;
                            return true;
                        }else{
                            return false;
                        }
                    }
                )
            if(existeElItem){
                this.anadirAlContador(indiceItem);
            }else{
                this.anadirAlCarrito(itemCarrito);
            }
            console.log('Se anadio al carrito',itemCarrito);
            return this.carritoCompras;

    }

    private anadirAlContador(indice:number){
        this.carritoCompras[indice].cantidad++;
    }

    private anadirAlCarrito(item:ItemCarritoCompras){
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item);
    }

}
/*
const respuesta = [1,2,3,4].forEach( //undefined -> void
    (valor:number)=>{
            console.log('Valor',valor);
        if(valor==1){
            console.log('Te encontré 1');
        }
    });

    console.log(respuesta);

    const respuestaFind = [1,2,3,4].find( //devuelve un valor
        (valor:number):boolean=>{
            return valor == 3 // Expresion! a<b  b==c
        }
    )
    console.log(respuestaFind);

    const respuestaSome = [1,2,3,4].some( //devuelve un boolean
        (valor:number):boolean=>{
            return valor == 3 // Hay algún 3?
        }
    )
    console.log(respuestaSome);

    const respuestaEvery = [1,2,3,4].every( //devuelve un valor
        (valor:number):boolean=>{
            return valor >0 //todos son mayor que 0?
        }
    )
    console.log(respuestaEvery);


/*
function busqueda(valor,indice,arreglo){
    console.log('Valor',valor);
    if(valor==1){
        console.log('Te encontré 1');
    }
                    
}*/