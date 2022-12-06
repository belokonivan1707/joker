import React from 'react';
import './income.css'

export function Income (){
    const [state, setState] = React.useState('I hate fuck animal.')
    const [count, setCount] =  React.useState(0)


    function startCount() {
        setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)
    }

    function handleClick() {
        if(state === 'I hate fuck animal.') {
            setState('I love fuck animals')
        }

        if(state === 'I love fuck animals') {
            setState('I hate fuck animal.')
        }
    }

    return (
        <div className='wrapper'>
            <div className='container'>
                <h1 className='title'>
                    {state}
                </h1>
                <h2 style={{background: count !== 0 ? 'antiquewhite' : 'none'}} className='subtitle'>
                    The count of animals that I fucked = {count}
                </h2>
                <h3 className='subtitle'>
                    Everything is shit! But not today.
                </h3>

                <div className='box'>
                    <p className='description'>
                        For Kizlux from Kozloder
                    </p>
                    <button className='button' onClick={handleClick}>
                        Click on this button to change your opinion!
                    </button>
                    <button className='button' onClick={startCount}>
                         Click on this button, for staring FUCK animals!
                    </button>
                </div>

                <div>
                    <b>
                        Developed by 
                        <span className='campaign'>
                        ©Kozlodernya corporation.
                        </span>
                    </b>
                </div>
            </div>
        </div>
    )
}















// create new category

// add expense to existing category 

// default categories


// fetch('http://localhost:8000/test', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify({hello: 'die'})
  
// })
// .then((response) => response.json())
// .then((result) => console.log('result', result))
// .catch((error) => console.log('error', error));