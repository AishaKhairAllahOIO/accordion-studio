import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material';
export default function AccordionPreview({items,options,openIds,onChange}) {
 const toggle = (id) => {
  const isOpen = openIds.includes(id);
  if (isOpen && !options.collapsible && openIds.length === 1) return;
  onChange(isOpen ? openIds.filter(value=>value!==id) : options.multiple ? [...openIds,id] : [id]);
 };
 return <div className={`accordion-list variant-${options.variant} icon-${options.iconPosition} ${options.animated ? "" : "no-animation"}`}>
 {items.map((item,index)=>{
  const expanded=openIds.includes(item.id);
  return <Accordion key={item.id} expanded={expanded} onChange={()=>toggle(item.id)} disabled={!!item.disabled} disableGutters elevation={0}
   slots={{heading:`h${options.headingLevel}`}} slotProps={{transition:{timeout:options.animated?220:0}}}>
   <AccordionSummary id={`summary-${item.id}`} aria-controls={`panel-${item.id}`} expandIcon={options.iconType==='none'?null:<span aria-hidden="true" className={`expand-icon ${options.iconType}`}>{options.iconType==='plus'?(expanded?'−':'+'):<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>}</span>}>
    <span className="question-index">{String(index+1).padStart(2,'0')}</span><Typography component="span" className="question-title">{item.title}{item.disabled&&<small> (disabled)</small>}</Typography>
   </AccordionSummary>
   <AccordionDetails id={`panel-${item.id}`} role="region" aria-labelledby={`summary-${item.id}`}><Typography>{item.content}</Typography></AccordionDetails>
  </Accordion>;
 })}
 </div>;
}
