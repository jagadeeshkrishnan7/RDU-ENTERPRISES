// Basic interactions
document.addEventListener('DOMContentLoaded', function(){
  const topContactBtn = document.getElementById('topContactBtn');
  const topQuoteBtn = document.getElementById('topQuoteBtn');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const tabs = document.querySelectorAll('.tab');
  const tabBodies = document.querySelectorAll('.tab-body');
  const quoteMessage = document.getElementById('quoteMessage');
  const quoteBackBtn = document.getElementById('quoteBackBtn');

  function openModal(){ 
    modal.setAttribute('aria-hidden','false'); 
  }
  function closeModal(){ 
    modal.setAttribute('aria-hidden','true'); 
    quoteMessage.classList.add('hidden');  
  }

  [topQuoteBtn].forEach(btn=>btn.addEventListener('click', openModal));
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){ 
    if(e.target === modal) closeModal(); 
  });

  tabs.forEach(tab=>{
    tab.addEventListener('click', function(){
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      tabBodies.forEach(b=> b.classList.toggle('hidden', b.id !== target));
    });
  });

  function scrollToContact(){ 
    document.getElementById('contactSection').scrollIntoView({behavior:'smooth'}); 
  }
  topContactBtn.addEventListener('click', scrollToContact);

  const hamburger = document.getElementById('hamburger');
  const topNav = document.getElementById('topNav');
  hamburger.addEventListener('click', function(){ 
    topNav.style.display = topNav.style.display === 'block' ? 'none' : 'block'; 
  });

  const logo = document.querySelector('.logo');
  if(logo) logo.addEventListener('click', ()=> location.href='index.html');

  // ✅ Back button inside quotation modal
  if (quoteBackBtn) {
    quoteBackBtn.addEventListener('click', closeModal);
  }
});
