/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { ISeComponent, SeComponent } from 'smarteditcommons';
import { IContextAwareEditableItemService } from 'cmscommons/services';(window as any).__smartedit__.addDecoratorPayload('SeComponent', 'SharedComponentButton', {
    templateUrl: 'sharedComponentButtonTemplate.html',
    inputs: ['smarteditComponentId']
});

@SeComponent({
    templateUrl: 'sharedComponentButtonTemplate.html',
    inputs: ['smarteditComponentId']
})
export class /* @ngInject */ SharedComponentButton implements ISeComponent {
    public smarteditComponentId: string;
    public isReady = false;
    public message: string;

    constructor(private contextAwareEditableItemService: IContextAwareEditableItemService) {}

    $onInit() {
        this.contextAwareEditableItemService
            .isItemEditable(this.smarteditComponentId)
            .then((isEditable) => {
                this.isReady = true;
                this.message = `se.cms.contextmenu.shared.component.info.msg${
                    isEditable ? '.editable' : ''
                }`;
            });
    }
}
