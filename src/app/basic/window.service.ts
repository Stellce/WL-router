import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root'})

export class WindowService {
  innerWindow: HTMLElement | null;
  divs: string[] = ['wired-clients-div', 'wan-div',];

  showWindow(showWinNum: number) {
    this.innerWindow = document.getElementsByClassName('inner-window')[showWinNum] as HTMLElement;

    if (this.innerWindow!.style.display != '' && this.innerWindow!.style.display != 'none') {
      this.innerWindow!.style.display = 'none';
      return;
    }
    const wiredDiv = document.getElementsByClassName(this.divs[showWinNum])[0] as HTMLElement;
    this.innerWindow!.style.display = 'block';
    this.innerWindow!.style.left = String(wiredDiv.getBoundingClientRect().left) + 'px';
    this.innerWindow!.style.top = String(wiredDiv.getBoundingClientRect().top) + 'px';
    // this.trackMove(showWinNum);
  }
  trackMove(showWinNum: number, mousedown?: boolean) {
    this.innerWindow = document.getElementsByClassName('inner-window')[showWinNum] as HTMLElement;
    const body: HTMLElement = document.getElementsByTagName('body')[0] as HTMLElement;
    const moveDiv: HTMLElement = document.getElementsByClassName('move')[showWinNum] as HTMLElement;
    console.log(moveDiv)

    let pos1X = 0, pos1Y = 0, offsetX = 0, offsetY = 0;
    moveDiv.onmousedown = (e) => {
      e = e || Event;
      body.style.userSelect = 'none'
      pos1X = e.clientX;
      pos1Y = e.clientY;

      offsetX = pos1X - this.innerWindow!.offsetLeft;
      offsetY = pos1Y - this.innerWindow!.offsetTop;

      document.onmousemove = (e) => {
        this.innerWindow!.style.left = e.clientX - offsetX + 'px';
        this.innerWindow!.style.top = e.clientY - offsetY + 'px';
        // console.log(e.clientX, e.clientY);
      }
      document.onmouseup = () => {
        document.onmousedown = null;
        document.onmousemove = null;
        body.style.userSelect = 'text';
      }
    }
  }
}
