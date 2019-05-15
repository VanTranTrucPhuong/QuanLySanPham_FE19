import { Component, OnInit } from '@angular/core';
import { SanPham } from './sanpham';

@Component({
  selector: 'app-quanlysanpham',
  templateUrl: './quanlysanpham.component.html',
  styleUrls: ['./quanlysanpham.component.scss']
})
export class QuanlysanphamComponent implements OnInit {

  public danhsachsanpham: Array<SanPham> = [];
  constructor() { }

  ngOnInit() {
    let dataLocal = JSON.parse(localStorage.getItem("danhsachsanpham"));
    if (dataLocal !== null) {
      this.danhsachsanpham = dataLocal;
      console.log(JSON.parse(localStorage.getItem("danhsachsanpham")));
    }
  }


  ThemSanPham(maSanPham: string, tenSanPham: string, giaSanPham: string) {
    let sanPham = new SanPham(maSanPham, tenSanPham, parseInt(giaSanPham));
    this.danhsachsanpham.push(sanPham);
    localStorage.setItem('danhsachsanpham', JSON.stringify(this.danhsachsanpham))
    console.log(sanPham);
  }

}
