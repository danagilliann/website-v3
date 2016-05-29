# color_behanced
## What: 
Find art using color
## Why: 
For funsies. Also for a dope article I'm going to be writing (to be released soon)
## How: 
AngularJS, Behance API, Gulp
Get a [key](https://www.behance.net/dev/register).
Setup a `config.json` with your key and `api_key` as your key and your generated Behance key as your value.
```json
// config.json
{
    "api_key": "your_key_here"
}
```
Enter the following on the command line:
```
npm install
gulp config
gulp serve
```
