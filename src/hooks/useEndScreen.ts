import { useEffect, useState } from 'react';

interface UseEndScreenProps {
  distance?: string;
  externalRef?: React.RefObject<HTMLElement> | null;
  once?: boolean;
}

const useEndScreen = ({
  distance = '100px',
  externalRef,
  once = true
}: UseEndScreenProps = {}) => {
  const [endScreen, setEndScreen] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    const element = externalRef?.current;

    const onChange = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setEndScreen(true);
        once && observer.disconnect();
      } else {
        !once && setEndScreen(false);
      }
    };

    observer = new IntersectionObserver(onChange, { rootMargin: distance });
    element && observer.observe(element as Element);

    return () => observer && observer.disconnect();
  }, [externalRef]);

  return { endScreen };
};

export default useEndScreen;
