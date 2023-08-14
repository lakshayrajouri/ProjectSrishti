const fs = require("fs");

/*fs.writeFile("message.txt", "hello brother", (err)=> {
    if(err) throw err;
    console.log("The file have been saved");
});*/

fs.readFile("./message.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
})