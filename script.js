var date = new Date()
var today = date.getDay()
switch(today){
    case 1 :
        document.write("Mon")
        break;
    case 2 :
        document.write("Tus")
        break;
    case 3 :
        document.write("Wen")
        break;
    case 4 :
        document.write("tur")
        break;
    case 5 :
        document.write("Fri")
        break;
    case 6 : 
        document.write("Sat")
         break; 
    case 7 : 
        document.write("Sun")
        break;
    default:document.write("error")  
}