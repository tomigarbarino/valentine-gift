import { useState } from "react";
import confetti from 'canvas-confetti';

export const useChangeElements = () => {
    const [index, setIndex] = useState(0);
    const [textP, setTextP] = useState('Dale, respondeme! ');
    const [image, setImage] = useState('https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif');

    const options = [
        { text: 'Segura?', gif: '' },
        { text: 'Segurisima?', gif: '' },
        { text: 'Estas completamente segura?', gif: '' },
        { text: 'Tan segura como cuando decís que no vas a llorar con una Romcom y lo terminas haciendo?', gif: 'https://c.tenor.com/_gBgjcG7quYAAAAC/tenor.gif' },
        { text: 'Si digo que Messi viene a la boda, ¿cambiarías de opinión?', gif: 'https://c.tenor.com/tJr565OBPJUAAAAC/tenor.gif' },
        { text: 'Te tienta si aprendo a hacer la mejor pasta para vos?', gif: 'https://c.tenor.com/mtD9CjQ5HRgAAAAC/tenor.gif' },
        { text: 'y si cada vez que nos enteramos de un chisme nos convertimos en LAM?', gif: 'https://c.tenor.com/g6ws3Zo5KTUAAAAd/tenor.gif' },
        { text: 'Ni por Taylor?', gif: 'https://media.tenor.com/hIEFeIgz5_sAAAAi/taylor-swift-pretty.gif' },
    ];

    const handleButtonNo = () => {
        const nextIndex = (index + 1) % options.length;
        setIndex(nextIndex);
        const currentOption = options[nextIndex];
        setTextP(currentOption.text);
        const gifToShow = currentOption.gif || 'https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif';
        setImage(gifToShow);
    };

    const handleButtonYes = () => {
        setTextP('Gracias por aceptar, te amo <3');
        setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif");
        confetti();
    };

    return { handleButtonNo, handleButtonYes, textP, image };
};
