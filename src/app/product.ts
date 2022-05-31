
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Product {
    pro:any;
    constructor(){
        this.pro = [
            {id:'AAA',name:"Áo sơ mi",price:10000,Category_id:1},
            {id:'AAB',name:"Áo sơ cua",price:10000,Category_id:1},
            {id:'ABB',name:"Quần dài",price:10000,Category_id:2},
            {id:'BBB',name:"Quần ngố",price:10000,Category_id:2},
            {id:'CBB',name:"Giày lười",price:10000,Category_id:3},
            {id:'BBC',name:"Giày chăm",price:10000,Category_id:3},
        ]
    }
}
