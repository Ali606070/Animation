import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from "@angular/animations";
export let nAnimantion=animation(
    animate('600ms 1s cubic-bezier(.17,.67,.83,.67)',
        keyframes([
            style({offset:.2,opacity:1,transform:'translateX(40px)'}),
            style({offset:1,opacity:0,transform:'translateX(-100%)'})
        ])
        )
);

export let fadAnimation=animation([
  style({opacity:0}),
      animate('{{duration}} {{easing}}')
],{
  params:{
    duration:"1000ms",
    easing:"ease-out"
  }
})
export let fade=trigger('fade-in',[
    transition(':enter',[
      useAnimation(fadAnimation)
    ]),
    transition(':leave',[
      animate(1000,style({opacity:0}))
    ])
  ]);
  
export let slide=trigger('slide',[
    transition(':enter',[
        style({transform:'translateX(-10px)'}),
        animate(500)
    ]),
    transition(':leave',[
        useAnimation(nAnimantion)
    ])
  ]);
  