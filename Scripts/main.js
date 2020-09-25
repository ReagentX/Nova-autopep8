const notify = body => {
    let request = new NotificationRequest("autopep8-formatter");
    request.title = nova.localize("autopep8");
    request.body = nova.localize(body);
    let promise = nova.notifications.add(request);
}


nova.commands.register("autopep8.runAutopep8", (workspace) => {
    const enabled = nova.config.get('com.chrissardegna.autopep8Enabled');
    const autopep8 = nova.config.get('com.chrissardegna.autopep8ExecPath');
    const autopep8Args = nova.config.get('com.chrissardegna.autopep8Args');
    let currentFile = workspace.activeTextEditor.document.path;

    if (currentFile) {
        let cliArgs = ['--in-place'];

        if (autopep8Args) {
            const parsedAutopep8Args = autopep8Args.split(' ');
            parsedAutopep8Args.push(currentFile);
            cliArgs.push(...parsedAutopep8Args);
        } else {
            cliArgs.push(currentFile);
        }

        console.log(`Executing ${autopep8} ${cliArgs.join(' ')}`);

        try {
            let p = new Process(autopep8, {
                args: cliArgs
            })

            p.onDidExit(function() {
                notify("Formatting current file.");
            });

            p.start();
        } catch (err) {
            console.error(`autopep8 error: ${err}`);
            notify("Unable to format current file.");
        }
        
    }
})
