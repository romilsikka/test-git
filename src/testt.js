import React,{Component} from 'react';
import './App.css';
class Test extends Component {
// constructor(props){
//   super(props);
//   //  this.person = [
//   //        {id:1,name:'Romil',addressId:54},
//   //        {id:2,name:'Rajat',addressId:44},
//   //        {id:3,name:'Sikka',addressId:74},
//   //        {id:4,name:'ayushee',addressId:50}
//   // ];
//   //  this.address = [
//   //       {id:50,address:'vijay nagar',contact:81082888383},
//   //       {id:44,address:'Dwarkapuri',contact:403403403},
//   //       {id:74,address:'Banglore,maruti',contact:968599917},
//   //       {id:54,address:'kailashPark',contact:88717886711},
//   //       {id:5445,address:'kailadfgdfgdfgshPark',contact:2347842387},
//   // ]
//
// }
bubbleSort=(arr)=>{
  let len = arr.length-1;
  for(let i = len;i>=0;i--){
    for( let j=1;j<=i;j++){
      if(arr[j-1] > arr[j]){
        let first = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = first;
      }
    }
  }
  console.log(arr)
}
selectionSort=(arr)=>{
  let minIndex;
  let len = arr.length;
  let temp;
  for(let i=0;i<len;i++){
    minIndex=i;
    for(let j=i+1;j<len;j++){
      if(arr[j]< minIndex){
        minIndex = j
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

  }

}

performance=()=>{
const arr = [1,2,3]
console.time("Time this");
let sum = 0;
let res = 0;
for(let i=0;i<arr.length;i++){
  sum = sum+arr[i];
  }
  for(let i =0;i<arr.length;i++){
    res += sum-arr[i]


}
console.log(res-sum);
console.timeEnd("Time this");
}


  render(){
    const arr = [4,2,2,8,69,7,9,44,47,75];
    const arr1 = [4,6,2,8,69,7,9,44,47,75];



    return(
      <div>
        <button onClick={()=>this.bubbleSort(arr)}>Sort</button>
        <button onClick={()=>this.bubbleSort(arr1)}>SelectionSort</button>
          <button onClick={this.addresss}>NameAndAddress</button>
            <button onClick={this.performance}>Performance</button>
      </div>
    )
  }
}



// constructor(props){
//   super(props)
//   this.state = {
//     todo:[false,false,false,false,false,false,false,false,false],
//     arr:[]
//   }
// }
//
// // 1,,3,4,5,,7,8,9
//
// toggle=(id,e)=>{
//   if(e.shiftKey){
//     this.setState({
//       arr:[...this.state.arr,id]
//     },()=>{
//       let count = Math.min(...this.state.arr);
//       let max = Math.max(...this.state.arr);
//       const tog = this.state.todo.map((item,i)=>{
//         if(i===count && count < max ){
//           count++;
//           return true;
//         }
//         return item;
//       })
//       this.setState({
//         todo:tog
//       })
//     });
//   }
//
//   const toggle = this.state.todo.map((item,i)=>{
//     if(i === id) {
//       return !item;
//     }
//   return item;
//
//   });
//   this.setState({
//     todo:toggle
//   })
// }
// clearall=()=>{
//   const clear = this.state.todo.map((item,i)=>{
//     return item = false;
//   });
//   this.setState({
//     arr:[],
//     todo:clear
//   })
// }
// render(){
//   return (
//     <div className="App">
//       <button onClick={this.clearall}>clearall</button>
// {this.state.todo.map((item,id)=>{
//   return <li key={id}><input type="checkbox" checked={item} onClick={(e)=>this.toggle(id,e)}/>{item ? 'True' : 'False'}</li>
// })}
//     </div>
//   )
// }
// }

export default Test;
