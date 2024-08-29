import "./ErrorComponent.css";

interface ErrorComponentProps {
  message: string;
}

/**
 * Error component.
 *
 * @component
 * @param props - The props of the component.
 * @param {string} props.message - Error component message.
 * @returns The rendered Error component.
 */

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className="error-message">{message}</div>
  );
}

export default ErrorComponent;