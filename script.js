// Basic interactions
document.addEventListener('DOMContentLoaded', function(){
  const topContactBtn = document.getElementById('topContactBtn');
  
  const topQuoteBtn = document.getElementById('topQuoteBtn');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const tabs = document.querySelectorAll('.tab');
  const tabBodies = document.querySelectorAll('.tab-body');
  const quickForm = document.getElementById('quickQuoteForm');
  const quoteMessage = document.getElementById('quoteMessage');
  const openGoogleForm = document.getElementById('openGoogleForm');

  function openModal(){ modal.setAttribute('aria-hidden','false'); }
  function closeModal(){ modal.setAttribute('aria-hidden','true'); quoteMessage.classList.add('hidden'); quickForm && quickForm.reset(); }

  [topQuoteBtn].forEach(btn=>btn.addEventListener('click', openModal));
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(); });

  tabs.forEach(tab=>{
    tab.addEventListener('click', function(){
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      tabBodies.forEach(b=> b.classList.toggle('hidden', b.id !== target));
    });
  });

  // Quick Quote form submit (local demo)
  quickForm && quickForm.addEventListener('submit', function(e){
    e.preventDefault();
    quickForm.classList.add('hidden');
    quoteMessage.classList.remove('hidden');
    // In real integration you would POST to your server or use Google Forms URL.
  });

  // Open Google form link (replace placeholder URL if user adds)
  openGoogleForm.addEventListener('click', function(e){
    // replace with your actual Google Form URL if desired
    openGoogleForm.href = "https://docs.google.com/forms/d/e/1FAIpQLSeLF0WMZIBUmyOS0RFdJDeTRuFMJoEbLCOkwkVY1moMI2cSeg/viewform";
  });

  // Contact buttons scroll to footer/contact section
  function scrollToContact(){ document.getElementById('contactSection').scrollIntoView({behavior:'smooth'}); }
  topContactBtn.addEventListener('click', scrollToContact);
  

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const topNav = document.getElementById('topNav');
  hamburger.addEventListener('click', function(){ topNav.style.display = topNav.style.display === 'block' ? 'none' : 'block'; });

  // Make logo clickable (go home)
  const logo = document.querySelector('.logo');
  if(logo) logo.addEventListener('click', ()=> location.href='index.html');
});
