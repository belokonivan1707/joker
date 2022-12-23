import React from 'react';
import './banner.css';

interface IProps {
    words: string[];
    repeatTime?: number;
    wordTime?: number;
    time?: number
}

const Banner: React.FC<IProps> = ({ words, repeatTime = 100000000, wordTime = 700, time }) => {
    const [test, setTest] = React.useState<any>('')
    const [text, setText] = React.useState('');

    const typeWriter = React.useCallback(
        (text: string, i: number, fnCallback: () => void) => {
            if (i < text.length) {
                console.log(text.substring(0, i + 1))
                setText(text.substring(0, i + 1));
                
                setTimeout(function () {
                    typeWriter(text, i + 1, fnCallback);
                }, 100);
            } else if (typeof fnCallback === 'function') {
                setTimeout(fnCallback, wordTime);                
            }
        },
        [wordTime]
    );

    const startTextAnimation = React.useCallback(
        (i: number, array: string[]) => {
            if (array[i] === undefined) {
                // setTimeout(() => {
                //     startTextAnimation(0, array);
                // }, repeatTime);
                return;
            }

            if (i < array[i].length) {
                typeWriter(array[i], 0, () => {
                    startTextAnimation(i + 1, array);
                });
            }
        },
        [typeWriter, repeatTime]
    );

    React.useEffect(() => {
        setTimeout(() => {
            startTextAnimation(0, words);
        }, time)
    }, [startTextAnimation, words]);

    return (
        <code className='banner-text'>
            {test}{text}<span className='banner-cursor'/>
        </code>
    );
}

export default Banner;
