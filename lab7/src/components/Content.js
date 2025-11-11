import { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element6ColorToggle: false,
      element7ColorToggle: false,
      element6ClickedOnce: false,
      element7ClickedOnce: false,
    };
  }

  toggleElement6 = () => {
    this.setState((prev) => ({
      element6ColorToggle: !prev.element6ColorToggle,
      element6ClickedOnce: true,
    }));
  };

  toggleElement7 = () => {
    this.setState((prev) => ({
      element7ColorToggle: !prev.element7ColorToggle,
      element7ClickedOnce: true,
    }));
  };

  render() {
    const { element6ColorToggle, element7ColorToggle, element6ClickedOnce, element7ClickedOnce } =
      this.state;

    const el6Style = {
      cursor: "pointer",
      backgroundColor: !element6ClickedOnce
        ? "transparent"
        : element6ColorToggle
        ? "#33f633ff"
        : "#d11919ff",
      color: !element6ClickedOnce
        ? "#000000"
        : element6ColorToggle
        ? "#000000"
        : "#ffffff",
    };

    const el7Style = {
      cursor: "pointer",
      backgroundColor: !element7ClickedOnce
        ? "transparent"
        : element7ColorToggle
        ? "#FFD700"
        : "#4b72e9ff",
      color: !element7ClickedOnce
        ? "#000000"
        : element7ColorToggle
        ? "#000000"
        : "#ffffff",
    };

    return (
      <main className="content">
        <h3>Хобі</h3>
        <ul className="list">
          <li id="element6" style={el6Style} onClick={this.toggleElement6}>
            Спорт
          </li>
          <li className="element7" style={el7Style} onClick={this.toggleElement7}>
            Танці
          </li>
          <li>Музика</li>
          <li>Випічка</li>
        </ul>

        <h3>Улюблені фільми</h3>
        <ol className="list">
          <li>"Голодні ігри", 2012</li>
          <li>"Хоббіт", 2012</li>
          <li>"1+1", 2011</li>
        </ol>

        <h3>Улюблене місто</h3>
        <p>
          Львів — місто на заході України, національно-культурний та
          освітньо-науковий осередок країни. Великий промисловий центр і
          транспортний вузол. За кількістю населення — п’яте місто країни.
        </p>
        <p>
          Місто Львів засновано за часів правління Данила Галицького, перша
          письмова згадка про місто датується 1256 роком.
        </p>
      </main>
    );
  }
}

export default Content;
