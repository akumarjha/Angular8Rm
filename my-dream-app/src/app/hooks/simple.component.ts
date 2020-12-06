import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
    selector:'app-simple',
    templateUrl:'./simple.component.html'
})

export class SimpleComponent implements OnChanges
{
    @Input() parenttxtLifeCycleHooks:string ="";

    ngOnChanges(changes:SimpleChanges)
    {
        for(let propertyName in changes)
        {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);

            console.log(propertyName + ': currentvalue ='+current+ ', prevoiusValue='+previous);
        }
    }
}