var spawn = require("child_process").spawn,child;
var workspace = process.env.GITHUB_WORKSPACE;
var file = workspace + "\\test.ps1";
console.log( "Workspace ", workspace,  " file ", file );
child = spawn("powershell.exe",['-NoProfile','-File', file ]);

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
