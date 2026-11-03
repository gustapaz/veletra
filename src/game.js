export const PACKS={costa:{name:'Costa',words:['mar','vela','sal','onda','farol','praia','brisa','casco','porto','horizonte']},oficina:{name:'Oficina',words:['tinta','papel','dobra','traço','trama','linha','molde','pincel','textura','gravura']},ceu:{name:'Céu',words:['lua','astro','nuvem','órbita','cometa','pulsar','aurora','eclipse','neblina','universo']}};
export const MODES={livre:{name:'Livre',seconds:null},corrente:{name:'Corrente',seconds:9},mare:{name:'Maré',seconds:6}};
export const normalize=value=>typeof value==='string'?value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim():'';
export function duration(mode,index){return MODES[mode].seconds===null?null:MODES[mode].seconds-index*(mode==='mare'?.2:.25);}
export function create(pack='costa',mode='corrente'){if(!PACKS[pack])pack='costa';if(!MODES[mode])mode='corrente';return {pack,mode,status:'ready',index:0,remaining:duration(mode,0),elapsed:0,lives:3,score:0,hits:0,misses:0,streak:0,last:'ready'};}
export function start(g){return g.status==='ready'?{...g,status:'playing',last:'start'}:g;}
export function pause(g){return g.status==='playing'?{...g,status:'paused'}:g;}
export function resume(g){return g.status==='paused'?{...g,status:'playing'}:g;}
export function target(g){return PACKS[g.pack].words[Math.min(g.index,9)];}
function nextWord(g){const n=g.index+1;if(n===10)return {...g,index:n,status:'won',score:g.score+(g.lives===3?100:0)};return {...g,index:n,remaining:duration(g.mode,n)};}
export function submit(g,value){if(g.status!=='playing'||!normalize(value))return g;
 if(normalize(value)!==normalize(target(g))){const lives=g.lives-1;return {...g,lives,streak:0,last:'wrong',status:lives===0?'lost':'playing'};}
 const streak=g.streak+1,points=normalize(target(g)).length*10+(g.remaining===null?0:Math.floor(Math.max(0,g.remaining)*5))+Math.min(streak,5)*10;
 return nextWord({...g,score:g.score+points,hits:g.hits+1,streak,last:'hit'});
}
export function advance(g,dt){if(g.status!=='playing'||g.remaining===null||!Number.isFinite(dt)||dt<=0)return g;
 const step=Math.min(dt,.1),remaining=Math.max(0,g.remaining-step);if(remaining>1e-8)return {...g,remaining,elapsed:g.elapsed+step};
 const lives=g.lives-1,missed={...g,lives,remaining:0,misses:g.misses+1,streak:0,elapsed:g.elapsed+step,last:'timeout'};return lives===0?{...missed,status:'lost'}:nextWord(missed);
}
export function blank(){return {version:1,sound:false,motion:false,stats:Object.fromEntries(Object.keys(PACKS).flatMap(p=>Object.keys(MODES).map(m=>[`${p}-${m}`,{played:0,wins:0,best:0}])))};}
export function readSave(raw){try{const s=JSON.parse(raw||'null'),out=blank();if(s?.version!==1||typeof s.sound!=='boolean'||typeof s.motion!=='boolean')return out;
 for(const k of Object.keys(out.stats)){const t=s.stats?.[k];if(!t||!Number.isInteger(t.played)||t.played<0||t.played>1000000||!Number.isInteger(t.wins)||t.wins<0||t.wins>t.played||!Number.isInteger(t.best)||t.best<0||t.best>10000)return blank();out.stats[k]={played:t.played,wins:t.wins,best:t.best};}out.sound=s.sound;out.motion=s.motion;return out;}catch{return blank();}}
export function record(save,g){if(!['won','lost'].includes(g.status))return save;const key=`${g.pack}-${g.mode}`,old=save.stats[key];if(old.played>=1000000)return save;return {...save,stats:{...save.stats,[key]:{played:old.played+1,wins:old.wins+(g.status==='won'?1:0),best:Math.max(old.best,g.score)}}};}
