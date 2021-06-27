// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let arr = [1, 2, 3];
let arrR = arr.reduce((prev, next) => prev + next, 0);
console.log(arrR);

let arr1 = [
  { id: 'pippo' },
  { id: 'pippo' },
  { id: 'luca' },
  { id: 'x3' },
  { id: 'pippo' }
];

let arrR1 = arr1.reduce((obj, next) => {
  obj[next['id']] = obj[next['id']] ? obj[next['id']] + 1 : 1;
  return obj;
}, {});
console.log(arrR1);

let arr2 = [
  { idx: 'x1', name: 'Pippo' },
  { idx: 'x2', name: 'Ignazio' },
  { idx: 'x3', name: 'Alessandro' },
  { idx: 'x1', name: 'Pippo ' },
  { idx: 'x2', name: 'Ignazio' }
];

let arrR2 = arr2.reduce((obj, next) => {
  if (obj[next['id']]) obj[next['id']].push(next);
  else {
    obj[next['id']] = [next];
    //obj[next['id']].push(next);
  }

  return obj;
}, {});
console.log(arrR2);

let groupByObj = (arrayOfObjects, fieldOfID) =>
  arrayOfObjects.reduce((obj, next) => {
    if (obj[next[fieldOfID || 'id']]) obj[next[fieldOfID || 'id']].push(next);
    else {
      obj[next[fieldOfID || 'id']] = [next];
      //obj[next['id']].push(next);
    }

    return obj;
  }, {});

console.log(groupByObj(arr2, 'idx'));
