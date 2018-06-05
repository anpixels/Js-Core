// var, let, const

// references

// variable
/*
    string, number, undefined, null
*/

function afdsf() {
    {
        const a = 212;
    }
    const b = [1];

    b.pop();
    b.push(21);

    console.log(b);
}

afdsf()

// Type
/*

1. string
2. number
3. array
4. object
5. undefined
6. null

*/

const str = "Value";

console.log(typeof str === 'string');

const one = '3423.124234';
console.log(parseInt(one, 10));
console.log(parseFloat(one).toFixed(2));
console.log(Number.MAX_SAFE_INTEGER)

const num = 12345;

const aa = [
    123,
    132,
    12,
    423,
];

function accessItem(item) {
    console.log(item);
}

accessItem(213);

console.log(aa.forEach(accessItem));

console.log(aa.map(v => v + 1));

console.log(aa);

const even = [2, 4, 6, 8, 10];
// [1, 3, 5, 7, 9];

const odd = even.map(function(v, i, self) {
    return v - 1;
});

console.log(odd);

// const evenNum = [];
// for (let i = 0; i < aa.length; i++) {
//     if (aa[i] % 2 === 0) {
//         evenNum.push(aa[i]);
//     }
// }

const evenNum = aa.filter(function(item) {
    return item % 2 === 0;
});

console.log(evenNum);

// reduce
// array -> values -> value

const numbers = [1,2,3,4,5,6];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

const sum = numbers.reduce((acc, item) => {
    console.log(acc, item);
    return acc + item;
}, 0);

console.log(sum);

// reduce as map

const b = [1,2,3,4];
console.log(b.map(v => v + 10));

console.log(
    b.reduce((acc, v) => {
        console.log(acc, v);
        acc.push(v + 10);

        return acc;
    }, [])
)

// reduce as filter

// Object
// Key-Value pair
{

const a = {
    id: 121,
    realValue: 'value'
};

const b = {
    id: 212,
    realValue: {
        v: 21
    }
}

const todoList = [
    {
        id: 21,
        description: 'This is a todo.',
        title: 'TODO',
        createdAt: '20212212',
        isCompleted: false,
    },
    {
        id: 22,
        description: 'This is a 22 todo.',
        title: 'TODO 2',
        createdAt: '20212212',
        isCompleted: true,
    }
]

const v = {};
v.fsdf = 'fsdf';
v[21] = 'val';
console.log(v)

const todoMap = todoList.reduce(
    function(acc, v) {
        console.log(Object.keys(acc), v.id);
        acc[v.id] = v;

        return acc;
    },
    {}
);

// const v =  {
//         id: 21,
//         description: 'This is a todo.',
//         title: 'TODO',
//         createdAt: '20212212',
//         isCompleted: false,
//     }
// const todoMap = {
//     21: v,
//     22: {
//         id: 22,
//         description: 'This is a 22 todo.',
//         title: 'TODO 2',
//         createdAt: '20212212',
//         isCompleted: true,
//     },
// }

const g = [a,b];

console.log(todoList.find(v => v.id === 22));
console.log(todoMap[22]);

console.log(g.filter(v => v.id !== 121));

console.log(a['id'], a.id, a.fdsfsdf)

console.log(
    Object.keys(a),
    Object.values(b),
    Object.entries(a)
);

// ES6

const name3 = 'squgeim';
const age3 = 16;
const addressKey = 'addr';
const addressValue = 'jhapa';

const user = {
    name3,
    age3,
    [addressKey]: addressValue,
};

console.log(user);

}

{
    // undefined, null
    const v = {};
    const a = [];
    let b = null;

    console.log(b);
    console.log(a[21]);
    console.log(v.fasdf === undefined);
    console.log(b === null);
    console.log(b === v.dfs)

    /*
    Falsy: false, null, undefined, ''
    */

    if (1 == true) {
        console.log('in here');
    } else {
        console.log('in else');
    }
}
