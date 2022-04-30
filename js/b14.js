// bài 4
/**
 * khối 1:input
 * nhập vào cạnh a,b,c
 * 
 * 
 * khoi 2 :
 * b1; khai báo biến
 * b2: lấy giá trị
 * b3: tạo hàm
 *  if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
       tam giác vuông
     

    } else if (a == b && b == c) {
     tam giác đều
  

    } else if (a == b || a == c || b == c) {
    tam giác cân
      
    } 
    else if (a + b < c || a + c < b || b + c < a) {
        3 cạnh không phải tam giác
    }  
 * b4: onclick
 * 
 * khối 3: 
 * xuất ra tam giác từng loại
 * 
 */




function TamGiac() {
    var a = document.getElementById('number__a').value;
    var b = document.getElementById('number__b').value;
    var c = document.getElementById('number__c').value;



    if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
        var TamGiacVuong = "Tam Giác Vuông";
        console.log("tam giác vuông");


    } else if (a == b && b == c) {
        var TamGiacDeu = "Tam Giác Đều";
        console.log("tam giác đều");


    } else if (a == b || a == c || b == c) {
        var TamGiacCan = "Tam Giác Cân";
        console.log("tam giác cân");

    }
    else if (a + b < c || a + c < b || b + c < a) {
        alert("đây không phải 3 cạnh của tam giác");
        console.log("Day khong phai tam giac");
    }


    document.getElementById("thongBaoGiaTri").innerHTML = "Đây là tam giác : " + TamGiacVuong;
    document.getElementById("thongBaoGiaTri1").innerHTML = "Đây là tam giác : " + TamGiacCan;
    document.getElementById("thongBaoGiaTri2").innerHTML = "Đây là tam giác : " + TamGiacDeu;




}


// bài 1
function kytu(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var tam = "";
    var a = parseInt(a);
    var b = parseInt(b);
    var c = parseInt(c);

    if(a>b)
	{
		tam=a;
		a=b;
		b=tam;
        console.log("số 1 :" +a);
	}
	if(a>c)
	{
		tam=a;
		a=c;
		c=tam;
        console.log("số 2 :" + b);
	}
	if(b>c)
	{
        tam=b;
		b=c;
		c=tam;
        console.log("số 3 :" + c);
	}
    document.getElementById('thongBao').innerHTML =  a+ ">" +b +">"+c; 
}


// bai2
/**
 * khối 1: input
 * các thành viên gia đình
 * 
 * khối 2
 * b1 khai báo
 * b2 lấy giá trị
 * b3 tạo hàm swicth case
 *   switch (chonthanhvien) {
        case "bo":
            console.log("Chào Bố");
            break;
        case "me":
            console.log("chào mẹ");
            break;
        case "anh":
            console.log("chào anh ");
            break;
        case "em":
            console.log("chào em")
            break;

            
    }

    b4: onclick

    khối 3; output
    xuất ra lời chào
 * 
 * 
 * 
 */
function chonthanhvien() {
    var chonthanhvien = document.getElementById('thanhvien').value;
    switch (chonthanhvien) {
        case "bo":
            console.log("Chào Bố");
            break;
        case "me":
            console.log("chào mẹ");
            break;
        case "anh":
            console.log("chào anh ");
            break;
        case "em":
            console.log("chào em")
            break;


    }
    document.getElementById('thanhviengiadinh').innerHTML = "Gửi lời chào : " + chonthanhvien;
}


