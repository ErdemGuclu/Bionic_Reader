
![Logo](https://d1vg9wkrun3t3k.cloudfront.net/users/2972ef08-b7ab-4d52-a731-2c59d157567b/forever_files/3c8fc2a2-0748-49ca-910e-91b7aa87eaca/original.png?format=jpg&width=60&height=60&quality=85)

    
# Bionic Reader

Bionic Reader is a desktop app created using Electron JS which helps users to read faster by making first few letters of each word bold in a text 



## How to install?

Run the commands below in terminal 

```bash 
  npm install
```
To run the app without building:

```bash 
  npm start
```
To build an executable:

```bash 
  npm install electron-builder
  npm run build-installer
```

NOTE: You might get en error while trying to run the last command which says:
```bash
 "Package "electron-builder" is only allowed in "devDependencies". Please remove it from the "dependencies" section in your package.json." 
```
 If you get the error, do as you told in the error message and delete the line below under dependencies in package.json file:
```bash 
  "electron-builder": ...
```
