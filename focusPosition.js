YUI.add("qotd-focusPosition",function(b){var a=b.Node.prototype.focus;b.Node.prototype.focus=function(e){if(!e){a.apply(this);return}if(e==="end"){e=this.get("value").length}var d=this._node;if(d.setSelectionRange){d.focus();d.setSelectionRange(e,e)}else{if(d.createTextRange){var c=d.createTextRange();c.collapse(true);c.moveEnd("character",e);c.moveStart("character",e);c.select()}}}},"0.0.1",{requires:["node"]});