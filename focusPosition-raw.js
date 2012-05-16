/**
 * A small module called focusPosition which takes allows Node.focus() to take position argument "end" or number of chars.
 * @author Prajwalit Bhopale <prajwalit@infinitelybeta.com>
 * @created Nov 19, 2011
 * @module focusPosition
 * @requires node
 */


/**
 * This method (just) registers the module so that it can attached to a YUI instance
 * via the use method. It's executed at YUI().use(...) phase.
 */
YUI.add("focusPosition", function(Y) {
  var _focus = Y.Node.prototype.focus;

  Y.Node.prototype.focus = function (position) {

    Y.log (position);
    if (position === "end") {
      position = this.get ("value").length;
    } else if (!Y.Lang.isNumber (position)) {
      _focus.apply (this);
      return;
    }

    var _node = this._node;
    /* Code Taken From ->
       http://stackoverflow.com/questions/512528/set-cursor-position-in-html-textbox */
    if(_node.setSelectionRange) {
      _node.focus ();
      _node.setSelectionRange (position, position);
    } else if (_node.createTextRange) {
      var range = _node.createTextRange();
      range.collapse (true);
      range.moveEnd ('character', position);
      range.moveStart ('character', position);
      range.select ();
    }
  };
  
}, "0.0.1", {requires:["node"]});
