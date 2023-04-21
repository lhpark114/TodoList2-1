import react, {useState} from 'react';

export default function Checkbox({onCheck}) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    onCheck({status:'done'});
  };
  return (
    <>
      <label htmlFor='checkbox'>
        </label>
       <input 
         id='checkbox'
         type='checkbox'
         value={checked}
         onChange={handleChange} 
       />
      
    </>
  );
}


