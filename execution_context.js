function global_context(bool,bool2){
    console.log(`it is ${bool} function is apart of the global context, or scope`);
    function functional_context(bool2){
        console.log(`it is ${bool2} is the functional context $`);
    }
    return functional_context(bool2);
}

window.global_context(true, true);




