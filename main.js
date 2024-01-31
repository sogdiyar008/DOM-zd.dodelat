let users = [
    {id: 1, name: 'Sasha', surname: 'Ivanov', grade:'5B'},
    {id: 2, name: 'Ronaldo', surname: 'Ivanov', grade: '7A'},
    {id: 3, name: 'Vasya', surname: 'Petrov', grade: '5B'},
    {id: 4, name: 'Sogdiyar', surname: 'Pupkin', grade:'ChildHause'},
    {id: 5, name: 'Grida', surname: 'darkow', grade:'xddd'},
    {id: 6, name: 'KRAPIT', surname: 'xzov', grade: 'xzzz'},
]

let elem = document.querySelector('.list')
let winscreen = document.querySelector('.winscreen')
let timerscreen = document.querySelector('.timerscreen')
let win = [5, 3]
let touchCount = 0;

for (let user of users){
    elem.insertAdjacentHTML('beforeend',
    `
        <div class="card" id="${user.id}" onclick="hello(${user.id})">
            <h4 class="name">${user.name}</h4>
            <p classs="num">карта №${user.id}</p>
            <p class="surname">${user.surname}</p>
            <p class="grade">${user.grade}</p>
        </div>
    `
    )
}



let time=0
function timer(){
    console.log(time)
    if (time == 60){
        document.querySelector('.list').style.display = 'none';
        console.log(document.querySelector('.list'))
        clearInterval(times)
    };
    time++
    
    timerscreen.innerHTML = `<h2>ВРЕМЯ:    ${time}</h2>`
}
let times = setInterval(timer, 1000)




function hello(id){
    console.log(id);
    touchCount++;
    for (elems of win){
        if(elems == id){
            winscreen.insertAdjacentHTML('beforeend',
            `
                <h1>ВЫ УГАДАЛИ C ${touchCount} ПОПЫТКИ ЗА ${time} СЕКУНД</h1>

            `
            )
        };
    }
    document.getElementById(id).hidden = true;
    console.log('Количество касаний:', touchCount);
}