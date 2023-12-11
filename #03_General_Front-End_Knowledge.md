<h1 align="center">JavaScript General Knowledge Questions</h1>

### Overview of the Section
* **[Script tag in HTML](#Script-tag-in-HTML)**
* **[JavaScript window.onload](#JavaScript-window.onload)**
* **[HTML and DOM](#HTML-and-DOM)**
* **[Regular expression](#regular-expression)**
* **[async attribute](#async-attribute)**
* **[defer attribute](#defer-attribute)**
* **[DNS](#dns)**
* **[MAC address](#mac-address)**
* **[TLS and SSL](#tls-and-ssl?)**



### 

#

### Script tag in HTML 
#### Why we are placing ``<script>`` tag on the bottom and what is the best practice?

Placing the ``<script>`` tag at the bottom of the HTML document, just before the closing ``</body>`` tag, is a best practice in web development.

This practice is primarily employed to enhance the performance and loading speed of web pages. Here are a few reasons why this is considered a good practice:

#### Faster Page Rendering 
When a browser encounters a ``<script>`` tag, it typically stops rendering the rest of the page until the script is loaded and executed.

By placing scripts at the bottom, you allow the browser to render the content of the page first. This gives users the perception that the page is loading quickly.

#### Parallel Downloads 
Browsers download external resources, like scripts, in parallel. 
Placing scripts at the bottom allows other critical resources, such as stylesheets and images, to be downloaded concurrently. This can significantly improve overall page load times.

#### Improved User Experience
Users see the content of the page sooner, which improves the overall user experience. Especially for users on slower internet connections or devices, the perceived performance is better.

#### Search Engine Optimization (SEO)
While search engines have become more sophisticated in handling JavaScript, placing scripts at the bottom can still be beneficial for SEO. 

Search engines prioritize the content at the top of the page, so having it load faster can positively impact search rankings.

**[Back To The Top](#Overview-of-the-Section)**
#

### HTML and DOM
#### What’s the difference between the initial HTML download of a page and the DOM?

This initial HTML download is the raw markup of the page, including elements like headings, paragraphs, images, links, and other structural components. 
This process is often referred to as "rendering" the HTML, fetch from the webpage server.

#### DOM Document Object Model

In summary, the initial HTML download is the static content retrieved from the server, 
while the DOM is a dynamic, in-memory representation of that content that can be manipulated and interacted with using client-side scripting.

**[Back To The Top](#Overview-of-the-Section)**
#

### Regular expression
#### What does this regular expression do? 
\ d+someText$
    * \d+ matches one or more digits. The '+' means "one or more times."
    * someText matches the exact sequence of characters "someText".
    * $ asserts that we are at the end of the line or string.

In summary, the regular expression /\d+someText$/ will successfully match a string if it ends with one or more digits followed by the exact sequence "someText". Here are some examples to illustrate when the regex would and wouldn't match:
* Matches:
    * 123someText
    * 456789someText
* Doesn't Match:
    * 123someText456 (because "someText" is not at the end)
    * someText789 (because there are no digits before "someText")
    * abcSomeText (because there are no digits before "someText")

**[Back To The Top](#Overview-of-the-Section)**
#


### async attribute
#### What does it mean when ``<script>`` element in javascript has an “async” attribute?
When a ``<script>`` element has an ``async`` attribute, it means that the script will be executed asynchronously with the rest of the page..
When the browser encounters a script with the async attribute, it doesn't stop parsing the page. It continues to build the Document Object Model (DOM).

### defer attribute
#### 4 What does it mean when ``<script>`` element in javascript has ``defer`` attribute?

The defer attribute in a JavaScript ``<script>`` tag specifies that the script is executed when the page has finished parsing. 

Here's how it works:
1. When a script tag has the defer attribute, the browser continues to build the Document Object Model (DOM) without pausing. This is similar to the async attribute.
2. However, unlike async scripts, defer scripts guarantee the execution order. They will execute in the order they are declared in the file.
3. The script starts downloading immediately but only executes after the HTML parsing is complete and in the order of their appearance in the page.
More info here: https://airbnb.stackenterprise.co/questions/69274

**[Back To The Top](#Overview-of-the-Section)**
#

### DNS
#### Domain Name System 

Translates human-readable domain names, like ``www.example.com``, into machine-readable IP addresses, such as ``192.168.1.1``. 
This process is essential because computers and networking devices use IP(Internet Protocol) addresses to identify each other on the internet.

``DNS`` makes it easier for us to navigate the web because it's easier for people to remember names like “publift.com” rather than IP addresses like ``172.217.5.238.``

#### In DNS, what is the TTL attribute?

	"Time to Live" - It is time until the record is re-resolved - specifies the amount of time the record is allowed to be cached by a DNS resolver.

**[Back To The Top](#Overview-of-the-Section)**
#

### MAC address?

- Media Access Control address, is a unique identifier assigned to a network interface controller (NIC) 
- Identifier of a network controller  - Digital fingerprint for your device's networking equipment - phone, laptop, desktop, printer etc

**[Back To The Top](#Overview-of-the-Section)**
#

### TLS and SSL?

Way to secure connection between the computers
**TLS-Transport Layer Security**, and its predecessor, **SSL-Secure Sockets Layer**, are cryptographic protocols designed to provide communications security over a network.

**[Back To The Top](#Overview-of-the-Section)**
#
**[Back To The Top](#Overview-of-the-Section)**
#


### 9 What is a first party cookie?

	Set by the script running on the main domain that you are visiting. 
	A first-party cookie is a type of cookie that is created and set by the website you are currently visiting. 
	These cookies are generated by the domain (or site) you are directly interacting with and are typically used to enhance the user experience by remembering your preferences, login information, or other settings.

#### 9 What is a 3rd party cookie?

Explains that is’s a cookie set by a script loaded from a 3rd party domain

	Third-party cookies are created by domains other than the one you are currently visiting. Basic loaded from the 3rd party domain and not from the one you are visiting.
	For example, if you are on "example.com," a third-party cookie may be set by a domain like "advertiser.com."


### 10 In SQL, what is the difference between an inner and left join?

TOP Answer
Explains that an inner join returns only rows on the main table where…

* Inner Join (or simply Join): An inner join returns only the rows where there is a match between the columns being joined in both tables. If there is a row in the first table that does not have a corresponding match in the second table, it is not included in the result set.
* Left Join (or Left Outer Join): A left join returns all the rows from the first (left) table and any matching rows from the second table. If there is no match, the result for the second table's fields is NULL. Essentially, it includes all records from the first table regardless if there is a matching record in the second table.



### 11 What is the default HTTP port?

TOP Answer
80

	80 - HTTP (Hypertext Transfer Protocol) is port 80
	443 - HTTPS (HTTP Secure), the default port is 443. This protocol uses encryption (like SSL or TLS) to secure the connection between the client and server.


### How much data is downloaded when you visit any website?

TOP Answer
Opens dev tools, looks at transfer data

	To get the total amount of data transferred during page load, look at the bottom of the Network tab, where it shows the total data transferred and the time it took to load.


### Can you block the jQuery script from loading?

Opens the network tab, finds jquery and blocks it

    1. Find the script file you want to block in the list of network requests and click on it. Scripts can generally be found under the "JS" type.
    2. In the panel that opens at the bottom, select the "Headers" tab.
    3. Right-click on the "Request URL" and choose "Block request URL".

### How do you view the cookies set by a script?

TOP Answer
Opens Applications Tab

    1. In the side menu under the "Application" tab, look for "Cookies" under the "Storage" section.
    2. Click on "Cookies" and it will display a dropdown with the list of sources of cookies. The first one, corresponding to your domain, is generally the site you're currently on. The others are third party cookies.

### Show the initial HTML download for website in devTools

TOP Answer
Opens the Network Tab, scrolls to the top, pick the first item, Select Doc - check for the “www.ozbargain.com.au”  - click Preview
Alternatively, view page source

    * In the "Network" tab, look for a column labeled "Type" or similar. Click on it to sort the resources by type.
    * Locate the resource that corresponds to the HTML document. It's often labeled as "document" or "text/html."
    * Right click - View Page Source

### Show the DOM for a webpage in the devTools

TOP Answer
Select the Elements Tab in the dev console

### How do you find an item in the DOM corresponding to an element on the page

TOP Answer
Uses the CHROME selector to highlight an element

	Open your browser's Developer Tools and navigate to the "Elements" or "Inspector" tab.

### By examining the DOM, how can we figure out wich script on the page is ultimately responsible for loading the ads?

TOP Answer
Notices the repeated reference to the word fuse in the attributes and search by the fuse word in the Network Tab.

    Right click on the ad “Inspect”
    Find a parent element
    Find the “date-fuse” attribute - probably custom created by the some internal framework
    On the network settings filter by “JS”, clear the console and refresh the page
    Find fuse.js and block the script - the ads should not load



### Of the total data downloaded, how much is attribute ti ads?

TOP Answer
Realise that resources might be cached  - disk cache

	Check the size table for the specific script - (disk cache) - Disk caching is a mechanism used by web browsers to store copies 
	of resources locally on a user's device after they have been downloaded from the web server for the first time.

Direct link: https://codepen.io/pen?template=767058178534e5314e043c25dff541d3 

### Make the heading Blue rather that Red?

Best answer - create class .head

.head {
  color:blue;
}

______________________

### Can you explain why the first paragraph is no appearing?


 	- check for the display:none for each class in that element

	In CSS, the display: none; property-value combination is used to hide an element from the document layout. 	
	When an element is marked with display: none;, it is completely removed from the flow of the webpage. 

	This means it takes up no space, unlike with visibility: hidden;, where the element is rendered invisible but still takes up space in the layout.

	Unlike visibility: hidden;, display: none; cannot be overridden with CSS pseudoclasses like :hover. 

	This makes display: none; useful for permanently hiding elements on the page.

Direct link for Code-pen:  https://codepen.io/pen?template=e93926064823a1fd6a0a8cbbbd571755


### Can you fix the bug causing the numbers array to not calculate?

TOP Answer
Confidently diagnoses and fixes the bounds check 

for (let i = 0; i <= numbers.length; i++) {

For loop is counting the [i] index numbers of the array not a actual length of the army items?


### Can you return a better error in the case where the array is empty? 

TOP Answer
Write better error message in the empty array.
Replace ‘description’ parameter with the following:

let examples = 

[
 	{ params: [1,2,3,4,5], descriptions: ‘Numbers array' },
 	{ params: [], descriptions: 'Invalid input. Please provide an array of valid numbers.' },
 	{ params: [“a”, “b”, “c”], descriptions: 'Invalid input. Invalid array with strings’ }
]


Direct link for Code-pen:  https://codepen.io/pen?template=06afadeed8a0194c8bac3d19b9351d05 

### Can you find and fix the bug in the calculator?

TOP Answer
Is able to confidently fix the problem without a google search

Code line with issue: document.form.textview.value = num;
Solution: document.form.textview.value += num; // add the “+” after =

### Can you extend the calculator to allow the entry of opening and closing brackets? 

TOP Answer
Lay out the buttons neatly and without prompting 

### Can you give an example of a math expression where brackets change the result?

TOP Answer
Enters a suitable expression in the calculator input field  - e.g. 3*(5+3)