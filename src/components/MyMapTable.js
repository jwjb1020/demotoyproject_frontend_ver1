import React from 'react'

export default function MyMapTable() {


  return (
    <table className="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th className="border border-slate-300 ...">축제이름</th>
      <th className="border border-slate-300 ...">주소</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ...">Indiana</td>
      <td className="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ...">Ohio</td>
      <td className="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ...">Michigan</td>
      <td className="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
  )
}
