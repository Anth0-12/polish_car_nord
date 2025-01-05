$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  });


  const images = document.querySelectorAll('.comp-img'); // Sélectionne toutes les div avec la classe "comp-img"
  
  images.forEach(imgContainer => { // Pour chaque div
    const hideImage = imgContainer.querySelector('.hide'); // Trouve l'image cachée
    const visibleImage = imgContainer.querySelector('.visible'); // Trouve l'image visible
    visibleImage.style.display = "none";
  
    // Quand la souris entre sur l'image
    imgContainer.addEventListener('mouseover', function() {
      hideImage.style.display = "none"; // Cache l'image "hide"
      visibleImage.style.display = "block"; // Affiche l'image "visible"
      visibleImage.style.cursor = "pointer"; // Change le curseur en pointer
    });
  
    // Quand la souris sort de l'image
    imgContainer.addEventListener('mouseout', function() {
      hideImage.style.display = "block"; // Affiche l'image "hide"
      visibleImage.style.display = "none"; // Cache l'image "visible"
    });
  });