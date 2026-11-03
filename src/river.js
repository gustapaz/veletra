export function makeRiver(canvas){const ctx=canvas.getContext('2d');if(!ctx)return null;let width=1000,height=400,dpr=1;
 const path=(points,fill,stroke)=>{ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.4;ctx.stroke();}};
 function resize(){const r=canvas.getBoundingClientRect();width=Math.max(1,r.width);height=Math.max(1,r.height);dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);}
 function draw(game,draft,motion){ctx.setTransform(canvas.width/1000,0,0,canvas.height/400,0,0);ctx.clearRect(0,0,1000,400);
 ctx.fillStyle='#bde6e1';ctx.fillRect(0,0,1000,400);ctx.fillStyle='#e8f2bf';ctx.beginPath();ctx.arc(155,60,98,0,Math.PI*2);ctx.fill();
 ctx.fillStyle='#75b7aa';ctx.beginPath();ctx.moveTo(0,115);ctx.bezierCurveTo(180,25,190,168,390,80);ctx.bezierCurveTo(520,25,620,150,900,95);ctx.lineTo(1000,140);ctx.lineTo(1000,400);ctx.lineTo(0,400);ctx.fill();
 ctx.fillStyle='#1f7d82';ctx.beginPath();ctx.moveTo(0,185);ctx.bezierCurveTo(180,110,290,270,480,170);ctx.bezierCurveTo(650,90,790,215,930,135);ctx.lineTo(1000,190);ctx.lineTo(1000,400);ctx.lineTo(0,400);ctx.fill();
 const t=motion?0:game.elapsed;for(let i=0;i<19;i++){ctx.strokeStyle=i%3===0?'#a7ddd1':'#4fa3a0';ctx.lineWidth=i%3===0?1.5:1;const y=195+i*10;ctx.beginPath();for(let x=-60;x<=1000;x+=20){const yy=y+Math.sin(x/88+i+t*.8)*7;if(x===-60)ctx.moveTo(x,yy);else ctx.lineTo(x,yy);}ctx.stroke();}
 ctx.fillStyle='#0a515c';ctx.fillRect(900,145,100,255);ctx.fillStyle='#d0eee3';for(let i=0;i<12;i++){const x=910+i*9;ctx.fillRect(x,155,2,245);ctx.fillStyle=i%2?'#b1e0d8':'#d0eee3';}ctx.fillStyle='#f5edcf';ctx.beginPath();ctx.ellipse(947,147,59,10,0,0,Math.PI*2);ctx.fill();
 path([[0,370],[52,340],[88,353],[140,400],[0,400]],'#eadcc0');path([[1000,360],[970,340],[930,356],[928,400],[1000,400]],'#e8d8b5');
 for(let i=0;i<6;i++){const x=18+i*10;ctx.strokeStyle='#1e5c5e';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x,370);ctx.quadraticCurveTo(x-15,325-i*2,x-5,314-i*2);ctx.stroke();}
 const duration=game.mode==='livre'?1:(game.mode==='mare'?6:9)-Math.min(game.index,9)*(game.mode==='mare'?.2:.25),progress=game.status==='lost'?1:game.status==='won'?.85:game.remaining===null?.32:1-game.remaining/duration;
 const x=motion?340:game.status==='ready'?280:140+progress*650,y=253+(motion?0:Math.sin(t*2.3)*3),tilt=motion?0:Math.sin(t*1.6)*.018;
 ctx.save();ctx.translate(x,y);ctx.rotate(tilt);ctx.fillStyle='#0c515c44';ctx.beginPath();ctx.ellipse(0,32,83,10,0,0,Math.PI*2);ctx.fill();
 path([[-84,0],[72,0],[37,35],[-46,35]],'#f2e8c8','#0e5a62');path([[-84,0],[-17,18],[-46,35]],'#ee7356');path([[72,0],[-17,18],[37,35]],'#cf513d');path([[-17,18],[-6,-72],[27,0]],'#fff6da','#1b6570');path([[-6,-72],[49,-5],[27,0]],'#f0b6a0','#1b6570');path([[-6,-72],[-57,-7],[-17,18]],'#fff0ce','#1b6570');
 ctx.fillStyle='#214f55';ctx.font='12px Georgia';ctx.textAlign='center';ctx.fillText('v/',-16,27);ctx.restore();
 ctx.fillStyle='#f8f3d8';ctx.font='10px Courier New';ctx.textAlign='left';ctx.fillText('PORTO →',805,188);ctx.fillStyle='#0c5962';ctx.textAlign='right';ctx.fillText('QUEDA D’ÁGUA',988,117);
 if(draft){ctx.fillStyle='#f6efce';ctx.textAlign='center';ctx.font='14px Courier New';ctx.fillText('~ '+draft.slice(0,24)+' ~',x,Math.max(125,y-98));}
 }
 resize();return {resize,draw,context:ctx};
}
