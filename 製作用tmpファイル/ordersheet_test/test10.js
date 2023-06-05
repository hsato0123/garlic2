//バリデーション

//定数
const shapes = ['22.5','30','36','45','60']; 
const sizes = ['XXS','XS','S','M','L','XL'];
const colors = ['Blue', 'White', 'Silver', 'Black', 'Red'];
const options = ['Normal','R','Split'];
const woods = ['おまかせ', 'ホワイトオーク', 'ブナ', 'ゼブラウッド', 'マホガニー', '桐', 'ライト調', 'ダーク調', 'その他'];

const size_of_prices = {XXS: 6400, XS: 7200, S: 20000, M: 30000, L: 50000, XL: 100000};
const option_prices = {Normal: 1, R: 1.25, Split: 1.6};

//フォームの親要素
const form_form_area = document.getElementById('form_area');

//フォームのインスタンスを格納するオブジェクト　追加／削除で増減
let unit_objects = {};

//単価クラス
class Unit_Price {
  constructor(unit_num){

    this.unit_num = unit_num;
    this.base_ratio = 1;
    this.base_price = 0;
    this.unit_price = 0;

    this.size_radio_btns = document.querySelectorAll(`input[type='radio'][name='size_${this.unit_num}']`);
    this.option_radio_btns = document.querySelectorAll(`input[type='radio'][name='option_${this.unit_num}']`);

    for (let target of this.size_radio_btns) {
      target.addEventListener(`change`, () => {
        this.base_price = size_of_prices[target.value];
        this.unit_price = this.base_price * this.base_ratio;
        document.querySelector(`#unit_price_${this.unit_num}`).innerHTML = `${this.unit_price.toLocaleString()}円`;
        document.querySelector(`#unit_price_hidden_${this.unit_num}`).setAttribute('value',this.unit_price);
        console.log(unit_objects);   //あとで消す
        console.log(this.unit_price);//あとで消す

        updateTotalPrice(calclateTotalPrice());
      });
    }

    for (let target of this.option_radio_btns) {
      target.addEventListener(`change`, () => {
        this.base_ratio = option_prices[target.value];
        this.unit_price = this.base_price * this.base_ratio;
        document.querySelector(`#unit_price_${this.unit_num}`).innerHTML = `${this.unit_price.toLocaleString()}円`;
        document.querySelector(`#unit_price_hidden_${this.unit_num}`).setAttribute('value',this.unit_price);
        console.log(unit_objects);//あとで消す
        console.log(this.unit_num);//あとで消す

        updateTotalPrice(calclateTotalPrice());
      });
    }
  }

  getUnitPrice(){
    return this.unit_price;
  }

}

let i = 0;
unit_objects[i] = new Unit_Price(i);
i++;


function addForm() {
  
  //シェイプ、サイズとカラーのラジオボタンが入るdivを作る
  const newRadioAreaDiv = document.createElement('div');
  newRadioAreaDiv.id = 'radio_area_' + i;
  form_form_area.appendChild(newRadioAreaDiv); 

  //各ラジオボタン作成
  createRadio(i, newRadioAreaDiv, shapes, 'shape', 'シェイプ');
  createRadio(i, newRadioAreaDiv, sizes, 'size','サイズ');
  createRadio(i, newRadioAreaDiv, colors, 'color','カラー');

  //オプション（ラジオボタン）と木の種類（セレクト）が入るdivを作る
  const newMixAreaDiv = document.createElement('div');
  newMixAreaDiv.id = 'mix_area_' + i;
  form_form_area.appendChild(newMixAreaDiv);

  //inner block のdivを作成
  const newMixInnerBlock1 = document.createElement('div');
  const newMixInnerBlock2 = document.createElement('div');

  newMixInnerBlock1.classList.add('mix_inner_block');
  newMixInnerBlock2.classList.add('mix_inner_block');

  newMixAreaDiv.appendChild(newMixInnerBlock1);
  newMixAreaDiv.appendChild(newMixInnerBlock2);

  createRadio(i, newMixInnerBlock1, options, 'option','オプション');
  checkRadioNormal(i); //オプションのディフォルト(Normal)にチェック
  
  createSelect(i, newMixInnerBlock2, woods, 'wood', '木の種類');

  //単価を追加
  const newPrice = document.createElement('div');
  newPrice.id = 'unit_price_' + i;
  newPrice.setAttribute('class', 'red'); //あとで編集　見やすいように赤色にしている
  newPrice.innerText = '0円';
  form_form_area.appendChild(newPrice);

  //単価を送るためのinput hiddenを作成
  const newPriceHidden = document.createElement('input');
  newPriceHidden.id = 'unit_price_hidden_' + i;
  newPriceHidden.setAttribute('type','hidden');
  newPriceHidden.setAttribute('name','unit_price_' + i);
  form_form_area.appendChild(newPriceHidden);
  
  //削除ボタンを作る
  createDeleteButton(i, form_form_area);

  ////単価クラスのインスタンス作成
  unit_objects[i] = new Unit_Price(i);
  i++ ;
}

