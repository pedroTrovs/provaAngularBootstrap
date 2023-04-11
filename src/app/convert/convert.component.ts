import { Component } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {
  moeda1: string = "Moeda de entrada";
  moeda2: string = "Moeda de saída";
  value: number = 0;
  ratio: number = 0;
  calc()
  {
    try
    {
      let r;

      if(this.moeda1 == "Moeda de entrada" || this.moeda2 == "Moeda de saída")
        throw("Selecione as moedas!");

      if(this.moeda1 == this.moeda2)
        throw("Não é possível converter uma moeda em si mesma!");

      r = this.value * this.ratio;
      alert(this.moeda1 + "(" + this.value + ")" + " -> " + this.moeda2 + "(" + r.toFixed(2) +")");
    }
    catch(e)
    {
      alert("Erro -> " + e);
    }
  }
}
