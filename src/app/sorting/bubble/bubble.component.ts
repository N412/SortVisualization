import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {

  strArr12: string = '';
  arrNumber: any = [];
  speed: number = 200;

  constructor() { }

  ngOnInit() {
  }

  fnCreateArray(strFromHTML) {
    let arr: any = [];
    let arrTemp = strFromHTML.split(',');

    for (let i = 0; i < arrTemp.length; i++) {
      let item = { id: i, label: arrTemp[i], _x: i * 50, _y: 0, classname: '' };
      arr.push(item);
    }

    this.arrNumber = arr;
  }

  fnBubbleSort() {

    let waitingTime = 0;

    for (let j = 0; j < this.arrNumber.length; j++) {

      for (let i = 0; i < this.arrNumber.length - j - 1; i++) {

        setTimeout(() => {

          setTimeout(() => { this.fnResetColor(); this.fnUpdateArray(); }, 0);

          setTimeout(() => { this.fnSetColor(i); }, 0);

          setTimeout(() => {
            if (parseInt(this.arrNumber[i].label) > parseInt(this.arrNumber[i + 1].label)) {

              this.fnMove(i);

            }
          }, this.speed);


          setTimeout(() => { this.fnResetColor(); }, this.speed * 4);

        }, this.speed * 5 * waitingTime);

        waitingTime += 1;

      }
    }
  }

  fnUpdateArray() {
    this.arrNumber.sort(function (a, b) {
      return a._x > b._x ? 1 : a._x < b._x ? -1 : 0
    });
  }

  fnSetColor(i) {
    this.arrNumber[i].classname = 'checked';
    this.arrNumber[i + 1].classname = 'checked';
  }

  fnResetColor() {
    this.arrNumber.map(function (x) {
      x.classname = '';
      return x
    });
  }

  fnMove(id) {
    this.fn_move_left_right(id);
    this.fn_move_right_left(id + 1);
  }

  fn_move_left_right(id) {

    setTimeout(() => { this.fnDiXuong(id); }, this.speed * 0);

    setTimeout(() => { this.fnQuaPhai(id); }, this.speed * 1);

    setTimeout(() => { this.fnDiLen(id); }, this.speed * 2);

  }

  fn_move_right_left(id) {

    setTimeout(() => { this.fnDiLen(id); }, this.speed * 0);

    setTimeout(() => { this.fnQuaTrai(id); }, this.speed * 1);

    setTimeout(() => { this.fnDiXuong(id); }, this.speed * 2);

  }

  fnQuaPhai(id) {
    let e0 = this.arrNumber[id];

    if (e0) { e0._x += 50; }
  }

  fnQuaTrai(id) {
    let e0 = this.arrNumber[id];

    if (e0) { e0._x -= 50; }
  }

  fnDiXuong(id) {
    let e0 = this.arrNumber[id];

    if (e0) { e0._y += 50; }
  }

  fnDiLen(id) {
    let e0 = this.arrNumber[id];

    if (e0) { e0._y -= 50; }
  }

  

}
