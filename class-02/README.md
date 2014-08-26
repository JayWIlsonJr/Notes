# HTML
- [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
- [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
- [inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elemente)
- [block level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

# CSS
- [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)
- [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [`top`](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
- [`right`](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
- [`bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
- [`left`](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
- [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)
- [selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors)
- [box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
- [stacking context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)
- [z-index diagram](http://www.smashingmagazine.com/wp-content/uploads/2009/09/graphical-z-index.gif)

## Child Selector
The 'child selector' (`>`) will select a direct descendant that matches, but only go one level deep.

Given the following HTML:

```html
<div class="outer">
  <div class="inner">
    <div class="very-inner"></div>
  </div>
</div>
```

```css
// targets inner, but not very-inner
.outer > div {

}
```

## Descendent Selector
The 'descendent selector' (` ` i.e. a space) will select any descendent that matches, infinite levels deep.

```css
// targets both inner and very-inner
.outer div {

}
```

## ProTip
- Use `border: solid red 1px;` to see where the edges of a box are.
- Use `*{ border: solid red 1px; }` if you need a sledgehammer.
