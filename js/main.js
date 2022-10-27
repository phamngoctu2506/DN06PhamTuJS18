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

function TongSoDuong() {
    var tongCacSo = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            tongCacSo += numArray[i];
        }
    }
    document.querySelector('#ketQua1').innerHTML = tongCacSo;
}

//! bài 2: đếm có bao nhiêu số dương trong mảng

function DemSoDuong() {
    var tongSoDuong = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            tongSoDuong++;
        }
    }
    document.querySelector('#ketQua2').innerHTML = tongSoDuong;
}

//! bài 3: tìm số nhỏ nhất

function TimSoNhoNhat() {
    var min = numArray[0,1,2,3];
    var viTri = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (min > numArray[i]) {
            min = numArray[i];
            viTri = i;
        }
    }
    document.querySelector('#ketQua3').innerHTML = min;
}
