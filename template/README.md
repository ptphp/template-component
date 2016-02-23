# foo

React foo component

## usage

- ES6：

``` js
import Foo from './dist/foo'
```

- CMD(CommonJS)：

``` js
var Foo = require('./dist/foo.min.js');
```

- AMD(RequireJS)：

``` js
require(['./dist/foo.min.js'], function(Foo) {})
```

- script tag：

``` xml
<script src="./dist/foo.min.js"></script>
<script>
    console.log(window.Foo)
</script>
```

## License

MIT Licensed. Copyright (c) dmyang 2016.
