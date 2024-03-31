export default function ItemShow({ item }) {
  return (
    <form className="show-item" method="dialog">
      <div className="group show">
        <div>
          <img className="cart-img" src={item.img} alt="" />
        </div>
        <div>
          <p className="gray">{item.title}</p>
          <p className="bold">{item.description}</p>
        </div>
      </div>
      <div className="group-col">
        <button className="text-button">X</button>
      </div>
    </form>
  );
}
