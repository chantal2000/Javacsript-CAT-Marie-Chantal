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


// This program will return :

outer func: this.name = bar
outer func: self.name = bar
inner func: this.name = undefined
inner func: self.name = bar

Common reason:
    /*simply; the first function despite of whether it is self or this; has access to the property name of the object lisalab
but for the second function ; it will have access to the property name of object lisalab if it is not his keyword beacuse you can't refer to something 
you don't have access to beacuse this keyword has special meaning or special purpose has limited scope(which we can see in second function).Though self=this in this function 'it doen't mean that it will also has special meaning or use as thiskeyword. */


    //Reasons per each:
    outer func: this.name = bar
    /* means that you are referring to the object this name
belongs to or the owner which is lisalab and According to the scope ; This.name here has access 
  access to that object that 's  why 
it is printing this.name=bar with out func because it is in string it also has to be printed. 
Bacause outer func : is in string it must also be printed

*/
outer func: self.name = bar
    /*  On the 4th line self is assigned to this keyword which means anytime you use self in this
    program will act as this kwyword. So; According to the scope again self has access to the name of
    object lisalab that's why it is printing self.name=bar and again
       outer func:self.name is in a string which means everytime you console is as a string it will be
       printed as it is in words.
    
    */

inner func: this.name = undefined
    /* 
    Though self is assigned to this ; We know that this keyword or identifier has its special meaning or purpose
    or reffering to the owner something or someone belongs to.Because of scope limit; this.name has no access to the property name of the
    object lisalab which means Because it doesn't have access; When you try to access on it; it will tell you that it is undefined
    .That's why instead of giving you the name it will tell you that it is undefined.

    when you console inner func: this.name as a string ; It will aslways be printed as it is despite of other factors

     */
inner func: self.name = bar
    /*On the 4th line; self is assigned to this keyword and though it can be used as this keyword in this program; it doesn't mean that it will follow this keyword's rule or acts totally as it.
    so; when you try to console self.name it will give you the the name as it has access to this property name of lisalab object.
    for this.name ; this is limited to have access for the second function because of the scope but self is not limited as self hasn't special meaning or rules.
     
    when you console inner func: this.name as a string ; It will aslways be printed as it is despite of other factors
    
    */