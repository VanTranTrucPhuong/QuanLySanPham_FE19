export class SanPham{
    public tenSanPham: string;
    public maSanPham: string;
    public giaSanPham: number;
    constructor(_maSanPham:string, _tenSanPham:string, _giaSanPham:number){
        this.maSanPham = _maSanPham;
        this.tenSanPham = _tenSanPham;
        this.giaSanPham = _giaSanPham;
    }
}