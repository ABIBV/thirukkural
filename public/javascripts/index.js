const db = firebase.firestore();

const loadOptions = () => {
  const adhigaarams = [
    "கடவுள்வாழ்த்து",
    "வான்சிறப்பு",
    "நீத்தார்பெருமை",
    "அறன்வலியுறுத்தல்",
    "இல்வாழ்க்கை",
    "வாழ்க்கைத்துணைநலம்",
    "மக்கட்பேறு",
    "அன்புடைமை",
    "விருந்தோம்பல்",
    "இனியவைகூறல்",
    "செய்ந்நன்றியறிதல்",
    "நடுவுநிலைமை",
    "அடக்கம்உடைமை",
    "ஒழுக்கம்உடைமை",
    "பிறனில்விழையாமை",
    "பொறையுடைமை",
    "அழுக்காறாமை",
    "வெஃகாமை",
    "புறங்கூறாமை",
    "பயனிலசொல்லாமை",
    "தீவினையச்சம்",
    "ஒப்புரவறிதல்",
    "ஈ.கை",
    "புகழ்",
    "அருளுடைமை",
    "புலால்மறுத்தல்",
    "தவம்",
    "கூடாஒழுக்கம்",
    "கள்ளாமை",
    "வாய்மை",
    "வெகுளாமை",
    "இன்னாசெய்யாமை",
    "கொல்லாமை",
    "நிலையாமை",
    "துறவு",
    "மெய்யுணர்தல்",
    "அவாஅறுத்தல்",
    "ஊழ்",
    "இறைமாட்சி",
    "கல்வி",
    "கல்லாமை",
    "கேள்வி",
    "அறிவுடைமை",
    "குற்றங்கடிதல்",
    "பெரியாரைத்துணைக்கோடல்",
    "சிற்றினம்சேராமை",
    "தெரிந்துசெயல்வகை",
    "வலியறிதல்",
    "காலமறிதல்",
    "இடனறிதல்",
    "தெரிந்துதெளிதல்",
    "தெரிந்துவினையாடல்",
    "சுற்றந்தழால்",
    "பொச்சாவாமை",
    "செங்கோன்மை",
    "கொடுங்கோன்மை",
    "வெருவந்தசெய்யாமை",
    "கண்ணோட்டம்",
    "ஒற்றாடல்",
    "ஊக்கம்உடைமை",
    "மடிஇன்மை",
    "ஆள்வினைஉடைமை",
    "இடுக்கண்அழியாமை",
    "அமைச்சு",
    "சொல்வன்மை",
    "வினைத்தூய்மை",
    "வினைத்திட்பம்",
    "வினைசெயல்வகை",
    "தூது",
    "மன்னரைச்சேர்ந்துஒழுகல்",
    "குறிப்பறிதல்",
    "அவைஅறிதல்",
    "அவைஅஞ்சாமை",
    "நாடு",
    "அரண்",
    "பொருள்செயல்வகை",
    "படைமாட்சி",
    "படைச்செருக்கு",
    "நட்பு",
    "நட்பாராய்தல்",
    "பழைமை",
    "தீநட்பு",
    "கூடாநட்பு",
    "பேதைமை",
    "புல்லறிவாண்மை",
    "இகல்",
    "பகைமாட்சி",
    "பகைத்திறம்தெரிதல்",
    "உட்பகை",
    "பெரியாரைப்பிழையாமை",
    "பெண்வழிச்சேறல்",
    "வரைவின்மகளிர்",
    "கள்ளுண்ணாமை",
    "சூது",
    "மருந்து",
    "குடிமை",
    "மானம்",
    "பெருமை",
    "சான்றாண்மை",
    "பண்புடைமை",
    "நன்றியில்செல்வம்",
    "நாணுடைமை",
    "குடிசெயல்வகை",
    "உழவு",
    "நல்குரவு",
    "இரவு",
    "இரவச்சம்",
    "கயமை",
    "தகைஅணங்குறுத்தல்",
    "குறிப்பறிதல்",
    "புணர்ச்சிமகிழ்தல்",
    "நலம்புனைந்துஉரைத்தல்",
    "காதற்சிறப்புரைத்தல்",
    "நாணுத்துறவுரைத்தல்",
    "அலர்அறிவுறுத்தல்",
    "பிரிவுஆற்றாமை",
    "படர்மெலிந்திரங்கல்",
    "கண்விதுப்பழிதல்",
    "பசப்புறுபருவரல்",
    "தனிப்படர்மிகுதி",
    "நினைந்தவர்புலம்பல்",
    "கனவுநிலைஉரைத்தல்",
    "பொழுதுகண்டுஇரங்கல்",
    "உறுப்புநலன்அழிதல்",
    "நெஞ்சொடுகிளத்தல்",
    "நிறையழிதல்",
    "அவர்வயின்விதும்பல்",
    "குறிப்பறிவுறுத்தல்",
    "புணர்ச்சிவிதும்பல்",
    "நெஞ்சொடுபுலத்தல்",
    "புலவி",
    "புலவிநுணுக்கம்",
    "ஊடலுவகை"
  ];
  const paals = [
    "அறத்துப்பால்",
    "பொருட்பால்",
    "காமத்துப்பால்"
  ];
  const iyals = [
    "பாயிரவியல்",
    "இல்லறவியல்",
    "துறவறவியல்",
    "ஊழியல்",
    "அரசியல்",
    "அமைச்சியல்",
    "அரணியல்",
    "கூழியல்",
    "படையியல்",
    "நட்பியல்",
    "குடியியல்",
    "களவியல்",
    "கற்பியல்"
  ];
  let adhigaramString = '', paalString = '', iyalString = '', kuralNoString = '';
  let currentAdhigaaram = localStorage.getItem('adhigaraam');
  let currentPaal = localStorage.getItem('paal');
  let currentIyal = localStorage.getItem('iyal');
  let currentKuralNo = localStorage.getItem('kuralNo');
  if (!currentAdhigaaram) {
    localStorage.setItem('adhigaraam', adhigaarams[0]);
    currentAdhigaaram = localStorage.getItem('adhigaraam');
  }
  if (!currentPaal) {
    localStorage.setItem('paal', paals[0]);
    currentPaal = localStorage.getItem('paal');
  }
  if (!currentIyal) {
    localStorage.setItem('iyal', iyals[0]);
    currentIyal = localStorage.getItem('iyal');
  }
  if (!currentKuralNo) {
    localStorage.setItem('kuralNo', "1");
    currentKuralNo = localStorage.getItem('kuralNo');
  }
  adhigaarams.forEach(adhigaaram => adhigaramString += `<option value=${adhigaaram} ${currentAdhigaaram === adhigaaram ? 'selected' : ''}>${adhigaaram}</option>`);
  paals.forEach(paal => paalString += `<option value=${paal} ${currentPaal === paal ? 'selected' : ''}>${paal}</option>`);
  iyals.forEach(iyal => iyalString += `<option value=${iyal} ${currentIyal === iyal ? 'selected' : ''}>${iyal}</option>`);
  [1,2,3,4,5,6,7,8,9,10].forEach(no => kuralNoString +=  `<option value=${no} ${currentKuralNo === no.toString() ? 'selected' : ''}>${no}</option>`)
  $('select#adhigaram').append(adhigaramString);
  $('select#paal').append(paalString);
  $('select#iyal').append(iyalString);
  $('select#kuralNo').append(kuralNoString);
};

