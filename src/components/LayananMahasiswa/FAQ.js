import { useState } from 'react'

import FormAddFAQ from './FormAddFAQ'

export default function FAQ() {
  const [showAddModal, setShowAddModal] = useState(false)

  const plainData = [
    {
      id: 1,
      question: 'ban apa yang menguasai negara?',
      answer: 'banteng mer....'
    },
    {
      id: 2,
      question: 'nilai satuan apa yang lebih berkuasa daripada presiden?',
      answer: 'megawat....'
    }
  ]

  const [listFAQ, setListFAQ] = useState(plainData)

  function handleAddFAQ(data) {
    setListFAQ([...listFAQ, data])
    setShowAddModal(false)
  }

  function handleDeleteFAQ(id) {
    const newData = listFAQ.filter(FAQ => FAQ.id !== id)
    setListFAQ(newData)
  }
  return (
    <section className="content-section">
      <div className="section-header-container">
        <h4 className="section-header">FAQ</h4>
        <button onClick={() => setShowAddModal(true)} className="section-add-btn">+</button>
      </div>
      <div className="section-body">
        <table>
          <tr>
            <th>Judul</th>
            <th>Link</th>
            <th className="text-center">Action</th>
          </tr>
          {listFAQ.map(FAQ => (
            <tr>
              <td>{FAQ.question}</td>
              <td>{FAQ.answer}</td>
              <td className="table-cta">
                <div className="table-cta-container">
                  <button onClick={() => handleDeleteFAQ(FAQ.id)} className="section-delete-btn">Delete</button>
                </div>
              </td>
            </tr>
          ))}

        </table>
      </div>
      <FormAddFAQ showAddModal={showAddModal} setShowAddModal={setShowAddModal} getData={handleAddFAQ} />
    </section >
  );
}
