# 09/09/14

# CDN
http://code.tutsplus.com/articles/supercharge-website-performance-with-aws-s3-and-cloudfront--net-7096

# JSHint
```sh
$ npm -g install jshint
```

# JavaScript that you won't use that much
## Recursion
```js
function whatHappens(){
  console.log("WAT?");
  whatHappens();
}
```

Recursion is dangerous because you can't guarantee that dynamic data won't cause the browser to crash.

## Short Circuit Evaluation
`&&` and `||` use short circuit evaluation, which means that as soon as they figure out the answer, they will stop executing.

```js
true || console.log("short circuited")
```

# jQuery
## Avoid changing appearance with jQuery
- .css `$('.container').css('color', 'red')`
- .animate
- .fadeIn, .fadeOut
- slideUp, slideDown
- .show, .hide

## Event Object
http://api.jquery.com/category/events/event-object/

# Chrome Extensions
- [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm/related?hl=en)
- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)

# HTTP
## Meaning
**Hypertext Transfer Protocol**
A set of rules for how computers should communicate.

Current version is HTTP 1.1

## REST
Representational State Transfer

### Meaning
There are resources on a remote computer, and I want to be able to fetch, manipulate, and delete those resources.

RESTful URLs can be accessed as well named resources.

e.g. https://github.com/jacobthemyth/dotfiles means get the `dotfiles` repository from the `jacobthemyth` user.

## URLs, Methods, Statuses
### URL
The parts of the URL should represent different resources, some of which are nested.

### Methods
- GET: fetches the resource
- POST: create the resource
- PUT: update the resource
- DELETE: deletes the resource.
- PATCH: update the resource (not supported in IE8)

Great example: https://developer.github.com/v3/repos/

### JSON
Usually we would use the header `Content-Type: application/json`

### Statuses
http://httpstatus.es/
The ones you should be most familiar with:
- 200
- 201
- 400
- 404
- 401
- 500

# Etsy API
- https://www.etsy.com/developers/documentation/reference/listing
- https://api.etsy.com/v2/listings/active?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=coffee&includes=Images

# JSBins
- http://jsbin.com/tusur/1/edit
- http://jsbin.com/wadeso/1/edit
- [Event delegation](http://jsbin.com/gufusi/2/edit)
