var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
Image 

function sai(x){
  s=x;
  if(x==1){
    document.getElementById("ID2").innerHTML = "สาย 26";
    document.getElementById('paif').selectedIndex = 0;
  }
  if(x==2){
    document.getElementById("ID2").innerHTML = "สาย 96";
    document.getElementById('paif').selectedIndex = 0;
  }
  if(x==0){
    document.getElementById("ID2").innerHTML = "เลือกสายรถ";
    document.getElementById('paif').selectedIndex = 0;
  }
}

function binarySearch(arr, l, r, x){
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
 
        if (arr[mid] == x)
            return mid;
 
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);
 
        return binarySearch(arr, mid + 1, r, x);
    }
 
    return -2;
}
let sai1 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125];
let n = sai1.length
let sai2 = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126];
let m = sai2.length
var s = 0;
var p = 0;
var f = 0;

function paifu(x){
  if(s==1){
    f=(binarySearch(sai1, 0, n - 1, x))+1;
  }
  if(s==2){
    f=(binarySearch(sai2, 0, n - 1, x))+1;
  }
}
function pai(x){
  p=x;
  if(s==1&&f>0){
    let result = binarySearch(sai1, 0, n - 1, p);
    (result == -2) ? document.getElementById("ID5").innerHTML = "ไม่ผ่าน"+"\nสายที่ผ่านคือ96"+'<img src="image/incorrect.png"width="35%"height="auto">'
                      : document.getElementById("ID5").innerHTML = "ผ่าน \n อีก \n" +Math.abs(result-(f-1)) +"\n ป้ายจะถึง\n"+'<img src="image/correct.png"width="35%"height="50%">'
  }
  else if(s==2&&f>0){
    let result = binarySearch(sai2, 0, m - 1, p);
      (result == -2) ? document.getElementById("ID5").innerHTML = "ไม่ผ่าน"+"\nสายที่ผ่านคือ26"+ '<img src="image/incorrect.png"width="35%"height="auto">'
                      : document.getElementById("ID5").innerHTML = "ผ่าน \n อีก \n" +Math.abs(result-(f-1)) +"\n ป้ายจะถึง\n"+'<img src="image/correct.png"width="35%"height="50%">'
  }
  else if(f==-1){
    document.getElementById("ID5").innerHTML = "ป้ายปัจจุบัน"+"\nหรือ"+"\nป้ายที่คุณต้องการลงคุณไม่อยู่ในเส้นทางกรุณาเลือกใหม่";
    document.getElementById('paif').selectedIndex = 0;
  }
  else {
    document.getElementById("ID5").innerHTML = "กรุณาเลือกสายที่ต้องการ"+"\nและ"+"\nป้ายปัจจุบันก่อนเลือกป้ายที่ต้องการลง";
  }
}

