//Nomor 3
function bagi3(angka) {
    return angka % 3 === 0;
  }
  var filter = angka.filter(bagi3);
  console.log(filter);
  
// Nomor 4
  function tulis(tulisan){
      return tulisan = tulisan.charAt(0).toUpperCase() + tulisan.slice(1);
  }
  var txt = tulisan.toString(tulis);
  for(let i=0;i<tulisan.length;i++){
    console.log(txt[i]);
  }

//Nomor 5
  function besar(abjad){
   return abjad = abjad.toUpperCase();
  }
  function kecil(abjad){
    return abjad = abjad.toLowerCase();
  }
  for(let a=0;a<abjad.length;a++){
    if(a%2===0){
      return abjad = abjad.toString(besar);
      console.log(abjad[i]);
    }else{
      return abjad = abjad.toString(kecil);
      console.log(abjad[i]);
    }
  }

//Nomor 6  
  function poin(ar){
    var i=0,j;
    while(i<ar.length){
      j=i+1;
      while(j<ar.length){
        if(ar[j]<ar[i]){
          var temp = ar[i];
          ar[i]=ar[j];
          ar[j]=temp;
        }else if(ar[i]===0){
          temp =ar[j];
          ar[j]=ar[i];
          ar[i]=temp;
        }
        j++;
      }
      i++;
    }
  }
  poin(ar);

// Nomor 7  
  function five(str){
    if(str.length>=5){
      var newString="";
      for(var i=str.length-1;i>=0;i--){
      newString +=str[i];
    }
    return newString;
    }
    else{
      return str;
    }
  }
  five(str);