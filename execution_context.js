function global_context(bool,bool2){
    console.log(`it is ${bool} this function is apart of the global context, or scope`);
    let a = ' this is also function context and not global';
    console.log(a);
    function functional_context(bool2){
        console.log(`it is ${bool2} this function is functional context`);
    }
    return functional_context(bool2);
}
window.global_context(true, true);





