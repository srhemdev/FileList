import "./LoadingComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

interface LoadingComponentProps {
  message: string;
}

/**
 * Loading component.
 *
 * @component
 * @param props - The props of the component.
 * @param {string} props.message - Loading component message.
 * @returns The rendered Loading component.
 */

const LoadingComponent: React.FC<LoadingComponentProps> = ({ message = "" }) => {
  return (
    <div className="loader">
      <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} />
      <span>{message}</span>
    </div>

  );
}

export default LoadingComponent;