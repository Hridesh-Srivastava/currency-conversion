# currency-conversion
<h2>The Currency-Conversion package provides a robust solution for converting currency values across different currencies. This package utilizes real-time exchange rates to ensure accurate and up-to-date conversions. Whether you're building financial applications, e-commerce platforms, or any project requiring currency conversion, this package is designed to be both simple to integrate and reliable in performance. </h2>
<br>
<h1>Installation </h1>
<br>
<h3>To install the package, use npm with the following command:</h3>
<br>
<h2><pre>npm i currency-conversion-v1.1.2</pre></h2>
<br>
<h1>Usage</h1>
<br>
<h3>You can import and use the currency-conversion-v1.1.2 package in your project as follows: </h3>
<br>
<h2> For ES6 Modules: </h2>
<br>
<pre> `import convertCurrency from "currency-conversion-v1.1.2";`</pre>
<br>
<h2> For CommonJS: </h2>
<br>
<pre> `const convertCurrency = require("currency-conversion-v1.1.2");` </pre>
<br>
<h1>Example</h1>
<br>
<h3>Here's a basic example of how to use the package:</h3>
<br>
<pre>`import convertCurrency from "../currency-conversionV0/index.js";

convertCurrency("INR" , "USD" , 240).then((res) => {
    console.log(res);
})
.catch((error) => {
    console.error("Error while converting!" , error);
    
});`</pre>
<br>
<h1>Contributing</h1>
<br>
<pre>Contributions to the currency-conversion-v1.1.1 package are welcome. Please submit issues, pull requests, or suggestions via GitHub.</pre>
<br>
<h1>License</h1>
<br>
<pre>This package is licensed under the  `Apache license 2.0`. See the LICENSE file for more details.</pre>
