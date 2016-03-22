# img.js
### Image Placeholders in a snap!  

[Live demo on jsBin.com](http://jsbin.com/boriju/1/edit?output)  

a **JavaScript** utility that helps you easily add placeholder images to your project

![placeholder.js Placeholder images using canvas](http://i.imgur.com/fYCYFxf.png)
---

**1.** Insert **img.js** in your document right before the closing `</body>` tag:
```html
<script src="img.js"></script>
```
**2.** Inside your **HTML** use a standard `<img>` tag like:
```html
<img src="img.js">
````

To prevent **404 errors** in console you can use the `data-imgjs` attribute instead
```html
<img data-imgjs>
````

(Both the examples above will create a 356x200 gray default placeholder)

###Customization Options
You can pass additional parameters to handle the **image size**, **background color** and **text color**  
(Info: Detault background color is `#ddd` and text is translucent white. You can only use HEX colors value:)
**Values:**  
```
200x150      // Size. width and height are optional. Height is optional.
/            // Delimiter (Note: in order to use colors, at least a width must be provided)
ff0000       // Background color HEX value (6 or 3) (Default: "ddd")
/            // Delimiter
00ff00       // Text Color
?text=       // Custom text delimiter
Hello World! // Custom text
```
**Example 1 Using `src` attribute:**  

```html
<img src="img.js/200x150/f00/fff?text=Hi there!">
```

**Example 2 Using `data-imgjs` attribute:**  

```html
<img data-imgjs="200x150/f00/fff?text=Hi there!">
```

Find more examples in index.html

---
