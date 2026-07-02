// Ferme automatiquement le menu mobile apres un clic sur un lien
(function () {
  const toggle = document.getElementById('toggle');
  if (!toggle) return;

  document.querySelectorAll('.menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.checked = false;
    });
  });
})();
