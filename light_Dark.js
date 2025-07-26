    const btn = document.getElementById('boton-modo');
    const lightLink = document.getElementById('estilo-light');
    const darkLink  = document.getElementById('estilo-dark');
    
    
    btn.addEventListener('click', () => {
      const nuevoTema = darkLink.disabled ? 'dark' : 'light';
      activarTema(nuevoTema);
    });
    
    function activarTema(tema) {
      if (tema === 'dark') {
        lightLink.disabled = true;
        darkLink.disabled  = false;
        btn.textContent = 'Modo Claro';
      } else {
        lightLink.disabled = false;
        darkLink.disabled  = true;
        btn.textContent = 'Modo Oscuro';
      }
      
    }
    
