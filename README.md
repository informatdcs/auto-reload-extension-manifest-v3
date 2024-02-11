# It's simple

This code autoreloads an extension from your browser when changes are made to some files of the extension and its ***compatible with manifest V3***.

Useful for browser extensions in developtment, include this file in your service_worker or make it your service_worker and let it refresh itself!

## How to use
First, edit the code for your needs:
```javascript
const files = ['js/index.js', 'js/background.js', 'manifest.json']; // List of files to check for changes
```
You have to include all the files that you want to monitor basically, paths are from the root foolder of the extension since we use ***chrome.runtime.getURL***.

Then, we make it work!

If you already have one service_worker, just import it!
```javascript
importScripts('hot-reload.js');
```
If you dont have one, make it the service_worker!
```javascript
"background": {
		"service_worker": "hot-reload.js"
	  }
```

## Contributing

Pull requests are welcome.We could add tab autorefreshing for tabs with an URL pattern or something, but I didnt need it :smile:
