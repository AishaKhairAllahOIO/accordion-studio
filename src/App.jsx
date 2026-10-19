import {useState} from 'react';
import {TextField,InputAdornment,Chip} from '@mui/material';
import Settings from './components/Settings';
import AccordionPreview from './components/AccordionPreview';
import CodeWindow from './components/CodeWindow';
import {defaults,questions} from './data';
export default function App(){
 const [options,setOptions]=useState(defaults);
 const [openIds,setOpenIds]=useState([questions[0].id]);
 const [query,setQuery]=useState('');
 const selected=questions.slice(0,options.count);
 const visible=selected.filter(item=>item.title.includes(query.trim())||item.content.includes(query.trim()));
 function update(key,value){
  const next={...options,[key]:value};setOptions(next);
  setOpenIds(previous=>{
   let ids=previous.filter(id=>questions.slice(0,next.count).some(item=>item.id===id&&!item.disabled));
   if(!next.multiple) ids=ids.slice(0,1);
   if(!next.collapsible&&!ids.length) ids=[questions[0].id];
   return ids;
  });
 }
 function reset(){setOptions({...defaults});setOpenIds([questions[0].id]);setQuery('');}
 return <><header className="site-header"><div className="page-container header-inner"><div className="brand"><span className="brand-mark" aria-hidden="true">☷</span>مكتبة المكونات</div><span className="header-note">الأكورديون</span></div></header>
 <main className="page-container"><section className="intro"><div className="eyebrow">مكونات واجهة المستخدم <span/> 01</div><h1>الأكورديون: عرض المحتوى القابل للطي</h1><p>اضبط سلوك التوسيع والطي، وحدّد بنية العناوين ونمط العرض، وعاين أثر كل خاصية مباشرةً.</p></section>
 <div className="workspace"><Settings options={options} onUpdate={update} onReset={reset}/><div className="preview-column"><section className="preview panel" aria-labelledby="preview-heading"><div className="panel-heading"><div className="preview-title"><h2 id="preview-heading">الأكورديون</h2><Chip size="small" label="معاينة مباشرة"/></div><span className="live-dot" aria-hidden="true"/></div><div className="preview-body"><div className="search-row"><TextField fullWidth size="small" placeholder="ابحث في الأسئلة…" value={query} onChange={e=>setQuery(e.target.value)} inputProps={{'aria-label':'البحث في الأسئلة'}} slotProps={{input:{startAdornment:<InputAdornment position="start"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.6"/><path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.6"/></svg></InputAdornment>}}}/><span className="result-count" aria-live="polite">{visible.length} أسئلة</span></div>
 {visible.length?<AccordionPreview items={visible} options={options} openIds={openIds} onChange={setOpenIds}/>:<div className="empty-state"><strong>لا توجد نتائج مطابقة</strong><p>عدّل عبارة البحث أو امسحها لعرض جميع الأسئلة.</p></div>}
 <div className="preview-footer"><span>استخدم عنوان السؤال لتوسيع المحتوى أو طيّه</span><span dir="ltr">open: [{openIds.join(', ')}]</span></div></div></section><CodeWindow options={options}/></div></div><footer className="page-footer">مرجع تفاعلي لخصائص الأكورديون<span>Accordion / Component reference</span></footer></main></>;
}
