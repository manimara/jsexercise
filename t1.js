//How this works in JavaScript?
var fullname = "John Doe";
var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};
console.log(obj.prop.getFullname()); // aurelio De Rosa - correct
var test = obj.prop.getFullname; 
console.log(test()); // "John Doe" - correct
console.log(test.call(obj.prop));// Colin Ihrig - wrong- i 've not noticed the obj.prop

myValue = {
    fullname : "manimaran"
}
console.log(test.call(obj.prop1));//
