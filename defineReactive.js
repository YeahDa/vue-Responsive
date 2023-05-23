export default function defineReactive(data, key, val) {
  if (arguments.length == 2) {
    val = obj[key]
  }
  Object.defineProperty(data, key, {
    //可枚举
    enumerable: true,
    //可被配置,比如可以被delete
    configurable: true,
    //getter
    get() {
      console.log('你试图访问obj的' + key + '属性');
      return val;
    },
    //setter
    set(newValue) {
      console.log('你试图改变obj的' + key + '属性', newValue);
      if (val === newValue) {
        return;
      }
      val = newValue
    }
  })
}