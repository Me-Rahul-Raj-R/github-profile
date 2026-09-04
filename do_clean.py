import os, re

folder = 'src/components'
for fn in os.listdir(folder):
    if fn.endswith('.jsx'):
        fp = os.path.join(folder, fn)
        with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
            s = f.read()
        s = s.replace("0.2)' shadow:", "0.2)', boxShadow:")
        s = s.replace("0.25)' shadow:", "0.25)', boxShadow:")
        s = s.replace("#F8FAFC' margin:", "'#F8FAFC', margin:")
        s = s.replace("#1E293Rs", "#1E293B'")
        s = s.replace("{{proj.subtitle}}", "proj.subtitle")
        s = s.replace("{{proj.theme}}", "proj.theme")
        s = s.replace("{{profile.summary}}", "profile.summary")
        s = s.replace("{{profile.positioning}}", "profile.positioning")
        s = s.replace("key=ti>v{r }", "key={i}>&#x2714; { r }")
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(s)

print('All components successfully cleaned!')
