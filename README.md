## alacle.harpjs

### Live project : http://alterebro.github.io/alacle.harpjs/

Here resides the source code of the **alacle** website.
Built using  the static website generator and server **Harp** ( http://harpjs.com ).

- Install Harp Web Server globally.

	```
	$ npm install -g harp
	```

- Clone the repository and navigate to the project folder
	
	```
	$ git clone https://github.com/alterebro/alacle.harpjs.git
	$ cd alacle.harpjs/
	```

- Starting the Harp server

	```
	$ harp server
	``` 
	This should return the message : `Your server is listening at http://localhost:9000/`
	You are now free to hack the code and see the results over `http://localhost:9000/`

- Compiling and exporting the harp site to flat static assets – HTML / CSS / JavaScript.

	```
	$ harp compile
	``` 
	This will create/overwrite the `www` folder with the distributable files within it.

- Adding changed files, commiting changes and deploying the `/www` folder to `gh-pages`

	```
	$ git add -A 
	$ git commit -a -m "your message" 
	$ git subtree push --prefix www origin gh-pages
	```	
