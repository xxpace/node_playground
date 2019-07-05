function sort(arr,left,right){
    if(left>=right){
        return;
    }
    let i=left,j=right,key=arr[left];
    while(i<j){
        while(i<j&&arr[j]>=key){
            j--;
        }
        arr[i] = arr[j];

        while(i<j&&arr[i]<=key){
            i++;
        }
        arr[j]=arr[i];
    }
    arr[i] = key;
    sort(arr,left,i-1);
    sort(arr,i+1,right);
}

let arr = [1,45,11,1220,136,360,11];
// sort(arr,0,arr.length-1);
// console.log(arr);

function insert_sort(arr){
    let i = 0;
    for(let j=1;j<arr.length;j++){
        i=j-1;
        while(i>=0&&arr[i]>arr[j]){
            arr[i] = arr[j];
            i--;
        }
        arr[j] = arr[i];
    }
}

insert_sort(arr);
console.log(arr);
