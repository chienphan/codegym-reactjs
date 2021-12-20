import React, { useState } from 'react';
import { Formik } from 'formik';
import "./App.css";

export default function App() {
  const SEX_LIST = [
    {label: 'Nam', value: 'male'}, 
    {label: 'Nữ', value: 'female'}
  ]
  
  const [form, setForm] = useState({})

  function handleChange(event) {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value
    setForm({
      ...form,
      [event.target.name]: value
    })
  }

  function handleValidate() {
    const errors = {};
    if (!form.name) {
      errors.name = 'Required';
    }
    if (!form.id) {
      errors.id = 'Required';
    }
    if (!form.yearOfBirth) {
      errors.yearOfBirth = 'Required';
    } else if (parseInt(form.yearOfBirth) > (new Date()).getFullYear()) {
      errors.yearOfBirth = 'Invalid year';
    }
    if (!form.nationality) {
      errors.nationality = 'Required';
    }
    if (!form.province) {
      errors.province = 'Required';
    }
    if (!form.district) {
      errors.district = 'Required';
    }
    if (!form.wards) {
      errors.wards = 'Required';
    }
    if (!form.apartmentNumber) {
      errors.apartmentNumber = 'Required';
    }
    if (!form.phone) {
      errors.phone = 'Required';
    }
    if (!form.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  function handleSubmit() {
    alert('Success!!!')
  }
return (
    <div className="container">
      <h1>Tờ khai y tế</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({errors, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <div className={`custom-input ${errors.name ? 'custom-input-error' : ''}`} >
              <label>Họ tên</label>
              <input name="name" value={form.name || ''} onChange={handleChange}/>
              <p className="error">{errors.name}</p>
            </div>
            <div className={`custom-input ${errors.id ? 'custom-input-error' : ''}`} >
              <label>Số hộ chiếu /CMND</label>
              <input name="id" value={form.id || ''} onChange={handleChange}/>
              <p className="error">{errors.id}</p>
            </div>
            <div className={`custom-input ${errors.yearOfBirth ? 'custom-input-error' : ''}`}>
              <label>Năm sinh</label>
              <input type="number" min="1900" name="yearOfBirth" value={form.yearOfBirth || ''} onChange={handleChange} />
              <p className="error">{errors.yearOfBirth}</p>
            </div>
            <div className="custom-input flex">
              <label>Giới tính</label>
              { SEX_LIST.map(item => (
                <div key={item.value} className="flex">
                  <input className="width-auto" type="radio" name="sex" id={item.value} value={item.value} checked={form.sex ? (form.sex === item.value) : false} onChange={handleChange}/>
                  <label> {item.label} </label>
                </div>
              )) }
            </div>
            <div className={`custom-input ${errors.nationality ? 'custom-input-error' : ''}`}>
              <label>Quốc tịch</label>
              <input name="nationality" value={form.nationality || ''} onChange={handleChange}/>
              <p className="error">{errors.nationality}</p>
            </div>
            <div className='custom-input'>
              <label>Công ty làm việc</label>
              <input name="companyWorking" value={form.companyWorking || ''} onChange={handleChange}/>
            </div>
            <div className='custom-input'>
              <label>Bộ phận làm việc</label>
              <input name="partsWorking" value={form.partsWorking || ''} onChange={handleChange}/>
            </div>
            <div className='custom-input flex'>
              <label>Có thẻ bảo hiểm y tế</label>
              <input className="width-auto" type="checkbox" name="isHaveHealthInsuranceCard" checked={form.isHaveHealthInsuranceCard || false} onChange={handleChange}/>
            </div>
            <h3>Địa chỉ liên lạc tại Việt Nam</h3>
            <div className={`custom-input ${errors.province ? 'custom-input-error' : ''}`}>
              <label>Tỉnh thành</label>
              <input name="province" value={form.province || ''} onChange={handleChange}/>
              <p className="error">{errors.province}</p>
            </div>
            <div className={`custom-input ${errors.district ? 'custom-input-error' : ''}`}>
              <label>Quận /huyện</label>
              <input name="district" value={form.district || ''} onChange={handleChange}/>
              <p className="error">{errors.district}</p>
            </div>
            <div className={`custom-input ${errors.wards ? 'custom-input-error' : ''}`}>
              <label>Phường /xã</label>
              <input name="wards" value={form.wards || ''} onChange={handleChange}/>
              <p className="error">{errors.wards}</p>
            </div>
<div className={`custom-input ${errors.apartmentNumber ? 'custom-input-error' : ''}`}>
              <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
              <input name="apartmentNumber" value={form.apartmentNumber || ''} onChange={handleChange}/>
              <p className="error">{errors.message}</p>
            </div>
            <div className={`custom-input ${errors.phone ? 'custom-input-error' : ''}`}>
              <label>Điện thoại</label>
              <input type="number" name="phone" value={form.phone || ''} onChange={handleChange}/>
              <p className="error">{errors.phone}</p>
            </div>
            <div className={`custom-input ${errors.email ? 'custom-input-error' : ''}`}>
              <label>Email</label>
              <input type="email" name="email" value={form.email || ''} onChange={handleChange}/>
              <p className="error">{errors.email}</p>
            </div>
            <div className={`custom-input ${errors.placesPassed ? 'custom-input-error' : ''}`}>
              <label>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</label>
              <textarea name="placesPassed" value={form.placesPassed || ''} onChange={handleChange}/>
              <p className="error">{errors.placesPassed}</p>
            </div>
            <h3>Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào sau đây không?</h3>
            <div className='custom-input flex'>
              <input className="width-auto" type="checkbox" name="isFever" checked={form.isFever || false} onChange={handleChange}/>
              <label>Sốt</label>
            </div>
            <div className='custom-input flex'>
              <input className="width-auto" type="checkbox" name="isCough" checked={form.isCough || false} onChange={handleChange}/>
              <label>Ho</label>
            </div>
            <div className='custom-input flex'>
              <input className="width-auto" type="checkbox" name="isStuffy" checked={form.isStuffy || false} onChange={handleChange}/>
              <label>Khó thở</label>
            </div>
            <div className='custom-input flex'>
              <input className="width-auto" type="checkbox" name="isPneumonia" checked={form.isPneumonia || false} onChange={handleChange}/>
              <label>Viêm phổi</label>
            </div>
            <div className='custom-input flex'>
              <input className="width-auto" type="checkbox" name="isSoreThroat" checked={form.isSoreThroat || false} onChange={handleChange}/>
              <label>Đau họng</label>
            </div>
            <div className='custom-input flex'>
              <input className="width-auto" type="checkbox" name="isTired" checked={form.isTired || false} onChange={handleChange}/>
              <label>Mệt mỏi</label>
            </div>
            <h3>Trong vòng 14 ngày qua, Anh /Chị có tiếp súc với?</h3>
            <div className='custom-input flex'>
              <input className="width-auto" type="checkbox" name="isContactWithSomeoneInfectedCovid19" checked={form.isContactWithSomeoneInfectedCovid19 || false} onChange={handleChange}/>
              <label>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
            </div>
            <div className='custom-input flex'>
              <input className="width-auto" type="checkbox" name="isContactWithSomeoneFromCountriesInfectedCovid19" checked={form.isContactWithSomeoneFromCountriesInfectedCovid19 || false} onChange={handleChange}/>
              <label>Người từ nước có bệnh COVID-19</label>
            </div>
            <div className='custom-input flex'>
              <input className="width-auto" type="checkbox" name="isContactWithSomeoneFever" checked={form.isContactWithSomeoneFever || false} onChange={handleChange}/>
              <label>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label>
            </div>
            <button type="submit"> Submit </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
