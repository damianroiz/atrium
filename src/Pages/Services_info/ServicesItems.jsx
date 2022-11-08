import "./servicesitems.css";
import "./services.css";

export const ServicesItems = ({ item, setCurrent, current }) => {
  const handleClick = () => {
    setCurrent(item.id);
  };

  return (
    <div
      onClick={handleClick}
      className={item.id === current ? "servicesitems active" : "servicesitems"}
    >
      <div>
        <h4 className="servicesitems-title">{item.title}</h4>
      </div>
    </div>
  );
};
