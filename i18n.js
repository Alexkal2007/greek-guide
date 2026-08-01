(function(){
  function currentLang(){ return localStorage.getItem('gig-lang') || 'en'; }

  function applyStatic(lang){
    document.documentElement.lang = lang === 'el' ? 'el' : 'en';

    document.querySelectorAll('[data-en]').forEach(function(el){
      var val = el.getAttribute('data-' + lang);
      if (val !== null) el.textContent = val;
    });
    document.querySelectorAll('[data-en-html]').forEach(function(el){
      var val = el.getAttribute('data-' + lang + '-html');
      if (val !== null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-en-ph]').forEach(function(el){
      var val = el.getAttribute('data-' + lang + '-ph');
      if (val !== null) el.setAttribute('placeholder', val);
    });
    document.querySelectorAll('.lang-label').forEach(function(el){
      el.textContent = lang === 'en' ? 'ΕΛ' : 'EN';
    });
  }

  window.setLang = function(lang){
    localStorage.setItem('gig-lang', lang);
    applyStatic(lang);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  };

  window.toggleLang = function(){
    window.setLang(currentLang() === 'en' ? 'el' : 'en');
  };

  window.getLang = currentLang;

  document.addEventListener('DOMContentLoaded', function(){
    applyStatic(currentLang());
  });
})();
