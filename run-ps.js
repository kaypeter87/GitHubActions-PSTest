var spawn = require("child_process").spawn,child;
var workspace = process.env.GITHUB_WORKSPACE;
var file = workspace + "\\test.ps1";

const path = require("path")
const fs = require("fs")
 
const directoryPath = __dirname;
console.log(directoryPath);
fs.readdir(directoryPath, function(err, files) {
  if (err) {
    console.log("Error getting directory information.")
    console.log(err)
  } else {
    files.forEach(function(file) {
      console.log(file)
    })
  }
})

child = spawn("powershell.exe",['-NoProfile', '-File ', file]);

child.stdout.on("data",function(data){
    console.log("Powershell Data: " + data);
});

child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});

child.on("exit",function(){
    console.log("Powershell Script finished");
});

child.stdin.end(); //end input

