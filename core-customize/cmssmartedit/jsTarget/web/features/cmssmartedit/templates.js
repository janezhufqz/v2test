angular.module('cmssmarteditTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('web/features/cmssmartedit/components/externalComponent/externalComponentButtonTemplate.html',
    "<div class=\"se-ctx-menu-btn__msg\" data-ng-if=\"ctrl.isReady\">{{ctrl.catalogVersion}}</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/externalComponent/externalComponentDecoratorTemplate.html',
    "<div\n" +
    "    data-ng-class=\"{\n" +
    "    'cms-external-component-decorator': !ctrl.isExtenalSlot, \n" +
    "    'disabled-shared-slot-hovered': ctrl.active && !ctrl.isExtenalSlot, \n" +
    "    'cms-external-component-decorator--versioning': ctrl.isVersioningPerspective}\"\n" +
    ">\n" +
    "    <div class=\"se-ctx-menu__overlay\" data-ng-if=\"!ctrl.isExtenalSlot && ctrl.isReady\">\n" +
    "        <span\n" +
    "            data-ng-if=\"!ctrl.active || ctrl.isVersioningPerspective\"\n" +
    "            data-y-popover\n" +
    "            data-placement=\"'bottom'\"\n" +
    "            data-template=\"ctrl.getTooltipTemplate()\"\n" +
    "            data-trigger=\"'hover'\"\n" +
    "            class=\"sap-icon--globe se-ctx-menu-element__btn\"\n" +
    "            data-ng-class=\"{'sap-icon--globe--version': ctrl.isVersioningPerspective}\"\n" +
    "        ></span>\n" +
    "    </div>\n" +
    "    <div\n" +
    "        class=\"se-wrapper-data\"\n" +
    "        data-ng-class=\"{'disabled-shared-slot-versioning-mode': ctrl.isVersioningPerspective && !ctrl.isExtenalSlot}\"\n" +
    "        data-ng-transclude\n" +
    "    ></div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/sharedComponent/sharedComponentButtonTemplate.html',
    "<div class=\"se-ctx-menu-btn__msg\">\n" +
    "    <div\n" +
    "        class=\"se-ctx-menu-btn__msg-title\"\n" +
    "        data-translate=\"se.cms.contextmenu.shared.component.info.title\"\n" +
    "    ></div>\n" +
    "    <div data-ng-if=\"$ctrl.isReady\" class=\"se-ctx-menu-btn__msg-description\">\n" +
    "        {{ $ctrl.message | translate }}\n" +
    "    </div>\n" +
    "    <div data-ng-if=\"!$ctrl.isReady\"><div class=\"spinner-sm spinner-light\"></div></div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotShared/slotSharedButtonTemplate.html',
    "<div class=\"se-shared-slot-button-template\" data-ng-if=\"ctrl.slotSharedFlag\">\n" +
    "    <div\n" +
    "        class=\"se-slot-ctx-menu__dropdown-toggle-wrapper se-slot-ctx-menu__divider\"\n" +
    "        data-uib-dropdown\n" +
    "        data-dropdown-append-to=\"'#smarteditoverlay'\"\n" +
    "        data-auto-close=\"outsideClick\"\n" +
    "        data-is-open=\"ctrl.isPopupOpened\"\n" +
    "    >\n" +
    "        <button\n" +
    "            type=\"button\"\n" +
    "            data-uib-dropdown-toggle\n" +
    "            class=\"se-slot-ctx-menu__dropdown-toggle sap-icon--chain-link se-slot-ctx-menu__dropdown-toggle-icon\"\n" +
    "            data-ng-class=\"{'se-slot-ctx-menu__dropdown-toggle--open': ctrl.isPopupOpened}\"\n" +
    "            id=\"sharedSlotButton-{{::ctrl.slotId}}\"\n" +
    "        ></button>\n" +
    "        <div\n" +
    "            class=\"dropdown-menu dropdown-menu-right se-slot__dropdown-menu\"\n" +
    "            data-uib-dropdown-menu\n" +
    "        >\n" +
    "            <div\n" +
    "                class=\"se-slot-contextual-menu__header\"\n" +
    "                data-translate=\"se.sharedslot.decorator.label\"\n" +
    "            ></div>\n" +
    "\n" +
    "            <div class=\"se-shared-slot__body\">\n" +
    "                <div\n" +
    "                    class=\"se-shared-slot__description\"\n" +
    "                    data-translate=\"se.cms.slot.shared.popover.message\"\n" +
    "                ></div>\n" +
    "\n" +
    "                <div has-operation-permission=\"'se.shared.slot.override.options'\">\n" +
    "                    <div\n" +
    "                        class=\"se-shared-slot__sub-header\"\n" +
    "                        data-translate=\"se.cms.slot.shared.popover.convertoptions.title\"\n" +
    "                    ></div>\n" +
    "\n" +
    "                    <div class=\"se-shared-slot__option\">\n" +
    "                        <a\n" +
    "                            class=\"se-shared-slot__link fd-link\"\n" +
    "                            data-ng-click=\"ctrl.convertToNonSharedSlotAndCloneComponents()\"\n" +
    "                            data-translate=\"se.cms.slot.shared.popover.button.clonecomponents\"\n" +
    "                        >\n" +
    "                        </a>\n" +
    "                        <div\n" +
    "                            class=\"se-shared-slot__link-description\"\n" +
    "                            data-translate=\"se.cms.slot.shared.popover.text.clonecomponents\"\n" +
    "                        ></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"se-shared-slot__option\">\n" +
    "                        <a\n" +
    "                            class=\"se-shared-slot__link fd-link\"\n" +
    "                            data-ng-click=\"ctrl.convertToNonSharedSlotAndRemoveComponents()\"\n" +
    "                            data-translate=\"se.cms.slot.shared.popover.button.removecomponents\"\n" +
    "                        >\n" +
    "                        </a>\n" +
    "                        <div\n" +
    "                            class=\"se-shared-slot__link-description\"\n" +
    "                            data-translate=\"se.cms.slot.shared.popover.text.removecomponents\"\n" +
    "                        ></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotShared/slotSharedTemplate.html',
    "<slot-shared-button\n" +
    "    data-slot-id=\"{{::ctrl.smarteditComponentId}}\"\n" +
    "    data-component-attributes=\"ctrl.componentAttributes\"\n" +
    "    data-set-remain-open=\"ctrl.setRemainOpen(button, remainOpen)\"\n" +
    ">\n" +
    "</slot-shared-button>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotSharedDisabled/externalSlotDisabledDecoratorTemplate.html',
    "<div class=\"se-decorator-wrap\">\n" +
    "    <slot-disabled-component\n" +
    "        data-active=\"ctrl.active\"\n" +
    "        data-component-attributes=\"ctrl.componentAttributes\"\n" +
    "    />\n" +
    "    <div ng-transclude></div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotSharedDisabled/sharedSlotDisabledDecoratorTemplate.html',
    "<div class=\"se-decorator-wrap\">\n" +
    "    <slot-disabled-component\n" +
    "        data-active=\"ctrl.active\"\n" +
    "        data-component-attributes=\"ctrl.componentAttributes\"\n" +
    "    />\n" +
    "    <div ng-transclude></div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotSharedDisabled/slotDisabledTemplate.html',
    "<div\n" +
    "    class=\"disabled-shared-slot se-slot-popover external-shared-slot\"\n" +
    "    data-ng-class=\"{ 'disabled-shared-slot-hovered': ctrl.active, 'external-shared-slot': ctrl.isExternalSlot, 'disabled-shared-slot-versioning-mode': ctrl.isVersioningPerspective, 'disabled-shared-slot': !ctrl.isVersioningPerspective}\"\n" +
    "    data-popover-content=\"{{ctrl.getPopoverMessage()}}\"\n" +
    ">\n" +
    "    <div class=\"se-slot-popover__arrow\"><div class=\"se-slot-popover__arrow--fill\"></div></div>\n" +
    "    <div\n" +
    "        class=\"disabled-shared-slot__icon--outer disabled-shared-slot__icon--outer-linked\"\n" +
    "        data-ng-class=\"[ctrl.getOuterSlotClass(), { 'disabled-shared-slot__icon--outer-hovered': ctrl.active && !ctrl.isVersioningPerspective}]\"\n" +
    "    >\n" +
    "        <span\n" +
    "            class=\"hyicon shared_slot_disabled_icon disabled-shared-slot__icon--inner\"\n" +
    "            data-ng-class=\"ctrl.getSlotIconClass()\"\n" +
    "        >\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotUnshared/slotUnsharedButtonTemplate.html',
    "<div class=\"slot-unshared-button-template\" data-ng-if=\"ctrl.slotUnsharedFlag\">\n" +
    "    <div\n" +
    "        class=\"se-slot-ctx-menu__dropdown-toggle-wrapper se-slot-ctx-menu__divider\"\n" +
    "        data-uib-dropdown\n" +
    "        data-dropdown-append-to=\"'#smarteditoverlay'\"\n" +
    "        data-auto-close=\"outsideClick\"\n" +
    "        data-is-open=\"ctrl.isPopupOpened\"\n" +
    "    >\n" +
    "        <button\n" +
    "            type=\"button\"\n" +
    "            data-uib-dropdown-toggle\n" +
    "            class=\"se-slot-ctx-menu__dropdown-toggle sap-icon--broken-link se-slot-ctx-menu__dropdown-toggle-icon\"\n" +
    "            data-ng-class=\"{'se-slot-ctx-menu__dropdown-toggle--open': ctrl.isPopupOpened}\"\n" +
    "            id=\"slot-unshared-button-{{::ctrl.slotUid}}\"\n" +
    "        ></button>\n" +
    "        <div\n" +
    "            class=\"dropdown-menu dropdown-menu-right se-toolbar-menu-content se-slot__dropdown-menu\"\n" +
    "            data-uib-dropdown-menu\n" +
    "        >\n" +
    "            <div\n" +
    "                class=\"se-slot-contextual-menu__header\"\n" +
    "                data-translate=\"se.cms.unshared.slot.header\"\n" +
    "            ></div>\n" +
    "            <div class=\"shared-slot__divider\"></div>\n" +
    "            <div class=\"se-shared-slot__body\">\n" +
    "                <div\n" +
    "                    class=\"se-shared-slot__link-description se-shared-slot__link-description__unshared\"\n" +
    "                    data-translate=\"se.cms.slot.unshared.popover.message\"\n" +
    "                ></div>\n" +
    "                <div data-has-operation-permission=\"'se.revert.to.shared.slot.link'\">\n" +
    "                    <a\n" +
    "                        class=\"se-shared-slot__link fd-link\"\n" +
    "                        data-ng-click=\"ctrl.revertToSharedSlot()\"\n" +
    "                        data-translate=\"se.cms.slot.unshared.revert.to.shared.title\"\n" +
    "                    >\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotUnshared/slotUnsharedButtonWrapperTemplate.html',
    "<slot-unshared-button\n" +
    "    data-slot-uuid=\"{{::ctrl.componentAttributes.smarteditComponentUuid}}\"\n" +
    "    data-slot-uid=\"{{::ctrl.smarteditComponentId}}\"\n" +
    "    data-set-remain-open=\"ctrl.setRemainOpen(button, remainOpen)\"\n" +
    "></slot-unshared-button>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotVisibility/hiddenComponentMenu/hiddenComponentMenuItemsTemplate.html',
    "<div class=\"se-hidden-component-menu fd-menu__list\">\n" +
    "    <div\n" +
    "        class=\"se-hidden-component-menu__item fd-menu__item\"\n" +
    "        data-ng-repeat=\"dropdownItem in ctrl.menuItems\"\n" +
    "        data-ng-click=\"ctrl.executeItemCallback(dropdownItem, $event)\"\n" +
    "    >\n" +
    "        <span\n" +
    "            class=\"se-hidden-component-menu__item-icon\"\n" +
    "            data-ng-class=\"[dropdownItem.displayIconClass]\"\n" +
    "        ></span>\n" +
    "        <span class=\"se-hidden-component-menu__item-link\">\n" +
    "            {{ dropdownItem.i18nKey | translate }}\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotVisibility/hiddenComponentMenu/hiddenComponentMenuTemplate.html',
    "<se-popup-overlay\n" +
    "    class=\"se-hidden-component-menu__popup-anchor\"\n" +
    "    [popup-overlay]=\"ctrl.popupConfig\"\n" +
    "    [popup-overlay-trigger]=\"ctrl.isMenuOpen\"\n" +
    "    (popup-overlay-on-hide)=\"ctrl.onMenuHide()\"\n" +
    ">\n" +
    "    <span\n" +
    "        data-ng-if=\"ctrl.menuItems.length > 0\"\n" +
    "        data-ng-click=\"ctrl.onButtonClick($event)\"\n" +
    "        class=\"sap-icon--overflow se-hidden-component-menu__toggle\"\n" +
    "    ></span>\n" +
    "</se-popup-overlay>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotVisibility/slotVisibilityButtonTemplate.html',
    "<div\n" +
    "    class=\"se-slot-ctx-menu__dropdown-toggle-wrapper \n" +
    "        se-slot-ctx-menu__dropdown-toggle-wrapper--slot-visibility \n" +
    "        se-slot-ctx-menu__divider\"\n" +
    "    data-uib-dropdown\n" +
    "    data-dropdown-append-to=\"'#smarteditoverlay'\"\n" +
    "    data-ng-if=\"ctrl.buttonVisible\"\n" +
    "    data-is-open=\"ctrl.isComponentListOpened\"\n" +
    ">\n" +
    "    <button\n" +
    "        type=\"button\"\n" +
    "        data-uib-dropdown-toggle\n" +
    "        class=\"se-slot-ctx-menu__dropdown-toggle--slot-visibility se-slot-ctx-menu__dropdown-toggle\"\n" +
    "        data-ng-class=\"{'se-slot-ctx-menu__dropdown-toggle--open': ctrl.isComponentListOpened}\"\n" +
    "        id=\"slot-visibility-button-{{::ctrl.slotId}}\"\n" +
    "    >\n" +
    "        <span class=\"se-slot-ctx-menu__dropdown-toggle-icon sap-icon--hide\"></span>\n" +
    "        <span class=\"se-slot-ctx-menu__dropdown-toggle-add-on\"\n" +
    "            >{{ ::ctrl.hiddenComponentCount }}</span\n" +
    "        >\n" +
    "    </button>\n" +
    "\n" +
    "    <div\n" +
    "        class=\"dropdown-menu dropdown-menu-right se-slot__dropdown-menu\"\n" +
    "        data-uib-dropdown-menu\n" +
    "        data-ng-click=\"ctrl.onInsideClick($event)\"\n" +
    "        role=\"menu\"\n" +
    "        id=\"slot-visibility-list-{{::ctrl.slotId}}\"\n" +
    "    >\n" +
    "        <div\n" +
    "            class=\"se-slot-contextual-menu__header\"\n" +
    "            data-translate=\"se.cms.slotvisibility.list.title\"\n" +
    "        ></div>\n" +
    "\n" +
    "        <ul class=\"se-slot-visility__component-list\">\n" +
    "            <li\n" +
    "                data-ng-repeat=\"component in ctrl.hiddenComponents track by $index\"\n" +
    "                class=\"se-slot-visility__component-list-item\"\n" +
    "            >\n" +
    "                <span\n" +
    "                    data-y-popover\n" +
    "                    data-ng-if=\"component.isExternal\"\n" +
    "                    data-trigger=\"'hover'\"\n" +
    "                    data-template=\"ctrl.getTemplateInfoForExternalComponent()\"\n" +
    "                >\n" +
    "                    <slot-visibility-component\n" +
    "                        data-component=\"component\"\n" +
    "                        data-component-id=\"{{::component.uid}}\"\n" +
    "                        data-slot-id=\"{{::ctrl.slotId}}\"\n" +
    "                    ></slot-visibility-component>\n" +
    "                </span>\n" +
    "                <slot-visibility-component\n" +
    "                    data-component=\"component\"\n" +
    "                    data-ng-if=\"!component.isExternal\"\n" +
    "                    data-component-id=\"{{::component.uid}}\"\n" +
    "                    data-slot-id=\"{{::ctrl.slotId}}\"\n" +
    "                ></slot-visibility-component>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotVisibility/slotVisibilityComponentTemplate.html',
    "<div\n" +
    "    class=\"se-slot-visibility-wrapper\"\n" +
    "    data-ng-class=\"{'se-slot-visibility-wrapper__external': ctrl.readOnly}\"\n" +
    ">\n" +
    "    <div class=\"se-slot-visiblity-component__content\" data-ng-if=\"ctrl.isReady\">\n" +
    "        <div class=\"se-slot-visibility__icon-wrapper\">\n" +
    "            <div class=\"se-slot-visibility__icon sap-icon--home-share\"></div>\n" +
    "            <div\n" +
    "                data-ng-if=\"ctrl.isSharedComponent\"\n" +
    "                class=\"se-slot-visibility__icon--shared sap-icon--chain-link\"\n" +
    "            ></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"se-slot-visiblity-component__description\">\n" +
    "            <div data-ng-if=\"ctrl.readOnly\" class=\"se-slot-visiblity-component__name\">\n" +
    "                {{ ::ctrl.component.name }}\n" +
    "            </div>\n" +
    "            <div\n" +
    "                data-ng-if=\"!ctrl.readOnly\"\n" +
    "                class=\"se-slot-visiblity-component__name--link\"\n" +
    "                data-ng-click=\"ctrl.openEditorModal()\"\n" +
    "            >\n" +
    "                {{ ::ctrl.component.name }}\n" +
    "            </div>\n" +
    "            <div class=\"se-slot-visiblity-component__type\">{{ ::ctrl.component.typeCode }}</div>\n" +
    "            <div class=\"se-slot-visiblity-component__visibility\">\n" +
    "                {{'se.genericeditor.tab.visibility.title' | translate}}\n" +
    "                {{ctrl.componentVisibilitySwitch | translate}} / {{ctrl.componentRestrictionsCount}}\n" +
    "                {{'se.cms.restrictions.editor.tab' | translate}}\n" +
    "            </div>\n" +
    "            <div\n" +
    "                data-ng-if=\"ctrl.component.isExternal === true\"\n" +
    "                class=\"sap-icon--globe slot-visiblity-component--globe-icon\"\n" +
    "            ></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <hidden-component-menu\n" +
    "        class=\"slot-visiblity-component--hidden-menu\"\n" +
    "        data-slot-id=\"ctrl.slotId\"\n" +
    "        data-component=\"ctrl.component\"\n" +
    "    ></hidden-component-menu>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/slotVisibility/slotVisibilityWidgetTemplate.html',
    "<slot-visibility-button\n" +
    "    data-slot-id=\"{{::ctrl.smarteditComponentId}}\"\n" +
    "    data-set-remain-open=\"ctrl.setRemainOpen(button, remainOpen)\"\n" +
    "/>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/synchronize/slots/slotSyncButtonTemplate.html',
    "<div class=\"se-slot-sync-button-template\" data-ng-if=\"ctrl.ready\">\n" +
    "    <div\n" +
    "        class=\"se-slot-ctx-menu__dropdown-toggle-wrapper se-slot-ctx-menu__divider\"\n" +
    "        data-uib-dropdown\n" +
    "        data-dropdown-append-to=\"'#smarteditoverlay'\"\n" +
    "        data-auto-close=\"outsideClick\"\n" +
    "        data-is-open=\"ctrl.isPopupOpened\"\n" +
    "    >\n" +
    "        <span\n" +
    "            data-y-popover\n" +
    "            class=\"se-slot-ctx-menu__popover-ancor\"\n" +
    "            data-trigger=\"'hover'\"\n" +
    "            data-template=\"ctrl.newPageIsNotSynchronizedTemplate\"\n" +
    "            data-ng-if=\"ctrl.newPageIsNotSynchronized\"\n" +
    "            data-placement=\"'bottom'\"\n" +
    "        >\n" +
    "        </span>\n" +
    "\n" +
    "        <button\n" +
    "            type=\"button\"\n" +
    "            data-uib-dropdown-toggle\n" +
    "            class=\"se-slot-ctx-menu__dropdown-toggle\"\n" +
    "            data-ng-class=\"{'se-slot-ctx-menu__dropdown-toggle--open': ctrl.isPopupOpened, \n" +
    "                'se-slot-ctx-menu__dropdown-toggle--disabled': ctrl.newPageIsNotSynchronized }\"\n" +
    "            id=\"slot-sync-button-{{::ctrl.slotId}}\"\n" +
    "        >\n" +
    "            <span class=\"sap-icon--synchronize se-slot-ctx-menu__dropdown-toggle-icon\"></span>\n" +
    "            <span\n" +
    "                data-ng-if=\"!ctrl.isSlotInSync\"\n" +
    "                class=\"sap-icon--alert se-slot-sync__btn-status se-slot-ctx-menu__dropdown-toggle-add-on\"\n" +
    "            ></span>\n" +
    "        </button>\n" +
    "        <div class=\"se-slot__dropdown-menu dropdown-menu-right\" data-uib-dropdown-menu role=\"menu\">\n" +
    "            <div class=\"se-toolbar-menu-content--wrapper\">\n" +
    "                <div\n" +
    "                    class=\"se-slot-contextual-menu__header\"\n" +
    "                    data-translate=\"se.cms.synchronization.slot.header\"\n" +
    "                ></div>\n" +
    "                <div class=\"se-slot-sync__body\">\n" +
    "                    <slot-synchronization-panel\n" +
    "                        data-ng-if=\"ctrl.isPopupOpened\"\n" +
    "                        data-slot-id=\"ctrl.slotId\"\n" +
    "                    ></slot-synchronization-panel>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/synchronize/slots/slotSynchronizationPanelTemplate.html',
    "<div data-page-sensitive>\n" +
    "    <synchronization-panel\n" +
    "        data-item-id=\"$ctrl.slotId\"\n" +
    "        data-get-sync-status=\"$ctrl.getSyncStatus\"\n" +
    "        data-perform-sync=\"$ctrl.performSync\"\n" +
    "        data-get-api=\"$ctrl.getApi($api)\"\n" +
    "    >\n" +
    "    </synchronization-panel>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/synchronize/slots/slotSyncTemplate.html',
    "<slot-sync-button\n" +
    "    data-slot-id=\"{{::ctrl.smarteditComponentId}}\"\n" +
    "    data-set-remain-open=\"ctrl.setRemainOpen(button, remainOpen)\"\n" +
    "></slot-sync-button>\n"
  );


  $templateCache.put('web/features/cmssmartedit/components/synchronize/slots/SyncIndicatorDecoratorTemplate.html',
    "<div\n" +
    "    class=\"sync-indicator-decorator\"\n" +
    "    [ngClass]=\"syncStatus.status\"\n" +
    "    [attr.sync-status]=\"syncStatus.status\"\n" +
    ">\n" +
    "    <ng-content class=\"se-wrapper-data\"></ng-content>\n" +
    "</div>\n"
  );

}]);
