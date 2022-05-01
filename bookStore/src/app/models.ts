export interface ResponseGeneric{
    msg:string,
    status: number,
    data : any
}

export interface Vendedor{
    id_vendedor ?: number,
    dpi ?: string,
    nombre ?: string,
    apellido ?: string,
    direccion ?: string,
    telefono ?: string
}

export interface login{
    dpi ?: string,
    clave ?: string
}

export interface Seller{
    id_vendedor ?: number,
    vendedor ?: string
}

export interface Libro{
    id ?: number,
    nombre ?: string,
    precio ?: number
}

export interface Venta{
    id_venta ?: number,
    id_libro ?: number,
    id_vendedor ?:number
}

export interface Sell{
    id_venta ?: number,
    id_libro ?: number,
    nombre ?: string,
    precio ?: number,
    id_vendedor ?:number
    vendedor ?: string
}