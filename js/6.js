
//leve1
var user = {
	name:"zzx"
}
function sayInfo(age){
	console.log("name:"+this.name)
    console.log("age:"+age)
}
Function.prototype.	$call = function(target){

	var args = []
	target.fn = this;
	for(var i=1;i<arguments.length;i++){
		args.push(arguments[i])
	}
	target.fn(args.join(','));
	delete target.fn
}
sayInfo.$call(user,100)








//level2
function add(fn){
	var args = Array.prototype.slice.call(arguments,1);
	return  function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		var finalArgs = args.concat(innerArgs);
		return fn.apply(null,finalArgs);

	};
}
function addSum(num1,num2){
 	return num1 + num2;
 }
 var curriedAdd = add(addSum,3)
 var curriedAdd2 = add(addSum,6,8)
 console.log(addSum(1,2));
console.log(curriedAdd(3));
console.log(curriedAdd2(8));

 











