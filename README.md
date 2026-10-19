# Accordion Studio — React + MUI

واجهة عربية متجاوبة لمكوّن الأكورديون وإعداداته فقط. أزرق باستيل، دون تدرجات أو تبويبات أو نوافذ منبثقة. نافذة الكود مستوحاة من macOS؛ هي لعرض ونسخ كود JSX وليست محاكي Terminal.

## التشغيل محلياً
يتطلب Node.js 22.12+ (أو Node.js 24).
```bash
npm ci
npm run dev
```
افتح الرابط الذي يظهر في الطرفية.

## البناء
```bash
npm run build
npm run preview
```

## النشر على GitHub Pages
1. فك الضغط. افتح مجلد accordion-studio وارفع **محتوياته** إلى جذر مستودع GitHub. تأكد من رفع `.github/workflows/deploy.yml` و`package-lock.json` أيضاً.
2. استخدم فرع `main` (أو عدّل اسم الفرع في ملف workflow).
3. في المستودع: Settings → Pages → Build and deployment → Source → GitHub Actions.
4. ارفع commit جديد أو شغّل Deploy to GitHub Pages يدوياً من Actions.
5. انتظر نجاح العملية ثم افتح رابط النشر في Settings → Pages.

الإعداد `base: './'` مناسب لهذا التطبيق ذي الصفحة الواحدة، سواء على نطاق المستخدم أو داخل مسار المستودع؛ لا يحتاج تغيير اسم المستودع في Vite. لا يوجد React Router أو backend. لم يتم النشر إلى حسابك تلقائياً.

## الإعدادات
- عدد الأسئلة: 3–8.
- الأشكال: default / bordered / separated.
- الأيقونات: chevron / plus / none، في البداية أو النهاية.
- مستوى العنوان الدلالي: h2–h6.
- multiple: السماح بفتح أكثر من عنصر.
- collapsible: عند إيقافه يبقى عنصر واحد على الأقل مفتوحاً.
- animated: تفعيل الحركة، مع احترام prefers-reduced-motion.
- البحث لا يغيّر العناصر المفتوحة؛ يمكن أن يخفي عنصراً مفتوحاً مؤقتاً.
- السؤال الخامس معطّل دائماً لتوضيح حالة disabled.
- الكود المعروض يستخدم AccordionPreview المحلي؛ انسخ المكوّن معه إلى مشروعك. يلزم تعريف openIds وsetOpenIds بواسطة useState واستيراد questions.

## تنظيم المشروع
- `src/App.jsx`: حالة الإعدادات والبحث والعناصر المفتوحة.
- `src/components/AccordionPreview.jsx`: الأكورديون القابل لإعادة الاستخدام.
- `src/components/Settings.jsx`: عناصر التحكم.
- `src/components/CodeWindow.jsx`: عرض ونسخ الكود.
- `src/data.js`: الأسئلة والقيم الافتراضية (المحتوى توضيحي).
- `src/styles.css`: التنسيق المتجاوب.

مرجع MUI: https://mui.com/material-ui/react-accordion/
مرجع نشر Vite: https://vite.dev/guide/static-deploy.html
