/* eslint-disable react-hooks/exhaustive-deps */
import { Row, Col } from "react-bootstrap"
import { useState, useEffect } from 'react'

import { ReactComponent as ArrowOrgDown } from '../assets/icons/arrow_org.svg'
import { ReactComponent as ArrowOrgUp } from '../assets/icons/arrow_org_up.svg'

import '../styles/components/FormLayout.css'

export default function KategoriFilterForm({ setData, currentData }) {
    const [expand, setExpand] = useState(false)
    const [kategoriBerita, setKategoriBerita] = useState(currentData || [])

    function addKategori(newKategori) {
        let pre = [...kategoriBerita]
        if (kategoriBerita.length === 0) {
            pre.push(newKategori)
        } else {
            if (!kategoriBerita.includes(newKategori)) {
                pre.push(newKategori)
            }
        }

        setKategoriBerita(pre)
    }

    function deleteKategori(selectedKategori) {
        const pre = kategoriBerita.filter(item => item !== selectedKategori)
        setKategoriBerita(pre)
    }

    useEffect(() => {
        setData(kategoriBerita)
    }, [kategoriBerita])

    return (
        <div className="filter-category">
            <div className="filter-header">
                {kategoriBerita.length === 0
                    ? (<div className="filter-header-button" onClick={() => setExpand(!expand)}>
                        <span>Choose Kategori</span>
                        <ArrowOrgDown />
                    </div>)
                    : (<div className="filter-header-button">
                        <div className="filter-item-container">
                            {kategoriBerita.map(item =>
                                <span className="filter-item">
                                    {item}
                                    <button type="button" onClick={() => deleteKategori(item)}>X</button>
                                </span>)
                            }
                        </div>
                        <div onClick={() => setExpand(!expand)}>
                            <ArrowOrgUp />
                        </div>
                    </div>)}
            </div>
            <div className={`filter-body ${expand && ('showed')}`}>
                <Row>
                    <Col>
                        <ul>
                            <li>
                                <button onClick={() => addKategori('Adkesmagezine')} type="button">+</button>
                                Adkesmagezine
                            </li>
                            <li>
                                <button onClick={() => addKategori('Viralisme Kebaikan')} type="button">+</button>
                                Viralisme Kebaikan
                            </li>
                            <li>
                                <button onClick={() => addKategori('OMOS')} type="button">+</button>
                                OMOS
                            </li>
                            <li>
                                <button onClick={() => addKategori('BeriSI')} type="button">+</button>
                                BeriSI
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <button onClick={() => addKategori('HIMSI TechNEWS')} type="button">+</button>
                                HIMSI TechNEWS
                            </li>
                            <li>
                                <button onClick={() => addKategori('Sharing Session')} type="button">+</button>
                                Sharing Session
                            </li>
                            <li>
                                <button onClick={() => addKategori('HIMSI FunFact')} type="button">+</button>
                                HIMSI FunFact
                            </li>
                            <li>
                                <button onClick={() => addKategori('Company Visit')} type="button">+</button>
                                Company Visit
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <button onClick={() => addKategori('Public Hearing')} type="button">+</button>
                                Public Hearing
                            </li>
                            <li>
                                <button onClick={() => addKategori('SK Resmi')} type="button">+</button>
                                SK Resmi
                            </li>
                            <li>
                                <button onClick={() => addKategori('Care For MABA')} type="button">+</button>
                                Care For MABA
                            </li>
                            <li>
                                <button onClick={() => addKategori('Informasi Akademik')} type="button">+</button>
                                Informasi Akademik
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <button onClick={() => addKategori('ApresiaSI')} type="button">+</button>
                                ApresiaSI
                            </li>
                            <li>
                                <button onClick={() => addKategori('Wadah Aspirasi')} type="button">+</button>
                                Wadah Aspirasi
                            </li>
                            <li>
                                <button onClick={() => addKategori('Prestasi Mahasiswa')} type="button">+</button>
                                Prestasi Mahasiswa
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}