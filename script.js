// Sticky Navbar
window.addEventListener('scroll', () => {
     const navbar = document.getElementById('navbar');
     if (window.scrollY > 0) {
         navbar.classList.add('sticky');
     } else {
         navbar.classList.remove('sticky');
     }
 });
 
 // Contact Form Submission
 const contactForm = document.getElementById('contact-form');
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     const formData = new FormData(contactForm);
     const formValues = Object.fromEntries(formData.entries());
     
     // Log form data to console
     console.log('Form Data:', formValues);
     
     // Show confirmation dialog
     alert('Thank you for your message. We will get back to you soon!');
     
     // Reset form
     contactForm.reset();
 });
 
 // Project data (mock data)
 const projects = [
     { title: 'Project 1', description: 'Description 1', image: 'path/to/image1.jpg' },
     { title: 'Project 2', description: 'Description 2', image: 'path/to/image2.jpg' },
     // Add more projects as needed
 ];
 
 // Populate projects
 const projectGrid = document.querySelector('.project-grid');
 projects.forEach(project => {
     const projectCard = document.createElement('div');
     projectCard.classList.add('project-card');
     projectCard.innerHTML = `
         <img src="${project.image}" alt="${project.title}">
         <h3>${project.title}</h3>
         <p>${project.description}</p>
     `;
     projectGrid.appendChild(projectCard);
 });
 
 // Recommendation data (mock data)
 const recommendations = [
     { name: 'John Doe', text: 'Great work!', rating: 5 },
     { name: 'Jane Smith', text: 'Excellent developer', rating: 4 },
     // Add more recommendations as needed
 ];
 
 // Populate recommendations
 const recommendationSlider = document.querySelector('.recommendation-slider');
 recommendations.forEach(recommendation => {
     const recommendationCard = document.createElement('div');
     recommendationCard.classList.add('recommendation-card');
     recommendationCard.innerHTML = `
         <h3>${recommendation.name}</h3>
         <p>${recommendation.text}</p>
         <div class="rating">${'★'.repeat(recommendation.rating)}</div>
     `;
     recommendationSlider.appendChild(recommendationCard);
 });