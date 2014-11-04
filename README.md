Simple Phone Number Formatter Plugin for jQuery
===============================================


**Install**

Include script after the jQuery library.

```html
<script src="/path/to/jquery.formatphonenumber.js"></script>
```

The plugin can also be loaded as AMD or CommonJS module.
Read more http://requirejs.org/docs/whyamd.html


**Usage**

Default format is "###-###-####"

```javascript
$(".phoneNumberInput").formatPhoneNumber();
// or
$(".phoneNumberInput").formatPhoneNumber({format: '+(##) ## ###-####'});
```

Valid charactes for format pattern:
[# (hash mark, it mean a number), space, rounded brackets, +, -]

For example, if format is "+(##) ## ###-####" and the input text is 36771232345 then the updated value of the input will be +36 77 123-2345