const validateData = (selector, type = 'string') => {
  $(selector).removeClass('is-invalid');
  let value = $(`${selector}`).val().trim();
  if (type === 'array') {
    value = value.split(',').filter(val => (val.trim() !== '' && val.trim() !== undefined && val.trim() !== null));
    if (value.length) {
      return value;
    }
  } else {
    if (value !== '' && value !== undefined && value !== null) {
      return value;
    }
  }
  $(selector).addClass('is-invalid');
  return false;
};

const getData = () => {
  const adhigaaram = validateData('#adhigaram');
  const paal = validateData('#paal');
  const iyal = validateData('#iyal');
  const kuralNo = parseInt(validateData('#kuralNo'));
  const kural = validateData('#kural');
  const karunanidhiUrai = validateData('#karunanidhiUrai');
  const varadharajanarUrai = validateData('#varadharajanarUrai');
  const salamonPapiyaUrai = validateData('#salamonPapiyaUrai');
  const parimelazhagarUrai = validateData('#parimelazhagarUrai');
  const manakudavaiUrai = validateData('#manakudavaiUrai');
  const munisamyUrai = validateData('#munisamyUrai');
  const translation = validateData('#translation');
  const explanation = validateData('#explanation');
  let data = {};
  if (
    adhigaram && 
    paal && 
    iyal && 
    kuralNo && 
    kural && 
    karunanidhiUrai && 
    varadharajanarUrai && 
    salamonPapiyaUrai && 
    parimelazhagarUrai && 
    manakudavaiUrai && 
    munisamyUrai && 
    translation && 
    explanation) {
      data = {
        adhigaaram,
        paal,
        iyal,
        kuralNo,
        kural,
        karunanidhiUrai,
        varadharajanarUrai,
        salamonPapiyaUrai,
        parimelazhagarUrai,
        manakudavaiUrai,
        munisamyUrai,
        translation,
        explanation
      };
      return data;
    }
  return false;
}

const clearFields = () => {
  const selectors = ['#kural', '#karunanidhiUrai', '#varadharajanarUrai', 
  '#salamonPapiyaUrai', '#parimelazhagarUrai', '#manakudavaiUrai',
  '#munisamyUrai', '#translation', '#explanation'];
  selectors.forEach(selector => $(selector).val(''));
};

const attachListener = () => {
  $('select#adhigaram').on('change', function (e) {
    localStorage.setItem('adhigaraam', e.target.value);
  });
  $('select#paal').on('change', function (e) {
    localStorage.setItem('paal', e.target.value);
  });
  $('select#iyal').on('change', function (e) {
    localStorage.setItem('iyal', e.target.value);
  });
  $('select#kuralNo').on('change', function (e) {
    localStorage.setItem('kuralNo', e.target.value);
  });
  $('.submitBtn').on('click', function (e) {
    e.preventDefault();
    const data = getData();
    if (data) {
      db.collection(data.adhigaaram).doc(data.kuralNo.toString()).set(data)
        .then(() => {
          console.log('data entered');
          clearFields();
          const kuralNo = parseInt($('selector#kuralNo').val()) + 1;
          alert(`Kural entered - ${kuralNo - 1}`);
          if (kuralNo <= 11) {
            $('selector#kuralNo').val(kuralNo);
            localStorage.setItem('kuralNo', kuralNo);
          }
        })
        .catch((error) => {
          console.log(error)
          alert(error.message);
        });
    }
    return;
  });
};

$(() => {
  loadOptions();
  attachListener();
});