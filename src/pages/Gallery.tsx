/**
 * Gallery component
 * Showcases visual content such as project screenshots, UI designs, or personal photos.
 * Can be enhanced with lightbox or carousel functionality.
 */
function Gallery() {
  return (
    <section className="gallerySection">
      <h1>My Media Gallery</h1>
      <div className="mediaGrid">
        <img src="/media/photo1.jpg" alt="Event 1" />
        <img src="/media/photo2.jpg" alt="Event 2" />
        <video controls>
          <source src="/media/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Gallery;