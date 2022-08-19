function staircase(n) {
    let symbol = '#';
    let space = ' ';

    for (let i = 1; i <= n; i++) {
        let countSpace = n - i;
        let countSymbol = n - countSpace;

        let spaces = ""
        let symbols =  ""

        for (let j = 0; j < countSpace; j++) {
            spaces += space
        }

        for (let j = 0; j < countSymbol; j++) {
            symbols += symbol
        }

        console.log(spaces + symbols);
    }
}

staircase(3);
/*
  #
 ##
###
*/

