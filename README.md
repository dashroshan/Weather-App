<h1 align="center">Weather Search</h1>

<h3 align="center">Find weather of any place you want 🌨️</h3>

<p align="center">
<a href="https://weather.roshan.cyou"><img src = "https://img.shields.io/badge/Visit Site-Page?style=flat&logo=alibabacloud&logoColor=white&color=2F6BFF" height = 30px></a>
</p>

<img src="./frontend/public/banner.png" width="100%"/>

<br>

# Setup process

## Frontend

Run the below command in the _frontend_ folder.

```
npm install
```

In _frontend/index.js_ swap the commented lines for _window.APIROOT_ to run frontend separately or through the backend server as needed.

If running through backend server, run the below command.

```
npm run build
```

## Backend

Run the below command in the _backend_ folder.

```
npm install
```

Create a _secrets.env_ file with below contents.

```
PORT = 4000
KEY = <Azure maps private key here>
```

Start the server with the below command.

```
node index.js
```
