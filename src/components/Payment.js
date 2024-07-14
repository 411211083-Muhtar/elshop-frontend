import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css'; // Pastikan untuk mengimpor file CSS

const Payment = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handlePay = () => {
    // Tambahkan logika untuk melanjutkan proses pembayaran
  };

  return (
    <div className="payment-container">
      <h1>Pembayaran</h1>
      <form className="payment-form">
        {/* Tambahkan form pembayaran di sini */}
      </form>
      <div className="payment-actions">
        <button className="btn btn-secondary" onClick={handleBack}>Kembali</button>
        <button className="btn btn-primary" onClick={handlePay}>Bayar Sekarang</button>
      </div>
    </div>
  );
};

export default Payment;
