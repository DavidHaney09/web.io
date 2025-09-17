// Interactividad básica: tema, búsqueda y fecha
(function(){
const themeBtn = document.getElementById('themeToggle');
const yearEl = document.getElementById('year');
const search = document.getElementById('searchInput');
const studentsCount = document.getElementById('studentsCount');


// Año en el footer
yearEl.textContent = new Date().getFullYear();


// Tema guardado en localStorage
const currentTheme = localStorage.getItem('site-theme') || 'dark';
if(currentTheme === 'light') document.body.classList.add('light');


themeBtn.addEventListener('click', ()=>{
document.body.classList.toggle('light');
const isLight = document.body.classList.contains('light');
localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
});


// Búsqueda simulada (filtra títulos de noticias y programas)
const items = [
'Programación I', 'Matemáticas', 'Redes', 'Diseño Digital', 'Inglés',
'Feria tecnológica', 'Clases remotas', 'Biblioteca'
];
search.addEventListener('input', (e)=>{
const q = e.target.value.toLowerCase();
if(!q){
studentsCount.textContent = '1,234';
return;
}
const matches = items.filter(i => i.toLowerCase().includes(q));
studentsCount.textContent = matches.length ? matches.length : '0';
});


// Contador animado inicial (simulado)
let start = 1000, end = 1234; const step = 7;
const int = setInterval(()=>{
start += step; document.getElementById('studentsCount').textContent = start;
if(start >= end) clearInterval(int);
}, 22);


})();