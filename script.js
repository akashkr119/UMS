const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.navin');const year=document.getElementById('year');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}))}if(year)year.textContent=new Date().getFullYear();

const galleryPhotos=[
['0026','Educational Visit','Learning beyond the classroom'],
['0027','Educational Tour','Exploring, observing and learning together'],
['0028','Student Group Activity','Friendship, participation and teamwork'],
['0029','Bicycle Distribution','Supporting student access to education'],
['0030','Outdoor Learning','Learning through activity and experience'],
['0031','Yoga & Wellness','Healthy habits for body and mind'],
['0032','Green School Activity','Learning to care for our environment'],
['0033','Plantation Drive','Students contributing to a greener future'],
['0034','School Group','Memories of learning together'],
['0035','Educational Exposure','New experiences beyond the classroom'],
['0036','Student Excursion','Learning through exploration'],
['0037','Educational Visit','Students discovering new places and ideas'],
['0038','Group Learning','Together we learn and grow'],
['0039','Hygiene Awareness','Building healthy everyday habits'],
['0040','Handwashing Activity','Clean hands, healthy students'],
['0041','Bicycle Distribution','Encouraging regular access to school'],
['0042','Student Support','Supporting education and mobility'],
['0043','Campus Activity','Students participating in school life'],
['0044','School Garden','Learning with nature'],
['0045','Environment Awareness','Caring for our campus and surroundings'],
['0046','Student Activity','Participation, confidence and teamwork'],
['0047','Our School Community','Growing and learning together']
];
const photoGrid=document.querySelector('.photo-grid');if(photoGrid){galleryPhotos.forEach(([id,title,caption])=>{const figure=document.createElement('figure');const img=document.createElement('img');img.src=`images/gallery/IMG-20260805-WA${id}.jpg`;img.alt=title;img.loading='lazy';const fc=document.createElement('figcaption');const b=document.createElement('b');b.textContent=title;const span=document.createElement('span');span.textContent=caption;fc.append(b,span);figure.append(img,fc);photoGrid.appendChild(figure);});}