
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


nova.commands.register("autopep8.openURL", (workspace) => {
    var options = {
        "placeholder": "https://foobar.com",
        "prompt": "Open"
    };
    nova.workspace.showInputPanel("Enter the URL to open:", options, function(result) {
        if (result) {
            nova.openURL(result, function(success) {
                
            });
        }
    });
});


nova.commands.register("autopep8.runExternalTool", (workspace) => {
    var options = {
        "placeholder": "/path/to/tool",
        "prompt": "Run"
    };
    nova.workspace.showInputPanel("Enter the path to the external tool:", options, function(result) {
        if (result) {
            var options = {
                // "args": [],
                // "env": {},
                // "stdin": <any buffer or string>
            };
            
            var process = new Process(result, options);
            var lines = [];
            
            process.onStdout(function(data) {
                if (data) {
                    lines.push(data);
                }
            });
            
            process.onDidExit(function(status) {
                var string = "External Tool Exited with Stdout:\n" + lines.join("");
                nova.workspace.showInformativeMessage(string);
            });
            
            process.start();
        }
    });
});

