function Cards({ item }) {
  return (
    <>
      <div className="card bg-base-100 m-w-96 m-2 shadow-sm hover:scale-105 duration-200 transition-all dark:bg-slate-900 dark:text-white dark:border-1">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions dark:bg-slate-900 dark:text-white justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer ">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
