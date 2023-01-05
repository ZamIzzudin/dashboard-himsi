import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Arrow } from '../assets/icons/arrow.svg'
import '../styles/components/Accordion.css'

export default function Accordion({ isActive }) {
    const [expanded, setExpanded] = useState(isActive)
    const [selected, setSelected] = useState('BPH')

    useEffect(() => {
        setExpanded(isActive)
        setSelected('BPH')
    }, [isActive])

    return (
        <div className="accordion">
            <div className={`accordion-header ${expanded && ('active')}`} onClick={() => setSelected('BPH')}>
                <Link to='/events/BPH' as="button" onClick={() => setExpanded(true)}>
                    Events
                    <Arrow />
                </Link>
            </div>
            <div className={`accordion-content ${expanded && ('expand')}`}>
                <ul>
                    <li onClick={() => setSelected('BPH')}>
                        <Link className={`${selected === 'BPH' && ('selected')}`} to='/events/BPH'>BPH</Link>
                    </li>
                    <li onClick={() => setSelected('PSDM')}>
                        <Link className={`${selected === 'PSDM' && ('selected')}`} to='/events/PSDM'>PSDM</Link>
                    </li>
                    <li onClick={() => setSelected('URT')}>
                        <Link className={`${selected === 'URT' && ('selected')}`} to='/events/URT'>URT</Link>
                    </li>
                    <li onClick={() => setSelected('DIKTI')}>
                        <Link className={`${selected === 'DIKTI' && ('selected')}`} to='/events/DIKTI'>DIKTI</Link>
                    </li>
                    <li onClick={() => setSelected('PERHUB')}>
                        <Link className={`${selected === 'PERHUB' && ('selected')}`} to='/events/PERHUB'>PERHUB</Link>
                    </li>
                    <li onClick={() => setSelected('ADKESMA')}>
                        <Link className={`${selected === 'ADKESMA' && ('selected')}`} to='/events/ADKESMA'>ADKESMA</Link>
                    </li>
                    <li onClick={() => setSelected('MEDKOM')}>
                        <Link className={`${selected === 'MEDKOM' && ('selected')}`} to='/events/MEDKOM'>MEDKOM</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}