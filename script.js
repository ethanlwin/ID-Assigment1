function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    for (const page of pages) {
      page.style.display = 'none';
    }
  
    // Show the specified page or default page
    if (pageId) {
      document.getElementById(pageId).style.display = 'block';
    } else {
      document.getElementById('home').style.display = 'block';
    }
  }
  
  // Show page 1 initially
  showPage("home");
  