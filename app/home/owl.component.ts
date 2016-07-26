import {Component, Input, ElementRef, AfterViewInit, OnDestroy} from '@angular/core';
declare var $:any;

@Component({
    selector: 'owl-carousel',
    template: `<ng-content></ng-content>`
})
export class OwlCarousel implements AfterViewInit, OnDestroy {
    @Input() options:any;

    $owlElement:any;

    defaultOptions:any = {};

    constructor(private el:ElementRef) {
    }

    ngAfterViewInit() {
        for (var key in this.options) {
            this.defaultOptions[key] = this.options[key];
        }
        this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
    }

    ngOnDestroy() {
        this.$owlElement.data('owlCarousel').destroy();
        this.$owlElement = null;
    }
}