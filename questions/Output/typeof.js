console.log(typeof typeof 1);

/*
breaks down
1. console.log(typeof (typeof 1));
2. Does (typeof 1) first "number"
3. Then does typeof on "number"
4. Which is a string

Really typeof always returns a string
*/