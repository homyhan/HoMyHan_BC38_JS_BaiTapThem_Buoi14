function ngayHomQua() {
    //input: ngay, thang, nam : number
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    
    //output: rs: String
    var rs='';
    //Xu li
    if((ngay<1 || ngay>31)|| (thang<1 || thang >12)||(nam<0)){
        rs='Dữ liệu sai'
    }else if(ngay==29 && thang==2 && !((nam%4===0 && nam%100!==0)|| nam%400===0)){
        alert("Du lieu sai");
    }else{
        
        if(ngay===1 && (thang===5 || thang===7 || thang===10 || thang===12)){
            ngay=30;
            thang-=1;
        }else if( ngay==1 && ( thang==2 || thang==4 || thang==6|| thang==8||thang==9 ||thang==11)){
            ngay=31;
            thang-=1;
        }else if(ngay==1 && thang==3 && !((nam%4===0 && nam%100!==0)|| nam%400===0)){
            ngay=28;
            thang--;
        }else if(ngay==1 && thang==3 && ((nam%4===0 && nam%100!==0)|| nam%400===0)){
            ngay=29;
            thang--;
        }else if(ngay==1 && thang==1){
            ngay=31;
            thang=12;
            nam--;
        }else{
            ngay--;
        }
        rs=ngay+"/"+thang+"/"+nam;
        
    }
    //in ket qua
    document.getElementById('result1').innerHTML=rs;
}
function ngayMai() {
    //input: ngay, thang, nam : number
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    //output rs: String
    var rs='';
    //xu li
    if((ngay<1 || ngay>31)|| (thang<1 || thang >12)||(nam<0)){
        rs='Dữ liệu sai'
    }else if(ngay==29 && thang==2 && !((nam%4===0 && nam%100!==0)|| nam%400===0)){
        alert("Du lieu sai");
    }else{
        //th ngay cuoi thang
        if(ngay==31 && (thang==1 || thang==3 || thang==5 || thang==7|| thang==8|| thang==10)){
            ngay=1;
            thang++;
        }else if(ngay==30 && (thang==4 || thang==6 || thang ==9 || thang==11)){
            ngay=1;
            thang++;
        }else if(ngay==29 && thang==2 && ((nam%4===0 && nam%100!==0)|| nam%400===0)){
            ngay=1;
            thang++;
        }else if(ngay==28 && thang==2 && !((nam%4===0 && nam%100!==0)|| nam%400===0)){
            ngay=1;
            thang++;
        }else if(ngay==31 && thang==12){
            ngay=1;
            thang=1;
            nam++;
        }else{
            ngay++;
        }
        rs=ngay+"/"+thang+"/"+nam;
    }
    //in ket qua
    document.getElementById('result1').innerHTML=rs;
}

function tinhNgay() {
    //input thang, nam: number
    var thang = Number(document.getElementById('thangb2').value);
    var nam = Number(document.getElementById('namb2').value);
    //output rs: String
    var rs='';

    // xu li 
    if(thang<0 || thang>12 || nam<0){
        rs='Dữ liệu nhập sai'
    }else{
        switch (thang) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                rs='31 ngày'
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                rs="30 ngày"
                break;
            case 2:
                if(((nam%4===0 && nam%100!==0) || nam%400===0) && thang===2){
                    rs='29 ngày'
                }else{
                    rs='28 ngày';
                }
                break;
            default:
                break;
        }
    }
    
    
    //in ket qua
    document.getElementById('result2').innerHTML=rs;

}


