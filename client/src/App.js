import React, { useEffect } from 'react';
import './css/gridpage.css';
import randomHexColor from 'random-hex-color';
const App=()=>{
  let array=[];
  for(var i=0;i<100;i++){
    array.push(1);
  }
  i=0;
  let elements=[]
  const select=(e)=>{
    elements.push(Number(e.target.id))
  }
  const logic=()=>{
    let maxy=Math.max(...elements);
    let miny=Math.min(...elements);
    let r1=Number((''+miny)[0])+1;
    let r2=Number((''+maxy)[0])+2;
    let c1=Number((''+miny)[1]);
    let c2=Number((''+maxy)[1]);
    if(r1==0)r1=10;
    if(r2==0)r2=10;
    if(c1==0)c1=10;
    if(c2==0)c2=10;
    c2=c2+1;
    let row=`${r1}/${r2}`;
    let col=`${c1}/${c2}`;
    let html=document.createElement('div');
    let img=document.createElement('img');
    img.src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
    html.appendChild(img);
    html.style.gridColumn=col;
    html.style.gridRow=row;
    html.className="greedy";
    let ref=document.getElementById(`${elements[0]}`);
    ref.after(html);
    for(var i=0;i<elements.length;i++){
      document.getElementById(`${elements[i]}`).remove();
    }
    elements=[];
  }
  return(
    <div>
   <div className="grid">
    {
      array.map((ele)=>{
        i++;
      return <div id={i} className="greedy" onClick={select} style={{background:randomHexColor() }}>{i}</div>
      })
    }
   </div>
<button onClick={logic}>submit</button>
</div>
  );
}

export default App;