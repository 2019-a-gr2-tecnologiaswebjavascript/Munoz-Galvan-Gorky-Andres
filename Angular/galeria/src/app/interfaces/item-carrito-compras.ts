export interface ItemTienda{
  nombreTienda:string;
  itemCarrito:ItemCarritoCompras[];
}

export interface ItemCarritoCompras{
  valor:string;
  fechaCompra?:Date;
  cantidad?:number;
}


