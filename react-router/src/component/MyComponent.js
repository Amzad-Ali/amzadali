import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/contact');
  }

  return (
    <button onClick={handleClick}>Go to Some Other Route</button>
  );
}
