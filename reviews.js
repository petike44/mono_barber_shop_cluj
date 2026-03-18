// reviews.js - Handler for review form submissions

document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.querySelector('.review-form form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Simulate sending the review (in a real app, send to server)
      console.log('Review submitted:', { name, email, message });

      // Store in localStorage for demo purposes
      const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
      reviews.push({ name, email, message, date: new Date().toISOString() });
      localStorage.setItem('reviews', JSON.stringify(reviews));

      // Show success message
      alert('Thank you for your review, ' + name + '! Your feedback has been submitted.');

      // Reset form
      this.reset();
    });
  }
});