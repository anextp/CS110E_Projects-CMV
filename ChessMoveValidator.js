const user = require('readline-sync');
const convert = ['a', 'b', 'c','d','e','f','g','h'];
let piece= user.question("Please enter the chess piece ");
piece = piece.toLowerCase();
let startpoint= user.question("Please enter the starting point ");
let strow=0;
for(let i=0; i<convert.length;i++)
    if(startpoint.charAt(0)===convert[i])
        strow=i+1;
let stcol=+startpoint.charAt(1);

let endpoint= user.question("Please enter the ending point ");
let endrow=0;
for(let i=0; i<convert.length;i++)
    if(endpoint.charAt(0)===convert[i])
    endrow=i+1;
const endcol=+endpoint.charAt(1);

function bishop(strow,stcol,endrow,endcol) {
    if( Math.abs(strow-endrow)=== Math.abs(stcol-endcol))
        return true; 
    return false;  
}

function rook(strow,stcol,endrow,endcol)
{
    if(strow===endrow || stcol===endcol)
        return true;
    return false;   
}

function knight(strow,stcol,endrow,endcol)
{
    if(Math.abs(strow-endrow)===1 && Math.abs(stcol-endcol)===2 || (Math.abs(strow-endrow)===2 && Math.abs(stcol-endcol)===1))
      return true;
    return false;
}

function queen(strow,stcol,endrow,endcol)
{
    if(rook(strow,stcol,endrow,endcol) || bishop(strow,stcol,endrow,endcol))
        return true;
    return false;
}

switch (piece) {
    case 'bishop':
        if(bishop(strow,stcol,endrow,endcol))
        console.log("This piece is able to make this move");
    else 
    console.log("This piece is unable to make this move");
    break;
    case 'rook':
        if(rook(strow,stcol,endrow,endcol))
            console.log("This piece is able to make this move");
        else 
        console.log("This piece is unable to make this move");
        break;
    case 'knight':
        if(knight(strow,stcol,endrow,endcol))
            console.log("This piece is able to make this move");
        else 
        console.log("This piece is unable to make this move");
        break;
    case 'queen':
        if(queen(strow,stcol,endrow,endcol))
        console.log("This piece is able to make this move");
    else 
    console.log("This piece is unable to make this move");
    break;
      
    default:
        console.log('This is an unknown piece.');
}