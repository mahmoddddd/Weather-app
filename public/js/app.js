 console.log('Client side javascript file is loadedddd!')

 const weatherForm = document.querySelector('form');
 const search = document.querySelector('input');
 const messageOne = document.querySelector('#message-1');
 const messageTwo = document.querySelector('#message-2');


 weatherForm.addEventListener('submit', (e) => { // e = event
     e.preventDefault() // الخاصيه دي عشان المتصفح ميحملش الصفحه من اول وجديد ... يعمل قثىيثق لنفس الصفحه من غير مسح اي شئ



     const location = search.value
     messageOne.textContent = 'Looding.........'
     messageTwo.textContent = ''




     fetch('http://localhost:3000/weather?address=' + location).then((response) => {
         response.json().then((data) => {
             if (data.error) {
                 messageOne.textContent = data.error
             } else {
                 messageOne.textContent = 'the Location is ' + data.location;
                 messageTwo.textContent = 'the Weather is ' + data.forecast;
             }
         })
     })
 })