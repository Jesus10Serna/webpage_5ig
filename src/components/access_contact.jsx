const handleRedirect2 = (sectionClass) => {
  const section = document.getElementsByClassName(sectionClass);
  const firstElement = section instanceof HTMLCollection ? section[0] : section;

  if (section.length > 0) {
    // Si se encuentra al menos un elemento con la clase sectionClass
    firstElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = `/ `;
    window.addEventListener('load', () => {
      const section1 = document.getElementsByClassName(sectionClass);
      const firstElement1 = section1 instanceof HTMLCollection ? section1[0] : section1;
      console.log('aa')
      if (section1.length > 0) {
        console.log('aa')
        firstElement1.scrollIntoView({ behavior: 'smooth' });
        
      } else {
        console.error(`No se encontró ningún elemento con la clase '${sectionClass}' después de la redirección.`);
      }
      
  });
    
    
      
  }
};

export default handleRedirect2;