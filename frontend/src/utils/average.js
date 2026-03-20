// TODO: расчёт среднего балла
import { overalAvgBox } from '../mocks/grades'
function average (arr) { // Функция принимает массив
    let sum = 0 //Сумма
    let avg; //Среднее
    for(let i = 0; i < arr.length; i++) { //Счетчик
        sum = sum + arr[i] //Рассчет суммы
        avg = sum / arr.length //Рассчет среднего
        
    }
    const floor = Math.floor(avg * 100) / 100
    return floor
}

function overalAvg() {
    let sum = 0
    let avg;
 
    for(let i = 0; i < overalAvgBox.length; i ++) {
        sum = sum + overalAvgBox[i]
        avg = sum / overalAvgBox.length
    }
    const avgFloor = Math.floor(avg * 100) / 100
    return avgFloor
}

export { overalAvg }
export default average


