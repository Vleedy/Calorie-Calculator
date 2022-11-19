import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import ModalMore from './components/ModalMore'
import './App.sass';

function App() {
  const [age, setAge] = useState();
  const [height, setHeight]= useState();
  const [weight, setWeight]= useState();
  const [sex, setSex]= useState();
  const [activity, setActivity]= useState();
  const [result, setResult] = useState('');
  const [bmr, setBmr] = useState('');
  const [modalBmr, setModalBmr] = useState(false);
  const [modalMore, setModalMore] = useState(false);



  const getBmr = () => {
    age && height && weight && sex && activity ? 
    setBmr(sex==="Мужчина"?(88,36 + (13.4* weight) + (4.8*height) - (5.7*age)) 
    :
     (447,6 + (9.2*weight) + (3.1*height) - (4.3*age)))
    :
    setBmr('0')
   }
  
  
  const getResult = () => {
   age && height && weight && sex && activity ? 
   setResult(sex==="Мужчина"?((88,36 + (13.4* weight) + (4.8*height) - (5.7*age))*activity) 
   :
    ((447,6 + (9.2*weight) + (3.1*height) - (4.3*age))*activity))
   :
   setResult('0')
  }
  
  
  useEffect (()=> {
    getResult()
    getBmr()
  }, [age, height, weight, activity, sex])
  

  return (
    <>
      <div className="container">
        <h1>Рассчитайте вашу потребность в калориях</h1>
        <div className="input_wrapper">
          <TextField type='number' value={age} onChange={(e)=>setAge(e.target.value)} id="outlined-basic" label="Введите ваш возраст" color="secondary" variant="outlined" />
          <TextField className='TextField' type='number' value={height} onChange={(e)=>setHeight(e.target.value)} id="outlined-basic" label="Введите ваш рост" color="secondary" variant="outlined" />
          <TextField className='TextField' type='number' value={weight} onChange={(e)=>setWeight(e.target.value)} id="outlined-basic" label="Введите ваш вес" color="secondary" variant="outlined" />
        </div>
        <div className="choose_parametrs">
            <FormControl className='sex'>
              <InputLabel id="demo-simple-select-label">Выберите ваш пол</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Выберите ваш пол"
                >
              <MenuItem value={'Мужчина'} onClick={()=>setSex('Мужчина')}>Мужчина</MenuItem>
              <MenuItem value={'Женщина'} onClick={()=>setSex('Женщина')}>Женщина</MenuItem>
            </Select>
          </FormControl>  
          <FormControl className='activity'>
              <InputLabel id="demo-simple-select-label">Выберите ваш уровень активности</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Выберите ваш уровень активности"
                >
              <MenuItem value={'Сидячий образ жизни без нагрузок'} onClick={()=>setActivity(1.2)}>Сидячий образ жизни без нагрузок</MenuItem>
              <MenuItem value={'Тренировки  1-3 раза в неделю'} onClick={()=>setActivity(1.375)}>Тренировки  1-3 раза в неделю</MenuItem>
              <MenuItem value={'Занятия 3-5 дней в неделю'} onClick={()=>setActivity(1.55)}>Занятия 3-5 дней в неделю</MenuItem>
              <MenuItem value={'Интенсивные тренировки 6-7 раз в неделю'} onClick={()=>setActivity(1.725)}>Интенсивные тренировки 6-7 раз в неделю</MenuItem>
              <MenuItem value={'Спортсмены, выполняющие упражнения чаще, чем раз в день'} onClick={()=>setActivity(1.9)}>Спортсмены, выполняющие упражнения чаще, чем раз в день</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="results">
          <h2>Ваша суточная энергетическая потребность: <span>{Number(result).toFixed()}</span> ккал .</h2>
          <h2>При этом ваш <Button className='modal_btn' onClick={()=>setModalBmr(true)}   variant="text">BMR</Button> составил: <span>{Number(bmr).toFixed()}</span> ккал .</h2>
          <h2>Узнать больше можно   <Button className='modal_btn' onClick={()=>setModalMore(true)} variant="text">здесь</Button>.</h2>
        </div>
      </div>
    {modalBmr&&<Modal onCrossModal={()=>setModalBmr(false)}/>}
    {modalMore&&<ModalMore onCrossModal={()=>setModalMore(false)}/>}
    </>
  );
}

export default App;
