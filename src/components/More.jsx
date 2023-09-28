import React from 'react'
import Slider from './Slider';
import Slide_card from './Slide_card';
import Card2data from './Card2data';
import Card2 from './Card2';
function More() {
    return (
        <>

            <div className="neww">
                {Card2data.map((va) => {
                    return (
                        <Card2
                            index={va.index}
                            heading={va.heading}
                            data={va.data}
                            image={va.image}

                        />);
                })}
            </div>
            <div className='neww2'>
                <Slider />
            </div>

        </>
    )
}

export default More