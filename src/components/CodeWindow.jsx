import {useState} from 'react';
import {Button} from '@mui/material';
export default function CodeWindow({options}){
 const [status,setStatus]=useState('');
 const code=`<AccordionPreview
  items={questions.slice(0, ${options.count})}
  options={${JSON.stringify(options,null,2).replaceAll('\n','\n  ')}}
  openIds={openIds}
  onChange={setOpenIds}
/>`;
 async function copy(){try{await navigator.clipboard.writeText(code);setStatus('تم النسخ');}catch{setStatus('تعذّر النسخ؛ حدّد النص لنسخه يدوياً');}}
 return <section className="code-window" aria-label="كود المكوّن"><div className="code-toolbar"><div className="traffic-lights" aria-hidden="true"><i/><i/><i/></div><span>AccordionPreview.jsx</span><Button size="small" onClick={copy}>نسخ الكود</Button></div><pre dir="ltr"><code>{code}</code></pre><div className="code-footer"><span>React · JSX</span><span role="status">{status||'يعكس الكود قيم الخصائص الحالية'}</span></div></section>;
}
