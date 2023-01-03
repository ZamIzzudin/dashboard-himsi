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
                <Link to='/program-kerja/BPH' as="button" onClick={() => setExpanded(true)}>
                    Program Kerja
                    <Arrow />
                </Link>
            </div>
            <div className={`accordion-body ${expanded && ('expand')}`}>
                <ul>
                    <li onClick={() => setSelected('BPH')}>
                        <Link className={`${selected === 'BPH' && ('selected')}`} to='/program-kerja/BPH'>BPH</Link>
                    </li>
                    <li onClick={() => setSelected('PSDM')}>
                        <Link className={`${selected === 'PSDM' && ('selected')}`} to='/program-kerja/PSDM'>PSDM</Link>
                    </li>
                    <li onClick={() => setSelected('URT')}>
                        <Link className={`${selected === 'URT' && ('selected')}`} to='/program-kerja/URT'>URT</Link>
                    </li>
                    <li onClick={() => setSelected('DIKTI')}>
                        <Link className={`${selected === 'DIKTI' && ('selected')}`} to='/program-kerja/DIKTI'>DIKTI</Link>
                    </li>
                    <li onClick={() => setSelected('PERHUB')}>
                        <Link className={`${selected === 'PERHUB' && ('selected')}`} to='/program-kerja/PERHUB'>PERHUB</Link>
                    </li>
                    <li onClick={() => setSelected('ADKESMA')}>
                        <Link className={`${selected === 'ADKESMA' && ('selected')}`} to='/program-kerja/ADKESMA'>ADKESMA</Link>
                    </li>
                    <li onClick={() => setSelected('MEDKOM')}>
                        <Link className={`${selected === 'MEDKOM' && ('selected')}`} to='/program-kerja/MEDKOM'>MEDKOM</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}