var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();

/*Normally this identifier is a keyword or identifier that is used whenyou are referring to the object something or someonebelongs to.
 THis keyword simply shows or reffers to the owner of something or someone


 According to this program:
 *for the 4th line; they assigned this to self which means that you can also use self instead of this in this program
 *On the 5th line;the first this.name is a string which means it will be printed as it is.
 *Still on the 5th line; this.name which is not in the string ; it is reffering to name of object lisalab
  ehich means anytime you will print this.name which is not in as string and has access to that Object will always give you bar in this program

  * Name is a property or attribute of object lisalab so which means to refer to the name of lisalab you have to use this keyword and that what they did on the 5th line

  * On the 8th line; the first this.name which is in string; will be printed as it is because it is just a string ; you are not reffering to anything or anyone because of the string

  * Still on the 8th line; this.name which is not in string;As we know sing this meaning that you are reffering to the owner but this will only ive you access to that property only if the scope allows. Means the scope doesn't allow ; You will get undefined. This line; they were reffering to the name they don't have access to because of the scope which has limit.

simply; the first function despite of whether it is self or this; has access to the property name of the object lisalab
but for the second function ; it will have access to the property name of object lisalab if it is not his kwyword beacuse you can't refer to something 
you don't have access to.this was used according to the output the one who wroteit was expecting.
*/