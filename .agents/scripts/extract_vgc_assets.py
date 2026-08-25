import fitz, os
pdf='attached_assets/VGC_Mgmt_Deck_vF_1787666312754.pdf'
out='.agents/outputs/vgc-deck/assets'
os.makedirs(out, exist_ok=True)
doc=fitz.open(pdf)
for page_num in [0, 1, 16]:
  page=doc[page_num]
  for j,img in enumerate(page.get_images(full=True)):
    xref=img[0]
    data=doc.extract_image(xref)
    ext=data['ext']
    path=f'{out}/page-{page_num+1:02d}-image-{j+1}.{ext}'
    open(path,'wb').write(data['image'])
    print(path, data['width'], data['height'], ext)
