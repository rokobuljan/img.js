# placeholder.js
IMG placeholder utility
placeholder.js creates placeholder images for your template.

![placeholder.js Placeholder images using canvas](http://i.imgur.com/fYCYFxf.png)
---

Insert **placeholder.js** in your document befoe the closing `</body>` tag:

```html
<script src="placeholder.js"></script>
```

Inside your **HTML** use a standard `<img>` tag like:
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
200x150      // Desired width x height
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
