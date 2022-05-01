import { Component, OnInit } from '@angular/core';
import { Libro, ResponseGeneric, Sell, Seller, Vendedor, Venta } from './models';
import { BookService } from './services/book.service';
import { SellService } from './services/sell.service';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bookStore';
  newVendedor:Vendedor = {}
  newLibro:Libro = {}
  vendedores:Vendedor[] = []
  listVendedor:Seller[] = []
  books:Libro[] = []
  newVenta:Venta = {}
  ventas:Sell[] = []

  constructor(
    private sellerService:SellerService,
    private bookService: BookService,
    private sellService : SellService
  ){}

  ngOnInit(): void {
    this.verVendedores()
    this.listarVendedores()
    this.verLibros()
    this.verVentas()
  }

  crearVendedor(){
    this.sellerService.create(this.newVendedor).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200){
          this.newVendedor = {}
        } 
        else alert(res.msg)
        this.verVendedores()
        this.listarVendedores()
      }
    )
  }

  modificarVendedor(){
    this.sellerService.update(this.newVendedor).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200){
          this.newVendedor = {}
        } 
        else alert(res.msg)
        this.verVendedores()
        this.listarVendedores()
      }
    )
  }

  verVendedores(){
    this.sellerService.read().subscribe(
      (res:ResponseGeneric) => {
        this.vendedores = res.data
      }
    )
  }

  listarVendedores(){
    this.sellerService.listar().subscribe(
      (res:ResponseGeneric) => {
        this.listVendedor = res.data
      }
    )
  }

  verLibros(){
    this.bookService.read().subscribe(
      (res:ResponseGeneric) =>{
        this.books = res.data
      }
    )
  }

  crearLibro(){
    this.bookService.create(this.newLibro).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200) this.newLibro = {}
        else alert(res.msg)
        this.verLibros()
      }
    )
  }

  modificarLibro(){
    this.bookService.update(this.newLibro).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200) this.newLibro = {}
        else alert(res.msg)
        this.verLibros()
      }
    )
  }

  verVentas(){
    this.sellService.read().subscribe(
      (res:ResponseGeneric) => {
        this.ventas = res.data
      }
    )
  }

  crearVenta(){
    this.sellService.create(this.newVenta).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200) this.newVenta = {}
        else alert(res.msg)
        this.verVentas()
      }
    )
  }

  modificarVenta(){
    this.sellService.update(this.newVenta).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200) this.newVenta = {}
        else alert(res.msg)
        this.verVentas()
      }
    )
  }

  editarVenta(v:Sell){
    this.newVenta.id_libro = v.id_libro
    this.newVenta.id_vendedor = v.id_vendedor
    this.newVenta.id_venta = v.id_venta
    console.log(this.newVenta)
  }

}
