# img.js
### Image Placeholders in a snap!
a **JavaScript** utility that helps you easily add placeholder images to your project

![placeholder.js Placeholder images using canvas](http://i.imgur.com/fYCYFxf.png)
---

**1.** Insert **img.js** in your document right before the closing `</body>` tag:
```html
<script src="img.js"></script>
```
**2.** Inside your **HTML** use a standard `<img>` tag like:
```html
<img src="img.js/200x150">
````

To prevent **404 errors** in console you can use the `data-imgjs` attribute instead
```html
<img data-imgjs="200x150">
````

###Customization Options
You can pass additional parameters to handle the **image size**, **background color** and **text color**  
(Info: Detault background color is `#ddd` and text is translucent white. You can only use HEX colors value:)
**Values:**  
```
200x150      // Desired width, height (height is optional; width value will be used instead)
/            // Delimiter
ff0000       // Background color HEX value (6 or 3) (Default: "ddd")
/            // Delimiter
00ff00       // Text Color
&text=       // Custom text delimiter
Hello World! // Costom text
```
**Example:**  

```html
<img data-imgjs="200x150/f00/fff&text=Hi there!">
````
---
