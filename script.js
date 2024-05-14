function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let ans=-1;
    for(let i=0;i<=s1.length-s2.length;i++){
        let s = s1.substring(i,i+s2.length);
        if(s.localeCompare(s2)==0){
            ans=i;
            break;
        }
    }
    return ans;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
