var Duck = function(){
	
};
Duck.prototype.quack = function(){
	alert("Cuac");
};
Duck.prototype.fly = function(){
	alert("Wings");
};
Duck.prototype.swim = function(){
	alert("Chof!");
};
Duck.prototype.display = function(){
	throw new Error("This method must be overwritten!");
};
