//CSSとjs修正

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

//ラジオボタンチェック判定用 初期値を入れる
let radio_checks = {
  0: {'shape': false,'size': false,'color': false}
};

//ラジオボタンのStateを保持用(追加機能)
let radio_states = {
   0:{'shape':'', 'size':'','color':'','option':'Normal', 'wood':'おまかせ'}
};

//単価クラス
class UnitPrice {
  constructor(unit_num){

    this.unit_num = unit_num;
    this.base_ratio = 1;
    this.base_price = 0;
    this.unit_price = 0;

    this.shape_radio_btns = document.querySelectorAll(`input[type='radio'][name='shape_${this.unit_num}']`);
    this.size_radio_btns = document.querySelectorAll(`input[type='radio'][name='size_${this.unit_num}']`);
    this.color_radio_btns = document.querySelectorAll(`input[type='radio'][name='color_${this.unit_num}']`);
    this.option_radio_btns = document.querySelectorAll(`input[type='radio'][name='option_${this.unit_num}']`);

    // シェイプがチェックされたら
    for (let target of this.shape_radio_btns){
      target.addEventListener('change', () => {
        checkRadioObjAndDoSome(this.unit_num, 'shape', isRadioChecked, enableNextBtn);
        //追加機能のテスト　ここから
        putRadioState(this.unit_num,'shape', target.value);

        console.log(radio_states);
        console.log(radio_states[this.unit_num]['shape']);
        getTotalPriceDatailText(this.unit_num);
        // console.log(totalPriceDatailText);

        //totalPriceDatailText.innerHTML = radio_states[this.unit_num]['shape'];
        //テストここまで
      })
    }
    // サイズがチェックされたら
    for (let target of this.size_radio_btns) {
      target.addEventListener('change', () => {
        this.base_price = size_of_prices[target.value];
        this.unit_price = this.base_price * this.base_ratio;
        document.querySelector(`#unit_price_${this.unit_num}`).innerHTML = `<span class="yen">¥</span>${this.unit_price.toLocaleString()}`;
        document.querySelector(`#unit_price_hidden_${this.unit_num}`).setAttribute('value',this.unit_price);
        updateTotalPrice(calclateTotalPrice());
        checkRadioObjAndDoSome(this.unit_num, 'size', isRadioChecked, enableNextBtn);
      })
    }
    // カラーがチェックされたら
    for (let target of this.color_radio_btns){
      target.addEventListener('change', () => {
        checkRadioObjAndDoSome(this.unit_num, 'color', isRadioChecked, enableNextBtn);
      })
    }
    // option がチェックされたら
    for (let target of this.option_radio_btns) {
      target.addEventListener(`change`, () => {
        this.base_ratio = option_prices[target.value];
        this.unit_price = this.base_price * this.base_ratio;
        document.querySelector(`#unit_price_${this.unit_num}`).innerHTML = `<span class="yen">¥</span>${this.unit_price.toLocaleString()}`;
        document.querySelector(`#unit_price_hidden_${this.unit_num}`).setAttribute('value',this.unit_price);
        updateTotalPrice(calclateTotalPrice());
      })
    }
  }
  //単価を返すメソッド
  getUnitPrice(){return this.unit_price;}
}


