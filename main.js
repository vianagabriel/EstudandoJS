const h1 = document.querySelector('.container h1');
const div = document.querySelector('.text')
const date = new Date();



//  function getDayWeekText (dayWeek) {
//    let dayWeekText;
  
//   switch(dayWeek) {
//      case 0: 
//       dayWeekText = "domingo";
//       return dayWeekText;
//       case 1: 
//       dayWeekText = "segunda-feira";
//       return dayWeekText;
//       case 2: 
//       dayWeekText = "terça-feira";
//       return dayWeekText;
//       case 3: 
//       dayWeekText = "quarta-feira";
//       return dayWeekText;
//       case 4: 
//       dayWeekText = "quinta-Feira";
//       return dayWeekText;
//       case 5: 
//       dayWeekText = "sexta-feira";
//       return dayWeekText;
//       case 6: 
//       dayWeekText = "sábado";
      
//    }
// }

// function getNameMonth (numberMonth){
//   let nameMonth;
//   switch(numberMonth){
//     case 0: 
//      nameMonth = "janeiro";
//      return nameMonth;
//      case 1: 
//      nameMonth = "fevereiro";
//      return nameMonth;
     
//      case 2: 
//      nameMonth = "março";
//      return nameMonth;
     
//      case 3: 
//      nameMonth = "abril";
//      return nameMonth;
     
//      case 4: 
//      nameMonth = "maio";
//      return nameMonth;
//      case 5: 
//      nameMonth = "junho";
//      return nameMonth;
     
//      case 6: 
//      nameMonth = "julho";
//      return nameMonth;
     
//      case 7: 
//      nameMonth = "agosto";
//      return nameMonth;
     
//      case 8: 
//      nameMonth = "setembro";
//      return nameMonth;
     
//      case 9: 
//      nameMonth = "outubro";
//      return nameMonth;
     
//      case 10: 
//      nameMonth = "novembro";
//      return nameMonth;
     
//      case 11: 
//      nameMonth = "dezembro";
//      return nameMonth;
//     }
//   }

// function zeroLeft(number){
//   return number >= 10 ? number: `0${number}`
// }
  
// function createDate(date){
//   const dayWeek = date.getDay();
//   const numberMonth = date.getMonth();
//   const nameDay = getDayWeekText(dayWeek);
//   const nameMonth = getNameMonth(numberMonth);
  

// return `
//   ${nameDay}, ${date.getDate()} de ${nameMonth} de ${date.getFullYear()},
//   ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}:${zeroLeft(date.getSeconds())}`
// }

// h1.innerHTML = createDate(date);
// div.innerHTML = (`<p><strong>Esse programa foi desenvolvido no curso de Javascript com intuito do estudo de swtich case e o obejeto date, aonde wstou informando a cima o dia da semana, dia do mês, mês, ano e a hora atual, e utilizei a Dom para selecionar elementos html. </strong></p>`)


                   // Clean code

function getDayWeekText(dayWeek){
    const daysWeek = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
                      'quinta-feira', 'sexta-feira', 'sábado']
                      return daysWeek[dayWeek]
  }
  
  function getNameMonth(numberMonth){
      const months = ['janeiro', 'feveriero', 'março', 'abril',  'maio', 'junho', 'julho', 'agosto', 'outubro', 'novembro', 'dezembro'];
      return months[numberMonth]
    
    }
    
function zeroLeft(number){
  return number >= 10 ? number: `0${number}`
}
  
      function createDate(date){
        const dayWeek = date.getDay();
        const numberMonth = date.getMonth();
        const nameDay = getDayWeekText(dayWeek);
        const nameMonth = getNameMonth(numberMonth);
        
  
  return `
        ${nameDay}, ${date.getDate()} de ${nameMonth} de ${date.getFullYear()},
        ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}:${zeroLeft(date.getSeconds())}`
}
     
h1.innerHTML = createDate(date);
div.innerHTML = (`<p><strong>Esse programa foi desenvolvido no curso de Javascript com intuito do estudo de swtich case e o obejeto date, aonde wstou informando a cima o dia da semana, dia do mês, mês, ano e a hora atual, e utilizei a Dom para selecionar elementos html. </strong></p>`)
     



