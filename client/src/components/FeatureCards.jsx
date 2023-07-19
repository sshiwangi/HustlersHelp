import brushStroke from '../assets/brushStroke.svg'
import { RiPresentationFill } from 'react-icons/ri'
import { MdGroups, MdLaptopWindows, MdEvent } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import PropTypes from 'prop-types'


function Card(props) {
    return (
        <div key={props.id} className="p-6 shadow w-72 md:w-96 card bg-base-200">
            <div className="items-center justify-center gap-12 card-body">
                <div className='text-6xl text-primary'>{props.icon}</div>
                <div className="font-bold">{props.text}</div>
            </div>
        </div>
    )
}
Card.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string,
    id:PropTypes.number
}



function FeatureCards() {
    return (
        <div className="flex flex-col items-center justify-center my-12">
            <div className="relative text-4xl font-bold text-center">What’s in it for you? <img src={brushStroke} className='absolute w-full h-full -z-10 -bottom-4' alt="" /></div>
            <div className='flex flex-wrap items-center justify-center gap-12 my-12'>
                {[
                    {
                        id:1,
                        icon: <RiPresentationFill />,
                        text: 'Find Mentors/Advisors'
                    },
                    {
                        id:2,
                        icon: <MdGroups />,
                        text: 'Find Co-founders/team members'
                    },
                    {
                        id:3,
                        icon: <MdLaptopWindows />,
                        text: 'Great Learning  Resources'
                    },
                    {
                        id:4,
                        icon: <MdEvent />,
                        text: 'Access to exclusive events'
                    },
                    {
                        id:5,
                        icon: <GiReceiveMoney />,
                        text: 'Sell/Buy Equipments'
                    },
                ].map(Card)
                }
            </div>
        </div>
    )
}

export default FeatureCards