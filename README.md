
## maybe-include

Include a string in a template literal, if a condition is truthy

### Installation
```bash
npm install --save maybe-include
```

### Usage
```javascript
import maybe from 'maybe-include'

const food = 'sushi'
const drink = 'tea'

console.log(`i like ${maybe(food)}`)
//=> "i like sushi"

console.log(`${maybe(drink, 'i like ' + drink + ' too')}`)
//=> "i like tea too"

console.log(`to be ${maybe(false, 'hmmmm ')}or not to be?`)
//=> "to be or not to be"
```

### License

This project is licensed under the [MIT License](LICENSE)
