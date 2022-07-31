import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAddTask, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {!showAddTask ? (
        <Button color="green" text="Add" onClick={onAdd} />
      ) : (
        <Button color="red" text="Close" onClick={onAdd} />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

const headingStyle = {
  color: "red",
  backgroundColor: "#000",
};

export default Header;