const addForm = () => {
  //あたらしいユニット用divを作成
  const newUnitAreaDiv = document.createElement('div');
  newUnitAreaDiv.id = 'unit_area_' + i;
  newUnitAreaDiv.classList.add('box_unit_area');
  form_form_area.appendChild(newUnitAreaDiv); 

  //シェイプ、サイズとカラーのラジオボタンが入るdivを作る
  const newRadioAreaDiv = document.createElement('div');
  newRadioAreaDiv.id = 'radio_area_' + i;
  newRadioAreaDiv.classList.add('radio_area');
  newUnitAreaDiv.appendChild(newRadioAreaDiv); 

  //Radioエリア inner block のdiv作成
  const newRadioInnerBlock1 = document.createElement('div');
  const newRadioInnerBlock2 = document.createElement('div');
  const newRadioInnerBlock3 = document.createElement('div');

  newRadioInnerBlock1.classList.add('radio_inner_block','clearfix');
  newRadioInnerBlock2.classList.add('radio_inner_block','clearfix');
  newRadioInnerBlock3.classList.add('radio_inner_block','clearfix');

  newRadioAreaDiv.appendChild(newRadioInnerBlock1);
  newRadioAreaDiv.appendChild(newRadioInnerBlock2);
  newRadioAreaDiv.appendChild(newRadioInnerBlock3);

  //各ラジオボタン作成
  createRadio(i, newRadioInnerBlock1, shapes, 'shape', 'シェイプ');
  createRadio(i, newRadioInnerBlock2, sizes, 'size','サイズ');
  createRadio(i, newRadioInnerBlock3, colors, 'color','カラー');

  //オプション（ラジオボタン）と木の種類（セレクト）が入るdivを作る
  const newMixAreaDiv = document.createElement('div');
  newMixAreaDiv.id = 'mix_area_' + i;
  newMixAreaDiv.classList.add('mix_area', 'clearfix');
  newUnitAreaDiv.appendChild(newMixAreaDiv);

  //Mixエリアinner block のdivを作成
  const newMixInnerBlock1 = document.createElement('div');
  const newMixInnerBlock2 = document.createElement('div');

  newMixInnerBlock1.classList.add('mix_inner_block','clearfix');
  newMixInnerBlock2.classList.add('mix_inner_block');

  newMixAreaDiv.appendChild(newMixInnerBlock1);
  newMixAreaDiv.appendChild(newMixInnerBlock2);

  createRadio(i, newMixInnerBlock1, options, 'option','オプション');
 
  //オプションのディフォルト(Normal)にチェック
  checkRadioNormal(i); 

  //セレクト作成
  createSelect(i, newMixInnerBlock2, woods, 'wood', '木の種類');

  //単価を追加
  const newPrice = document.createElement('div');
  newPrice.id = 'unit_price_' + i;
  newPrice.classList.add('unit_price',);
  newPrice.innerHTML = '<span class="yen">¥</span>0';
  newUnitAreaDiv.appendChild(newPrice);

  //単価を送るためのinput hiddenを作成
  const newPriceHidden = document.createElement('input');
  newPriceHidden.id = 'unit_price_hidden_' + i;
  newPriceHidden.setAttribute('type','hidden');
  newPriceHidden.setAttribute('name','unit_price_' + i);
  newUnitAreaDiv.appendChild(newPriceHidden);
  
  //削除ボタンを作る
  createDeleteButton(i, newUnitAreaDiv);

  //ラジオボタンチェック追加
  radio_checks[i]= {'shape': false,'size': false,'color': false};

  //ラジオボタンState追加(追加機能)
  radio_states[i] = {'shape':'', 'size':'','color':'','option':'Normal', 'wood':'おまかせ'};

  //次へのボタンをdisabledに設定
  next_btn.disabled = true;

  ////単価クラスのインスタンス作成
  unit_objects[i] = new UnitPrice(i);

  //合計の詳細に行を追加
  const DetailParent = document.getElementById('total_price_datail_content');
  const newDatailText = document.createElement('p');
  newDatailText.id = 'total_price_datail_text_' + i;
  DetailParent.appendChild(newDatailText);

  i++;
}

//ラジオボタン作成
const createRadio = (unit_num, parent, radio_btns, name, text) => {
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
    RadioBtn.id = name + '_' + radio_btn + '_' + unit_num;
    RadioBtn.classList.add('radio_btn');
    RadioBtn.value = radio_btn;

    //ラジオボタンの最初の要素にrequiredを追加
    if(radio_btn === first_element){RadioBtn.required = true;}
    RadioLabel.innerText = radio_btn;
    RadioLabel.classList.add('label_radio_btn','label_radio_btn_' + name);
    RadioLabel.setAttribute('for', name + '_' + radio_btn + '_' + unit_num);
    parent.appendChild(RadioBtn);
    parent.appendChild(RadioLabel);
  }
}

