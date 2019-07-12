function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function sort(arr,left,right){
    if(left>=right){
        return;
    }
    let i=left,j=right,key=arr[left];
    while(i<j){
        while(arr[i]<key){
            i++;
        }
        while(arr[j]>key){
            j--;
        }
        // console.log(arr,i,j,key);
        if(i<j){
            swap(arr,i,j);
            i++;
            j--;
        }else if(i==j){
            i++;
        }

    }
    sort(arr,left,j);
    sort(arr,i,right);    
}

let arr = [1,45,11,1220,136,360,11,45];
// sort(arr,0,arr.length-1);
// console.log(arr);

function insert_sort(arr){
    let i = 0;
    for(let j=1;j<arr.length;j++){
        let key = arr[j];
        i=j-1;
        while(i>=0&&arr[i]>key){
            arr[i+1] = arr[i];
            i--;
        }
        arr[i+1] = key;
    }
}

// insert_sort(arr);
// console.log(arr);

function bubble_sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                swap(arr,i,j);
            }
        }
    }
}

// bubble_sort(arr);
// console.log(arr);

function merge_sort(arr){
    let len = arr.length;
    let num = Math.ceil(len/2);
    let i = 0;
    while(i<num){
        let cIndex = i*2;
        let next = cIndex+1;
        if(next<len){
            if(arr[next]>arr[cIndex]){
                swap(arr,next,cIndex);
            }
        }
        i++;
    }
}

// console.log(arr);
// merge_sort(arr);
// console.log(arr);

function max_heapify(arr,start,end){
    let dad = start;
    let son = start*2+1;
    while(son<=end){
        if(son+1<=end&&arr[son]<arr[son+1]){
            son++;
        }
        if(arr[dad]>arr[son]){
            return;
        }else{
            swap(arr,dad,son);
            dad = son;
            son = dad*2+1;
        }
    }
}

function heap_sort(arr,len){
    for(let i=len/2-1;i>=0;i--){
        max_heapify(arr,i,len-1);
    }
    for(let i = len-1;i>0;i--){
        swap(arr,0,i);
        max_heapify(arr,0,i-1);
    }
}
console.log("heap");
heap_sort(arr,arr.length);
console.log(arr);

