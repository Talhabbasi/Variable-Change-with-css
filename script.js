let selector=document.querySelectorAll(`.main input`)
console.log(selector)

function handleEvent(){
  const dataset1=this.dataset.list || "";
  console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value +dataset1);
 
}
selector.forEach((e=>{
    e.addEventListener('change',handleEvent)
}))
// Mouse Move is not working 
// // selector.forEach((e2=>{
// //     e2.addEventListener('mousemoves',handleEvent)
// // }))