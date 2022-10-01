//Rest parameter
const doubled = (...x) => {
    console.log(x);

    return x.map(x => x*2 );
}

const result = doubled(1,2,3,4,5)

console.log(result);



// Spread syntax (for arrays )

const users = ['user1','user2','user3' ]
const premMembersNoSpreaded = ['user5', 'user11', users]
const premMembersSpreaded = ['user5', 'user11', ...users]

console.log(...users);
console.log(premMembersNoSpreaded);
console.log(premMembersSpreaded);

// Spread syntax (for objects )


const car = {brand: 'mercedes', color:'white', hp:340}

const carClone = {...car, seats:4};

console.log(car);
console.log(carClone);
console.log(car === carClone);
