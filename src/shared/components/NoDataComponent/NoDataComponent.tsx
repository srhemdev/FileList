import "./NoDataComponent.css";

interface NoDataComponentProps {
  message: string;
}

/**
 * No Data component.
 *
 * @component
 * @param props - The props of the component.
 * @param {string} props.message - No Data Message to be displayed.
 * @returns The rendered No Data component.
 */

const NoDataComponent: React.FC<NoDataComponentProps> = ({ message }) => {
  return (
    <div className="no-data">{message}</div>
  );
}

export default NoDataComponent;