function gcd(x, y) {
    while(x !== 0 && y !== 0) {
      if(x > y) x -= y;
      else y -= x;
    }
    console.log(x);
}
gcd(15, 5);
gcd(2154, 458);