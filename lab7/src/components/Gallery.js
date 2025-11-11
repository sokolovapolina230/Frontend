import GoodsCard from "./GoodsCard";

function Gallery() {
  const goods = [
    { name: "Яблуко", price: 40, img: "https://media.istockphoto.com/id/490183684/photo/red-apple-on-a-white-background.webp?s=612x612&w=0&k=20&c=dSFzFht3Kc5Lo1l2wTSg4DwChz8iWQlNB1yKvI3ncnY=" },
    { name: "Груша", price: 60, img: "https://media.istockphoto.com/id/1129868270/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%80%D1%83%D1%88%D0%B0-%D1%96%D0%B7%D0%BE%D0%BB%D1%8C%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0-%D0%BD%D0%B0-%D0%B1%D1%96%D0%BB%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96-%D0%B7-%D0%B2%D1%96%D0%B4%D1%81%D1%96%D1%87%D0%BD%D0%B8%D0%BC-%D0%BA%D0%BE%D0%BD%D1%82%D1%83%D1%80%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=rNuCFeKLlvoxCvej15QFRLCgaa5YLSXOChCl3iqLFW4=" },
    { name: "Персик", price: 80, img: "https://media.istockphoto.com/id/1389128299/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%BA-%D1%96%D0%B7%D0%BE%D0%BB%D1%8C%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9-%D1%86%D1%96%D0%BB%D0%B8%D0%B9-%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%BA-%D0%B7-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%BE%D1%8E-%D0%BD%D0%B0-%D0%B1%D1%96%D0%BB%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96-%D0%BF%D0%BB%D0%BE%D0%B4%D0%B8-%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%BA%D0%B0-%D0%B7-%D0%B2%D0%B8%D1%80%D1%96%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC-%D0%BB%D0%B8%D1%81%D1%82%D1%8F%D0%BC-%D0%B7.jpg?s=612x612&w=0&k=20&c=6U3AvmiWiIRqKsR1PefnniYMLJGVCBV7QuCeHC5Yduo=" },
    { name: "Лимон", price: 100, img: "https://media.istockphoto.com/id/474410028/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B2%D1%96%D0%B6%D0%B8%D0%B9-%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD-%D1%96%D0%B7%D0%BE%D0%BB%D1%8C%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%96%D0%BB%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96.jpg?s=612x612&w=0&k=20&c=-KLT-SKWUGDsXjGlccD9byVDQ5B7bAIM6MjEbzysCsQ=" },
    { name: "Апельсин", price: 70, img: "https://media.istockphoto.com/id/527016979/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9.jpg?s=612x612&w=0&k=20&c=nens8he0NrpYx7FEzkIBpdGcqr5VkE0-rN1JUkL_XhY=" },
    { name: "Банан", price: 60, img: "https://media.istockphoto.com/id/1141954205/photo/bananas-on-a-white-background.webp?s=612x612&w=0&k=20&c=jEtfHr1eAx97TsQzoGgvoDifMWDsmAx0LIyErbLjoFo=" },
  ];

  return (
    <section className="gallery">
      <h2 className="gallery-title">Галерея товарів</h2>
      <div className="goods-grid">
        {goods.map((g, index) => (
        <GoodsCard key={index} name={g.name} price={g.price} img={g.img} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
