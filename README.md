FocusPosition
=============
It's a small module called focusPosition which takes allows Node.focus() to take position argument "end" or number of chars
How to Use
----------
Add script on page, then -

    YUI().use("node", "focusPosition", function(Y) {  
      Y.one("textarea").focus(3);  
      // Or  
      Y.one("textarea").focus("end");  
      // Regular focus still works  
    });

Will try to add it to gallery soon.
