const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Sneakers",
    },
    {
      id: 3,
      title: "Jackets",
    },
    {
      id: 4,
      title: "Mens",
    },
    {
      id: 5,
      title: "Womens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => {
        return (
          <div className="category-container">
            <div className="background-image" />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
