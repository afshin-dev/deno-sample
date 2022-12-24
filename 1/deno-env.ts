const userName: string | undefined = Deno.env.get("USERNAME") ;


console.log("hello" , userName);
// this file run with :
    // deno run --allow-env [filename] 
    // and work with windows machine 