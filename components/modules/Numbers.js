import React from 'react'
import number from '../../styles/number/numbers.css'
import CountUp from '@/anim/CountUp'

function Numbers() {
    return (
        <div className='container-number'>

            <div className='numbers-conatiner'>
                <CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text number"
                />
                <h2 className='number-text'>Projects</h2>
            </div>

            <div className='numbers-conatiner'>
                <CountUp
                    from={0}
                    to={2}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text number"
                />
                <h2 className='number-text'>Experience</h2>
            </div>

            <div className='numbers-conatiner'>
                <CountUp
                    from={0}
                    to={17}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text number"
                />
                <h2 className='number-text'>YO</h2>
            </div>
        </div>
    )
}

export default Numbers