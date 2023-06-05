// window.addEventListener('load', () => {
//   addForm();
// });

//定数


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

  const options = ['Normal','R','Split'];
  createRadio(i, newMixInnerBlock1, options, 'option','オプション');
  checkRadioNormal(i); //オプションのディフォルト(Normal)にチェック
  
  const woods = ['おまかせ', 'ホワイトオーク', 'ブナ', 'ゼブラウッド', 'マホガニー', '桐', 'ライト調', 'ダーク調', 'その他'];
  createSelect(i, newMixInnerBlock2, woods, 'wood', '木の種類');

  //単価を追加
  const newPrice = document.createElement('div');
  newPrice.id = 'unit_price_' + i;
  newPrice.setAttribute('class', 'red'); //あとで編集　見やすいように赤色にしている
  newPrice.innerText = '0円';
  parent.appendChild(newPrice);
  createUnitPrice(i);

  //削除ボタンを作る
  createDeleteButton(i, parent);

  //改行　あとでいらなくなる
  const br = document.createElement("br");
  parent.appendChild(br);

  i++ ;
}

//ラジオボタン作成
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

// セレクト作成
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

//オプションにチェックを入れる
function checkRadioNormal(unit_num){
  let radio_btn_normal = document.getElementById('option_Normal_' + unit_num);
  console.log(radio_btn_normal);
  radio_btn_normal.checked = true;
  console.log(radio_btn_normal.checked);
}

//単価に値を入力する
function createUnitPrice(unit_num){
  let size_radio_btns = document.querySelectorAll(`input[type='radio'][name='size_${unit_num}']`);
  let option_radio_btns = document.querySelectorAll(`input[type='radio'][name='option_${unit_num}']`);
  const base_price_of_size = {XXS: 6400, XS: 7200, S: 20000, M: 30000, L: 50000, XL: 100000};
  const base_price_of_option = {Normal: 1, R: 1.25, Split: 1.6};
  
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

//追加ボタン押したときの処理
document.getElementById('add_form_area');
add_form_area.addEventListener('click', () => {
  addForm();
});

//削除ボタン作成
function createDeleteButton(unit_num, parent){
  const delete_button = document.createElement('button');
  delete_button.id = 'delete_btn_' + unit_num;
  delete_button.type = 'button';
  delete_button.innerHTML = '削除';
  // delete_button.onclick = function(){deleteBtn(this);}
  delete_button.addEventListener('click',() => deleteBtn(unit_num));
  parent.appendChild(delete_button);
}

//削除ボタンを押した時の処理
function deleteBtn(unit_num) {
  const parent = document.getElementById('form_area');
  const radio_area_id = document.getElementById('radio_area_' + unit_num);
  const mix_area_id = document.getElementById('mix_area_' + unit_num);
  const unit_price_id = document.getElementById('unit_price_' + unit_num);
  const this_button_id = document.getElementById('delete_btn_' + unit_num);
  
  parent.removeChild(radio_area_id);
  parent.removeChild(mix_area_id);
  parent.removeChild(unit_price_id);
  parent.removeChild(this_button_id);	//自身を消す
}
