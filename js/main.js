/**
 * Thêm các Số vào mảng
 */

var numArray = [];

function themSo() {
    var num1 = Number(document.querySelector('#num1').value);
    numArray.push(num1);
    document.querySelector('#ketQua').innerHTML = numArray;
}

//! bài 1: tính tổng số dương

function tongSoDuong() {
    var tongCacSo = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            tongCacSo += numArray[i];
        }
    }
    document.querySelector('#ketQua1').innerHTML = tongCacSo;
}

//! bài 2: đếm có bao nhiêu số dương trong mảng

function demSoDuong() {
    var tongSoDuong = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            tongSoDuong++;
        }
    }
    document.querySelector('#ketQua2').innerHTML = tongSoDuong;
}

//! bài 3: tìm số nhỏ nhất

function timSoNhoNhat() {
    var min = numArray[0];
    var viTri = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (min > numArray[i]) {
            min = numArray[i];
            viTri = i;
        }
    }
    document.querySelector('#ketQua3').innerHTML = min;
}

//! bài 4: tìm số dương nhỏ nhất

function timSoDuongNho() {
    var tapHopSoDuong = numArray[0];
    for (var i = 0; i > numArray.length; i++) {
        if (tapHopSoDuong >= 1 && tapHopSoDuong > numArray[i]) {
            tapHopSoDuong = numArray[i];
        } else {
            document.querySelector('#ketQua4').innerHTML = "Không có số dương"
        }
    }
    document.querySelector('#ketQua4').innerHTML = tapHopSoDuong;
}

//! bài 5: tìm số dương nhỏ nhất

function timSoChanCuoi() {
    var soChanCuoi = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            soChanCuoi = numArray[i];
        }
    }
    document.querySelector('#ketQua5').innerHTML = soChanCuoi;
}


//! bài 6: Hoán đổi vị trí

function doiCho() {
    var numCopy = [];
    for (var i = 0; i < numArray.length; i++) {
        numCopy.push(numArray[i]);
    }
    var viTri1 = Number(document.querySelector('#num4').value);
    var viTri2 = Number(document.querySelector('#num5').value);
    for (var i = 0; i < numCopy.length - 1; i++) {
        var thayThe = numCopy[viTri1];
        numCopy[viTri1] = numCopy[viTri2];
        numCopy[viTri2] = thayThe;
    }
    document.querySelector("#ketQua6").innerHTML = numCopy;
}

//! bài 7: sắp xếp tăng dần

function sapXepTang() {
    var diemCopy = [];
    for (var i = 0; i < numArray.length; i++) {
        diemCopy.push(numArray[i]);
    }
    for (var i = 0; i < diemCopy.length - 1; i++) {
        for (var j = 0; j < diemCopy.length; j++) {
            if (diemCopy[j] > diemCopy[j + 1]) {
                var temp = diemCopy[j];
                diemCopy[j] = diemCopy[j + 1];
                diemCopy[j + 1] = temp;
            }
        }
    }
    console.log(diemCopy);
    document.querySelector("#ketQua7").innerHTML = diemCopy;
}


//! bài 8 tìm số nguyên tố đầu tiên

function soNguyenTo(soNguyen){
    var dem = 0;
    for (var i = 0; i <= soNguyen; i++){
        if (soNguyen % i === 0){
            dem++;
        }
    }
    if (dem === 2){ 
        return true;
    }else{
        return false;
    }
}

function timNguyenTo() {
    for (var i = 0; i < numArray.length; i++){
        var soNT = soNguyenTo(numArray[i]);
        if (soNT){
            document.querySelector("#ketQua8").innerHTML = (numArray[i] + " là số nguyên tố đầu tiên");
            break;
        }
    }
}

//! bài 9: Đếm số nguyên
function demSoNguyen() {
    var tongSoNguyen = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 1 == 0 || numArray[i] % -1 == 0 || numArray[i] == 0) {
            tongSoNguyen += 1;
        } else {
        }
    }
    document.querySelector("#ketQua9").innerHTML = tongSoNguyen;
}

//! bài 10: so sánh số âm và dương
function soSanh() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong += 1;
        } if (numArray[i] < 0) {
            soAm += 1;
        } else {
        }

    }
    if (soDuong > soAm) {
        document.querySelector("#ketQua10").innerHTML = 'số dương > số âm';
    } if (soDuong < soAm) {
        document.querySelector("#ketQua10").innerHTML = 'số âm > số dương';
    } if (soDuong == soAm) {
        document.querySelector("#ketQua10").innerHTML = 'số âm = số dương';
    } if (soDuong == 0 && soAm == 0) {
        document.querySelector("#ketQua10").innerHTML = 'không có giá trị âm dương';
    } else {
    }
}


