function lengthOfString(str1: string): number{
    return str1.length;
} // lengthOfString()

console.log(lengthOfString("test 1"));

function lengthWithoutSpace(str1: string): number{
    let str1NoSpace: string;
    str1NoSpace = str1.replace(/\s/g, '');
   return str1NoSpace.length;
} // lengthWithoutSpace()

console.log(lengthWithoutSpace("test 1"));

function lengthBoth(str1: string, space?: boolean): number{
    let num: number;

    if(space){
        num = str1.replace(/\s/g, '').length;
    }else{
        num = str1.length;
    } // if..else

    return num;
} // lengthBoth()

console.log(lengthBoth("test 1", false));
console.log(lengthBoth("test 1", true));
console.log(lengthBoth("test 1"));