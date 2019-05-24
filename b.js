let arr = [1,2,3,4,5,6,7];
arr.reverse();
let count = 0;
function fastSort(arr){
	count++;
	if(arr.length==0){
		return arr;
	}
	let middle = arr[0],
	leftArr = [],
	rightArr = [];
	arr = arr.slice(1);
	for(let value of arr){
		if(value<=middle){
			leftArr.push(value);
		}else{
			rightArr.push(value);
		}
	}
	return fastSort(leftArr).concat(middle).concat(fastSort(rightArr));
}

console.log(fastSort(arr));

console.log("count---",count);