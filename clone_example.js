function clone_object(obj){
	var new_object = new Object();
	var fields = Object.keys(obj);

	for (var i = fields.length - 1; i >= 0; i--) {
		var field = fields[i];

		var obj_is_string = typeof obj[field] === 'string' || obj[field] instanceof String;

		var internal_object_keys = Object.keys(obj[field])

		if (Array.isArray(obj[field])){
			new_object[field] = obj[field].slice(0);
		} else if (!obj_is_string 
					&& internal_object_keys.length > 0) {
			new_object[field] = clone_object(obj[field]);
		} else {
			new_object[field] = obj[field];
		}
	}

	return new_object;
}

var a = {
	key1: 1,
	key2: "hello",
	key3: [1,2,3],
	key4: {
		key1: 1,
		key2: "hello",
		key3: [1,2,3]
	}
}

var b = clone_object(a);
b["key3"][0] = 0;
console.log(a);
console.log(b);