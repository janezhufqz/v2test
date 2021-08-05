/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { ISeComponent, SeComponent } from 'smarteditcommons';(window as any).__smartedit__.addDecoratorPayload('SeComponent', 'SubTypeSelectorComponent', {
    templateUrl: 'subTypeSelectorTemplate.html',
    inputs: ['subTypes', 'onSubTypeSelected']
});

@SeComponent({
    templateUrl: 'subTypeSelectorTemplate.html',
    inputs: ['subTypes', 'onSubTypeSelected']
})
export class /* @ngInject */ SubTypeSelectorComponent implements ISeComponent {
    onSubTypeSelected: (subType: { id: string; label: string }) => void;
    onChange(subType: { id: string; label: string }): void {
        this.onSubTypeSelected(subType);
    }
}
