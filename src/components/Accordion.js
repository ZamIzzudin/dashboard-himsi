import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { ReactComponent as Arrow } from '../assets/icons/arrow.svg'
import '../styles/components/Accordion.css'

export default function Accordion({ isActive }) {
    const { bidang = [] } = useSelector(states => states)

    const [expanded, setExpanded] = useState(isActive)
    const [selected, setSelected] = useState(bidang[0]?.nama_bidang)

    useEffect(() => {
        setExpanded(isActive)
        setSelected(bidang[0]?.nama_bidang)
    }, [isActive, bidang])

    return (
        <div className="accordion">
            <div className={`accordion-header ${expanded && ('active')}`} onClick={() => setSelected(bidang[0]?.nama_bidang)}>
                <Link to={`/events/${bidang[0]?.nama_bidang}`} as="button" onClick={() => setExpanded(true)}>
                    Events
                    <Arrow />
                </Link>
            </div>
            <div className={`accordion-content ${expanded && ('expand')}`}>
                <ul>
                    {bidang.map(item => (
                        <li onClick={() => setSelected(item.nama_bidang)}>
                            <Link className={`${selected === item.nama_bidang && ('selected')}`} to={`/events/${item.nama_bidang}`}>{item.nama_bidang}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}