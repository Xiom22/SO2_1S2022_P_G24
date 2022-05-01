import { Component, OnInit } from '@angular/core';
import { Libro, ResponseGeneric, Seller, Vendedor } from './models';
import { BookService } from './services/book.service';
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
  seller:Seller ={}
  book :Libro={}
  books:Libro[] = []

  constructor(
    private sellerService:SellerService,
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.verVendedores()
    this.listarVendedores()
    this.verLibros()
  }

  crearVendedor(){
    this.sellerService.create(this.newVendedor).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200){
          this.newVendedor = {}
          this.verVendedores()
          this.listarVendedores()
        } 
        else alert(res.msg)
      }
    )
  }

  modificarVendedor(){
    this.sellerService.update(this.newVendedor).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200){
          this.newVendedor = {}
          this.verVendedores()
          this.listarVendedores()
        } 
        else alert(res.msg)
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
        console.log(res.data)
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
        if(res.status == 200){
          this.newLibro = {}
          this.verLibros()
        } 
        else alert(res.msg)
      }
    )
  }

  modificarLibro(){
    this.bookService.update(this.newLibro).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200){
          this.newLibro = {}
          this.verLibros()
        } 
        else alert(res.msg)
      }
    )
  }

}
