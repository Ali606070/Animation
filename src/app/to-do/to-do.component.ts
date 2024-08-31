import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fadAnimation, fade, nAnimantion, slide } from '../animations/fade-in-aminmation';

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
  animations:[
    trigger('todo',[
      transition(':enter',[
        useAnimation(fadAnimation,{params:{
          duration:'500ms'
        }})
      ]),
      transition(':leave',[
        style({backgroundColor:'red'}),
        animate(1000),
        //useAnimation(nAnimantion)
      ])
    ]
    )
  ]
})
export class ToDoComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];
    start(event:any){
      console.log(event)
    }
    done(event:any){
      console.log(event)
    }
  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item:any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
