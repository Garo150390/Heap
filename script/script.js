let arr = [];

function siftUP(a, i) {
    while (i > 0 && a[i] < a[Math.floor((i - 1) / 2)]) {
        let q = a[Math.floor((i - 1) / 2)];
        a[Math.floor((i - 1) / 2)] = a[i];
        a[i] = q;
        i = Math.floor((i - 1) / 2)
    }
}

function siftDown(a, i = 0) {
    while (2 * i + 1 < a.length) {
        let j = i;
        if (a[2 * i + 1] < a[j]) {
            j = 2 * i + 1;
        }
        if (2 * i + 2 < a.length && a[2 * i + 2] < a[j]) {
            j = 2 * i + 2;
        }
        if (j === i) {
            break;
        } else {
            let q = a[j];
            a[j] = a[i];
            a[i] = q;
            i = j;
        }
    }
}

function addNum(a, v) {
    a[a.length] = v;
    siftUP(arr, a.length - 1);
}

function ex_min(a) {
    let n = a[0];
    a[0] = a[a.length - 1];
    a.pop();
    siftDown(a);
    return n;
}

for (let i = 0; i < 10; i += 1) {
    addNum(arr, i * 2);
}

addNum(arr, 1);

let min = ex_min(arr);
