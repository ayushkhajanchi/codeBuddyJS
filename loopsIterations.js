// level {2}

let fibbonacci = (n) => {
    var a = [];
    a[0] = 0;
    a[1] = 1;
    for(var p = 2; p <= n; p++)
    {
        a[p] = a[p-1] + a[p-2];
    }
    return a[n];
}