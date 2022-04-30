// bài3
/**
 * khối 1 : input
 * người dùng nhập vào 3 số nguyên
 * 
 * khối 2 :
 * b1 khai báo biến
 * b2 : lấy giá trị
 * b3 khởi tạo hàm
 *  if (so1 %2 == 0){
 * sochan+=1;}else{
 * sole +=1}if (so2 %2 == 0){
 * sochan+=1;}else{
 * sole +=1}if (so3 %2 == 0){
 * sochan+=1;}else{
 * sole +=1}
 * 
 * b4 : onclick
 * 
 * khối 3: xuất ra màn hình bao nhiêu số lẻ và chẵn
 */

function tinhso() {
    var so1 = document.getElementById('numa').value;
    var so2 = document.getElementById('numb').value;
    var so3 = document.getElementById('numc').value;
    var sochan = 0;
    var sole = 0;
    var so1 = parseInt(so1);
    var so2 = parseInt(so2);
    var so3 = parseInt(so3);
    if (so1 % 2 == 0) {
        sochan += 1;
    } else {
        sole += 1
    } if (so2 % 2 == 0) {
        sochan += 1;
    } else {
        sole += 1
    } if (so3 % 2 == 0) {
        sochan += 1;
    } else {
        sole += 1
    }

    document.getElementById('demso').innerHTML = "xuất" + sochan + "số chẵn" + ";" + "<br>" + "xuất" + sole + "số lẻ";
}
