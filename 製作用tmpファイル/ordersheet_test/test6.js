// window.addEventListener('load', () => {
//   addForm();
// });

//初期化
let i = 0;
createUnitPrice(i++);


function addForm() {
  const parent = document.getElementById('form_area');

  //シェイプ、サイズとカラーのラジオボタンが入るdivを作る
  const newRadioAreaDiv = document.createElement('div');
  newRadioAreaDiv.id = 'radio_area_' + i;
  parent.appendChild(newRadioAreaDiv); //<div id="radio_area_#"></div>

  const shapes = ['22.5','30','36','45','60']; 
  createRadio(i, newRadioAreaDiv, shapes, 'shape', 'シェイプ');

  const sizes = ['XXS','XS','S','M','L','XL'];
  createRadio(i, newRadioAreaDiv, sizes, 'size','サイズ');

  const colors = ['Blue', 'White', 'Silver', 'Black', 'Red'];
  createRadio(i, newRadioAreaDiv, colors, 'color','カラー');

  //オプション（ラジオボタン）と木の種類（セレクト）が入るdivを作る
  const newMixAreaDiv = document.createElement('div');
  newMixAreaDiv.id = 'mix_area_' + i;
  parent.appendChild(newMixAreaDiv);

  //inner block のdivを作成
  const newMixInnerBlock1 = document.createElement('div');
  const newMixInnerBlock2 = document.createElement('div');

  newMixInnerBlock1.classList.add('mix_inner_block');
  newMixInnerBlock2.classList.add('mix_inner_block');

  newMixAreaDiv.appendChild(newMixInnerBlock1);
  newMixAreaDiv.appendChild(newMixInnerBlock2);

  const options = ['Nomal','R','Split'];
  createRadio(i, newMixInnerBlock1, options, 'option','オプション');

  const woods = ['おまかせ', 'ホワイトオーク', 'ブナ', 'ゼブラウッド', 'マホガニー', '桐', 'ライト調', 'ダーク調', 'その他'];
  createSelect(i, newMixInnerBlock2, woods, 'wood', '木の種類');

  //単価を追加
  const newPrice = document.createElement('div');
  newPrice.id = 'unit_price_' + i;
  newPrice.setAttribute('class', 'red');
  newPrice.innerText = '0円';
  parent.appendChild(newPrice);
  createUnitPrice(i);


  //改行　あとでいらなくなる
  const br = document.createElement("br");
  parent.appendChild(br);

  i++ ;
}

//ラジオボタン追加
function createRadio(unit_num, parent, radio_btns, name, text){
  const newP = document.createElement('p');
  const newText = document.createTextNode(text);
  newP.appendChild(newText);
  parent.appendChild(newP);

  for(const radio_btn of radio_btns){
    const RadioBtn = document.createElement('input');
    const RadioLabel = document.createElement('label');

    RadioBtn.type = 'radio';
    RadioBtn.name = name + '_' + unit_num;
    RadioBtn.id = name + '_' + radio_btn + '_'+unit_num;
    RadioBtn.value = radio_btn;

    RadioLabel.innerText = radio_btn;
  
    parent.appendChild(RadioBtn);
    parent.appendChild(RadioLabel);
  }
}

// セレクト追加
function createSelect(unit_num, parent, options, name, text){
  const newP = document.createElement('p');
  const newText = document.createTextNode(text);
  newP.appendChild(newText);
  parent.appendChild(newP);

  const selectMenu = document.createElement('select');

  for(const option of options){
    const optionList = document.createElement("option");
    optionList.setAttribute('value', option);
    optionList.appendChild(document.createTextNode(option));

    selectMenu.appendChild(optionList);
    selectMenu.setAttribute('name', name + ' ' + unit_num);
    selectMenu.id = name + ' ' + unit_num;

    parent.appendChild(selectMenu);
  }

  
}

function createUnitPrice(unit_num){
  let size_radio_btns = document.querySelectorAll(`input[type='radio'][name='size_${unit_num}']`);
  let option_radio_btns = document.querySelectorAll(`input[type='radio'][name='option_${unit_num}']`);
  const base_price_of_size = {XXS: 6400, XS: 7200, S: 20000, M: 30000, L: 50000, XL: 100000};
  const base_price_of_option = {Nomal: 1, R: 1.25, Split: 1.6};
  
  let base_ratio = 1;
  let base_price = 0;
  let unit_price = 0;
  
  for (let target of size_radio_btns) {
    target.addEventListener(`change`, () => {
      console.log(target.value);
      base_price = base_price_of_size[target.value];
      unit_price = base_price * base_ratio;
      document.querySelector(`#unit_price_${unit_num}`).innerHTML = `${unit_price.toLocaleString()}円`;
    });
  }
  
  for (let target of option_radio_btns) {
      target.addEventListener(`change`, () => {
        console.log(target.value);
        base_ratio = base_price_of_option[target.value];
        unit_price = base_price * base_ratio;
        document.querySelector(`#unit_price_${unit_num}`).innerHTML = `${unit_price.toLocaleString()}円`;
      });
  }
}

//フォーム追加ボタン
document.getElementById('addFormArea');
addFormArea.addEventListener('click', (e) => {
  addForm();
  
});

//金額を入れる（単価=UnitPrice）
// let size_radio_btns = document.querySelectorAll(`input[type='radio'][name='size_0']`);
// let option_radio_btns = document.querySelectorAll(`input[type='radio'][name='option_0']`);

// const base_price_of_size = {XXS: 6400, XS: 7200, S: 20000, M: 30000, L: 50000, XL: 100000};
// const base_price_of_option = {Nomal: 1, R: 1.25, Split: 1.6};

// let base_ratio = 1;
// let base_price = 0;
// let unit_price = 0;

// for (let target of size_radio_btns) {
// 	target.addEventListener(`change`, () => {
//     console.log(target.value);
//     base_price = base_price_of_size[target.value];
//     unit_price = base_price * base_ratio;
// 		document.querySelector(`#unit_price_0`).innerHTML = `${unit_price.toLocaleString()}円`;
// 	});
// }

// for (let target of option_radio_btns) {
//     target.addEventListener(`change`, () => {
//       console.log(target.value);
//       base_ratio = base_price_of_option[target.value];
//       unit_price = base_price * base_ratio;
//       document.querySelector(`#unit_price_0`).innerHTML = `${unit_price.toLocaleString()}円`;
//     });
// }