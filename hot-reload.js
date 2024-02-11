const files = ['js/index.js', 'js/background.js', 'manifest.json']; // List of files to check for changes

let fileContents = files.map(file => fetch(chrome.runtime.getURL(file)).then(response => response.text()));

Promise.all(fileContents).then(contents => {
    fileContents = contents;

    const watchChanges = () => {
        files.forEach((file, index) => {
            fetch(chrome.runtime.getURL(file))
                .then(response => response.text())
                .then(content => {
                    if (content !== fileContents[index]) {
                        chrome.runtime.reload(); // Reloads extension
                        fileContents[index] = content;
                    }
                });
        });        
    };
    setInterval(watchChanges, 10000); // Check every 10 seconds after browser starts.
});
