/**
 * Encuentra el primer número de identificación que se ha repetido, 
 * donde la segunda ocurrencia tenga el índice más pequeño!
 * En otras palabras, si hay más de un número repetido,
 * debes devolver el número cuya segunda ocurrencia aparezca primero en la lista.
 * Si no hay números repetidos, devuelve -1.
 */

/** 
 * Puedes encontrar el primer valor repetido en un array en JavaScript utilizando un bucle for,
 *  y un conjunto (Set) para realizar un seguimiento de los valores que has visto hasta el momento. 
 */

function findFirstRepeated(gifts){
    const control = new Set()//Utiliza un conjunto (Set)para realizar un seguimiento de los valores únicos que ha encontrado hasta el momento 
                            //Cuando encuentra un valor que ya está en el conjunto, 
                            //devuelve ese valor como el primer valor repetido
    for(let i = 0; i <= gifts.length; i++){//utiliza un bucle for para iterar a través del array
        if(control.has(gifts[i])){
            return gifts[i]
        }else{
            control.add(gifts[i])
        }
    }
    return -1
}

const giftIds = [2, 5, 3]

const firstRepeatedId = findFirstRepeated(giftIds)

console.log(firstRepeatedId)

