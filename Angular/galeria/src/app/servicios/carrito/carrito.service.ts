import { Injectable } from '@angular/core';
import { ItemCarritoCompras,ItemTienda } from '../../interfaces/item-carrito-compras';
import { asTextData } from '@angular/core/src/view';

@Injectable() //Decorador para servicios
export class CarritoService{

    carritoComprasTienda:ItemTienda[] = [];

    agregarProductoTienda(itemCarrito:ItemCarritoCompras,
        nombreTienda:string
        ):ItemTienda[]{
            //const nombreTienda = itemCarrito.nombreTienda;
            const nombreProducto = itemCarrito.valor;
            let indiceTienda = -1;
            let indiceProducto = -1;
            const existeTienda = this.carritoComprasTienda
            .some(
                (itmTienda:ItemTienda,indice)=>{
                    if(itmTienda.nombreTienda == nombreTienda){
                        indiceTienda = indice;
                        return true;
                    }else{
                        return false;
                    }
                    
                }
            )
            if(existeTienda){
                const existeProducto = this.carritoComprasTienda[indiceTienda].itemCarrito
                .some(
                    (itemProducto:ItemCarritoCompras,indice)=>{
                        if(itemProducto.valor == nombreProducto){
                            indiceProducto = indice;
                            return true;
                        }else{
                            return false;
                        }
                        
                    }
                )
                if(existeProducto){
                    this.anadirAlContador(indiceTienda,indiceProducto);
                }else{
                    this.anadirAlCarrito(indiceTienda,itemCarrito);
                }
            }else{
                this.anadirTienda(itemCarrito,nombreTienda);
            }

            console.log('Se anadio al carrito',itemCarrito);
            return this.carritoComprasTienda;
      }
  
    private anadirTienda(item:ItemCarritoCompras,nombreTienda:string)
    {
        const producto:ItemCarritoCompras = {
            valor: item.valor,
            fechaCompra: new Date(),
            cantidad:1
        }
        const prueba:ItemTienda = {
            nombreTienda: nombreTienda,
            itemCarrito:[]
        };  
        prueba.itemCarrito.splice(0,0,producto);
        this.carritoComprasTienda.splice(0,0,prueba);
    }
    private anadirAlContador(indiceTienda:number,indice:number){
        this.carritoComprasTienda[indiceTienda].itemCarrito[indice].cantidad++;
    }

    private anadirAlCarrito(indiceTienda:number,item:ItemCarritoCompras){
        item.cantidad = 1;
        this.carritoComprasTienda[indiceTienda].itemCarrito.splice(0,0,item);
    }

}

/*  agregarCarritoDeCompras(
        itemCarrito:ItemCarritoCompras
        ):ItemCarritoCompras[]{

            const nombreObjeto = itemCarrito.valor;
            let indiceItem = -1;

            const existeElItemTienda = this.carritoCompras
                .some(
                    (item:ItemCarritoCompras,indice)=>{
                        if(item.valor == nombreObjeto){
                            indiceItem = indice;
                            return true;
                        }
                        else{

                            return false;
                        }
                    }
                )

            if(existeElItemTienda){
                this.anadirAlContador(indiceItem);
            }else{
                this.anadirAlCarrito(itemCarrito);
            }
            console.log('Se anadio al carrito',itemCarrito);
            return this.carritoCompras;

    }
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