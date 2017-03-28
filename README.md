# jquery.countdown.js

Smallest and easiest countdown jQuery plugin.

### Smallest

``` html
<!-- Production version only 672B -->
<script src="jquery.countdown.min.js"></script>
```

### Easiest

```html
<p data-countdown="32500886400000">
There's only <i data-dd="1"></i> days and <i data-hh="1"></i> hours and <i data-mm="1"></i> minutes and <i data-ss="1"></i> seconds before 21 century end.
</p>
```

### Advance

```html
<!-- use with callback -->
<p data-countdown="32500886400000" data-cb="foo">
There's only <i data-dd="1"></i> days and <i data-hh="1"></i> hours and <i data-mm="1"></i> minutes and <i data-ss="1"></i> seconds before 21 century end.
</p>

<script>
window.CountdownCallback = {
    foo: {
        step: function(data) {
          	console.log('current time is:');
          	console.log(data);
        },
        finished: function() {
            alert('21 century ended!');
        }
    }
};
</script>
```