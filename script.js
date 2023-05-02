"use";
var _buttonlar = document.getElementsByTagName("button");
var _uzunluk = _buttonlar.length;
 var i=0;
 var j=0;
var _sonuc = document.getElementById("sonuc");
let values=[]




for (i=0; i< _uzunluk; i++){
    _buttonlar[i].onclick = hesapla;
}


function hesapla(){
    var _deger = this.innerHTML;
    if(_deger == "="){
        try{
            _sonuc.value = eval(_sonuc.value);
        }
        catch (e){
            _sonuc.value = "0";
        }
        return;
    }

_sonuc.value += _deger; 

}


// for (j=0; j< _uzunluk; j++){
//     _buttonlar[j].onclick = sil;
// }



// function sil(){
//     var _deger = this.innerHTML;
//     if(_deger == "AC"){
//         try{
//             _sonuc.value = eval(_sonuc.value);
//         }
//         catch (e){
//             _sonuc.value = "0";
//         }
//         return;
//     }

//     _sonuc.value += _deger; 

// }


