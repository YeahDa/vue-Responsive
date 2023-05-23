# Object.defineProperty()

**`Object.defineProperty()`** 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

```JavaScript
    var obj = {}
    Object.defineProperty(obj,'a',{
      value:5，
      writable：false,//是否可写
      enumerable:true,//是否可以被枚举
    })
    Object.defineProperty(obj,'b',{
      value:88
    })
    console.log(obj);

    Object.defineProperty(obj,'a',{
      //getter
      get(){
        console.log('你试图访问obj的a属性');
      },
      //setter
      set(){
        console.log('你试图改变obj的a属性');
      }
    })
```

