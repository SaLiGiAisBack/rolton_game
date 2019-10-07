
var Candy = function(color, id)
{
 ////////////////////////////////////////////////
 // Representation
 //

 // Two immutable properties
 Object.defineProperty(this, 'color', {value: color, writable: false});
 Object.defineProperty(this, 'id', {value: id, writable: false});

 // Two mutable properties
 this.row = null;
 this.col = null;

 ////////////////////////////////////////////////
 // Public methods
 //
 this.toString = function()
 {
   var name = this.color;
   return name;
 }
};

Candy.colors = [
    'https://bafsy.com/system/image/file/773/red',
    'https://bafsy.com/system/image/file/775/yellow',
    'https://bafsy.com/system/image/file/768/green',
    'https://bafsy.com/system/image/file/771/orange',
    'https://bafsy.com/system/image/file/767/blue',
    'https://bafsy.com/system/image/file/772/purple'
];
