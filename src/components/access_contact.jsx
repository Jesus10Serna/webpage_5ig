const handleRedirect2 = (sectionClass) => {
    const section = document.getElementsByClassName(sectionClass);
    console.log("Section Id:",sectionClass);
    console.log(section);
    const firstElement = section instanceof HTMLCollection ? section[0] : section;
    if (section) {
      firstElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  export default handleRedirect2;