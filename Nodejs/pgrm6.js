buf=new Buffer.alloc(250)
    //syntax:Buffer .alloc(size,fill,encoding);
    //output:default all value 00
    console.log(buf);
    len=buf.write("Welcome to Karur")
    console.log(len)
    console.log(buf)
    console.log(buf.toString())