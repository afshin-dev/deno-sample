// deo also a type script compiler built-in 
// and can run directly ts file 


// run this command 
// deno run deno.ts 

function concate(param1: string, param2: string, delimiter:string = " "): string {
    let result : string = param1 + delimiter  +  param2 ;
    return result
}


console.log(concate(concate("afshin", "dev"), "repo"))
