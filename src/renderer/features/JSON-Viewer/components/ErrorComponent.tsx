import { useEffect } from 'react';
import { modifyErrorsCount } from '../../Overview/components/ErrorsCount';

export default function ErrorComponent({ title }: { title: string }) {
  useEffect(() => {
    modifyErrorsCount(1);
    return () => modifyErrorsCount(-1);
  }, []);

  return (
    <>
      {' '}
      <i
        className="fa-solid fa-triangle-exclamation"
        title={`Error: ${title}`}
      />
    </>
  );
}