//ラジオボタン作成
function createRadio(unit_num, parent, radio_btns, name, text){
  const newP = document.createElement('p');
  const newText = document.createTextNode(text);
  newP.appendChild(newText);
  parent.appendChild(newP);

  let [first_element] = radio_btns; //配列の最初の要素を取得

  for(const radio_btn of radio_btns){
    const RadioBtn = document.createElement('input');
    const RadioLabel = document.createElement('label');

    RadioBtn.type = 'radio';
    RadioBtn.name = name + '_' + unit_num;
    RadioBtn.id = name + '_' + radio_btn + '_'+unit_num;
    RadioBtn.value = radio_btn;

    //ラジオボタンの最初の要素にrequiredを追加
    if(radio_btn === first_element){
      RadioBtn.required = true;
    }

    RadioLabel.innerText = radio_btn;
    
    //RadioBtn.setAttribute('required','');
  
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

//オプションのNormalにチェックを入れる
function checkRadioNormal(unit_num){
  let radio_btn_normal = document.getElementById('option_Normal_' + unit_num);
    radio_btn_normal.checked = true;
}

//追加ボタン押したときの処理
document.getElementById('add_form_area');
add_form_area.addEventListener('click', () => addForm());

//削除ボタン作成
function createDeleteButton(unit_num, parent){
  const delete_button = document.createElement('button');
  delete_button.id = 'delete_btn_' + unit_num;
  delete_button.type = 'button';
  delete_button.innerHTML = '削除';
  delete_button.addEventListener('click',() => deleteForm(unit_num));
  parent.appendChild(delete_button);
}

//削除ボタンを押した時の処理
function deleteForm(unit_num) {
  const parent = document.getElementById('form_area');
  const radio_area_id = document.getElementById('radio_area_' + unit_num);
  const mix_area_id = document.getElementById('mix_area_' + unit_num);
  const unit_price_id = document.getElementById('unit_price_' + unit_num);
  const this_button_id = document.getElementById('delete_btn_' + unit_num);
  
  deleteUnitPriceObj(unit_num);
  updateTotalPrice(calclateTotalPrice());

  parent.removeChild(radio_area_id);
  parent.removeChild(mix_area_id);
  parent.removeChild(unit_price_id);
  parent.removeChild(this_button_id);	//ボタンを消す
}

//単価オブジェクトから削除
function deleteUnitPriceObj(unit_num){
  delete unit_objects[unit_num];
  console.log(unit_objects); //あとで消す
}

//合計金額の計算
function calclateTotalPrice(){
  total_price = 0;
  Object.keys(unit_objects).forEach(key =>{
    total_price += unit_objects[key].getUnitPrice();
  });
  return total_price;
}

//合計金額の入力
function updateTotalPrice(total_price){
    document.querySelector(`#total_price`).innerHTML = `合計 ${total_price.toLocaleString()}円`;
}
