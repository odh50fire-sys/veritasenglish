# -*- coding: utf-8 -*-
with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
scripts = re.findall(r'<script\s+[^>]*src=[\'"]([^\'"]+)[\'"]', text)
for s in scripts:
    if 'grammar' in s:
        print('Grammar script:', s)
