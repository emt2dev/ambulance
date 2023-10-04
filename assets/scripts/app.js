// Check if the screen width is below a certain threshold (e.g., 768px)
if (window.innerWidth <= 768) {
    // Create a new Lottie animation
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottieContainer'),
      renderer: 'svg', // You can choose the renderer type
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to true to autoplay the animation
      path: '/assets/media/images/ambu.json' // Replace with the path to your Lottie JSON file
    });
  }