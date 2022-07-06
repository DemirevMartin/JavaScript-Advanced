function solve() {
   //Checkout
   let checkout = document.getElementsByClassName('checkout')[0];
   checkout.addEventListener('click', onCheckout);
   let isCheckedOut = false;

   //output
   let textarea = document.getElementsByTagName('textarea')[0]; 

   //buttons Add
   let add = Array.from(document.getElementsByClassName('add-product')); 

   let data = {}; //data[title] = {price, count}; 

   function onCheckout(ev) {
      ev.target.disabled = true;
      for(let el of add) {
         el.disabled = true;
      }
      isCheckedOut = true;

      //last row
      const list = Object.keys(data).join(', ');
      let totalPrice = 0;
      for(const value of Object.values(data)) {
         const current = (value.price) * (value.count);
         totalPrice += current;
      }
      textarea.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
   }

   for(let el of add) {
      el.addEventListener('click', onClick);
   }

   function onClick(e) {
      let par = e.target.parentElement.parentElement;
      const title = par.children[1].children[0].textContent;
      let price = par.children[3].textContent;
      // document.getElementsByClassName('add-product')[0].parentElement.parentElement.children[1].children[0].textContent
      // document.getElementsByClassName('add-product')[0].parentElement.parentElement.children[3].textContent
      textarea.value += `Added ${title} for ${price} to the cart.\n`;
      
      if(data.hasOwnProperty(title)) {
         data[title].count++;
      } else {
         let count = 1;
         price = Number(price);
         data[title] = {
            price,
            count
         }
      }
   }
}