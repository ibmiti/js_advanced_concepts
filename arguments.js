function marry(...args)
{
    console.log(args);
    console.log(arguments[0], arguments[1]);
    return `${args[0]} is now married to ${args[1]}`;
}

marry('john','julie');