# Patterns

### Constructor

```javascript
var newObject = {};
var newObject = Object.create(Object.prototype);
var newObject = new Object();
```

Approaches:

- **ES3**:

  -- dot syntax:

```javascript
Obj.someKey = "value";
var value = Obj.someKey;
```

-- square brackets:

```javascript
Obj["someKey"] = "value";
var value = Obj["someKey"];
```

- **ES5**:

```javascript
// @see : http://kangax.github.com/es5-compat-table/
// Set properties
Object.defineProperty(newObject, "someKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true,
});
```

- **ES6**:
- **ES7**:
- **ES Next**:
- **TS**:
- **Dart**:

### Module

### Revealing Module

### Singleton

### Observer

### Mediator

### Prototype

### Command

### Facade

### Factory

### Mixin

### Decorator

### Flyweight
