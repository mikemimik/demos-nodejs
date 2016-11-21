# demo-one

## nodeschool-toronto demo

#### Title
Regarding `require`

#### Description
The idea behind this demo is to talk about the `require` statement and all the
interesting things that it does.

#### Examples
- Collecting all the files in a directory and making them available on one variable
```
# Folder structure
├── main.js
└── components
      ├── first.js
      ├── index.js
      └── second.js
```
```javascript
// inside main.js
var components = require('./components');
console.log(components['first'].data);
// OR
console.log(components.first.data);
//- I live inside examples/components/first.js
```

- Collecting nested folders, in the case each folder is a lib being imported
```
# Folder structure
├── main.js
└── nested
      ├── first
      │   ├── a.js
      │   ├── b.js
      │   └── index.js
      ├── index.js
      └── second
          ├── c.js
          └── index.js
```
```javascript
// inside main.js
var nestedComponents = require('./nested');
console.log(nestedComponents['first']['a'].data);
// OR
console.log(nestedComponents.first.a.data);
//- I live inside examples/nested/first/a.js
```
