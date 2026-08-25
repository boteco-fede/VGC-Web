import fitz, os
pdf='attached_assets/VGC_Mgmt_Deck_vF_1787666312754.pdf'
out='.agents/outputs/vgc-deck'
os.makedirs(out, exist_ok=True)
doc=fitz.open(pdf)
print('pages', doc.page_count)
for i,page in enumerate(doc):
    pix=page.get_pixmap(matrix=fitz.Matrix(1.5,1.5), alpha=False)
    pix.save(f'{out}/page-{i+1:02d}.png')
    text=page.get_text()
    open(f'{out}/page-{i+1:02d}.txt','w').write(text)
    print(i+1, 'images', len(page.get_images(full=True)), 'textchars', len(text))
