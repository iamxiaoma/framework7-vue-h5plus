# framework7-vue-h5plus
iOS and Android Apps with Framework7 Vue &amp; H5Plus - develop, build and deploy - free and open source!

## Requirements

* framework7 `^1.6.5`
* framework7-vue `^0.8.5`

## Dependencies

F7VueH5Plus use `npm` to manage third-party packages now.

Then install all dependencies, in repo's root:

```
$ sudo npm install 
```

## Mock Server

Before create your first cordova app, please install `http-server` globally so that you can run a mock server with zero configuration.

```
$ sudo npm install http-server -g
```

in repo's root:

```
$ http-server ./mock_api -p 4000 --cors
```

### Check out source code

```
$ cd F7VueH5Plus  
$ git init   
$ git remote add origin https://github.com/iamxiaoma/framework7-vue-h5plus.git  
$ git fetch  
$ git reset --hard origin/master  
```

### Build the App

Run the following command to iteratively build the project:

```
$ sudo npm run build
```


## Web App Guides

### Preview

F7VueH5Plus use webpack browser sync server to develop, Just run it in repo's root:

```
$ sudo npm run dev
```

Web app will be available on `http://localhost:3000/`

### Release

```
$ sudo npm run build
```

The result is available in `www/` folder.

## License

Copyright (c) 2017 framework7.cn MIT Licensed, see [LICENSE] for details.

[http://framework7.cn]: http://framework7.cn