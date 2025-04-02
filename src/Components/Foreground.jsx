import React, { useRef, useEffect, useState } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null);
  const [constraints, setConstraints] = useState(null);

  useEffect(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setConstraints({
        left: 0,
        top: 0,
        right: offsetWidth - 240, // 240 is approximate width of card
        bottom: offsetHeight - 280, // 280 is approximate height of card
      });
    }
  }, []);

  const data = [
    { desc: "This is the Background Color of the card that will be Displayed..", filesize: ".9mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" } },
    { desc: "This is the Background Color of the card that will be Displayed..", filesize: ".9mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" } },
    { desc: "This is the Background Color of the card that will be Displayed..", filesize: ".9mb", close: false, tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" } },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[4] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={constraints} />
      ))}
    </div>
  );
}

export default Foreground;
