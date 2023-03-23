import axios from "axios"


export default function Contact({ raulidata }) {

    //Gravity API kulcsok:
  //Fogyasztási cikkek: ck_09053fa369ba2de5fb13221f3754ec7564e4b62c
  //Ügyfélszolálat: cs_98846f9265e0a714d845f0f04752dd336758da80
 
const axios = require('axios');

const FORM_ID = 1; // replace with your Gravity Forms form ID

const USERNAME = 'ck_09053fa369ba2de5fb13221f3754ec7564e4b62c';
const PASSWORD = 'cs_98846f9265e0a714d845f0f04752dd336758da80';
const ENCODED_CREDENTIALS = btoa(`${USERNAME}:${PASSWORD}`); // encode credentials in base64

const submitForm = async (formData) => {
  try {
    const response = await axios.post(
      `https://server.profigreentech.hu/wp-json/gf/v2/forms/${FORM_ID}/submissions`,
      formData,
      {
        headers: {
          Authorization: `Basic ${ENCODED_CREDENTIALS}`,
        },
      }
    );
    console.log('Form submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = {
    input_8: document.getElementById('lastname').value,
    input_9: document.getElementById('firstname').value,
    input_4: document.getElementById('email').value,
    input_5: document.getElementById('message').value,
    input_11_1: document.getElementById('consent').checked ? '1' : '',
  };

  submitForm(formData);
};

    return(
        <>
        <section id='contact' className='lg:h-screen'>
          <div className='w-11/12 lg:w-8/12 flex-col m-auto'>
            <h1 className=' px-4 py-2 bg-[#e94e1b] w-fit text-5xl lg:text-8xl text-white'>{raulidata.irjNekunkFocim}</h1>
              <form onSubmit={handleSubmit} className='grid grid-cols-1 grid-rows-10 gap-4 my-6'>
                <div className='row-span-1 flex flex-col'>
                  <label className='text-2xl'>Vezetéknév <span className=' text-red-700'>*</span></label>
                  <input id="lastname" className='border border-[#e94e1b] p-2' type="text" />
                </div>
                <div className='row-span-1 flex flex-col '>
                  <label className='text-2xl'>Keresztnév <span className=' text-red-700'>*</span></label>
                  <input id="firstname" className=' border border-[#e94e1b] p-2' type="text" />
                </div>
                <div className='row-span-1 flex flex-col '>
                  <label className='text-2xl'>Emaill <span className=' text-red-700'>*</span></label>
                  <input id="email" className=' border border-[#e94e1b] p-2' type="email" />
                </div>
                <div className='row-span-6 flex flex-col '>
                  <label className='text-2xl'>Rövid Üzenet <span className=' text-red-700'>*</span></label>
                  <textarea id="message" className=' border border-[#e94e1b] p-2' type="text" rows="10" />
                </div>
                <div className='row-span-6 flex flex-col '>
                  <label className='text-2xl'>Adatkezelési hozzájárulás <span className=' text-red-700'>*</span></label>
                  <div className='flex gap-4'><input id="consent" className=' border border-[#e94e1b] p-2' type="checkbox"/><label id='consentlabel' for="consent">Elfogadom az <a href="/adatkezelesi-tajekoztato">adatkezelési szabályzatot</a></label></div>
                </div>
                <div className='row-span-1 flex flex-col w-fit'>
                  <input type="submit" className=' bg-[#e94e1b] border border-[#e94e1b] px-8 py-2 text-2xl text-white cursor-pointer'/>  
                </div>
              </form>
          </div>
        </section>
        </>
    )
}