function docSo() {
    //input number, donvi, chuc, tram : Number
    var number = Number(document.getElementById('numb3').value);
    var donvi = number%10;
    var chuc = Math.floor((number%100)/10);
    var tram = Math.floor((number/10)/10);
    //output: rs:String
    var rs='';
    // xu li 
    if(isNaN(number)){
        rs='Dữ liệu sai'
    }else{
        switch (tram) {
            case 1:
                rs+='Một trăm '
                break;
            case 2:
                rs+='Hai trăm '
                break;
            case 3:
                rs+='Ba trăm '
                break;
            case 4:
                rs+='Bốn trăm '
                break;
            case 5:
                rs+='Năm trăm '
                break;
            case 6:
                rs+='Sáu trăm '
                break;
            case 7:
                rs+='Bảy trăm '
                break;
            case 8:
                rs+='Tám trăm '
                break;
            case 9:
                rs+='Chín trăm '
                break;
        
            default:
                break;
        }
        switch (chuc) {
            case 0:
                switch (donvi) {
                    case 0:
                        rs+=''
                        break;
                
                    default:
                        rs+='lẻ '
                        break;
                }
                break;
            case 1:
                rs+='mười '
                break;
            case 2:
                rs+='hai mươi '
                break;
            case 3:
                rs+='ba mươi '
                break;
            case 4:
                rs+='bốn mươi '
                break;
            case 5:
                rs+='năm mươi '
                break;
            case 6:
                rs+='sáu mươi '
                break;
            case 7:
                rs+='bảy mươi '
                break;
            case 8:
                rs+='tám mươi '
                break;
            case 9:
                rs+='chín mươi '
                break;
        
            default:
                break;
        }
        switch (donvi) {
            case 0:
                rs+=''
                break;
            case 1:
                rs+='một'
                break;
            case 2:
                rs+='hai'
                break;
            case 3:
                rs+='ba'
                break;
            case 4:
                rs+='bốn'
                break;
            case 5:
                rs+='năm'
                break;
            case 6:
                rs+='sáu'
                break;
            case 7:
                rs+='bảy'
                break;
            case 8:
                rs+='tám'
                break;
            case 9:
                rs+='chín'
                break;
        
            default:
                break;
        }
    }
    //in kết quả
    document.getElementById('result3').innerHTML=rs;
}
function khoangCach(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1, 2));
}
function timSinhVien() {
    //input name1, name2, name3: String
    //      xSchool, ySchool, xSt1, ySt1, xSt2, ySt2, xSt3, ySt3: number
    var name1 = document.getElementById('nameStudent1').value;
    var name2 = document.getElementById('nameStudent2').value;
    var name3 = document.getElementById('nameStudent3').value;
    var xSchool = Number(document.getElementById('xSchool').value);
    var ySchool = Number(document.getElementById('ySchool').value);
    var xSt1 = Number(document.getElementById('toadox1').value);
    var ySt1 = Number(document.getElementById('toadoy1').value);
    var xSt2 = Number(document.getElementById('toadox2').value);
    var ySt2 = Number(document.getElementById('toadoy2').value);
    var xSt3 = Number(document.getElementById('toadox3').value);
    var ySt3 = Number(document.getElementById('toadoy3').value);

    //output rs: String
    var rs;

    //xử lí
    var d1=khoangCach(xSt1, ySt1, xSchool, ySchool);
    var d2=khoangCach(xSt2, ySt2, xSchool, ySchool);
    var d3=khoangCach(xSt3, ySt3, xSchool, ySchool);

    if(name1=="" || name2=="" || name3=="" || xSchool=="" || ySchool=="" || ySchool=="" || xSt1==""||xSt2==""||xSt3=="" || ySt1=="" || ySt2=="" || ySt3==""){
        alert("Dữ liệu không hợp lệ")
    }else {
        if(d1>d2){
            if(d2>d3){
                // rs=d1;
                rs=name1
            }else if(d3>d1){
                // rs=d3;
                rs=name3
            }
            rs=name1;
        }else{ //d1<d2
            if(d1>d3){
                // rs=d2;
                rs=name2;
            }else if(d3>d2){
                // rs=d3;
                rs=name3
            }
            // rs=d2;
            rs=name2
        }
    }

    //in kết quả
    document.getElementById('result4').innerHTML="Khoảng cách xa nhất là: "+rs;
    

}