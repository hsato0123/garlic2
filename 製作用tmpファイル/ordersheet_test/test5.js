let i = 1 ;
function addForm() {
  
  const parent = document.getElementById('form_area');
  const newRadioAreaDiv = document.createElement('div');
  newRadioAreaDiv.id = 'radio_area_' + i;
  parent.appendChild(newRadioAreaDiv); //<div id="radio_area_#"></div>
  createShapeRadio(i,newRadioAreaDiv);

  //追加したときに改行
  const br = document.createElement("br");
  parent.appendChild(br);
  i++ ;
}

function createShapeRadio(unit_num, parent){

  const newP = document.createElement('p');
  const newText = document.createTextNode('シェイプ');
  newP.appendChild(newText);
  parent.appendChild(newP);

  const shapes = ['22.5','30','36','45','60'];

  for(const shape of shapes){
    const shapeRadio = document.createElement('input');
    const shapeRadioLabel = document.createElement('label');

    shapeRadio.type = 'radio';
    shapeRadio.name = 'shape_'+unit_num;
    shapeRadio.id = 'shape_'+shape+'_'+unit_num;
    shapeRadio.value = shape;

    shapeRadioLabel.innerText = shape;
  
    parent.appendChild(shapeRadio);
    parent.appendChild(shapeRadioLabel);
  }

}


function createSelectShape(){
  const selectShape = document.createElement('select');
  const optionShape1 = document.createElement("option");
  const optionShape2 = document.createElement("option");

  optionShape1.setAttribute("value", "22.5");
  optionShape2.setAttribute("value", "30");

  optionShape1.appendChild( document.createTextNode("22.5") );
  optionShape2.appendChild( document.createTextNode("30") );
  
  selectShape.appendChild(optionShape1);
  selectShape.appendChild(optionShape2);

  selectShape.setAttribute("name", "shape_"+i);
  selectShape.id = 'select_shape_form_' + i;

  return selectShape;
}

function createSelectSize(){
  const selectSize = document.createElement('select');
  const optionSize1 = document.createElement("option");
  const optionSize2 = document.createElement("option");

  optionSize1.setAttribute("value", "XXS");
  optionSize2.setAttribute("value", "XS");

  optionSize1.appendChild( document.createTextNode("XXS") );
  optionSize2.appendChild( document.createTextNode("XS") );
  
  selectSize.appendChild(optionSize1);
  selectSize.appendChild(optionSize2);

  selectSize.setAttribute("name", "shize_"+i);
  selectSize.id = 'select_size_form_' + i;

  return selectSize;
}

//フォーム追加ボタン
document.getElementById('addFormArea');
addFormArea.addEventListener('click', (e) => {
  addForm();
});

//金額を入れる（単価=UnitPrice）
let size_radio_btns = document.querySelectorAll(`input[type='radio'][name='size_0']`);
let option_radio_btns = document.querySelectorAll(`input[type='radio'][name='option_0']`);

const base_price_of_size = {XXS: 6400, XS: 7200, S: 20000, M: 30000, L: 50000, XL: 100000};
const base_price_of_option = {None: 1, R: 1.25, Split: 1.6};

let base_ratio = 1;
let base_price = 0;
let unit_price = 0;

for (let target of size_radio_btns) {
	target.addEventListener(`change`, () => {
    console.log(target.value);
    base_price = base_price_of_size[target.value];
    unit_price = base_price * base_ratio;
		document.querySelector(`#price_0`).innerHTML = `${unit_price.toLocaleString()}円`;
	});
}

for (let target of option_radio_btns) {
    target.addEventListener(`change`, () => {
      console.log(target.value);
      base_ratio = base_price_of_option[target.value];
      unit_price = base_price * base_ratio;
      document.querySelector(`#price_0`).innerHTML = `${unit_price.toLocaleString()}円`;
    });
}