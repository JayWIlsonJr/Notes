# 10/06/2014

# Backbone

- See [Backbone: Choose Your Own Adventure](http://github.com/TIY-GVL-FEE-2014-Aug/backbone-adventure)

# Serializing a form

If you need to get data out of a form, you can use `this.$el.serializeArray()` to grab the data out of the form. However, the result will look like:

```js
[
  {
    name: "a",
    value: "1"
  },
  {
    name: "b",
    value: "2"
  },
  {
    name: "c",
    value: "3"
  },
  {
    name: "d",
    value: "4"
  },
  {
    name: "e",
    value: "5"
  }
]
```

To transform the data into a form that you can pass to a model or collection, you can use the following code:

```js
$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};

$('.my-form').serializeObject();
```

Now the results look like:

```js
{
  a: "1",
  b: "2",
  c: "3",
  d: "4",
  e: "5"
}
```

# Model#validate
http://jsbin.com/zicinu/2/edit
