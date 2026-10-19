import {FormControl,Select,MenuItem,Switch,Button} from '@mui/material';
const fields=[['count','عدد الأسئلة',[3,4,5,6,7,8]],['variant','الشكل',['default','bordered','separated']],['iconType','الأيقونة',['chevron','plus','none']],['iconPosition','مكان الأيقونة',['end','start']],['headingLevel','مستوى العنوان',[2,3,4,5,6]]];
const labels={default:'افتراضي',bordered:'بإطار',separated:'عناصر منفصلة',chevron:'سهم',plus:'زائد / ناقص',none:'بدون أيقونة',end:'النهاية',start:'البداية'};
export default function Settings({options,onUpdate,onReset}) {
 return <aside className="settings panel" aria-labelledby="settings-heading"><div className="panel-heading"><h2 id="settings-heading">إعدادات المكوّن</h2><span className="mono">props</span></div>
 <div className="settings-body">{fields.map(([key,label,values])=><div className="setting-field" key={key}><label id={`${key}-label`}>{label}<span>{key}</span></label><FormControl fullWidth size="small"><Select labelId={`${key}-label`} value={options[key]} onChange={e=>onUpdate(key,e.target.value)}>{values.map(value=><MenuItem value={value} key={value}>{labels[value]||value}</MenuItem>)}</Select></FormControl></div>)}
 <div className="switches">{[['multiple','فتح أكثر من سؤال'],['collapsible','السماح بإغلاق الكل'],['animated','حركة سلسة']].map(([key,label])=><label className="switch-row" key={key}><span>{label}<small>{key}</small></span><Switch size="small" checked={options[key]} onChange={e=>onUpdate(key,e.target.checked)} inputProps={{'aria-label':label}}/></label>)}</div>
 <Button fullWidth variant="outlined" onClick={onReset}>إعادة الإعدادات الافتراضية</Button></div></aside>;
}
