const scrollBtn = document.querySelector('#scrollBtn');
const scrollToDiv = document.querySelector('#scrollToDiv');

scrollBtn.addEventListener('click', () => {
  scrollToDiv.scrollIntoView({ behavior: 'smooth' });
});


const download = document.querySelector('#download');

download.addEventListener('click', () => {
  // Define the file URL and name
  const fileUrl = '../files/catalogo.pdf';
  const fileName = 'suisei-catalogo.pdf';

  // Create an anchor element
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = fileName;

  // Append the anchor element to the document body
  document.body.appendChild(a);

  // Trigger a click event on the anchor element to start the download
  a.click();

  // Remove the anchor element from the document body
  document.body.removeChild(a);

})