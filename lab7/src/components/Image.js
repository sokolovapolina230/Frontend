import { useState } from "react";

function Image() {
  const originalWidth = 600;
  const originalHeight = 400;

  const [images, setImages] = useState([
    { id: 0, src: "https://lviv.travel/image/news/4c/d6/4cd6916ff31ce68b7a0043c4df272f90374f56e6_1585229828.png?crop=1097%2C734%2C212%2C1", scale: 1, visible: true },
  ]);

  const addImage = () => {
    setImages((prev) => [
      ...prev,
      { id: prev.length, src: prev[0].src, scale: 1, visible: true },
    ]);
  };

  const enlargeImage = () => {
    setImages((prev) =>
      prev.map((img, i) => (img.visible && i === [...prev].filter(im => im.visible).length - 1 ? { ...img, scale: img.scale * 1.2 } : img))
    );
  };

  const reduceImage = () => {
    setImages((prev) =>
      prev.map((img, i) => (img.visible && i === [...prev].filter(im => im.visible).length - 1 ? { ...img, scale: img.scale / 1.2 } : img))
    );
  };

  const removeImage = () => {
    setImages((prev) => {
      const visibleImages = prev.filter(img => img.visible);
      if (visibleImages.length === 0) return prev;
      const lastVisibleId = visibleImages[visibleImages.length - 1].id;
      return prev.map(img => (img.id === lastVisibleId ? { ...img, visible: false } : img));
    });
  };

  return (
    <section className="image-section">
      {images.map(
        (img) =>
          img.visible && (
            <img
              key={img.id}
              src={img.src}
              alt={`Львів ${img.id}`}
              style={{
                width: originalWidth * img.scale,
                height: originalHeight * img.scale,
              }}
            />
          )
      )}

      <div className="image-controls">
        <button onClick={addImage}>Додати</button>
        <button onClick={enlargeImage}>Збільшити</button>
        <button onClick={reduceImage}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </section>
  );
}

export default Image;
