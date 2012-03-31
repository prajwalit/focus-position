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

  //Y.Node.prototype._focus = _focus;
  Y.Node.prototype.focus = function (pos) {
    if (!pos) {
      _focus.apply (this);
      return;
    }
    if (pos === "end") {
      pos = this.get ("value").length;
    }

    var _node = this._node;
    /* Code Taken From ->
       http://stackoverflow.com/questions/512528/set-cursor-position-in-html-textbox
*/
    if(_node.setSelectionRange) {
      _node.focus ();
      _node.setSelectionRange (pos, pos);
    } else if (_node.createTextRange) {
      var range = _node.createTextRange();
      range.collapse (true);
      range.moveEnd ('character', pos);
      range.moveStart ('character', pos);
      range.select ();
    }
    
  }
  
}, "0.0.1", {requires:["node"]});
