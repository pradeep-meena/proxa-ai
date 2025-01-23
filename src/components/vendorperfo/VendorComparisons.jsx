import React, { useState } from 'react';

function VendorComparisons() {
  const [suppliers, setSuppliers] = useState([
    { id: 1, McConsult: 2/50, BCD: 47/50, Cain: 45/50 },
    { id: 2, McConsult: 2/5, BCD: 5/5, Cain: 3/5 },
    
  ]);

  return (
    <div>
        <div className="container">
            <h3 className='mt-5 mb-5'> Vendor Comparisons </h3>
        <div className="table-responsive overflow-auto">
      <table  className="table table-bordered text-center table-light">
        <thead className="table-light">
          <tr>
            <th>Vendor Id</th>
            <th>McConsult...
            Total Score 65/140</th>
            <th>BCD
            Total Score 121/140</th>
            <th>Cain
            Total Score 94/140</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
               <td>{supplier.id}</td>
              <td>{supplier.McConsult}</td>
              <td>{supplier.BCD}</td>
              <td>{supplier.Cain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}

export default VendorComparisons;