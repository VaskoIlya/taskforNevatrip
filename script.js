document.getElementById('checkButt').onclick = myClick;
document.getElementById('checkButt2').onclick = myClick1;




function myClick(){
     let wayValue = document.getElementById("input way").value;
     let timeWay = document.getElementById("input typeOfWay").value;
     let quantityTicks = document.querySelector('.tickets').value;
     let declination;
     let way;

        // реализация первой строчки результата
        if(quantityTicks < 1){
                return alert('Введите число билетов!');
        }
        else if(quantityTicks = 1 || quantityTicks == 21){
                declination = "билет";
        }
        else if (1 < quantityTicks <= 4){
                declination = "билета";
        }
        else if (4 < quantityTicks <= 21){
                declination = " билетов";
        }
        
        // реализация второй строчки результата
        if (wayValue == 1){
                way = " из А в В ";
                cost = 700 ;
                time = 50;
                myWay = 1;
        }
        else if (wayValue == 2) {
                way = " из В в А ";
                cost = 700 ;
                time = 50;
                myWay = 2;
        }
        else if (wayValue == 3){
                way = " из A в B и обратно в А "
                cost = 1200 ;
                time = 100;
                myWay = 1;

        }
        
        // реализация третьей строчки результата
        if (timeWay == 1){
                departure = " 18:00 ";
                arrival = " 18:50 ";
                arrivalId = 0;
        }
        else if (timeWay == 2) {
                departure = " 18:30 ";
                arrival = " 19:20 ";
                arrivalId = 1;
        }
        else if (timeWay == 3){
                departure = " 18:45 ";
                arrival = " 19:35 ";
                arrivalId = 3;
        }
        else if (timeWay == 4) {
                departure = " 19:00 ";
                arrival = " 19:50 ";
                arrivalId = 4;
        }
        else if (timeWay == 5){
                departure = " 19:15 ";
                arrival = " 20:05 ";
                arrivalId = 5;
        }
        else if (timeWay == 6) {
                departure = " 21:00 ";
                arrival = " 21:50 ";
                arrivalId = 6;
        }
        else if (timeWay == 7){
                departure = " 18:30 ";
                arrival = " 19:20 ";
                arrivalId = 7;
        }
        else if (timeWay == 8) {
                departure = " 18:45 ";
                arrival = " 19:35 ";
                arrivalId = 7;
        }
        else if (timeWay == 9){
                departure = " 19:00 ";
                arrival = " 19:50 ";
                arrivalId = 7;
        }
        
        else if (timeWay == 10) {
                departure = " 19:15 ";
                arrival = " 20:05 ";
                arrivalId = 7;
        }
        else if (timeWay == 11){
                departure = " 19:35 ";
                arrival = " 20:25 ";
                arrivalId = 7;
        }

        else if (timeWay == 12) {
                departure = " 21:50 ";
                arrival = " 22:30 ";
                arrivalId = 7;
        }
        else if (timeWay == 13){
                departure = " 21:55 ";
                arrival = " 22:35 ";
                arrivalId = 7;
        }

        if (arrivalId == 1){
                var select = document.getElementById('timeToBack');
                select.removeChild(select.querySelector('[id="1"]'));
                select.removeChild(select.querySelector('[id="2"]'));  

        }
        else if (arrivalId == 2) {
                var select = document.getElementById('timeToBack');
                select.removeChild(select.querySelector('[id="1"]'));
                select.removeChild(select.querySelector('[id="2"]'));
                select.removeChild(select.querySelector('[id="3"]'));
                    
        }
        else if (arrivalId == 3) {
                var select = document.getElementById('timeToBack');
                select.removeChild(select.querySelector('[id="1"]'));
                select.removeChild(select.querySelector('[id="2"]'));
                select.removeChild(select.querySelector('[id="3"]'));    
        }
        else if (arrivalId == 4) {
                var select = document.getElementById('timeToBack');
                select.removeChild(select.querySelector('[id="1"]'));
                select.removeChild(select.querySelector('[id="2"]'));
                select.removeChild(select.querySelector('[id="3"]'));    
        }
        else if (arrivalId == 5) {
                var select = document.getElementById('timeToBack');
                select.removeChild(select.querySelector('[id="1"]'));
                select.removeChild(select.querySelector('[id="2"]'));
                select.removeChild(select.querySelector('[id="3"]'));    
        }
        else if (arrivalId == 6) {
                var select = document.getElementById('timeToBack');
                select.removeChild(select.querySelector('[id="1"]'));
                select.removeChild(select.querySelector('[id="2"]'));
                select.removeChild(select.querySelector('[id="3"]')); 
                select.removeChild(select.querySelector('[id="4"]'));    
        }
        else if (arrivalId == 7){
                var select = document.getElementById('timeToBack');
                select.removeChild(select.querySelector('[id="1"]'));
                select.removeChild(select.querySelector('[id="2"]'));
                select.removeChild(select.querySelector('[id="3"]')); 
                select.removeChild(select.querySelector('[id="4"]')); 
                select.removeChild(select.querySelector('[id="5"]')); 
                text = document.querySelector('#out4');
                text.removeChild(text.firstChild);
        }
        
       

        document.querySelector('.out1').innerHTML = "Вы выбрали " + quantityTicks + ' ' + declination + " " + way 
        + " стоимостью " + cost * quantityTicks + " р." ;
        document.querySelector('.out2').innerHTML = "Это путешествие займёт у Вас " + time + " минут";
        document.querySelector('.out3').innerHTML = "Теплоход отправится в " + departure + " и прибудет в " + arrival;
        }
        
        
