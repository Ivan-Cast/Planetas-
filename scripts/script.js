let nombreplanetas = ['Tierra', 'Marte']
let distancia = [6, 3, '67']
const tamanio = []

let i = 0

while (i <= nombreplanetas.length - 1) {
   console.log(i);
   console.log(nombreplanetas[i]);
   i += 1
}

for (let i = 0; i < nombreplanetas.length; i++){
    console.log(i);
    console.log(nombreplanetas[i]);
}

nombreplanetas.map((planeta)=>{
    console.log(planeta)
})

for (const key in Object) {
    if (Object.hasOwnProperty.call(Object, key)) {
        const element = Object[key];
    }
} 

for (const key in nombreplanetas) {
    console.log(nombreplanetas[key])
}

for(const iterator of Object){

}

//Recorrer Planeta
for(const planeta of nombreplanetas) {
    console.log(planeta)
}

//Operador de igualdad
for(const key in distancia) {
    if(distancia[key] == '5'){
        console.log('se encontro la distancia')
    }
    else{
        console.log('No se encotro la distancia')
    }
}

for(const key in distancia) {
    if(distancia[key] === '5'){
        console.log('se encontro la Distancia')
    }
    else{
        console.log('No se encotro la Distancia')
    }
}