// セレクト作成
const createSelect = (unit_num, parent, options, name, text) => {
  const newP = document.createElement('p');
  const newText = document.createTextNode(text);
  newP.appendChild(newText);
  parent.appendChild(newP);
  const newSelectAreaDiv = document.createElement('div');
  newSelectAreaDiv.id = 'select_area_' + i;
  newSelectAreaDiv.classList.add('select_area');
  parent.appendChild(newSelectAreaDiv);
  const selectMenu = document.createElement('select');

  for(const option of options){
    const optionList = document.createElement("option");
    optionList.setAttribute('value', option);
    optionList.appendChild(document.createTextNode(option));
    selectMenu.appendChild(optionList);
    selectMenu.setAttribute('name', name + ' ' + unit_num);
    selectMenu.id = name + ' ' + unit_num;
    newSelectAreaDiv.appendChild(selectMenu);
  }
}

//オプションのNormalにチェックを入れる
const checkRadioNormal = (unit_num) => {
  let radio_btn_normal = document.getElementById('option_Normal_' + unit_num);
    radio_btn_normal.checked = true;
}

//追加ボタン押したときの処理
add_new_unit_btn.addEventListener('click', () => addForm());

//削除ボタン作成
const createDeleteButton = (unit_num, parent) => {
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.id = 'delete_btn_' + unit_num;
  deleteButton.classList.add('order_sheet_btn_base', 'delete_unit_btn');
  deleteButton.innerHTML = 'x';
  deleteButton.addEventListener('click',() => deleteForm(unit_num));
  parent.appendChild(deleteButton);
}

//削除ボタンを押した時の処理
const deleteForm = (unit_num) => {
  const unit_area = document.getElementById('unit_area_' + unit_num);
  deleteUnitPriceObj(unit_num);
  updateTotalPrice(calclateTotalPrice());
  form_form_area.removeChild(unit_area);
  delete radio_checks[unit_num];
}

//単価オブジェクトから削除
const deleteUnitPriceObj = (unit_num) => {
  delete unit_objects[unit_num];
}

//合計金額の計算
const calclateTotalPrice = () => {
  total_price = 0;
  Object.keys(unit_objects).forEach(key =>{
    total_price += unit_objects[key].getUnitPrice();
  });
  return total_price;
}

//合計金額の入力
const updateTotalPrice = (total_price) => {
    document.querySelector(`#total_price`).innerHTML = `合計： <span class="yen">¥</span>${total_price.toLocaleString()}`;
}

//ラジオボタン（シェイプ、サイズ、カラー）がチェックされているかを判定して真偽を返す
//全てにチェック: true / その他: false
const isRadioChecked = () => {
  let units = Object.values(radio_checks);
  for(let unit of units){
    let values = Object.values(unit);
    for(let value of values){
      if(value == false){
        return false;
      }
    }
  }
  return true;
}

//次へのボタンを有効化
const enableNextBtn = () =>  next_btn.disabled = false;

//ラジオボタン判定用オブジェクト値を入れる、filter()をかけて、func()を実行する
const checkRadioObjAndDoSome = (unit_num, btn_name, filter, func) => {
  radio_checks[unit_num][btn_name] = true;
  if(filter()){func();}
}

//合計の詳細トグル(追加機能)
const totalPriceDatailToggle = ()=>{
  const totalPriceDatailTab = document.getElementById('total_price_datail_tab');
  const totalPriceDatailContent = document.getElementById('total_price_datail_content');
  //const totalPriceDatailText = document.createElement('p');
  //totalPriceDatailContent.appendChild(totalPriceDatailText); 
  totalPriceDatailTab.addEventListener('click', (e) => {
    e.preventDefault();
    totalPriceDatailContent.classList.toggle('active');
  })
}

const putRadioState = (unit_num, name, value) => {
  radio_states[unit_num][name] = value;
}

const getTotalPriceDatailText = (unit_num) =>{
  let lines = Object.values(radio_states);
  let text = '';
  for(let line of lines){
    console.log(line);
    let values = Object.values(line);
    for(let value of values){
      //if (value=='') console.log('empty');
      text += value;
    }
    document.querySelector(`#total_price_datail_text_` + unit_num).innerHTML = text;
    console.log(text);
    text = '';
  }
}

//以下あとで追加
const isRadioStateInAll =() => {}

const putRadioStateObjAndDosome = (obj, unit_num, btn_name, btn_value, filter, func) => {
  obj[unit_num][btn_name] = btn_value;
}

//初期化
totalPriceDatailToggle();
let i = 0;//ユニットid
unit_objects[i] = new UnitPrice(i++);
