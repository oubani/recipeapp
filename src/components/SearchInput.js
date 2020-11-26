import React, { useState } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ handlesearch }) => {
  const [component, setComponent] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    if (component !== '') {
      handlesearch(component);
    } else {
      alert('fille the blance');
    }
    setComponent('');
  };
  const handleChange = (e) => {
    setComponent(e.target.value);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleForm}>
        <input
          className={styles.input}
          type='text'
          name='component'
          id='component'
          value={component}
          onChange={handleChange}
          placeholder='Enter recipe name'
        />
        <button className={styles.btn}> Search </button>
      </form>
    </div>
  );
};

export default SearchInput;
