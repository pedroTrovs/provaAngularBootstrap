import { Component } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {
  moeda1: string = "";
  moeda2: string = "";
  value: number = 0;
  ratio: number = 0;
  calc()
  {
    try
    {
      let r;
      if(this.moeda1 == this.moeda2)
        throw("Não é possível converter uma moeda em si mesma!");
      else
      {
        r = this.value * this.ratio;
      }
    }
    catch(e)
    {
      alert("Erro: " + e);
    }
  }
}
