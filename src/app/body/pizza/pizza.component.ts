import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  constructor() { }


  Products = [
    {
      id: "ABC8441189035",
      name: "Tshirt",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: "DEF6510463347",
      name: "Shoes",
      description: "Proin ac metus in diam porttitor viverra eu sit amet ligula."
    },
    {
      id: "GHI0831819467",
      name: "Handbags",
      description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor."
    }
  ]

  ngOnInit(): void {
  }

}
