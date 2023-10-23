import PropTypes from "prop-types";

function RegularList({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <>
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}

RegularList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  itemComponent: PropTypes.func.isRequired,
  resourceName: PropTypes.string.isRequired,
};

export default RegularList;
