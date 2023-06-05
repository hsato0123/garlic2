//ハンバーガーメニュー
//リンク先に移動したときにメニューのモーダルを消す
//補足：リンク先に移動後、ブラウザのバックボタンで戻るとモーダルが残っている状態を解消

const hamburgerMenuListA  = document.querySelectorAll('.menu-content ul li a');
const hamburgerMenuBtnCheck = document.getElementById('menu-btn-check');

for (let target of hamburgerMenuListA){
  target.addEventListener('click', () =>{
    hamburgerMenuBtnCheck.checked = false;
  })
}

