angular.module('cmscommonsTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('web/features/cmscommons/components/synchronize/synchronizationPanelTemplate.html',
    "<div class=\"se-sync-panel\">\n" +
    "    <div\n" +
    "        class=\"se-sync-panel__sync-status\"\n" +
    "        data-ng-if=\"$ctrl.headerTemplateUrl\"\n" +
    "        data-ng-include=\"$ctrl.headerTemplateUrl\"\n" +
    "    ></div>\n" +
    "\n" +
    "    <se-message\n" +
    "        data-ng-if=\"$ctrl.message\"\n" +
    "        [type]=\"$ctrl.message.type\"\n" +
    "        [message-id]=\"'sync-panel-message-{{$index}}'\"\n" +
    "    >\n" +
    "        <ng-container se-message-description> {{$ctrl.message.description}} </ng-container>\n" +
    "    </se-message>\n" +
    "\n" +
    "    <div class=\"se-sync-panel__sync-info\" data-ng-show=\"$ctrl.showItemList\">\n" +
    "        <div data-ng-if=\"$ctrl.isLoading\">\n" +
    "            <div class=\"spinner-sm spinner-light\">Loading...</div>\n" +
    "        </div>\n" +
    "        <div\n" +
    "            data-ng-if=\"!$ctrl.isLoading\"\n" +
    "            data-ng-repeat=\"dependency in $ctrl.getRows()\"\n" +
    "            data-ng-class=\"{active: $index==0, 'se-sync-panel--item__external': dependency.isExternal}\"\n" +
    "            class=\"se-sync-panel__sync-info__row\"\n" +
    "        >\n" +
    "            <div class=\"se-sync-panel__info-checkbox fd-form__item\">\n" +
    "                <input\n" +
    "                    type=\"checkbox\"\n" +
    "                    class=\"fd-form__control\"\n" +
    "                    data-ng-if=\"!dependency.isExternal\"\n" +
    "                    data-ng-model=\"dependency.selected\"\n" +
    "                    data-ng-disabled=\"$ctrl.isDisabled(dependency)\"\n" +
    "                    data-ng-change=\"$ctrl.selectionChange($index)\"\n" +
    "                    id=\"sync-info__checkbox_{{$index}}\"\n" +
    "                />\n" +
    "                <label\n" +
    "                    data-ng-if=\"$index===0\"\n" +
    "                    for=\"sync-info__checkbox_{{$index}}\"\n" +
    "                    class=\"se-sync-panel__info-checkbox-label se-sync-panel__info-checkbox-label--select-all fd-form__label\"\n" +
    "                    title=\"{{::dependency.selectAll | translate}}\"\n" +
    "                >\n" +
    "                    {{::dependency.selectAll | translate}}</label\n" +
    "                >\n" +
    "\n" +
    "                <label\n" +
    "                    data-ng-if=\"$index!==0 && !dependency.isExternal\"\n" +
    "                    for=\"sync-info__checkbox_{{$index}}\"\n" +
    "                    class=\"se-sync-panel__info-checkbox-label fd-form__label\"\n" +
    "                    title=\"{{::dependency.name | translate}}\"\n" +
    "                >\n" +
    "                    {{::dependency.name | translate}}</label\n" +
    "                >\n" +
    "\n" +
    "                <label\n" +
    "                    data-ng-if=\"$index!==0 && dependency.isExternal\"\n" +
    "                    data-y-popover\n" +
    "                    data-trigger=\"'hover'\"\n" +
    "                    data-template=\"$ctrl.getTemplateInfoForExternalComponent()\"\n" +
    "                    for=\"sync-info__checkbox_{{$index}}\"\n" +
    "                    class=\"se-sync-panel__info-checkbox-label fd-form__label\"\n" +
    "                >\n" +
    "                    {{::dependency.name | translate}}\n" +
    "                </label>\n" +
    "            </div>\n" +
    "\n" +
    "            <span\n" +
    "                data-ng-if=\"$ctrl.buildInfoTemplate(dependency)\"\n" +
    "                data-y-popover\n" +
    "                data-trigger=\"'hover'\"\n" +
    "                data-title=\"$ctrl.getInfoTitle(dependency)\"\n" +
    "                data-template=\"$ctrl.buildInfoTemplate(dependency)\"\n" +
    "                class=\"pull-right se-sync-panel__sync-info__right-icon\"\n" +
    "                data-ng-class=\"{'se-sync-panel--icon-globe': dependency.isExternal} \"\n" +
    "            >\n" +
    "                <span\n" +
    "                    data-status=\"{{dependency.status}}\"\n" +
    "                    data-ng-if=\"!dependency.isExternal\"\n" +
    "                    class=\"se-sync-panel__sync-info-icon\"\n" +
    "                    data-ng-class=\"{\n" +
    "                        'sap-icon--accept':$ctrl.isInSync(dependency), \n" +
    "                        'sap-icon--message-warning':!$ctrl.isInSync(dependency)}\"\n" +
    "                ></span>\n" +
    "                <span data-ng-if=\"dependency.isExternal\" class=\"sap-icon--globe\"></span>\n" +
    "            </span>\n" +
    "\n" +
    "            <span\n" +
    "                data-ng-if=\"!$ctrl.buildInfoTemplate(dependency)\"\n" +
    "                class=\"pull-right se-sync-panel__sync-info__right-icon\"\n" +
    "            >\n" +
    "                <span\n" +
    "                    data-status=\"{{dependency.status}}\"\n" +
    "                    class=\"se-sync-panel__sync-info-icon\"\n" +
    "                    data-ng-class=\"{\n" +
    "                        'sap-icon--accept':$ctrl.isInSync(dependency), \n" +
    "                        'sap-icon--message-warning':!$ctrl.isInSync(dependency)}\"\n" +
    "                ></span>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"se-sync-panel__footer\" data-ng-if=\"$ctrl.showSyncButton\">\n" +
    "        <button\n" +
    "            class=\"fd-button--emphasized se-sync-panel__footer__btn se-sync-panel__sync-btn\"\n" +
    "            data-ng-disabled=\"$ctrl.isSyncButtonDisabled()\"\n" +
    "            data-ng-click=\"$ctrl.syncItems()\"\n" +
    "            data-translate=\"se.cms.actionitem.page.sync\"\n" +
    "        ></button>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
