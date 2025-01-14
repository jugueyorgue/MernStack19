const fs = require('fs') //fs - file system, from node framework

let userDetails = {
    name : "Ben",
    age : 25,
    city : "Somewhere on earth ",
    session : "MernStack"
}

console.log('Begining The a-synchronous beginning!!!')

//using the async write operation

fs.readFile('Text.json','utf-8',(err, fileData)=>{
    console.log("information" + fileData)
    console.log("errr", err)
    let writerStream = fs.createWriteStream("Text.json","utf8");
    console.log(fileData)
    if (fileData) {           
        let oldData = JSON.parse(fileData)    
        console.log(oldData)
        writerStream.write(JSON.stringify([...oldData, userDetails]));
        writerStream.end();
    }else{
        writerStream.write(JSON.stringify([
            { name : "Micheal",
            age : 22,
            city : "California ",
            session : "MernStack"
        }]));
        writerStream.end();
    }
})

console.log('The a-synchronous operation ends here!!!')
