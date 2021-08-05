angular.module('cmssmarteditContainerTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/cmsItemDropdown/cmsItemDropdownTemplate.html',
    "<div class=\"cms-nested-component-template\">\n" +
    "    <div data-recompile-dom=\"cmsItemDropdownCtrl._recompileDom\" class=\"cms-nested-component-select\">\n" +
    "        <se-dropdown\n" +
    "            data-field=\"cmsItemDropdownCtrl.field\"\n" +
    "            data-qualifier=\"cmsItemDropdownCtrl.qualifier\"\n" +
    "            data-model=\"cmsItemDropdownCtrl.model\"\n" +
    "            data-id=\"cmsItemDropdownCtrl.id\"\n" +
    "            data-item-template-url=\"cmsItemDropdownCtrl.itemTemplateUrl\"\n" +
    "            data-get-api=\"cmsItemDropdownCtrl.configureSeDropdown($api)\"\n" +
    "            data-show-remove-button=\"true\"\n" +
    "        ></se-dropdown>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/cmsItemDropdown/cmsItemDropdownWrapperTemplate.html',
    "<cms-item-dropdown\n" +
    "    data-field=\"field\"\n" +
    "    data-qualifier=\"qualifier\"\n" +
    "    data-model=\"model\"\n" +
    "    data-editor-stack-id=\"editorStackId\"\n" +
    "    data-id=\"id\"\n" +
    "></cms-item-dropdown>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/cmsItemDropdown/components/nestedComponentTemplate.html',
    "<div class=\"cms-nested-component\" data-component-id=\"{{$ctrl.item.uid}}\">\n" +
    "    <span\n" +
    "        class=\"y-select-item-printer cms-nested-component_item\"\n" +
    "        data-ng-if=\"$ctrl.isSelected\"\n" +
    "        data-ng-click=\"$event.stopPropagation(); $ctrl.onComponentClick();\"\n" +
    "    >\n" +
    "        <span class=\"sap-icon--card cms-nested-component__item-icon\"></span>\n" +
    "        <div class=\"cms-nested-component__item-data\">\n" +
    "            <p class=\"cms-nested-component__item-name\" title=\"{{$ctrl.item.name}}\">\n" +
    "                {{$ctrl.item.name}}\n" +
    "            </p>\n" +
    "            <p class=\"cms-nested-component__item-type\" title=\"{{$ctrl.item.typeCode}}\">\n" +
    "                {{$ctrl.item.typeCode}}\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </span>\n" +
    "    <div\n" +
    "        class=\"y-select-item-printer cms-nested-component__result-item\"\n" +
    "        data-ng-if=\"!$ctrl.isSelected\"\n" +
    "    >\n" +
    "        <span class=\"cms-nested-component__result-name\" title=\"{{$ctrl.item.name}}\">\n" +
    "            {{$ctrl.item.name}}\n" +
    "        </span>\n" +
    "        <span class=\"cms-nested-component__result-code\" title=\"{{$ctrl.item.typeCode}}\">\n" +
    "            {{$ctrl.item.typeCode}}\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/cmsItemDropdown/components/subTypeSelectorTemplate.html',
    "<ul class=\"se-sub-type__selector fd-menu__list\">\n" +
    "    <li\n" +
    "        class=\"cms-sub-type__selector-link fd-menu__item\"\n" +
    "        data-ng-repeat=\"subType in $ctrl.subTypes\"\n" +
    "        data-ng-click=\"$ctrl.onChange(subType)\"\n" +
    "    >\n" +
    "        {{ subType.label | translate }}\n" +
    "    </li>\n" +
    "</ul>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/cmsItemDropdown/templates/cmsItemSearchTemplate.html',
    "<nested-component\n" +
    "    data-item=\"item\"\n" +
    "    data-qualifier=\"ySelect.id\"\n" +
    "    data-is-selected=\"selected\"\n" +
    "></nested-component>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/componentMenuTemplate.html',
    "<div\n" +
    "    class=\"se-component-menu\"\n" +
    "    data-recompile-dom=\"$ctrl._recompileDom\"\n" +
    "    data-ng-class=\"{ 'se-component-menu__localized': $ctrl.hasMultipleContentCatalogs }\"\n" +
    ">\n" +
    "    <div\n" +
    "        data-translate=\"se.cms.componentmenu.dropdown.header\"\n" +
    "        class=\"se-component-menu__title\"\n" +
    "    ></div>\n" +
    "    <div\n" +
    "        class=\"se-component-menu__tip\"\n" +
    "        data-translate=\"se.cms.componentmenu.label.draganddrop\"\n" +
    "    ></div>\n" +
    "\n" +
    "    <se-tabs\n" +
    "        class=\"se-component-menu__tabs\"\n" +
    "        [tabs-list]=\"$ctrl.tabsList\"\n" +
    "        [model]=\"$ctrl.model\"\n" +
    "        [num-tabs-displayed]=\"2\"\n" +
    "    >\n" +
    "    </se-tabs>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/componentMenuWrapperTemplate.html',
    "<component-menu data-action-item=\"item\" data-is-open=\"item.isOpen\"></component-menu>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/components/catalogVersionTemplate.html',
    "<div class=\"se-component-menu__select-local\">\n" +
    "    <span\n" +
    "        class=\"hyicon hyicon-globe se-component-menu__select-globe\"\n" +
    "        data-ng-if=\"item.isCurrentCatalog == false\"\n" +
    "    ></span>\n" +
    "    <span class=\"se-component-menu__select-text\"\n" +
    "        >{{item.catalogName | l10n}} - {{item.catalogVersionId}}</span\n" +
    "    >\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/components/componentInfoPopoverTemplate.html',
    "<div data-translate=\"se.cms.component.display.off.tooltip\"></div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/components/componentItemTemplate.html',
    "<div\n" +
    "    class=\"se-component-item\"\n" +
    "    data-ng-class=\"{\n" +
    "        &quot;se-component-item--disabled&quot;: $ctrl.componentDisabled,\n" +
    "        &quot;smartEditComponent&quot;: !$ctrl.componentDisabled }\"\n" +
    "    data-smartedit-component-id=\"{{$ctrl.componentInfo.uid}}\"\n" +
    "    data-smartedit-component-uuid=\"{{$ctrl.componentInfo.uuid}}\"\n" +
    "    data-smartedit-component-type=\"{{$ctrl.componentInfo.typeCode}}\"\n" +
    ">\n" +
    "    <div\n" +
    "        class=\"se-component-item--disabled-overlay\"\n" +
    "        data-ng-if=\"$ctrl.componentDisabled\"\n" +
    "        data-y-popover\n" +
    "        data-trigger=\"'hover'\"\n" +
    "        data-placement=\"'bottom'\"\n" +
    "        data-template=\"$ctrl.getTemplateInfoForNonCloneableComponent()\"\n" +
    "    ></div>\n" +
    "    <div class=\"se-component-item--image\">\n" +
    "        <span class=\"sap-icon--card\"></span>\n" +
    "        <div data-ng-if=\"$ctrl.isSharedComponent\">\n" +
    "            <span class=\"se-component-item--image-shared--background\"></span>\n" +
    "            <span class=\"glyphicon glyphicon-link se-component-item--image-shared\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"se-component-item--details-container\">\n" +
    "        <div\n" +
    "            class=\"se-component-item--details\"\n" +
    "            title=\"{{$ctrl.componentInfo.name}} - {{$ctrl.componentInfo.typeCode}}\"\n" +
    "        >\n" +
    "            <div class=\"se-component-item--details-name\">{{$ctrl.componentInfo.name}}</div>\n" +
    "            <div class=\"se-component-item--details-type\">{{$ctrl.componentInfo.typeCode}}</div>\n" +
    "        </div>\n" +
    "        <div\n" +
    "            data-ng-if=\"!$ctrl.componentInfo.visible\"\n" +
    "            class=\"se-component-item--visibility\"\n" +
    "            data-y-popover\n" +
    "            data-trigger=\"'hover'\"\n" +
    "            data-placement=\"'bottom'\"\n" +
    "            data-template-url=\"'componentInfoPopoverTemplate.html'\"\n" +
    "        >\n" +
    "            <span class=\"hyicon hyicon-unpowered\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/components/componentSearchTemplate.html',
    "<div class=\"se-input-group se-component-menu__input-group\">\n" +
    "    <input\n" +
    "        type=\"text\"\n" +
    "        class=\"se-input-group__input-area\"\n" +
    "        name=\"search-term\"\n" +
    "        data-ng-model=\"$ctrl.searchTerm\"\n" +
    "        data-ng-model-options=\"{debounce: 500}\"\n" +
    "        placeholder=\"{{$ctrl.placeholder | translate}}\"\n" +
    "    />\n" +
    "\n" +
    "    <span class=\"sap-icon--search se-input-group__addon\"></span>\n" +
    "\n" +
    "    <div\n" +
    "        data-ng-show=\"$ctrl.showResetButton\"\n" +
    "        class=\"se-input-group__addon se-input-group__clear-btn\"\n" +
    "        data-ng-click=\"$ctrl._resetSearchBox()\"\n" +
    "    >\n" +
    "        <span class=\"sap-icon--decline\"></span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/components/componentTypeTemplate.html',
    "<div\n" +
    "    class=\"se-component-item smartEditComponent\"\n" +
    "    data-smartedit-component-type=\"{{$ctrl.typeInfo.code}}\"\n" +
    ">\n" +
    "    <div class=\"se-component-item--image\"><span class=\"sap-icon--card\"></span></div>\n" +
    "    <div\n" +
    "        class=\"se-component-item--details-type\"\n" +
    "        title=\"{{$ctrl.typeInfo.i18nKey | translate}}\"\n" +
    "        data-translate=\"{{$ctrl.typeInfo.i18nKey}}\"\n" +
    "    ></div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/tabs/componentsTabTemplate.html',
    "<div class=\"se-component-menu__tabs-header\">\n" +
    "    <div\n" +
    "        class=\"se-component-menu__tabs-header--upper\"\n" +
    "        data-ng-if=\"$ctrl.hasMultipleContentCatalogs == true\"\n" +
    "    >\n" +
    "        <y-select\n" +
    "            class=\"se-component-menu__select\"\n" +
    "            data-id=\"uuid\"\n" +
    "            data-ng-model=\"$ctrl.selectedCatalogVersionId\"\n" +
    "            data-on-change=\"$ctrl.onCatalogVersionChange\"\n" +
    "            data-fetch-strategy=\"$ctrl.catalogVersionsFetchStrategy\"\n" +
    "            data-item-template=\"::$ctrl.catalogVersionTemplate\"\n" +
    "            data-search-enabled=\"false\"\n" +
    "        />\n" +
    "    </div>\n" +
    "    <div class=\"se-component-menu__tabs-header--lower\">\n" +
    "        <component-search\n" +
    "            data-on-change=\"$ctrl.onSearchTermChanged(searchTerm)\"\n" +
    "            class=\"se-component-menu__tabs-search\"\n" +
    "            data-placeholder=\"se.cms.componentmenu.search.placeholder\"\n" +
    "        ></component-search>\n" +
    "\n" +
    "        <fieldset class=\"fd-form__set\">\n" +
    "            <div class=\"fd-form__item fd-form__item--check se-component-menu__clone-on-drop\">\n" +
    "                <input\n" +
    "                    type=\"checkbox\"\n" +
    "                    class=\"fd-form__control se-component-menu__clone-check-box\"\n" +
    "                    id=\"component-clone-checkbox\"\n" +
    "                    name=\"clone-on-drop\"\n" +
    "                    data-ng-model=\"$ctrl.cloneOnDrop\"\n" +
    "                    data-ng-change=\"$ctrl.onComponentCloneOnDropChange()\"\n" +
    "                />\n" +
    "                <label\n" +
    "                    class=\"fd-form__label se-component-menu__clone-label\"\n" +
    "                    for=\"component-clone-checkbox\"\n" +
    "                    data-translate=\"se.cms.component.clone.on.drop.label\"\n" +
    "                >\n" +
    "                </label>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"se-component-menu__result-container\" recompile-dom=\"$ctrl.resetComponentsList\">\n" +
    "    <se-infinite-scrolling\n" +
    "        data-ng-if=\"$ctrl.isActive\"\n" +
    "        class=\"se-component-menu__infinite-scroll\"\n" +
    "        data-ng-class=\"{'se-component-menu__infinite-scroll--short': $ctrl.hasMultipleContentCatalogs == true}\"\n" +
    "        drop-down-class=\"ySEComponents\"\n" +
    "        [page-size]=\"10\"\n" +
    "        [mask]=\"$ctrl.searchTerm\"\n" +
    "        [fetch-page]=\"$ctrl.loadComponentItems\"\n" +
    "        [context]=\"$ctrl\"\n" +
    "    >\n" +
    "        <div class=\"se-component-menu__result\">\n" +
    "            <component-item\n" +
    "                class=\"se-component-menu__item-wrap\"\n" +
    "                data-component-info=\"item\"\n" +
    "                data-clone-on-drop=\"$ctrl.cloneOnDrop\"\n" +
    "                data-ng-repeat=\"item in $ctrl.items track by item.uid\"\n" +
    "            ></component-item>\n" +
    "        </div>\n" +
    "    </se-infinite-scrolling>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/tabs/componentsTabWrapperTemplate.html',
    "<div>\n" +
    "    <components-tab\n" +
    "        has-multiple-content-catalogs=\"model.componentsTab.hasMultipleContentCatalogs\"\n" +
    "        is-active=\"tab.active\"\n" +
    "    ></components-tab>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/tabs/componentTypesTabTemplate.html',
    "<div class=\"se-component-menu__types-header\">\n" +
    "    <component-search\n" +
    "        data-on-change=\"$ctrl.onSearchTermChanged(searchTerm)\"\n" +
    "        class=\"se-component-menu__type-search\"\n" +
    "        data-placeholder=\"se.cms.componentmenu.search.type.placeholder\"\n" +
    "    ></component-search>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"se-component-menu__result-container\">\n" +
    "    <se-infinite-scrolling\n" +
    "        class=\"se-component-menu__infinite-scroll\"\n" +
    "        data-ng-if=\"$ctrl.isMenuOpen || $ctrl.isTabActive\"\n" +
    "        drop-down-class=\"ySEComponents\"\n" +
    "        [page-size]=\"10\"\n" +
    "        [mask]=\"$ctrl.searchTerm\"\n" +
    "        [fetch-page]=\"$ctrl.loadComponentTypes\"\n" +
    "        [context]=\"$ctrl\"\n" +
    "    >\n" +
    "        <div class=\"se-component-menu__result se-component-menu__result--types\">\n" +
    "            <div class=\"se-component-menu__item-wrap\" data-ng-repeat=\"componentType in $ctrl.items\">\n" +
    "                <component-type data-type-info=\"componentType\"></component-type>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </se-infinite-scrolling>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/componentMenu/tabs/componentTypesTabWrapperTemplate.html',
    "<component-types-tab is-tab-active=\"tab.active\" is-menu-open=\"model.isOpen\"></component-types-tab>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/editorModal/tabs/basicTabTemplate.html',
    "<basic-tab\n" +
    "    class=\"sm-tab-content\"\n" +
    "    save-tab=\"onSave\"\n" +
    "    reset-tab=\"onReset\"\n" +
    "    cancel-tab=\"onCancel\"\n" +
    "    is-dirty-tab=\"isDirty\"\n" +
    "    data-tab-id=\"tabId\"\n" +
    "    data-component-info=\"model\"\n" +
    "    data-content=\"model.content\"\n" +
    "    component-id=\"model.componentUuid\"\n" +
    "    component-type=\"model.componentType\"\n" +
    ">\n" +
    "</basic-tab>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/restrictionEditor/componentRestrictionsEditorTemplate.html',
    "<restrictions-editor\n" +
    "    data-editable=\"componentRestrictionsEditorCtrl.isEditable\"\n" +
    "    data-on-restrictions-changed=\"componentRestrictionsEditorCtrl.restrictionsResult($onlyOneRestrictionMustApply, $restrictions)\"\n" +
    "    data-get-restriction-types=\"componentRestrictionsEditorCtrl.getRestrictionTypes()\"\n" +
    "    data-get-supported-restriction-types=\"componentRestrictionsEditorCtrl.getSupportedRestrictionTypes()\"\n" +
    "    data-item=\"componentRestrictionsEditorCtrl.model\"\n" +
    "    data-restrictions=\"componentRestrictionsEditorCtrl.model.restrictions\"\n" +
    ">\n" +
    "</restrictions-editor>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/restrictionEditor/componentRestrictionsEditorWrapperTemplate.html',
    "<component-restrictions-editor\n" +
    "    data-model=\"model\"\n" +
    "    data-editor=\"editor\"\n" +
    "    data-is-editable=\"!$ctrl.isFieldDisabled()\"\n" +
    "></component-restrictions-editor>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/restrictionEditor/pageRestrictionsEditorTemplate.html',
    "<se-message\n" +
    "    type=\"danger\"\n" +
    "    class=\"se-restrictions-editor--y-message--modal-adjusted\"\n" +
    "    ng-repeat=\"error in pageRestrictionsEditorCtrl.errors\"\n" +
    ">\n" +
    "    <ng-container se-message-description> <translate>{{error.message}}</translate> </ng-container>\n" +
    "</se-message>\n" +
    "<div data-ng-if=\"pageRestrictionsEditorCtrl.restrictions.length > 1\">\n" +
    "    <page-restrictions-info-message />\n" +
    "</div>\n" +
    "\n" +
    "<restrictions-editor\n" +
    "    data-editable=\"pageRestrictionsEditorCtrl.isEditable\"\n" +
    "    data-on-restrictions-changed=\"pageRestrictionsEditorCtrl.restrictionsResult($onlyOneRestrictionMustApply, $restrictions)\"\n" +
    "    data-get-restriction-types=\"pageRestrictionsEditorCtrl.getRestrictionTypes()\"\n" +
    "    data-get-supported-restriction-types=\"pageRestrictionsEditorCtrl.getSupportedRestrictionTypes()\"\n" +
    "    data-item=\"pageRestrictionsEditorCtrl.model\"\n" +
    "    data-restrictions=\"pageRestrictionsEditorCtrl.model.restrictions\"\n" +
    ">\n" +
    "</restrictions-editor>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/cmsComponents/restrictionEditor/pageRestrictionsEditorWrapperTemplate.html',
    "<page-restrictions-editor\n" +
    "    data-page=\"model\"\n" +
    "    data-is-editable=\"!$ctrl.isFieldDisabled()\"\n" +
    "></page-restrictions-editor>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/catalog/components/catalogAwareSelector/catalogAwareSelectorTemplate.html',
    "<div data-ng-if=\"ctrl.listIsEmpty()\">\n" +
    "    <!--\n" +
    "        It's important to add the type=button. Otherwise HTML 5 will default it to type=submit, causing the generic\n" +
    "        editor to submit the form whenever the panel opens.\n" +
    "    -->\n" +
    "    <button\n" +
    "        id=\"catalog-aware-selector-add-item\"\n" +
    "        type=\"button\"\n" +
    "        data-ng-if=\"ctrl.editable\"\n" +
    "        class=\"fd-button fd-button--compact se-catalog-aware-selector__add-item-btn\"\n" +
    "        data-ng-click=\"ctrl.openEditingPanel()\"\n" +
    "    >\n" +
    "        <span\n" +
    "            translate=\"se.cms.catalogaware.newbutton.title\"\n" +
    "            translate-values=\"{catalogItemType: ctrl.catalogItemType}\"\n" +
    "            class=\"se-catalog-aware-selector__add-item-btn-text\"\n" +
    "        ></span>\n" +
    "    </button>\n" +
    "</div>\n" +
    "\n" +
    "<div data-ng-if=\"!ctrl.listIsEmpty()\" class=\"se-catalog-aware-selector__content\">\n" +
    "    <div class=\"se-catalog-aware-selector__content__btn-wrapper\" data-ng-if=\"ctrl.editable\">\n" +
    "        <button\n" +
    "            type=\"button\"\n" +
    "            class=\"fd-button--light se-catalog-aware-selector__content__btn\"\n" +
    "            data-ng-click=\"ctrl.openEditingPanel()\"\n" +
    "        >\n" +
    "            {{'se.cms.catalogaware.list.addmore' | translate}}\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <se-editable-list\n" +
    "        [id]=\"ctrl.id + '_list'\"\n" +
    "        [item-template-url]=\"ctrl.itemTemplate\"\n" +
    "        [(items)]=\"ctrl.itemsList\"\n" +
    "        [on-change]=\"ctrl.onListChange\"\n" +
    "        [editable]=\"ctrl.editable\"\n" +
    "        [(refresh)]=\"ctrl._refreshListWidget\"\n" +
    "        class=\"se-catalog-aware-selector__list\"\n" +
    "    >\n" +
    "    </se-editable-list>\n" +
    "</div>\n" +
    "\n" +
    "<se-item-selector-panel\n" +
    "    data-panel-title=\"ctrl.currentOptions.panelTitle\"\n" +
    "    data-items-selected=\"ctrl.model\"\n" +
    "    data-get-catalogs=\"ctrl.getCatalogs\"\n" +
    "    data-items-fetch-strategy=\"ctrl.itemsFetchStrategy\"\n" +
    "    data-item-template=\"ctrl.itemTemplate\"\n" +
    "    data-on-change=\"ctrl.onPanelChange\"\n" +
    "    data-show-panel=\"ctrl.showPanel\"\n" +
    "    data-hide-panel=\"ctrl.closePanel\"\n" +
    "    data-catalog-item-type=\"ctrl.catalogItemType\"\n" +
    "    data-max-num-items=\"ctrl.maxNumItems\"\n" +
    ">\n" +
    "</se-item-selector-panel>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/catalog/components/categorySelector/categorySelectorTemplate.html',
    "<se-catalog-aware-selector\n" +
    "    data-id=\"{{ctrl.id}}\"\n" +
    "    data-ng-model=\"ctrl.model[ctrl.qualifier]\"\n" +
    "    data-item-template=\"ctrl.categoryTemplate\"\n" +
    "    data-get-catalogs=\"ctrl.getCatalogs\"\n" +
    "    data-items-fetch-strategy=\"ctrl.itemsFetchStrategy\"\n" +
    "    data-catalog-item-type-key=\"se.cms.catalogaware.catalogitemtype.category\"\n" +
    "    data-editable=\"ctrl.editable\"\n" +
    "></se-catalog-aware-selector>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/catalog/components/categorySelector/categoryTemplate.html',
    "<div class=\"row se-product-row\">\n" +
    "    <div data-ng-if=\"item\" class=\"se-category-row-container--item\">\n" +
    "        <div class=\"se-product-row__product\" title=\"{{item.name | l10n}}\">{{item.name | l10n}}</div>\n" +
    "        <div class=\"se-product-row__product\" title=\"{{item.code}}\">{{item.code}}</div>\n" +
    "        <div class=\"se-product-row__catalog\" title=\"{{item.catalogId}} - {{item.catalogVersion}}\">\n" +
    "            {{item.catalogId}} - {{item.catalogVersion}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div\n" +
    "        data-ng-if=\"node\"\n" +
    "        class=\"se-category-row-container--node\"\n" +
    "        data-ng-class=\"{\n" +
    "            'se-category-row-container--node-no-drag': !$ctrl.dragEnabled,\n" +
    "            'se-category-row-container--node-drag': $ctrl.dragEnabled,}\"\n" +
    "    >\n" +
    "        <div class=\"se-product-row__product\" title=\"{{node.name | l10n}}\">{{node.name | l10n}}</div>\n" +
    "        <div class=\"se-product-row__product\" title=\"{{node.code}}\">{{node.code}}</div>\n" +
    "        <div class=\"se-product-row__catalog\" title=\"{{node.catalogId}} - {{node.catalogVersion}}\">\n" +
    "            {{node.catalogId}} - {{node.catalogVersion}}\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <se-dropdown-menu\n" +
    "                data-ng-if=\"$ctrl.dragEnabled\"\n" +
    "                [dropdown-items]=\"$ctrl.getDropdownItems()\"\n" +
    "                [selected-item]=\"node\"\n" +
    "                class=\"pull-right se-tree-node__actions--more-menu\"\n" +
    "            ></se-dropdown-menu>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/catalog/components/categorySelector/multiCategorySelectorTemplate.html',
    "<se-category-selector\n" +
    "    data-id=\"{{field.qualifier}}\"\n" +
    "    data-model=\"model\"\n" +
    "    data-qualifier=\"qualifier\"\n" +
    "    data-editable=\"field.editable\"\n" +
    "></se-category-selector>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/catalog/components/itemSelectorPanel/catalogItemTemplate.html',
    "<span data-ng-bind-html=\"item.name | l10n\"></span>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/catalog/components/itemSelectorPanel/itemSelectorPanelTemplate.html',
    "<y-slider-panel\n" +
    "    data-slider-panel-show=\"ctrl._internalShowPanel\"\n" +
    "    data-slider-panel-hide=\"ctrl._internalHidePanel\"\n" +
    "    data-slider-panel-configuration=\"ctrl.sliderConfiguration\"\n" +
    "    class=\"se-item-selector-panel\"\n" +
    ">\n" +
    "    <content recompile-dom=\"ctrl.resetSelector\" class=\"se-item-selector-panel__content\">\n" +
    "        <!-- Show the dropdown only if there's more than one catalogs to choose from -->\n" +
    "        <div data-ng-if=\"ctrl.catalogs.length > 1\" class=\"se-item-selector-panel__content__item\">\n" +
    "            <label class=\"se-control-label\"\n" +
    "                >{{'se.cms.catalogaware.panel.catalogs.label' | translate}}</label\n" +
    "            >\n" +
    "            <y-select\n" +
    "                data-id=\"se-catalog-selector-dropdown\"\n" +
    "                data-ng-model=\"ctrl.catalogInfo.catalogId\"\n" +
    "                data-fetch-strategy=\"ctrl.catalogSelectorFetchStrategy\"\n" +
    "                data-item-template=\"ctrl.catalogItemTemplate\"\n" +
    "                data-on-change=\"ctrl._onCatalogSelectorChange\"\n" +
    "                data-reset=\"ctrl.resetCatalogSelector\"\n" +
    "                class=\"se-item-selector-panel__content__catalogs__yselect\"\n" +
    "            >\n" +
    "            </y-select>\n" +
    "            <label data-ng-if=\"ctrl.catalogs.length !== 1\">{{ctrl.catalogInfo.name | l10n}}</label>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"se-item-selector-panel__content__item\">\n" +
    "            <label class=\"se-control-label\"\n" +
    "                >{{'se.cms.catalogaware.panel.catalogsversion.label' | translate}}</label\n" +
    "            >\n" +
    "            <y-select\n" +
    "                data-id=\"se-catalog-version-selector-dropdown\"\n" +
    "                data-ng-model=\"ctrl.catalogInfo.catalogVersion\"\n" +
    "                data-fetch-strategy=\"ctrl.catalogVersionSelectorFetchStrategy\"\n" +
    "                data-on-change=\"ctrl._onCatalogVersionSelectorChange\"\n" +
    "                data-search-enabled=\"false\"\n" +
    "                data-reset=\"ctrl.resetCatalogVersionSelector\"\n" +
    "                class=\"se-item-selector-panel__content__catalog-version__yselect\"\n" +
    "            >\n" +
    "            </y-select>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Show the multi-select-->\n" +
    "        <div\n" +
    "            class=\"se-item-selector-panel__content__item\"\n" +
    "            data-ng-show=\"ctrl.catalogInfo.catalogVersion\"\n" +
    "        >\n" +
    "            <label class=\"se-control-label\">{{ctrl.catalogItemType}}</label>\n" +
    "            <y-select\n" +
    "                id=\"se-items-selector-dropdown\"\n" +
    "                multi-select=\"'true'\"\n" +
    "                controls=\"'true'\"\n" +
    "                ng-model=\"ctrl._internalItemsSelected\"\n" +
    "                on-change=\"ctrl._onItemsSelectorChange\"\n" +
    "                fetch-strategy=\"ctrl._internalItemsFetchStrategy\"\n" +
    "                reset=\"ctrl.resetItemsListSelector\"\n" +
    "                item-template=\"ctrl.itemTemplate\"\n" +
    "                is-read-only=\"!ctrl._isItemSelectorEnabled()\"\n" +
    "            >\n" +
    "            </y-select>\n" +
    "        </div>\n" +
    "    </content>\n" +
    "</y-slider-panel>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/catalog/components/productSelector/multiProductSelectorTemplate.html',
    "<se-product-selector\n" +
    "    data-id=\"{{field.qualifier}}\"\n" +
    "    data-model=\"model\"\n" +
    "    data-qualifier=\"qualifier\"\n" +
    "    data-editable=\"field.editable\"\n" +
    "></se-product-selector>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/catalog/components/productSelector/productSelectorTemplate.html',
    "<se-catalog-aware-selector\n" +
    "    data-id=\"{{ctrl.id}}\"\n" +
    "    data-ng-model=\"ctrl.model[ctrl.qualifier]\"\n" +
    "    data-item-template=\"ctrl.productTemplate\"\n" +
    "    data-get-catalogs=\"ctrl.getCatalogs\"\n" +
    "    data-items-fetch-strategy=\"ctrl.itemsFetchStrategy\"\n" +
    "    data-catalog-item-type-key=\"se.cms.catalogaware.catalogitemtype.product\"\n" +
    "    data-max-num-items=\"ctrl.maxNumItems\"\n" +
    "    data-editable=\"ctrl.editable\"\n" +
    "></se-catalog-aware-selector>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/catalog/components/productSelector/productTemplate.html',
    "<div class=\"row se-product-row\">\n" +
    "    <div data-ng-if=\"item !== undefined\" class=\"se-product-row-container\">\n" +
    "        <img\n" +
    "            class=\"se-default-product-img\"\n" +
    "            data-ng-src=\"{{item.thumbnail.url || '/cmssmartedit/images/product_thumbnail_default.png'}}\"\n" +
    "            alt=\"product image\"\n" +
    "        />\n" +
    "        <div class=\"se-product-row__product se-nowrap-ellipsis\" title=\"{{item.name | l10n}}\">\n" +
    "            {{item.name | l10n}}\n" +
    "        </div>\n" +
    "        <div class=\"se-product-row__product se-nowrap-ellipsis\" title=\"{{item.code}}\">\n" +
    "            {{item.code}}\n" +
    "        </div>\n" +
    "        <div class=\"se-product-row__catalog\">\n" +
    "            <div class=\"se-nowrap-ellipsis\" title=\"{{item.catalogId}} - {{item.catalogVersion}}\">\n" +
    "                {{item.catalogId}} - {{item.catalogVersion}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div\n" +
    "        data-ng-if=\"node !== undefined\"\n" +
    "        class=\"se-product-row-container\"\n" +
    "        data-ng-class=\"{\n" +
    "            'se-product-row-container--node-no-drag' : !$ctrl.dragEnabled,\n" +
    "            'se-product-row-container--node-drag': $ctrl.dragEnabled }\"\n" +
    "    >\n" +
    "        <img\n" +
    "            class=\"se-default-product-img\"\n" +
    "            data-ng-src=\"{{node.thumbnail.url || '/cmssmartedit/images/product_thumbnail_default.png'}}\"\n" +
    "            alt=\"product image\"\n" +
    "        />\n" +
    "        <div class=\"se-product-row__product se-nowrap-ellipsis\" title=\"{{node.name | l10n}}\">\n" +
    "            {{node.name | l10n}}\n" +
    "        </div>\n" +
    "        <div class=\"se-product-row__product se-nowrap-ellipsis\" title=\"{{node.code}}\">\n" +
    "            {{node.code}}\n" +
    "        </div>\n" +
    "        <div\n" +
    "            class=\"se-product-row__catalog se-nowrap-ellipsis\"\n" +
    "            title=\"{{node.catalogId}} - {{node.catalogVersion}}\"\n" +
    "        >\n" +
    "            {{node.catalogId}} - {{node.catalogVersion}}\n" +
    "        </div>\n" +
    "        <se-dropdown-menu\n" +
    "            data-ng-if=\"$ctrl.dragEnabled\"\n" +
    "            [dropdown-items]=\"$ctrl.getDropdownItems()\"\n" +
    "            [selected-item]=\"node\"\n" +
    "            class=\"pull-right se-tree-node__actions--more-menu\"\n" +
    "        ></se-dropdown-menu>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/cmsLinkToSelect/cmsLinkToSelectTemplate.html',
    "<se-dropdown\n" +
    "    data-field=\"ctrl.field\"\n" +
    "    data-qualifier=\"ctrl.qualifier\"\n" +
    "    data-model=\"ctrl.model\"\n" +
    "    data-id=\"ctrl.id\"\n" +
    "></se-dropdown>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/cmsLinkToSelect/cmsLinkToSelectWrapperTemplate.html',
    "<cms-link-to-select\n" +
    "    data-field=\"field\"\n" +
    "    data-qualifier=\"qualifier\"\n" +
    "    data-model=\"model\"\n" +
    "    data-id=\"id\"\n" +
    "></cms-link-to-select>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/displayConditions/pageDisplayConditionWrapperTemplate.html',
    "<display-conditions-editor data-page=\"model\"></display-conditions-editor>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/infoPageName/infoPageNameTemplate.html',
    "<div class=\"se-page-info__name\">\n" +
    "    <homepage-icon\n" +
    "            ng-if=\"$ctrl.field.qualifier=='name'\"\n" +
    "            class=\"homepage-icon__page-list\"\n" +
    "            data-cms-page=\"$ctrl.cmsPage\"\n" +
    "            data-uri-context=\"$ctrl.uriContext\"\n" +
    "    ></homepage-icon>\n" +
    "    <div\n" +
    "            id=\"{{$ctrl.field.qualifier}}-homepage\"\n" +
    "            class=\"se-field--homepage fd-form-control\"\n" +
    "            style=\"word-break: break-all; white-space: normal;\"\n" +
    "            placeholder=\"{{field.tooltip| translate}}\"\n" +
    "            name=\"{{$ctrl.field.qualifier}}\"\n" +
    "            data-ng-disabled=\"$ctrl.disabled\"\n" +
    "            data-ng-model=\"$ctrl.model[$ctrl.qualifier]\"\n" +
    "    >\n" +
    "        {{$ctrl.model[$ctrl.qualifier]}}\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/infoPageName/infoPageNameWrapperTemplate.html',
    "<info-page-name\n" +
    "        data-model=\"model\"\n" +
    "        data-disabled=\"$ctrl.isFieldDisabled()\"\n" +
    "        data-qualifier=\"qualifier\"\n" +
    "        data-field=\"field\"\n" +
    "        data-editor=\"editor\"\n" +
    "></info-page-name>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/linkToggle/linkToggleTemplate.html',
    "<div class=\"se-link-toggle\">\n" +
    "    <div class=\"se-link-toggle__row\">\n" +
    "        <div class=\"se-form-control-row se-form-control-row--action\">\n" +
    "            <label class=\"se-control-label se-link-toggle__label\" for=\"external-link\">\n" +
    "                <input\n" +
    "                    type=\"radio\"\n" +
    "                    name=\"linktoggle\"\n" +
    "                    id=\"external-link\"\n" +
    "                    class=\"fd-form__control se-link-toggle__input\"\n" +
    "                    data-ng-model=\"$ctrl.model.linkToggle.external\"\n" +
    "                    data-ng-value=\"true\"\n" +
    "                    data-ng-change=\"$ctrl.emptyUrlLink()\"\n" +
    "                />\n" +
    "                {{ 'se.editor.linkto.external.label' | translate}}\n" +
    "            </label>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"se-form-control-row se-form-control-row--action\">\n" +
    "            <label class=\"se-control-label se-link-toggle__label\" for=\"internal-link\">\n" +
    "                <input\n" +
    "                    type=\"radio\"\n" +
    "                    name=\"linktoggle\"\n" +
    "                    id=\"internal-link\"\n" +
    "                    class=\"fd-form__control se-link-toggle__input\"\n" +
    "                    data-ng-model=\"$ctrl.model.linkToggle.external\"\n" +
    "                    data-ng-value=\"false\"\n" +
    "                    data-ng-change=\"$ctrl.emptyUrlLink()\"\n" +
    "                />\n" +
    "                {{ 'se.editor.linkto.internal.label' | translate}}\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <input\n" +
    "        type=\"text\"\n" +
    "        id=\"urlLink\"\n" +
    "        name=\"urlLink\"\n" +
    "        data-ng-model=\"$ctrl.model.linkToggle.urlLink\"\n" +
    "        data-ng-class=\"{'has-error':$ctrl.field.hasErrors}\"\n" +
    "        class=\"fd-form-control\"\n" +
    "    />\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/linkToggle/linkToggleWrapperTemplate.html',
    "<link-toggle data-field=\"field\" data-model=\"model\" data-editor=\"editor\"> </link-toggle>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/errorsList/seErrorsListTemplate.html',
    "<div class=\"field-errors\">\n" +
    "    <div data-ng-repeat=\"error in ctrl.getSubjectErrors()\">{{ error.message | translate }}</div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/fileSelector/seFileSelectorTemplate.html',
    "<div class=\"se-file-selector {{::ctrl.customClass}}\">\n" +
    "    <label class=\"se-file-selector__btn\" data-ng-show=\"!ctrl.disabled\">\n" +
    "        <span\n" +
    "            class=\"sap-icon--share se-media__action-icon\"\n" +
    "            data-ng-class=\"{\n" +
    "            'sap-icon--share': ctrl.isReplaceMode(),\n" +
    "            'sap-icon--upload': !ctrl.isReplaceMode()}\"\n" +
    "        ></span>\n" +
    "        <span class=\"label__fileUpload label__fileUpload-link se-media-format__label\"\n" +
    "            >{{::ctrl.labelI18nKey | translate}}</span\n" +
    "        >\n" +
    "        <input\n" +
    "            type=\"file\"\n" +
    "            class=\"hide\"\n" +
    "            data-ng-show=\"!ctrl.disabled\"\n" +
    "            accept=\"{{ctrl.buildAcceptedFileTypesList()}}\"\n" +
    "        />\n" +
    "    </label>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaAdvancedProperties/seMediaAdvancedPropertiesTemplate.html',
    "<se-tooltip\n" +
    "    [append-to]=\"'body'\"\n" +
    "    [placement]=\"'bottom'\"\n" +
    "    [is-chevron-visible]=\"true\"\n" +
    "    [triggers]=\"['click']\"\n" +
    "    class=\"se-media__advanced-info\"\n" +
    ">\n" +
    "    <span se-tooltip-trigger class=\"se-media__advanced-info__trigger\">\n" +
    "        <span\n" +
    "            class=\"se-media-format__icon sap-icon--message-information se-media__action-icon\"\n" +
    "            alt=\"{{ctrl.i18nKeys.INFORMATION | translate}}\"\n" +
    "        ></span>\n" +
    "        <span class=\"se-media-format__label\">{{ctrl.i18nKeys.INFORMATION | translate}}</span>\n" +
    "    </span>\n" +
    "\n" +
    "    <div se-tooltip-body>\n" +
    "        <div class=\"se-adv-media-info\">\n" +
    "            <div\n" +
    "                class=\"se-adv-media-info-row advanced-information-description\"\n" +
    "                data-ng-if=\"ctrl.description\"\n" +
    "            >\n" +
    "                <div class=\"se-adv-media-info-row__label se-control-label\">\n" +
    "                    {{ctrl.i18nKeys.DESCRIPTION | translate }}\n" +
    "                </div>\n" +
    "                <div class=\"se-adv-media-info-row__description\">{{ctrl.description}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"se-adv-media-info-row advanced-information-code\">\n" +
    "                <div class=\"se-adv-media-info-row__label se-control-label\">\n" +
    "                    {{ctrl.i18nKeys.CODE | translate }}\n" +
    "                </div>\n" +
    "                <div class=\"se-adv-media-info-row__description\">{{ctrl.code}}</div>\n" +
    "            </div>\n" +
    "            <div\n" +
    "                class=\"se-adv-media-info-row advanced-information-alt-text\"\n" +
    "                data-ng-if=\"ctrl.altText\"\n" +
    "            >\n" +
    "                <div class=\"se-adv-media-info-row__label se-control-label\">\n" +
    "                    {{ctrl.i18nKeys.ALT_TEXT | translate }}\n" +
    "                </div>\n" +
    "                <div class=\"se-adv-media-info-row__description\">{{ctrl.altText}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</se-tooltip>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaContainerField/seAdvancedMediaContainerDropdownItemTemplate.html',
    "<div class=\"se-media-container-row\">\n" +
    "    <img class=\"se-default-media-container-img\" data-ng-src=\"{{item.thumbnailUrl}}\" />\n" +
    "    <div class=\"media-container-row-label\">{{item.qualifier}}</div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaContainerField/seMediaContainerFieldTemplate.html',
    "<div\n" +
    "    data-ng-if=\"ctrl.hasReadPermissionOnMediaRelatedTypes && ctrl.advancedMediaContainerManagementEnabled\"\n" +
    ">\n" +
    "    <se-dropdown\n" +
    "        data-ng-if=\"ctrl.model\"\n" +
    "        data-field=\"ctrl.mediaContainerDropdownField\"\n" +
    "        data-qualifier=\"'mediaContainer'\"\n" +
    "        data-model=\"ctrl.mediaContainerFieldModel\"\n" +
    "        data-id=\"ctrl.mediaContainerDropdownId\"\n" +
    "        data-item-template-url=\"ctrl.itemTemplateUrl\"\n" +
    "        data-get-api=\"ctrl.configureSeDropdown($api)\"\n" +
    "        data-show-remove-button=\"true\"\n" +
    "    ></se-dropdown>\n" +
    "\n" +
    "    <div data-ng-if=\"ctrl.isMediaContainerSelected() || ctrl.isMediaContainerCreation()\">\n" +
    "        <label\n" +
    "            [id]=\"ctrl.mediaContainerDropdownField.qualifier + '-label'\"\n" +
    "            class=\"se-control-label required se-media-container-name-label\"\n" +
    "        >\n" +
    "            {{ 'se.cms.media.responsive.name' | lowercase | translate }}</label\n" +
    "        >\n" +
    "        <input\n" +
    "            type=\"text\"\n" +
    "            class=\"fd-form-control\"\n" +
    "            id=\"media-container-qualifier-{{ ctrl.mediaContainerDropdownId }}\"\n" +
    "            name=\"media-container-qualifier\"\n" +
    "            data-ng-model=\"ctrl.model[ctrl.qualifier].qualifier\"\n" +
    "            data-ng-model-options=\"{debounce: 500}\"\n" +
    "            data-ng-readonly=\"ctrl.isMediaContainerNameReadOnly()\"\n" +
    "            data-ng-class=\"{'se-input--is-disabled': ctrl.isMediaContainerNameReadOnly()}\"\n" +
    "        />\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div\n" +
    "    class=\"se-media-container-field\"\n" +
    "    data-ng-if=\"ctrl.hasReadPermissionOnMediaRelatedTypes && (ctrl.isMediaContainerSelected() || ctrl.isMediaContainerCreation() || !ctrl.advancedMediaContainerManagementEnabled)\"\n" +
    ">\n" +
    "    <div class=\"se-media-container-field__media-list\">\n" +
    "        <se-media-format\n" +
    "            class=\"se-media-container-cell\"\n" +
    "            data-ng-repeat=\"option in ctrl.field.options\"\n" +
    "            data-ng-class=\"'se-media-container-cell--' + option.id\"\n" +
    "            data-media-uuid=\"ctrl.model[ctrl.qualifier].medias[option.id]\"\n" +
    "            data-is-under-edit=\"ctrl.isFormatUnderEdit(option.id)\"\n" +
    "            data-media-format=\"option.id\"\n" +
    "            data-field=\"ctrl.field\"\n" +
    "            data-is-field-disabled=\"ctrl.isFieldDisabled\"\n" +
    "            data-on-file-select=\"ctrl.fileSelected(files, option.id)\"\n" +
    "            data-on-delete=\"ctrl.imageDeleted(option.id)\"\n" +
    "        >\n" +
    "        </se-media-format>\n" +
    "    </div>\n" +
    "    <se-media-upload-form\n" +
    "        data-ng-if=\"ctrl.image.file\"\n" +
    "        class=\"se-media-upload-form-wrapper\"\n" +
    "        data-image=\"ctrl.image\"\n" +
    "        data-field=\"ctrl.field\"\n" +
    "        data-on-upload-callback=\"ctrl.imageUploaded(uuid)\"\n" +
    "        data-on-cancel-callback=\"ctrl.resetImage()\"\n" +
    "        data-on-select-callback=\"ctrl.fileSelected(files)\"\n" +
    "    >\n" +
    "    </se-media-upload-form>\n" +
    "    <se-errors-list data-errors=\"ctrl.fileErrors\"></se-errors-list>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"se-media-container-field\" data-ng-if=\"!ctrl.hasReadPermissionOnMediaRelatedTypes\">\n" +
    "    <span\n" +
    "        translate=\"se.cms.media.typepermissions.error\"\n" +
    "        translate-values=\"{containedTypes: ctrl.field.containedTypes}\"\n" +
    "    ></span>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaField/seMediaFieldTemplate.html',
    "<div class=\"se-media-field\">\n" +
    "    <se-media-selector\n" +
    "        ng-if=\"!ctrl.image.file\"\n" +
    "        data-field=\"ctrl.field\"\n" +
    "        data-model=\"ctrl.model\"\n" +
    "        data-editor=\"ctrl.editor\"\n" +
    "        data-qualifier=\"ctrl.qualifier\"\n" +
    "        data-is-field-disabled=\"ctrl.isFieldDisabled\"\n" +
    "    >\n" +
    "    </se-media-selector>\n" +
    "    <se-file-selector\n" +
    "        ng-if=\"ctrl.showFileSelector()\"\n" +
    "        data-label-i18n-key=\"ctrl.i18nKeys.UPLOAD_IMAGE_TO_LIBRARY\"\n" +
    "        data-accepted-file-types=\"ctrl.acceptedFileTypes\"\n" +
    "        data-selection-mode=\"'upload'\"\n" +
    "        data-on-file-select=\"ctrl.fileSelected(files)\"\n" +
    "        data-disabled=\"ctrl.isFieldDisabled()\"\n" +
    "    ></se-file-selector>\n" +
    "    <se-media-upload-form\n" +
    "        ng-if=\"ctrl.image.file\"\n" +
    "        class=\"se-media-upload-form-wrapper\"\n" +
    "        data-image=\"ctrl.image\"\n" +
    "        data-field=\"ctrl.field\"\n" +
    "        data-on-upload-callback=\"ctrl.imageUploaded(uuid)\"\n" +
    "        data-on-cancel-callback=\"ctrl.resetImage()\"\n" +
    "        data-on-select-callback=\"ctrl.fileSelected(files)\"\n" +
    "    ></se-media-upload-form>\n" +
    "    <se-errors-list\n" +
    "        ng-if=\"ctrl.fileErrors.length > 0\"\n" +
    "        data-errors=\"ctrl.fileErrors\"\n" +
    "    ></se-errors-list>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaFormat/seMediaFormatTemplate.html',
    "<div class=\"{{ctrl.mediaFormat}} se-media-format\">\n" +
    "    <div class=\"se-media__screen-type\">{{ctrl.mediaFormatI18NKey | translate}}</div>\n" +
    "\n" +
    "    <!-- when the image is already uploaded -->\n" +
    "    <div class=\"se-media--present\" data-ng-if=\"ctrl.isMediaPreviewEnabled()\">\n" +
    "        <div class=\"se-media--present-img-container\">\n" +
    "            <se-media-preview data-image-url=\"ctrl.media.url\"></se-media-preview>\n" +
    "            <div class=\"se-media-preview__image-wrapper\">\n" +
    "                <img class=\"se-media-preview__image-thumbnail\" data-ng-src=\"{{ctrl.media.url}}\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <se-media-advanced-properties\n" +
    "            data-code=\"ctrl.media.code\"\n" +
    "            data-description=\"ctrl.media.description\"\n" +
    "            data-alt-text=\"ctrl.media.altText\"\n" +
    "        ></se-media-advanced-properties>\n" +
    "\n" +
    "        <se-file-selector\n" +
    "            data-custom-class=\"'media-format-present-replace' + (ctrl.isFieldDisabled() ? ' file-selector-disabled' : '')\"\n" +
    "            data-disabled=\"ctrl.isFieldDisabled()\"\n" +
    "            data-label-i18n-key=\"ctrl.i18nKeys.REPLACE \"\n" +
    "            data-accepted-file-types=\"ctrl.acceptedFileTypes \"\n" +
    "            data-on-file-select=\"ctrl.onFileSelect({files: files, format: ctrl.mediaFormat})\"\n" +
    "        ></se-file-selector>\n" +
    "\n" +
    "        <button\n" +
    "            class=\"se-media__remove-btn remove-image\"\n" +
    "            data-ng-click=\"ctrl.onDelete({format: ctrl.mediaFormat}) \"\n" +
    "            data-ng-disabled=\"ctrl.isFieldDisabled()\"\n" +
    "        >\n" +
    "            <span\n" +
    "                class=\"se-media__action-icon se-media__action-icon--delete sap-icon--delete\"\n" +
    "            ></span>\n" +
    "            <span\n" +
    "                class=\"se-media__remove-btn-txt\"\n" +
    "                data-ng-class=\"{'se-media__remove-btn-txt--disabled':ctrl.isFieldDisabled()}\"\n" +
    "            >\n" +
    "                {{ctrl.i18nKeys.REMOVE | translate}}</span\n" +
    "            >\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- when the image is not yet uploaded -->\n" +
    "    <div class=\"se-media--absent\" data-ng-if=\"ctrl.isMediaEditEnabled()\">\n" +
    "        <!-- when the file selector is enabled -->\n" +
    "        <se-file-selector\n" +
    "            data-ng-if=\"ctrl.field.editable\"\n" +
    "            data-label-i18n-key=\"ctrl.i18nKeys.UPLOAD\"\n" +
    "            data-custom-class=\"ctrl.isFieldDisabled() ? 'file-selector-disabled' : ''\"\n" +
    "            data-disabled=\"ctrl.isFieldDisabled()\"\n" +
    "            data-accepted-file-types=\"ctrl.acceptedFileTypes\"\n" +
    "            data-selection-mode=\"'upload'\"\n" +
    "            data-on-file-select=\"ctrl.onFileSelect({files: files, format: ctrl.mediaFormat})\"\n" +
    "        ></se-file-selector>\n" +
    "        <!-- when the file selector is disabled -->\n" +
    "        <se-file-selector\n" +
    "            data-ng-if=\"!ctrl.field.editable\"\n" +
    "            data-label-i18n-key=\"ctrl.i18nKeys.UPLOAD\"\n" +
    "            data-custom-class=\"!ctrl.field.editable ? 'file-selector-disabled' : ''\"\n" +
    "            data-disabled=\"!ctrl.field.editable\"\n" +
    "            data-accepted-file-types=\"ctrl.acceptedFileTypes\"\n" +
    "            data-selection-mode=\"'upload'\"\n" +
    "            data-on-file-select=\"ctrl.onFileSelect({files: files, format: ctrl.mediaFormat})\"\n" +
    "        ></se-file-selector>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- when the image is under edit -->\n" +
    "    <div data-ng-if=\"ctrl.isUnderEdit \" class=\"se-media--edit-wrapper\">\n" +
    "        <se-file-selector\n" +
    "            class=\"se-media--edit\"\n" +
    "            data-label-i18n-key=\"ctrl.i18nKeys.UPLOAD \"\n" +
    "            data-disabled=\"true\"\n" +
    "            data-custom-class=\" 'file-selector-disabled' \"\n" +
    "            data-accepted-file-types=\"ctrl.acceptedFileTypes \"\n" +
    "            data-on-file-select=\"ctrl.onFileSelect({files: files, format: ctrl.mediaFormat}) \"\n" +
    "        ></se-file-selector>\n" +
    "        <span class=\"se-media-preview--edit\">{{ctrl.i18nKeys.UNDER_EDIT | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div\n" +
    "        data-ng-if=\"!ctrl.isUnderEdit\"\n" +
    "        class=\"error-input help-block\"\n" +
    "        data-ng-repeat=\"error in ctrl.getErrors()\"\n" +
    "    >\n" +
    "        {{error}}\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaPreview/seMediaPreviewTemplate.html',
    "<se-tooltip\n" +
    "    [append-to]=\"'body'\"\n" +
    "    [placement]=\"'bottom'\"\n" +
    "    [is-chevron-visible]=\"true\"\n" +
    "    [triggers]=\"['click']\"\n" +
    "    class=\"se-media-preview__tooltip\"\n" +
    ">\n" +
    "    <span se-tooltip-trigger> <div class=\"sap-icon--search se-media-preview__icon\"></div> </span>\n" +
    "\n" +
    "    <div se-tooltip-body>\n" +
    "        <img class=\"se-media-preview__image\" data-ng-src=\"{{ctrl.imageUrl}}\" />\n" +
    "    </div>\n" +
    "</se-tooltip>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaSelector/seMediaPrinterTemplate.html',
    "<div class=\"se-media-selector\" data-ng-if=\"selected\">\n" +
    "    <span class=\"se-media-selector__left-section\">\n" +
    "        <se-media-preview data-image-url=\"item.url\"></se-media-preview>{{printer.imagePreviewUrl}}\n" +
    "        <img class=\"se-media-preview__image-thumbnail\" data-ng-src=\"{{item.url}}\" />\n" +
    "    </span>\n" +
    "\n" +
    "    <span class=\"se-media-selector__right-section\">\n" +
    "        <se-media-advanced-properties\n" +
    "            data-code=\"item.code\"\n" +
    "            data-description=\"item.description\"\n" +
    "            data-alt-text=\"item.altText\"\n" +
    "        ></se-media-advanced-properties>\n" +
    "        <button\n" +
    "            class=\"se-media-printer__btn replace-image se-file-selector__btn\"\n" +
    "            data-ng-disabled=\"ySelect.isReadOnly\"\n" +
    "            data-ng-click=\"ySelect.clear($select, $event)\"\n" +
    "        >\n" +
    "            <span class=\"sap-icon--share se-media__action-icon\"></span>\n" +
    "            <span\n" +
    "                class=\"se-media-printer__btn-txt se-media-format__label\"\n" +
    "                data-ng-class=\"{'se-media-format__label--disabled':ySelect.isReadOnly}\"\n" +
    "                data-translate=\"se.upload.image.replace\"\n" +
    "            ></span>\n" +
    "        </button>\n" +
    "        <button\n" +
    "            class=\"se-media-printer__btn remove-image se-media__remove-btn\"\n" +
    "            data-ng-disabled=\"ySelect.isReadOnly\"\n" +
    "            data-ng-click=\"ySelect.clear($select, $event)\"\n" +
    "        >\n" +
    "            <span\n" +
    "                class=\"se-media__action-icon se-media__action-icon--delete sap-icon--delete\"\n" +
    "            ></span>\n" +
    "            <span\n" +
    "                class=\"se-media__remove-btn-txt\"\n" +
    "                data-ng-class=\"{'se-media__remove-btn-txt--disabled':ySelect.isReadOnly}\"\n" +
    "                data-translate=\"se.media.format.remove\"\n" +
    "            ></span>\n" +
    "        </button>\n" +
    "    </span>\n" +
    "</div>\n" +
    "<div class=\"se-media-selector__search\" data-ng-if=\"!selected\">\n" +
    "    <div class=\"se-media-selector__search-img-wrapper\">\n" +
    "        <img data-ng-src=\"{{item.url}}\" class=\"se-media-selector__search-img\" />\n" +
    "    </div>\n" +
    "    <div class=\"se-media-selector__search-name\">{{item.code}}</div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaSelector/seMediaPrinterWrapperTemplate.html',
    "<se-media-printer data-item=\"item\" data-selected=\"selected\"></se-media-printer>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaSelector/seMediaSelectorTemplate.html',
    "<div class=\"media-selector\">\n" +
    "    <y-select\n" +
    "        data-id=\"{{ctrl.field.qualifier}}\"\n" +
    "        data-placeholder=\"ctrl.dropdownProperties.placeHolderI18nKey\"\n" +
    "        data-ng-model=\"ctrl.model[ctrl.qualifier]\"\n" +
    "        data-fetch-strategy=\"ctrl.fetchStrategy\"\n" +
    "        data-item-template=\"ctrl.mediaTemplate\"\n" +
    "        data-is-read-only=\"ctrl.isFieldDisabled()\"\n" +
    "    />\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaUploadForm/seMediaUploadFieldTemplate.html',
    "<input\n" +
    "    type=\"text\"\n" +
    "    data-ng-class=\"{'is-invalid': ctrl.error}\"\n" +
    "    class=\"fd-form__control\"\n" +
    "    name=\"{{ctrl.field}}\"\n" +
    "    data-ng-model=\"ctrl.model[ctrl.field]\"\n" +
    "/>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/components/mediaUploadForm/seMediaUploadFormTemplate.html',
    "<div class=\"se-media-upload-form\">\n" +
    "    <div class=\"se-media-upload-form__header\">\n" +
    "        <div class=\"se-media-upload-form__header-title\">\n" +
    "            {{ctrl.i18nKeys.UPLOAD_IMAGE_TO_LIBRARY | translate}}\n" +
    "        </div>\n" +
    "        <div class=\"se-media-upload-form__header-actions\">\n" +
    "            <button\n" +
    "                class=\"fd-button--light se-media-upload-btn__cancel fd-button--compact\"\n" +
    "                type=\"button\"\n" +
    "                data-ng-click=\"ctrl.onCancel()\"\n" +
    "            >\n" +
    "                {{ctrl.i18nKeys.UPLOAD_IMAGE_CANCEL | translate}}\n" +
    "            </button>\n" +
    "            <button\n" +
    "                class=\"fd-button se-media-upload-btn__submit fd-button--compact\"\n" +
    "                type=\"button\"\n" +
    "                data-ng-click=\"ctrl.onMediaUploadSubmit()\"\n" +
    "            >\n" +
    "                {{ctrl.i18nKeys.UPLOAD_IMAGE_SUBMIT | translate}}\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"se-media-upload-form__replace-file\">\n" +
    "        <div class=\"se-media-upload__file-name\">{{ctrl.getName()}}</div>\n" +
    "        <se-file-selector\n" +
    "            data-label-i18n-key=\"ctrl.i18nKeys.UPLOAD_IMAGE_REPLACE\"\n" +
    "            data-accepted-file-types=\"ctrl.acceptedFileTypes\"\n" +
    "            data-on-file-select=\"ctrl.onSelectCallback({files: files})\"\n" +
    "        ></se-file-selector>\n" +
    "    </div>\n" +
    "\n" +
    "    <form class=\"se-media-upload__file-info\">\n" +
    "        <div class=\"se-media-upload__file-info-field\">\n" +
    "            <label\n" +
    "                name=\"label-code\"\n" +
    "                class=\"se-control-label required\"\n" +
    "                data-ng-class=\"{ 'se-media-upload-has-error': ctrl.hasError('code')}\"\n" +
    "                >{{ctrl.i18nKeys.CODE | translate}}</label\n" +
    "            >\n" +
    "            <se-media-upload-field\n" +
    "                data-error=\"ctrl.hasError('code')\"\n" +
    "                data-field=\"'code'\"\n" +
    "                data-model=\"ctrl.imageParameters\"\n" +
    "            ></se-media-upload-field>\n" +
    "            <span\n" +
    "                class=\"upload-field-error upload-field-error-code fd-form__message fd-form__message--error\"\n" +
    "                data-ng-repeat=\"error in ctrl.getErrorsForField('code')\"\n" +
    "                >{{error}}</span\n" +
    "            >\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"se-media-upload__file-info-field\">\n" +
    "            <label\n" +
    "                name=\"label-description\"\n" +
    "                class=\"se-control-label\"\n" +
    "                data-ng-class=\"{ 'se-media-upload-has-error': ctrl.hasError('description'), 'se-media-upload__file-info--label': true }\"\n" +
    "                >{{ctrl.i18nKeys.DESCRIPTION | translate}}</label\n" +
    "            >\n" +
    "            <se-media-upload-field\n" +
    "                data-field=\"'description'\"\n" +
    "                data-model=\"ctrl.imageParameters\"\n" +
    "            ></se-media-upload-field>\n" +
    "            <span\n" +
    "                class=\"upload-field-error upload-field-error-description fd-form__message fd-form__message--error\"\n" +
    "                data-ng-repeat=\"error in ctrl.getErrorsForField('description')\"\n" +
    "                >{{error}}</span\n" +
    "            >\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"se-media-upload__file-info-field\">\n" +
    "            <label\n" +
    "                name=\"label-alt-text\"\n" +
    "                class=\"se-control-label\"\n" +
    "                data-ng-class=\"{ 'se-media-upload-has-error': ctrl.hasError('altText') }\"\n" +
    "                >{{ctrl.i18nKeys.ALT_TEXT | translate}}</label\n" +
    "            >\n" +
    "            <se-media-upload-field\n" +
    "                data-field=\"'altText'\"\n" +
    "                data-model=\"ctrl.imageParameters\"\n" +
    "            ></se-media-upload-field>\n" +
    "            <span\n" +
    "                class=\"upload-field-error upload-field-error-alt-text fd-form__message fd-form__message--error\"\n" +
    "                data-ng-repeat=\"error in ctrl.getErrorsForField('altText')\"\n" +
    "                >{{error}}</span\n" +
    "            >\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <span data-ng-if=\"ctrl.isUploading\" class=\"se-media-upload-form__spinner\">\n" +
    "        <div class=\"spinner-md spinner-light\">{{ctrl.i18nKeys.UPLOADING | translate}}</div>\n" +
    "    </span>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/templates/mediaContainerTemplate.html',
    "<se-media-container-field\n" +
    "    data-field=\"field\"\n" +
    "    data-model=\"model\"\n" +
    "    data-editor=\"editor\"\n" +
    "    data-qualifier=\"qualifier\"\n" +
    "    data-is-field-disabled=\"isFieldDisabled\"\n" +
    "></se-media-container-field>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/media/templates/mediaTemplate.html',
    "<se-media-field\n" +
    "    data-field=\"field\"\n" +
    "    data-model=\"model\"\n" +
    "    data-editor=\"editor\"\n" +
    "    data-qualifier=\"qualifier\"\n" +
    "    data-is-field-disabled=\"isFieldDisabled\"\n" +
    "></se-media-field>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/navigationNode/components/breadcrumb/seBreadcrumbTemplate.html',
    "<div class=\"se-breadcrumb\">\n" +
    "    <div data-ng-repeat=\"node in bc.breadcrumb\" class=\"se-breadcrumb__node\">\n" +
    "        <div class=\"se-breadcrumb__info\" data-ng-class=\"{'se-breadcrumb__info--last':$last}\">\n" +
    "            <span class=\"se-breadcrumb__info--level\">{{node.formattedLevel | translate:node}}</span>\n" +
    "            <span class=\"se-breadcrumb__info--name\">{{node.name}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"se-breadcrumb__divider\" data-ng-if=\"$index < bc.breadcrumb.length - 1\">\n" +
    "            <span class=\"sap-icon--navigation-right-arrow\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/navigationNode/components/navigationNodePicker/navigationNodePickerRenderTemplate.html',
    "<div></div>\n" +
    "<div class=\"se-tree-node__name col-xs-6\"><span> {{node.name | l10n}} </span></div>\n" +
    "<div\n" +
    "    class=\"col-sm-4 pull-right tree-node se-navigation-picker-renderer\"\n" +
    "    data-ng-click=\"$ctrl.pick(node)\"\n" +
    "    data-ng-show=\"$ctrl.isEditable()\"\n" +
    ">\n" +
    "    <a\n" +
    "        data-translate=\"se.cms.navigationcomponent.management.node.selection.select.action\"\n" +
    "        class=\"btn btn-link se-navigation-picker-renderer__btn\"\n" +
    "    />\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/navigationNode/components/navigationNodePicker/seNavigationNodePickerTemplate.html',
    "<div class=\"categoryTable\">\n" +
    "    <div class=\"tablehead clearfix hidden-xs se-navigation-editor-tree__head\">\n" +
    "        <div\n" +
    "            data-translate=\"se.ytree.template.header.name\"\n" +
    "            class=\"se-navigation-editor-tree__name col-md-offset-1 col-sm-5\"\n" +
    "        ></div>\n" +
    "    </div>\n" +
    "    <se-tree\n" +
    "        [node-uri]=\"ctrl.nodeURI\"\n" +
    "        [root-node-uid]=\"ctrl.rootNodeUid\"\n" +
    "        [node-template-url]=\"ctrl.nodeTemplateUrl\"\n" +
    "        [remove-default-template]=\"ctrl.removeDefaultTemplate\"\n" +
    "        [node-actions]=\"ctrl.actions\"\n" +
    "    />\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/navigationNode/components/navigationNodeSelector/seNavigationNodeSelectorTemplate.html',
    "<div data-ng-if=\"nav.isReady()\">\n" +
    "    <div data-ng-if=\"nav.model[nav.qualifier]\" class=\"se-navigation-mode\">\n" +
    "        <div class=\"se-navigation--node\">\n" +
    "            <se-breadcrumb\n" +
    "                class=\"se-navigation--node-breadcrumb\"\n" +
    "                data-node-uuid=\"nav.model[nav.qualifier]\"\n" +
    "                data-uri-context=\"nav.uriContext\"\n" +
    "            ></se-breadcrumb>\n" +
    "            <div class=\"se-navigation--node-button\">\n" +
    "                <button\n" +
    "                    class=\"btn btn-link btn-block se-navigation--button\"\n" +
    "                    data-ng-class=\"{'se-navigation--button__disabled':!nav.field.editable}\"\n" +
    "                    data-ng-click=\"nav.remove($event)\"\n" +
    "                    data-ng-disabled=\"!nav.field.editable\"\n" +
    "                    data-translate=\"se.cms.navigationcomponent.management.node.selection.remove.action\"\n" +
    "                ></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <navigation-editor-tree\n" +
    "            data-uri-context=\"nav.uriContext\"\n" +
    "            data-read-only=\"true\"\n" +
    "            data-root-node-uid=\"nav.nodeUid\"\n" +
    "        ></navigation-editor-tree>\n" +
    "    </div>\n" +
    "    <div data-ng-if=\"!nav.model[nav.qualifier]\">\n" +
    "        <label\n" +
    "            data-translate=\"se.cms.navigationcomponent.management.node.selection.invite.action\"\n" +
    "        ></label>\n" +
    "        <se-navigation-picker\n" +
    "            data-uri-context=\"nav.uriContext\"\n" +
    "            data-model=\"nav.model\"\n" +
    "            data-qualifier=\"nav.qualifier\"\n" +
    "            data-editable=\"nav.field.editable\"\n" +
    "        ></se-navigation-picker>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/navigationNode/templates/navigationNodeSelectorWrapperTemplate.html',
    "<se-navigation-node-selector\n" +
    "    data-field=\"field\"\n" +
    "    data-model=\"model\"\n" +
    "    data-qualifier=\"qualifier\"\n" +
    "></se-navigation-node-selector>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/pageInfoPageName/pageInfoPageNameTemplate.html',
    "<div class=\"se-page-info__name\">\n" +
    "    <homepage-icon ng-if=\"$ctrl.field.qualifier=='name'\"\n" +
    "        class=\"homepage-icon__page-list\"\n" +
    "        data-cms-page=\"$ctrl.cmsPage\"\n" +
    "        data-uri-context=\"$ctrl.uriContext\"\n" +
    "    ></homepage-icon>\n" +
    "    <div id=\"{{$ctrl.field.qualifier}}-homepage\"\n" +
    "        class=\"se-field--homepage fd-form-control\"\n" +
    "        style=\"word-break: break-all; white-space: normal;\"\n" +
    "        placeholder=\"{{field.tooltip| translate}}\"\n" +
    "        name=\"{{$ctrl.field.qualifier}}\"\n" +
    "        data-ng-disabled=\"$ctrl.disabled\"\n" +
    "        data-ng-model=\"$ctrl.model[$ctrl.qualifier]\">{{$ctrl.model[$ctrl.qualifier]}}\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/pageInfoPageName/pageInfoPageNameWrapperTemplate.html',
    "<page-info-page-name\n" +
    "    data-model=\"model\"\n" +
    "    data-disabled=\"$ctrl.isFieldDisabled()\"\n" +
    "    data-qualifier=\"qualifier\"\n" +
    "    data-field=\"field\"\n" +
    "    data-editor=\"editor\"\n" +
    "></page-info-page-name>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/pageRestore/duplicatePrimaryContentPageLabel/duplicatePrimaryContentPageLabelTemplate.html',
    "<div>\n" +
    "    <div class=\"duplicate-primary-content-page-resolution-options\">\n" +
    "        <div class=\"fd-form__item fd-form__item--check\">\n" +
    "            <input\n" +
    "                class=\"fd-form__control duplicate-resolution-option\"\n" +
    "                type=\"radio\"\n" +
    "                name=\"duplicateResolution\"\n" +
    "                id=\"overwritePrimaryPageOption\"\n" +
    "                data-ng-model=\"$ctrl.conflictResolution\"\n" +
    "                data-ng-click=\"$ctrl.selectResolution($ctrl.ResolutionOptions.OVERWRITE_PAGE)\"\n" +
    "                data-ng-value=\"$ctrl.ResolutionOptions.OVERWRITE_PAGE\"\n" +
    "            />\n" +
    "            <label\n" +
    "                for=\"overwritePrimaryPageOption\"\n" +
    "                class=\"fd-form__label\"\n" +
    "                data-translate=\"se.cms.page.restore.content.duplicate.primaryforvariation.option.overwrite\"\n" +
    "            />\n" +
    "        </div>\n" +
    "        <div class=\"fd-form__item fd-form__item--check\">\n" +
    "            <input\n" +
    "                class=\"fd-form__control duplicate-resolution-option\"\n" +
    "                type=\"radio\"\n" +
    "                name=\"duplicateResolution\"\n" +
    "                id=\"renamePrimaryPageOption\"\n" +
    "                data-ng-model=\"$ctrl.conflictResolution\"\n" +
    "                data-ng-click=\"$ctrl.selectResolution($ctrl.ResolutionOptions.RENAME_PAGE_LABEL)\"\n" +
    "                data-ng-value=\"$ctrl.ResolutionOptions.RENAME_PAGE_LABEL\"\n" +
    "            />\n" +
    "            <label\n" +
    "                for=\"renamePrimaryPageOption\"\n" +
    "                class=\"fd-form__label\"\n" +
    "                data-translate=\"se.cms.page.restore.content.duplicate.primaryforvariation.option.rename\"\n" +
    "            />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div\n" +
    "        class=\"rename-label-section\"\n" +
    "        data-ng-if=\"$ctrl.conflictResolution === $ctrl.ResolutionOptions.RENAME_PAGE_LABEL\"\n" +
    "    >\n" +
    "        <label data-translate=\"se.cms.page.restore.page.label\"></label>\n" +
    "        <input type=\"text\" class=\"form-control\" data-ng-model=\"$ctrl.model['label']\" />\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/pageRestore/duplicatePrimaryContentPageLabel/duplicatePrimaryContentPageWrapperTemplate.html',
    "<duplicate-primary-content-page-label data-model=\"model\"> </duplicate-primary-content-page-label>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/pageRestore/duplicatePrimaryNonContentPage/duplicatePrimaryNonContentPageTemplate.html',
    "<div><div data-translate=\"{{$ctrl.label}}\"></div></div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/pageRestore/duplicatePrimaryNonContentPage/duplicatePrimaryNonContentPageWrapperTemplate.html',
    "<duplicate-primary-non-content-page data-model=\"model\"> </duplicate-primary-non-content-page>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/pageRestore/missingPrimaryContentPage/missingPrimaryContentPageTemplate.html',
    "<div>\n" +
    "    <span\n" +
    "        class=\"missing-primary-content-page-message__label\"\n" +
    "        data-translate=\"se.cms.page.restore.content.page.noprimaryforvariation.msg\"\n" +
    "    ></span>\n" +
    "    <se-select\n" +
    "        id=\"se-page-restore-change-primary-selector-dropdown\"\n" +
    "        [(model)]=\"$ctrl.model.label\"\n" +
    "        [fetch-strategy]=\"$ctrl.fetchStrategy\"\n" +
    "    >\n" +
    "    </se-select>\n" +
    "</div>"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/pageRestore/missingPrimaryContentPage/missingPrimaryContentPageWrapperTemplate.html',
    "<missing-primary-content-page data-model=\"model\"></missing-primary-content-page>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/pageType/pageTypeEditorTemplate.html',
    "<div class=\"se-edit-page-info__basic-tab\">\n" +
    "    <div class=\"se-edit-page-info__page-type\">\n" +
    "        <label class=\"se-control-label\" data-translate=\"se.cms.pageinfo.page.type\"></label>\n" +
    "        <div class=\"form-readonly-text form-readonly-text__tight\">{{model.typeCode}}</div>\n" +
    "    </div>\n" +
    "    <div class=\"se-edit-page-info__page-template\">\n" +
    "        <label class=\"se-control-label\" data-translate=\"se.cms.pageinfo.page.template\"></label>\n" +
    "        <div class=\"form-readonly-text form-readonly-text__tight\">{{model.template}}</div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/restrictionsList/restrictionsListTemplate.html',
    "<div class=\"restrictions-list\">\n" +
    "    <div class=\"restrictions-list__info\">\n" +
    "        <label data-translate=\"se.cms.restrictions.criteria\"></label>\n" +
    "        <span>{{$ctrl.model.restrictionsCriteria}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"restrictions-list__items\" data-ng-repeat=\"restriction in $ctrl.model.restrictions\">\n" +
    "        <div class=\"restrictions-list__item\">\n" +
    "            <div class=\"restrictions-list__item-name\">{{restriction.name}}</div>\n" +
    "            <div class=\"restrictions-list__item-type\">{{restriction.type | l10n}}</div>\n" +
    "            <div class=\"restrictions-list__item-description\">{{restriction.description}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/restrictionsList/restrictionsListWrapperTemplate.html',
    "<restrictions-list data-model=\"model\"> </restrictions-list>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/singleActiveCatalogAwareSelector/singleActiveCatalogAwareItemSelector/singleActiveCatalogAwareItemSelectorItemTemplate.html',
    "<span class=\"se-single-catalog-item\">\n" +
    "    <span\n" +
    "        class=\"y-select-default-item\"\n" +
    "        data-ng-bind-html=\"item.label | l10n | translate\"\n" +
    "        title=\"{{ item.label | l10n | translate }}\"\n" +
    "    ></span>\n" +
    "    <span\n" +
    "        data-ng-bind=\"item.code\"\n" +
    "        title=\"{{ 'se.cms.catalogawareitem.itemtype.code' | translate }}\"\n" +
    "    ></span>\n" +
    "</span>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/singleActiveCatalogAwareSelector/singleActiveCatalogAwareItemSelector/singleActiveCatalogAwareItemSelectorTemplate.html',
    "<div data-ng-if=\"$ctrl.propertyType\">\n" +
    "    <!-- Product catalog selector -->\n" +
    "    <div id=\"product-catalog\">\n" +
    "        <label\n" +
    "            class=\"se-control-label\"\n" +
    "            data-ng-class=\"{'required': $ctrl.field.required}\"\n" +
    "            data-ng-if=\"$ctrl.catalogs.length === 1\"\n" +
    "            >{{$ctrl.catalogName | l10n}}</label\n" +
    "        >\n" +
    "        <se-dropdown\n" +
    "            data-ng-if=\"$ctrl.catalogs.length > 1\"\n" +
    "            data-field=\"$ctrl.productCatalogField\"\n" +
    "            data-qualifier=\"'productCatalog'\"\n" +
    "            data-model=\"$ctrl.model\"\n" +
    "            data-id=\"se-catalog-selector-dropdown\"\n" +
    "        ></se-dropdown>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Item selector -->\n" +
    "    <div>\n" +
    "        <label class=\"se-control-label\">{{$ctrl.mainDropDownI18nKey | translate}}</label>\n" +
    "        <se-dropdown\n" +
    "            data-field=\"$ctrl.field\"\n" +
    "            data-qualifier=\"$ctrl.qualifier\"\n" +
    "            data-model=\"$ctrl.model\"\n" +
    "            data-id=\"se-items-selector-dropdown\"\n" +
    "            data-item-template-url=\"'singleActiveCatalogAwareItemSelectorItemTemplate.html'\"\n" +
    "        ></se-dropdown>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"product-catalog-item-type-missing\" data-ng-if=\"!$ctrl.propertyType\">\n" +
    "    {{'se.cms.catalogawareitem.itemtype.notsupported' | translate}}\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/singleActiveCatalogAwareSelector/singleActiveCatalogAwareItemSelector/singleActiveCatalogAwareItemSelectorWrapperTemplate.html',
    "<single-active-catalog-aware-item-selector\n" +
    "    data-field=\"field\"\n" +
    "    data-qualifier=\"qualifier\"\n" +
    "    data-model=\"model\"\n" +
    "    data-id=\"id\"\n" +
    "    data-editor=\"editor\"\n" +
    "></single-active-catalog-aware-item-selector>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/workflowCreateVersionField/workflowCreateVersionFieldTemplate.html',
    "<div class=\"fd-form__set\">\n" +
    "    <div class=\"fd-form__item fd-form__item--check\">\n" +
    "        <input\n" +
    "            type=\"checkbox\"\n" +
    "            name=\"createVersion\"\n" +
    "            data-ng-model=\"$ctrl.model.createVersion\"\n" +
    "            data-ng-change=\"$ctrl.onCreateVersionChange()\"\n" +
    "            class=\"fd-form__control\"\n" +
    "        />\n" +
    "        <label\n" +
    "            class=\"fd-form__label\"\n" +
    "            for=\"createVersion\"\n" +
    "            data-translate=\"se.cms.workflow.editor.create.version\"\n" +
    "        >\n" +
    "        </label>\n" +
    "    </div>\n" +
    "    <div class=\"fd-form__item\" data-ng-if=\"$ctrl.showVersionLabel()\">\n" +
    "        <label\n" +
    "            class=\"fd-form__label\"\n" +
    "            for=\"versionLabel\"\n" +
    "            class=\"version-label__title\"\n" +
    "            data-translate=\"se.cms.workflow.editor.create.version.label\"\n" +
    "        >\n" +
    "        </label>\n" +
    "        <input\n" +
    "            type=\"text\"\n" +
    "            class=\"fd-form__control\"\n" +
    "            name=\"versionLabel\"\n" +
    "            data-ng-class=\"{'has-error':$ctrl.field.hasErrors}\"\n" +
    "            data-ng-model=\"$ctrl.model.versionLabel\"\n" +
    "        />\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/genericEditor/workflowCreateVersionField/workflowCreateVersionFieldWrapperTemplate.html',
    "<workflow-create-version-field data-model=\"model\" data-editor=\"editor\" data-field=\"field\">\n" +
    "</workflow-create-version-field>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/itemManagement/itemManagementTemplate.html',
    "<div>\n" +
    "    <se-generic-editor\n" +
    "        [id]=\"$ctrl.editorId\"\n" +
    "        [smartedit-component-id]=\"$ctrl.itemId\"\n" +
    "        [smartedit-component-type]=\"$ctrl.componentType\"\n" +
    "        [structure-api]=\"$ctrl.structureApi\"\n" +
    "        [content]=\"$ctrl.item\"\n" +
    "        [content-api]=\"$ctrl.contentApi\"\n" +
    "        [(is-dirty)]=\"$ctrl.isDirtyInternal\"\n" +
    "        [(submit)]=\"$ctrl.submit\"\n" +
    "        [uri-context]=\"$ctrl.uriContext\"\n" +
    "        [(reset)]=\"$ctrl.reset\"\n" +
    "    >\n" +
    "    </se-generic-editor>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/navigation/navigationEditor/navigationEditorLinkTemplate.html',
    "<div class=\"nav-management-link-container\">\n" +
    "    <a\n" +
    "        class=\"nav-management-link-item__link se-catalog-version__link\"\n" +
    "        data-ng-href=\"#!/navigations/{{$ctrl.siteId}}/{{$ctrl.catalog.catalogId}}/{{$ctrl.catalogVersion.version}}\"\n" +
    "        data-translate=\"se.cms.cataloginfo.navigationmanagement\"\n" +
    "    ></a>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/navigation/navigationEditor/navigationEditorTreeComponentTemplate.html',
    "<div class=\"se-navigation-editor-tree__header\" data-ng-if=\"!$ctrl.readOnly\">\n" +
    "    <button\n" +
    "        class=\"se-navigation-editor-tree__btn fd-button\"\n" +
    "        data-ng-click=\"$ctrl.actions.addTopLevelNode()\"\n" +
    "    >\n" +
    "        <span\n" +
    "            data-translate=\"se.cms.navigationmanagement.add.top.level.node\"\n" +
    "            class=\"se-navigation-editor-tree__btn--text\"\n" +
    "        ></span>\n" +
    "    </button>\n" +
    "</div>\n" +
    "<div class=\"se-navigation-editor-tree categoryTable\">\n" +
    "    <div class=\"tablehead clearfix hidden-xs se-navigation-editor-tree__head\">\n" +
    "        <div\n" +
    "            data-translate=\"se.ytree.template.header.name\"\n" +
    "            class=\"se-navigation-editor-tree__name col-xs-3\"\n" +
    "        ></div>\n" +
    "        <div\n" +
    "            data-translate=\"se.ytree.template.header.title\"\n" +
    "            class=\"se-navigation-editor-tree__title col-xs-3\"\n" +
    "        ></div>\n" +
    "        <div class=\"col-xs-1 pull-right\"></div>\n" +
    "        <div\n" +
    "            data-translate=\"se.ytree.template.header.entry\"\n" +
    "            class=\"se-navigation-editor-tree__entry col-xs-5 pull-right\"\n" +
    "        ></div>\n" +
    "    </div>\n" +
    "    <se-tree\n" +
    "        [node-uri]=\"$ctrl.nodeURI\"\n" +
    "        [root-node-uid]=\"$ctrl.rootNodeUid\"\n" +
    "        [node-template-url]=\"$ctrl.nodeTemplateUrl\"\n" +
    "        [remove-default-template]=\"$ctrl.removeDefaultTemplate\"\n" +
    "        [node-actions]=\"$ctrl.actions\"\n" +
    "        [drag-options]=\"$ctrl.dragOptions\"\n" +
    "    ></se-tree>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/navigation/navigationEditor/navigationNodeRenderTemplate.html',
    "<div\n" +
    "    class=\"pull-right dropdown tree-node se-tree-node__actions col-sm-1\"\n" +
    "    data-ng-show=\"!$ctrl.isReadOnly()\"\n" +
    ">\n" +
    "    <se-dropdown-menu\n" +
    "        [dropdown-items]=\"$ctrl.getDropdownItems()\"\n" +
    "        [selected-item]=\"node\"\n" +
    "        class=\"pull-right se-tree-node__actions--more-menu\"\n" +
    "    ></se-dropdown-menu>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"se-tree-node__name col-xs-3\"><span> {{node.name | l10n}} </span></div>\n" +
    "\n" +
    "<div class=\"pull-right tree-node se-tree-node__entry col-xs-5\">\n" +
    "    <div\n" +
    "        y-popover\n" +
    "        data-trigger=\"'hover'\"\n" +
    "        data-template=\"$ctrl.getEntryTooltipString(node)\"\n" +
    "        class=\"se-tree-node__popover\"\n" +
    "    >\n" +
    "        <span>{{ $ctrl.getEntryString(node) }}</span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"se-tree-node__title col-xs-2\">\n" +
    "    <span data-ng-show=\"node.title\"> {{node.title | l10n}} </span>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/navigation/navigationManagementPageTemplate.html',
    "<div class=\"se-navigation-management-page-list-template\">\n" +
    "    <div class=\"se-toolbar-group\">\n" +
    "        <se-toolbar\n" +
    "            css-class=\"se-toolbar--shell\"\n" +
    "            image-root=\"imageRoot\"\n" +
    "            toolbar-name=\"smartEditHeaderToolbar\"\n" +
    "        ></se-toolbar>\n" +
    "\n" +
    "        <se-toolbar\n" +
    "            css-class=\"se-toolbar--shell se-toolbar--shortcut\"\n" +
    "            image-root=\"imageRoot\"\n" +
    "            toolbar-name=\"smartEditNavigationToolbar\"\n" +
    "        ></se-toolbar>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"se-navigation-editor-wrapper\" data-ng-if=\"nav.readOnly !== undefined\">\n" +
    "        <div class=\"se-navigation-editor-header\">\n" +
    "            <h1\n" +
    "                class=\"se-navigation-editor-header__title\"\n" +
    "                data-translate=\"se.cms.navigationmanagement.title\"\n" +
    "            ></h1>\n" +
    "            <h4 class=\"se-navigation-editor-header__sub-title\">\n" +
    "                {{nav.catalogName | l10n}} - {{nav.catalogVersion}}\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <navigation-editor-tree\n" +
    "            data-uri-context=\"nav.uriContext\"\n" +
    "            data-read-only=\"nav.readOnly\"\n" +
    "        ></navigation-editor-tree>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/addPageWizard/components/newPageDisplayCondition/newPageDisplayConditionTemplate.html',
    "<div data-ng-show=\"$ctrl.ready === true\" class=\"se-new-page-display-condition\">\n" +
    "    <div class=\"page-condition-selector-wrapper form-group\">\n" +
    "        <label for=\"page-condition-selector-id\" class=\"se-control-label\"\n" +
    "            >{{ 'se.cms.page.condition.selection.label' | translate }}</label\n" +
    "        >\n" +
    "        <ui-select\n" +
    "            id=\"page-condition-selector-id\"\n" +
    "            data-ng-model=\"$ctrl.conditionSelected\"\n" +
    "            class=\"fd-form-control\"\n" +
    "            search-enabled=\"false\"\n" +
    "            theme=\"select2\"\n" +
    "            data-dropdown-auto-width=\"false\"\n" +
    "            data-ng-change=\"$ctrl.dataChanged()\"\n" +
    "        >\n" +
    "            <ui-select-match id=\"select-type\" class=\"ySEPageRestr-picker--select__match\">\n" +
    "                {{ $ctrl.conditionSelected.label | translate }}\n" +
    "            </ui-select-match>\n" +
    "            <ui-select-choices repeat=\"c in $ctrl.conditions\" position=\"down\">\n" +
    "                {{ c.label | translate }}\n" +
    "            </ui-select-choices>\n" +
    "        </ui-select>\n" +
    "        <span class=\"se-form-help-message\">\n" +
    "            <span>{{ $ctrl.conditionSelected.description | translate }}</span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div\n" +
    "        data-ng-if=\"$ctrl.showPrimarySelector()\"\n" +
    "        class=\"page-condition-primary-selector-wrapper form-group\"\n" +
    "    >\n" +
    "        <label for=\"page-condition-primary-selector-id\" class=\"se-control-label\"\n" +
    "            >{{ 'se.cms.page.condition.primary.association.label' | translate }}</label\n" +
    "        >\n" +
    "        <se-select\n" +
    "            id=\"page-condition-primary-selector-id\"\n" +
    "            [model]=\"$ctrl.primarySelectedModel\"\n" +
    "            (model-change)=\"$ctrl._primarySelectedModelOnChange($event)\"\n" +
    "            [fetch-strategy]=\"$ctrl._primaryPageChoicesFetchStrategy\"\n" +
    "            [on-change]=\"$ctrl.dataChanged\"\n" +
    "        >\n" +
    "        </se-select>\n" +
    "        <span data-ng-show=\"$ctrl.primarySelected.label\" class=\"se-form-help-message\">\n" +
    "            <span\n" +
    "                >{{ 'se.cms.page.label.label' | translate }}: {{ $ctrl.primarySelected.label\n" +
    "                }}</span\n" +
    "            >\n" +
    "        </span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div data-ng-if=\"$ctrl.showHomePageWidget()\">\n" +
    "        <div class=\"se-component-homepage fd-form__item\">\n" +
    "            <input\n" +
    "                type=\"checkbox\"\n" +
    "                id=\"set-homepage-checkbox\"\n" +
    "                class=\"se-component-item--details fd-form__control se-component-homepage__checkbox-input\"\n" +
    "                name=\"clone-on-drop\"\n" +
    "                data-ng-change=\"$ctrl.homePageChanged()\"\n" +
    "                data-ng-model=\"$ctrl.homepage\"\n" +
    "            />\n" +
    "            <label\n" +
    "                class=\"se-control-label se-component-homepage--label fd-form__label\"\n" +
    "                for=\"set-homepage-checkbox\"\n" +
    "                data-translate=\"se.cms.display.conditions.homepage.set\"\n" +
    "            ></label>\n" +
    "        </div>\n" +
    "        <label\n" +
    "            class=\"se-control-label se-component-homepage--label\"\n" +
    "            for=\"set-homepage-checkbox\"\n" +
    "            data-ng-if=\"$ctrl.showReplaceLabel\"\n" +
    "        >\n" +
    "            {{ \"se.cms.display.conditions.homepage.replace\" | translate: { currentHomepage:\n" +
    "            $ctrl.currentHomePageName } }}\n" +
    "        </label>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/addPageWizard/components/selectPageTemplate/selectPageTemplateTemplate.html',
    "<div class=\"se-page-type-step-template\">\n" +
    "    <div class=\"se-add-page__sub-header\">\n" +
    "        <div class=\"se-add-page__sub-header-title\">\n" +
    "            {{ 'se.cms.addpagewizard.pagetemplate.description' | translate}}\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"se-input-group se-page-type-step-template-list-search\">\n" +
    "            <input\n" +
    "                type=\"text\"\n" +
    "                class=\"se-input-group__input-area ySEPage-list-search-input\"\n" +
    "                placeholder=\"{{ 'se.cms.pagewizard.templatestep.searchplaceholder' | translate }}\"\n" +
    "                data-ng-model=\"$ctrl.searchString\"\n" +
    "                name=\"query\"\n" +
    "            />\n" +
    "            <span class=\"sap-icon--search se-input-group__addon\"></span>\n" +
    "            <div\n" +
    "                data-ng-if=\"$ctrl.searchString\"\n" +
    "                class=\"se-input-group__addon se-input-group__clear-btn\"\n" +
    "                data-ng-click=\"$ctrl.clearSearch()\"\n" +
    "            >\n" +
    "                <span class=\"sap-icon--decline\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"se-add-page__list fd-menu\" data-ng-if=\"$ctrl.pageTemplates.length > 0\">\n" +
    "        <div\n" +
    "            data-ng-repeat=\"template in $ctrl.pageTemplates | templateNameFilter:$ctrl.searchString track by $id(template)\"\n" +
    "            data-ng-class=\"{ 'is-selected': $ctrl.isSelected(template)}\"\n" +
    "            class=\"se-add-page__item se-add-page__item--page-template fd-menu__item\"\n" +
    "            data-ng-click=\"$ctrl.templateSelected(template)\"\n" +
    "        >\n" +
    "            <div class=\"se-add-page__item-title\">{{ template.name }}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/addPageWizard/components/selectPageType/selectPageTypeTemplate.html',
    "<div class=\"se-page-type-step-template\">\n" +
    "    <div class=\"se-add-page__sub-header\">\n" +
    "        {{ 'se.cms.addpagewizard.pagetype.description' | translate}}\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"se-add-page__list fd-menu\" data-ng-if=\"$ctrl.pageTypes.length > 0\">\n" +
    "        <div\n" +
    "            data-ng-repeat=\"pageType in $ctrl.pageTypes\"\n" +
    "            data-ng-class=\"{ 'is-selected': $ctrl.isSelected(pageType)}\"\n" +
    "            class=\"se-add-page__item fd-menu__item\"\n" +
    "            data-ng-click=\"$ctrl.selectType(pageType)\"\n" +
    "        >\n" +
    "            <div class=\"se-add-page__item-title\">{{ pageType.name | l10n }}</div>\n" +
    "            <div class=\"se-add-page-type__item-description\">{{ pageType.description | l10n }}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/addPageWizard/components/selectTargetCatalogVersion/selectTargetCatalogVersionTemplate.html',
    "<div class=\"target-catalog-version-selector-wrapper form-group\">\n" +
    "    <label\n" +
    "        for=\"target-catalog-version-selector-id\"\n" +
    "        class=\"se-control-label\"\n" +
    "        data-translate=\"se.cms.clonepagewizard.options.targetcatalogversion.label\"\n" +
    "    ></label>\n" +
    "\n" +
    "    <y-select\n" +
    "        data-ng-if=\"$ctrl.catalogVersions.length\"\n" +
    "        data-id=\"se-catalog-version-selector-dropdown\"\n" +
    "        data-ng-model=\"$ctrl.selectedCatalogVersion\"\n" +
    "        data-fetch-strategy=\"$ctrl.catalogVersionSelectorFetchStrategy\"\n" +
    "        data-on-change=\"$ctrl.onSelectionChanged\"\n" +
    "        data-search-enabled=\"false\"\n" +
    "        data-get-api=\"$ctrl.setYSelectAPI($api)\"\n" +
    "    >\n" +
    "    </y-select>\n" +
    "\n" +
    "    <div data-ng-if=\"$ctrl.catalogVersionContainsPageWithSameLabel\">\n" +
    "        <span\n" +
    "            class=\"warning-input help-block\"\n" +
    "            data-translate=\"se.cms.clonepagewizard.options.targetcatalogversion.label.exists.message\"\n" +
    "        ></span>\n" +
    "    </div>\n" +
    "    <div data-ng-if=\"$ctrl.pageAlreadyExists()\">\n" +
    "        <span\n" +
    "            class=\"warning-input help-block\"\n" +
    "            data-translate=\"se.cms.clonepagewizard.options.targetcatalogversion.pagetype.exists.message\"\n" +
    "        ></span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/addPageWizard/templates/pageDisplayConditionStepTemplate.html',
    "<se-event-message\n" +
    "    class=\"existing-homepage__ymessage\"\n" +
    "    [show-event]=\"'CMS_EVENT_SHOW_REPLACE_PARENT_HOMEPAGE_INFO'\"\n" +
    "    [hide-event]=\"'CMS_EVENT_HIDE_REPLACE_PARENT_HOMEPAGE_INFO'\"\n" +
    ">\n" +
    "</se-event-message>\n" +
    "\n" +
    "<new-page-display-condition\n" +
    "    data-page-type-code=\"addPageWizardCtl.getPageTypeCode()\"\n" +
    "    data-uri-context=\"addPageWizardCtl.uriContext\"\n" +
    "    data-result-fn=\"addPageWizardCtl.variationResult\"\n" +
    ">\n" +
    "</new-page-display-condition>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/addPageWizard/templates/pageInfoStepTemplate.html',
    "<span data-ng-if=\"addPageWizardCtl.isPageInfoActive()\">\n" +
    "    <se-generic-editor\n" +
    "        [structure]=\"addPageWizardCtl.getPageInfoStructure()\"\n" +
    "        [content]=\"addPageWizardCtl.getPageInfo()\"\n" +
    "        [(submit)]=\"addPageWizardCtl.callbacks.savePageInfo\"\n" +
    "        [(reset)]=\"addPageWizardCtl.callbacks.resetPageInfo\"\n" +
    "        [(is-dirty)]=\"addPageWizardCtl.callbacks.isDirtyPageInfo\"\n" +
    "        [(is-valid)]=\"addPageWizardCtl.callbacks.isValidPageInfo\"\n" +
    "    >\n" +
    "    </se-generic-editor>\n" +
    "</span>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/addPageWizard/templates/pageRestrictionsStepTemplate.html',
    "<span data-ng-if=\"addPageWizardCtl.isRestrictionsActive()\" class=\"se-create-page-restriction-step\">\n" +
    "    <div data-ng-if=\"addPageWizardCtl.getPageInfo().restrictions.length > 1\">\n" +
    "        <page-restrictions-info-message />\n" +
    "    </div>\n" +
    "\n" +
    "    <restrictions-editor\n" +
    "        data-editable=\"true\"\n" +
    "        data-save-fn=\"addPageWizardCtl.restrictionsEditorFunctionBindings.save\"\n" +
    "        data-reset-fn=\"addPageWizardCtl.restrictionsEditorFunctionBindings.reset\"\n" +
    "        data-cancel-fn=\"addPageWizardCtl.restrictionsEditorFunctionBindings.cancel\"\n" +
    "        data-is-dirty-fn=\"addPageWizardCtl.restrictionsEditorFunctionBindings.isDirty\"\n" +
    "        data-on-restrictions-changed=\"addPageWizardCtl.restrictionsResult($onlyOneRestrictionMustApply, $restrictions)\"\n" +
    "        data-get-restriction-types=\"addPageWizardCtl.getRestrictionTypes()\"\n" +
    "        data-get-supported-restriction-types=\"addPageWizardCtl.getSupportedRestrictionTypes()\"\n" +
    "        data-item=\"addPageWizardCtl.getPageInfo()\"\n" +
    "    >\n" +
    "    </restrictions-editor>\n" +
    "</span>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/addPageWizard/templates/pageTemplateStepTemplate.html',
    "<select-page-template\n" +
    "    data-uri-context=\"addPageWizardCtl.uriContext\"\n" +
    "    data-page-type-code=\"addPageWizardCtl.getPageTypeCode()\"\n" +
    "    data-on-template-selected=\"addPageWizardCtl.templateSelected\"\n" +
    ">\n" +
    "</select-page-template>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/addPageWizard/templates/pageTypeStepTemplate.html',
    "<select-page-type\n" +
    "    data-page-type-code=\"addPageWizardCtl.getPageTypeCode()\"\n" +
    "    data-on-type-selected=\"addPageWizardCtl.typeSelected\"\n" +
    ">\n" +
    "</select-page-type>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/clonePageWizard/components/clonePageInfo/componentCloneInfoTemplate.html',
    "<se-message data-ng-if=\"$ctrl.catalogVersionContainsPageWithSameTypeCode\" [type]=\"'warning'\">\n" +
    "    <ng-container\n" +
    "        se-message-description\n" +
    "        translate=\"se.cms.clonepagewizard.pageinfo.targetcatalogversion.pagetype.exists.message\"\n" +
    "        translate-value-type-code=\"{{$ctrl.pageTypeCode}}\"\n" +
    "    >\n" +
    "    </ng-container>\n" +
    "</se-message>\n" +
    "\n" +
    "<se-generic-editor\n" +
    "    [structure]=\"$ctrl.structure\"\n" +
    "    [content]=\"$ctrl.content\"\n" +
    "    [(submit)]=\"$ctrl.submit\"\n" +
    "    [(reset)]=\"$ctrl.reset\"\n" +
    "    [(is-dirty)]=\"$ctrl.isDirty\"\n" +
    "    [(is-valid)]=\"$ctrl.isValid\"\n" +
    "    (get-api)=\"$ctrl.setGenericEditorApi($event)\"\n" +
    ">\n" +
    "</se-generic-editor>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/clonePageWizard/components/clonePageOptions/componentCloneOptionTemplate.html',
    "<label for=\"components-cloned-selector-id\" class=\"se-control-label\">\n" +
    "    <span data-translate=\"se.cms.clonepagewizard.options.title\"></span>\n" +
    "    <se-help [title]=\"$ctrl.helpTitle\" [template]=\"$ctrl.helpTemplate\"></se-help>\n" +
    "</label>\n" +
    "<div id=\"components-cloned-selector-id\">\n" +
    "    <div class=\"se-form-control-row\">\n" +
    "        <input\n" +
    "            class=\"components-cloned-option-id fd-form__control\"\n" +
    "            type=\"radio\"\n" +
    "            name=\"componentsclone\"\n" +
    "            id=\"reference-cloning\"\n" +
    "            ng-model=\"$ctrl.componentInSlotOption\"\n" +
    "            ng-click=\"$ctrl.updateComponentInSlotOption($ctrl.CLONE_COMPONENTS_IN_CONTENT_SLOTS_OPTION.REFERENCE_EXISTING)\"\n" +
    "            ng-value=\"$ctrl.CLONE_COMPONENTS_IN_CONTENT_SLOTS_OPTION.REFERENCE_EXISTING\"\n" +
    "        />\n" +
    "        <label\n" +
    "            for=\"reference-cloning\"\n" +
    "            data-translate=\"se.cms.clonepagewizard.options.existing\"\n" +
    "        ></label>\n" +
    "    </div>\n" +
    "    <div class=\"se-form-control-row\">\n" +
    "        <input\n" +
    "            class=\"components-cloned-option-id fd-form__control\"\n" +
    "            type=\"radio\"\n" +
    "            id=\"deep-cloning\"\n" +
    "            name=\"componentsclone\"\n" +
    "            ng-model=\"$ctrl.componentInSlotOption\"\n" +
    "            ng-click=\"$ctrl.updateComponentInSlotOption($ctrl.CLONE_COMPONENTS_IN_CONTENT_SLOTS_OPTION.CLONE)\"\n" +
    "            ng-value=\"$ctrl.CLONE_COMPONENTS_IN_CONTENT_SLOTS_OPTION.CLONE\"\n" +
    "        />\n" +
    "        <label for=\"deep-cloning\" data-translate=\"se.cms.clonepagewizard.options.copies\"></label>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/clonePageWizard/templates/clonePageInfoStepTemplate.html',
    "<component-clone-info-form\n" +
    "    data-ng-if=\"clonePageWizardCtrl.isPageInfoActive()\"\n" +
    "    data-structure=\"clonePageWizardCtrl.getPageInfoStructure()\"\n" +
    "    data-content=\"clonePageWizardCtrl.getPageInfo()\"\n" +
    "    data-submit=\"clonePageWizardCtrl.callbacks.savePageInfo\"\n" +
    "    data-reset=\"clonePageWizardCtrl.callbacks.resetPageInfo\"\n" +
    "    data-is-dirty=\"clonePageWizardCtrl.callbacks.isDirtyPageInfo\"\n" +
    "    data-is-valid=\"clonePageWizardCtrl.callbacks.isValidPageInfo\"\n" +
    "    data-page-template=\"clonePageWizardCtrl.getPageTemplate()\"\n" +
    "    data-page-type-code=\"clonePageWizardCtrl.getPageTypeCode()\"\n" +
    "    data-uri-context=\"clonePageWizardCtrl.uriContext\"\n" +
    "    data-target-catalog-version=\"clonePageWizardCtrl.getTargetCatalogVersion()\"\n" +
    ">\n" +
    "</component-clone-info-form>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/clonePageWizard/templates/clonePageOptionsStepTemplate.html',
    "<se-event-message\n" +
    "    class=\"existing-homepage__ymessage\"\n" +
    "    [show-event]=\"'CMS_EVENT_SHOW_REPLACE_PARENT_HOMEPAGE_INFO'\"\n" +
    "    [hide-event]=\"'CMS_EVENT_HIDE_REPLACE_PARENT_HOMEPAGE_INFO'\"\n" +
    ">\n" +
    "</se-event-message>\n" +
    "\n" +
    "<select-target-catalog-version\n" +
    "    data-ng-if=\"clonePageWizardCtrl.isBasePageInfoAvailable()\"\n" +
    "    data-page-type-code=\"clonePageWizardCtrl.getPageTypeCode()\"\n" +
    "    data-page-label=\"clonePageWizardCtrl.getPageLabel()\"\n" +
    "    data-uri-context=\"clonePageWizardCtrl.uriContext\"\n" +
    "    data-base-page-info=\"clonePageWizardCtrl.getBasePageInfo()\"\n" +
    "    data-on-target-catalog-version-selected=\"clonePageWizardCtrl.onTargetCatalogVersionSelected($catalogVersion)\"\n" +
    ">\n" +
    "</select-target-catalog-version>\n" +
    "\n" +
    "<new-page-display-condition\n" +
    "    data-page-type-code=\"clonePageWizardCtrl.getPageTypeCode()\"\n" +
    "    data-uri-context=\"clonePageWizardCtrl.uriContext\"\n" +
    "    data-result-fn=\"clonePageWizardCtrl.variationResult\"\n" +
    "    data-initial-condition-selected=\"'page.displaycondition.variation'\"\n" +
    "    data-initial-primary-page-selected=\"clonePageWizardCtrl.getPageLabel()\"\n" +
    "    data-target-catalog-version=\"clonePageWizardCtrl.getTargetCatalogVersion()\"\n" +
    ">\n" +
    "</new-page-display-condition>\n" +
    "\n" +
    "<component-clone-option-form\n" +
    "    data-on-selection-change=\"clonePageWizardCtrl.triggerUpdateCloneOptionResult($cloneOptionData)\"\n" +
    "></component-clone-option-form>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/clonePageWizard/templates/clonePageRestrictionsStepTemplate.html',
    "<span\n" +
    "    data-ng-if=\"clonePageWizardCtrl.isRestrictionsActive()\"\n" +
    "    class=\"se-clone-page-restriction-step\"\n" +
    ">\n" +
    "    <div data-ng-if=\"clonePageWizardCtrl.getPageRestrictions().length > 1\">\n" +
    "        <page-restrictions-info-message />\n" +
    "    </div>\n" +
    "\n" +
    "    <restrictions-editor\n" +
    "        data-editable=\"true\"\n" +
    "        data-save-fn=\"clonePageWizardCtrl.restrictionsEditorFunctionBindings.save\"\n" +
    "        data-reset-fn=\"clonePageWizardCtrl.restrictionsEditorFunctionBindings.reset\"\n" +
    "        data-cancel-fn=\"clonePageWizardCtrl.restrictionsEditorFunctionBindings.cancel\"\n" +
    "        data-is-dirty-fn=\"clonePageWizardCtrl.restrictionsEditorFunctionBindings.isDirty\"\n" +
    "        data-on-restrictions-changed=\"clonePageWizardCtrl.restrictionsResult($onlyOneRestrictionMustApply, $restrictions)\"\n" +
    "        data-get-restriction-types=\"clonePageWizardCtrl.getRestrictionTypes()\"\n" +
    "        data-get-supported-restriction-types=\"clonePageWizardCtrl.getSupportedRestrictionTypes()\"\n" +
    "        data-item=\"clonePageWizardCtrl.getBasePageInfo()\"\n" +
    "        data-restrictions=\"clonePageWizardCtrl.getBasePageInfo().restrictions\"\n" +
    "    >\n" +
    "    </restrictions-editor>\n" +
    "</span>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/deletePageMenu/deletePageToolbarItemTemplate.html',
    "<div class=\"toolbar-action\" data-ng-if=\"$ctrl.ready\" data-item-key=\"{{ $ctrl.toolbarItem.key }}\">\n" +
    "    <button\n" +
    "        type=\"button\"\n" +
    "        class=\"btn toolbar-action--button\"\n" +
    "        data-ng-disabled=\"!$ctrl.isDeletePageEnabled\"\n" +
    "        data-ng-class=\"{'toolbar-action__disabled': !$ctrl.isDeletePageEnabled}\"\n" +
    "        data-ng-click=\"$ctrl.isDeletePageEnabled && $ctrl.onClickOnDeletePage()\"\n" +
    "    >\n" +
    "        <span class=\"icon-delete se-toolbar-menu-ddlb--button__icon\"></span>\n" +
    "        <div class=\"toolbar-action-button__txt\" data-translate=\"se.cms.actionitem.page.trash\"></div>\n" +
    "    </button>\n" +
    "    <div\n" +
    "        class=\"se-toolbar-popover\"\n" +
    "        data-ng-if=\"!$ctrl.isDeletePageEnabled\"\n" +
    "        data-y-popover\n" +
    "        data-placement=\"'bottom'\"\n" +
    "        data-template=\"$ctrl.getTooltipTemplate()\"\n" +
    "        data-trigger=\"'hover'\"\n" +
    "    ></div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/deletePageMenu/deletePageToolbarItemWrapperTemplate.html',
    "<delete-page-toolbar-item data-toolbar-item=\"item\"></delete-page-toolbar-item>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/displayConditions/displayConditionsEditor/displayConditionsEditorTemplate.html',
    "<div>\n" +
    "    <se-event-message\n" +
    "        class=\"existing-homepage__ymessage\"\n" +
    "        [show-event]=\"'CMS_EVENT_SHOW_REPLACE_PARENT_HOMEPAGE_INFO'\"\n" +
    "        [hide-event]=\"'CMS_EVENT_HIDE_REPLACE_PARENT_HOMEPAGE_INFO'\"\n" +
    "    >\n" +
    "    </se-event-message>\n" +
    "\n" +
    "    <display-conditions-page-info\n" +
    "        data-page-name=\"$ctrl.getPageName()\"\n" +
    "        data-page-type=\"$ctrl.getPageType()\"\n" +
    "        data-is-primary=\"$ctrl.isPagePrimary()\"\n" +
    "    ></display-conditions-page-info>\n" +
    "    <display-conditions-page-variations\n" +
    "        data-ng-if=\"$ctrl.isPagePrimary()\"\n" +
    "        data-variations=\"$ctrl.getVariations()\"\n" +
    "    ></display-conditions-page-variations>\n" +
    "    <display-conditions-primary-page\n" +
    "        data-ng-if=\"!$ctrl.isPagePrimary()\"\n" +
    "        data-read-only=\"$ctrl.getIsAssociatedPrimaryReadOnly()\"\n" +
    "        data-associated-primary-page=\"$ctrl.getAssociatedPrimaryPage()\"\n" +
    "        data-on-primary-page-select=\"$ctrl.onPrimaryPageSelect(primaryPage)\"\n" +
    "        data-page-type=\"$ctrl.getPageType()\"\n" +
    "    ></display-conditions-primary-page>\n" +
    "\n" +
    "    <div data-ng-if=\"$ctrl.showHomePageWidget()\">\n" +
    "        <div class=\"se-component-homepage\">\n" +
    "            <input\n" +
    "                type=\"checkbox\"\n" +
    "                id=\"set-homepage-checkbox\"\n" +
    "                class=\"fd-form__control se-component-homepage__checkbox-input\"\n" +
    "                name=\"clone-on-drop\"\n" +
    "                data-ng-disabled=\"$ctrl.disableHomepageCheckbox()\"\n" +
    "                data-ng-change=\"$ctrl.homePageChanged()\"\n" +
    "                data-ng-model=\"$ctrl.page.homepage\"\n" +
    "            />\n" +
    "            <label class=\"se-control-label\">\n" +
    "                <span data-translate=\"se.cms.display.conditions.homepage.set\"></span>\n" +
    "                <se-help\n" +
    "                    data-ng-if=\"$ctrl.disableHomepageCheckbox()\"\n" +
    "                    [template]=\"$ctrl.getHomePageDisabledTooltipTemplate()\"\n" +
    "                ></se-help>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "        <div\n" +
    "            class=\"se-display-conditions__replace-home-message\"\n" +
    "            for=\"set-homepage-checkbox\"\n" +
    "            data-ng-if=\"$ctrl.showReplaceLabel\"\n" +
    "        >\n" +
    "            {{ \"se.cms.display.conditions.homepage.replace\" | translate: { currentHomepage:\n" +
    "            $ctrl.currentHomePageName } }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/displayConditions/displayConditionsPageInfo/displayConditionsPageInfoTemplate.html',
    "<div class=\"se-edit-page-info__display-conditions\">\n" +
    "    <div class=\"se-edit-page-info-display-conditions__basic-info\">\n" +
    "        <div class=\"se-edit-page-info__page-name\">\n" +
    "            <label class=\"se-control-label\" data-translate=\"{{ $ctrl.pageNameI18nKey }}\"></label>\n" +
    "            <div\n" +
    "                class=\"form-readonly-text form-readonly-text__tight dc-page-name\"\n" +
    "                data-ng-bind=\"$ctrl.pageName\"\n" +
    "            ></div>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <label class=\"se-control-label\" data-translate=\"{{ $ctrl.pageTypeI18nKey }}\"></label>\n" +
    "            <div\n" +
    "                class=\"form-readonly-text form-readonly-text__tight dc-page-type\"\n" +
    "                data-ng-bind=\"$ctrl.pageType\"\n" +
    "            ></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <label class=\"se-control-label\">\n" +
    "        <span data-translate=\"{{ $ctrl.displayConditionLabelI18nKey }}\"></span>\n" +
    "        <se-help [title]=\"pageSync.helpTitle\" [template]=\"$ctrl.helpTemplate\"></se-help>\n" +
    "    </label>\n" +
    "    <p class=\"form-readonly-text form-readonly-text__tight dc-page-display-condition\">\n" +
    "        {{ $ctrl.getPageDisplayConditionI18nKey() | translate }}\n" +
    "    </p>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/displayConditions/displayConditionsPageVariations/displayConditionsPageVariationsTemplate.html',
    "<div class=\"form-group dc-page-variations\">\n" +
    "    <label class=\"se-control-label control-label__margin\">\n" +
    "        <span>{{ $ctrl.variationPagesTitleI18nKey | translate }}</span>\n" +
    "        <se-help\n" +
    "            data-ng-if=\"$ctrl.variations.length > 0\"\n" +
    "            [template]=\"$ctrl.renderers.helpTemplate()\"\n" +
    "        >\n" +
    "        </se-help>\n" +
    "    </label>\n" +
    "    <div\n" +
    "        data-ng-if=\"$ctrl.variations.length === 0\"\n" +
    "        class=\"dc-no-variations form-readonly-text form-readonly-text__tight form-readonly-text__inline\"\n" +
    "    >\n" +
    "        {{ $ctrl.noVariationsI18nKey | translate }}\n" +
    "    </div>\n" +
    "    <div data-ng-if=\"$ctrl.variations.length > 0\">\n" +
    "        <client-paged-list\n" +
    "            data-items=\"$ctrl.variations\"\n" +
    "            data-keys=\"$ctrl.keys\"\n" +
    "            data-renderers=\"$ctrl.renderers\"\n" +
    "            data-items-per-page=\"$ctrl.itemsPerPage\"\n" +
    "            class=\"dc-page-variations-list\"\n" +
    "        >\n" +
    "        </client-paged-list>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/displayConditions/displayConditionsPrimaryPage/displayConditionsPrimaryPageTemplate.html',
    "<div class=\"form-group form-group__inline\">\n" +
    "    <label class=\"se-control-label control-label__margin\">\n" +
    "        {{ $ctrl.associatedPrimaryPageLabelI18nKey | translate }}</label\n" +
    "    >\n" +
    "    <div\n" +
    "        data-ng-if=\"$ctrl.readOnly\"\n" +
    "        class=\"dc-associated-primary-page form-readonly-text form-readonly-text__tight\"\n" +
    "    >\n" +
    "        {{ ::$ctrl.associatedPrimaryPage.name }}\n" +
    "    </div>\n" +
    "    <div data-ng-if=\"!$ctrl.readOnly\">\n" +
    "        <se-select\n" +
    "            id=\"display-conditions-primary-association-selector\"\n" +
    "            [model]=\"$ctrl.associatedPrimaryPageModel\"\n" +
    "            (model-change)=\"$ctrl.associatedPrimaryPageModelOnChange($event)\"\n" +
    "            [fetch-strategy]=\"$ctrl.fetchStrategy\"\n" +
    "        >\n" +
    "        </se-select>\n" +
    "        <span data-ng-show=\"$ctrl.associatedPrimaryPage.name\" class=\"se-form-help-message\">\n" +
    "            <span\n" +
    "                >{{ 'se.cms.page.label.label' | translate }}: {{ $ctrl.associatedPrimaryPage.label\n" +
    "                }}</span\n" +
    "            >\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/homepageIcon/HomepageIconTemplate.html',
    "<span\n" +
    "    data-ng-if=\"$ctrl.isVisible()\"\n" +
    "    data-ng-class=\"$ctrl.getHomepageIcon()\"\n" +
    "    data-y-popover\n" +
    "    data-placement=\"'bottom'\"\n" +
    "    data-template=\"$ctrl.getTooltipTemplate()\"\n" +
    "    data-trigger=\"'hover'\"\n" +
    "></span>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageInfoMenu/pageInfoMenuTemplate.html',
    "<div\n" +
    "    class=\"toolbar-action\"\n" +
    "    data-uib-dropdown\n" +
    "    data-auto-close=\"outsideClick\"\n" +
    "    data-is-open=\"$ctrl.actionItem.isOpen\"\n" +
    "    data-item-key=\"{{ $ctrl.actionItem.key }}\"\n" +
    "    data-on-toggle=\"$ctrl.onDropdownToggle(open)\"\n" +
    ">\n" +
    "    <button\n" +
    "        type=\"button\"\n" +
    "        class=\"btn toolbar-action--button\"\n" +
    "        data-uib-dropdown-toggle\n" +
    "        aria-pressed=\"false\"\n" +
    "    >\n" +
    "        <span class=\"hyicon hyicon-pageinfo se-toolbar-menu-ddlb--button__icon\"></span>\n" +
    "        <div class=\"se-toolbar-page-info-wrapper\">\n" +
    "            <span class=\"toolbar-action-button__txt\">{{ $ctrl.actionItem.name | translate}}</span>\n" +
    "        </div>\n" +
    "    </button>\n" +
    "\n" +
    "    <div data-uib-dropdown-menu class=\"se-page-info__dropdown-menu toolbar-action--include\">\n" +
    "        <div class=\"se-page-info-menu\" ng-if=\"$ctrl.actionItem.isOpen\">\n" +
    "            <se-prevent-vertical-overflow>\n" +
    "                <div class=\"se-page-info-menu__header\">\n" +
    "                    <span\n" +
    "                        class=\"se-page-info-menu__header-title\"\n" +
    "                        data-translate=\"se.cms.pageinfo.information.title\"\n" +
    "                    ></span>\n" +
    "                    <div data-has-operation-permission=\"$ctrl.editPagePermission\">\n" +
    "                        <button\n" +
    "                            class=\"se-page-info__edit-btn fd-button--compact\"\n" +
    "                            data-ng-if=\"$ctrl.isComponentReady\"\n" +
    "                            data-translate=\"se.cms.contextmenu.title.edit\"\n" +
    "                            data-ng-click=\"$ctrl.onEditPageClick()\"\n" +
    "                        ></button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div data-ng-if=\"$ctrl.isComponentReady\" class=\"se-page-info-menu__body fe_page_croll\">\n" +
    "                    <se-generic-editor\n" +
    "                        [smartedit-component-id]=\"$ctrl.pageInfo.uid\"\n" +
    "                        [smartedit-component-type]=\"$ctrl.pageInfo.typeCode\"\n" +
    "                        [structure]=\"$ctrl.pageStructure\"\n" +
    "                        [content]=\"$ctrl.pageInfo\"\n" +
    "                    >\n" +
    "                    </se-generic-editor>\n" +
    "                </div>\n" +
    "            </se-prevent-vertical-overflow>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageInfoMenu/pageInfoMenuWrapperTemplate.html',
    "<page-info-menu action-item=\"item\"></page-info-menu>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageItems/clonePageItem/clonePageItemTemplate.html',
    "<div data-has-operation-permission=\"$ctrl.clonePagePermission\">\n" +
    "    <a class=\"se-dropdown-item fd-menu__item\" data-ng-click=\"$ctrl.onClickOnClone()\">\n" +
    "        <span class=\"se-dropdown-item--label\" data-translate=\"se.cms.actionitem.page.clone\" />\n" +
    "    </a>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageItems/deletePageItem/deletePageItemTemplate.html',
    "<div data-has-operation-permission=\"$ctrl.deletePagePermission\">\n" +
    "    <div class=\"se-dropdown-item--delete-wrapper\">\n" +
    "        <div\n" +
    "            class=\"se-dropdown-item--delete-link-wrapper\"\n" +
    "            data-ng-class=\"{'se-dropdown-item--delete-link-wrapper--disabled': !$ctrl.isDeletePageEnabled}\"\n" +
    "        >\n" +
    "            <a\n" +
    "                class=\"se-dropdown-item se-dropdown-item--delete fd-menu__item\"\n" +
    "                data-ng-class=\"{'se-dropdown-item__disabled': !$ctrl.isDeletePageEnabled}\"\n" +
    "                data-ng-click=\"$ctrl.isDeletePageEnabled && $ctrl.onClickOnDeletePage()\"\n" +
    "            >\n" +
    "                <span\n" +
    "                    class=\"se-dropdown-item--label\"\n" +
    "                    data-translate=\"se.cms.actionitem.page.trash\"\n" +
    "                ></span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <span\n" +
    "            data-ng-if=\"!$ctrl.isDeletePageEnabled\"\n" +
    "            class=\"se-dropdown-item--delete-page-popover\"\n" +
    "            data-y-popover\n" +
    "            data-placement=\"'left'\"\n" +
    "            data-template=\"$ctrl.getTooltipTemplate()\"\n" +
    "            data-trigger=\"'hover'\"\n" +
    "        >\n" +
    "            <span class=\"sap-icon--message-error\"></span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageItems/editPageItem/editPageItemTemplate.html',
    "<div data-has-operation-permission=\"$ctrl.editPagePermission\">\n" +
    "    <a class=\"se-dropdown-item fd-menu__item\" data-ng-click=\"$ctrl.onClickOnEdit()\">\n" +
    "        <span class=\"se-dropdown-item--label\" data-translate=\"se.cms.actionitem.page.edit\" />\n" +
    "    </a>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageItems/permanentlyDeletePageItem/permanentlyDeleteBlockedTooltipTemplate.html',
    "<div class=\"popover-tooltip\">\n" +
    "    <span data-translate=\"se.cms.actionitem.page.permanently.delete.blocked\" />\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageItems/permanentlyDeletePageItem/permanentlyDeletePageItemTemplate.html',
    "<div data-has-operation-permission=\"$ctrl.permanentlyDeletePagePermission\">\n" +
    "    <div class=\"se-dropdown-item--delete-wrapper\">\n" +
    "        <div\n" +
    "            class=\"se-dropdown-item--delete-link-wrapper\"\n" +
    "            data-ng-class=\"{'se-dropdown-item--delete-link-wrapper--disabled': $ctrl.isDeleteButtonDisabled()}\"\n" +
    "        >\n" +
    "            <a\n" +
    "                class=\"se-dropdown-item se-dropdown-item--delete fd-menu__item\"\n" +
    "                data-ng-class=\"{'se-dropdown-item__disabled': $ctrl.isDeleteButtonDisabled()}\"\n" +
    "                data-ng-click=\"!$ctrl.isDeleteButtonDisabled() && $ctrl.permanentlyDelete()\"\n" +
    "            >\n" +
    "                <span\n" +
    "                    class=\"se-dropdown-item--label\"\n" +
    "                    data-translate=\"se.cms.actionitem.page.permanently.delete\"\n" +
    "                ></span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <span\n" +
    "            data-ng-if=\"$ctrl.isDeleteButtonDisabled()\"\n" +
    "            class=\"se-dropdown-item--delete-page-popover\"\n" +
    "            data-y-popover\n" +
    "            data-placement=\"'left'\"\n" +
    "            data-template-url=\"'permanentlyDeleteBlockedTooltipTemplate.html'\"\n" +
    "            data-trigger=\"'hover'\"\n" +
    "        >\n" +
    "            <span class=\"sap-icon--message-error\"></span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageItems/restorePageItem/restorePageItemTemplate.html',
    "<div data-has-operation-permission=\"$ctrl.restorePagePermission\">\n" +
    "    <a class=\"se-dropdown-item fd-menu__item\" data-ng-click=\"$ctrl.restorePage()\">\n" +
    "        <span class=\"se-dropdown-item--label\" data-translate=\"se.cms.actionitem.page.restore\" />\n" +
    "    </a>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageItems/syncPageItem/syncPageItemTemplate.html',
    "<div data-has-operation-permission=\"$ctrl.syncPagePermission\">\n" +
    "    <a class=\"se-dropdown-item fd-menu__item\" data-ng-click=\"$ctrl.onClickOnSync()\">\n" +
    "        <span class=\"se-dropdown-item--label\" data-translate=\"se.cms.actionitem.page.sync\" />\n" +
    "    </a>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageItems/updatePageStatus/updatePageStatusTemplate.html',
    "<div data-ng-if=\"$ctrl.showButton\">\n" +
    "    <a class=\"se-dropdown-item fd-menu__item\" data-ng-click=\"$ctrl.onClickOnSync()\">\n" +
    "        <span class=\"se-dropdown-item--label\" data-translate=\"se.cms.actionitem.page.sync\" />\n" +
    "    </a>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageList/pageListLinkDirectiveTemplate.html',
    "<div class=\"page-list-link-container\">\n" +
    "    <a\n" +
    "        class=\"page-list-link-item__link se-catalog-version__link\"\n" +
    "        data-ng-href=\"#!/pages/{{$ctrl.siteId}}/{{$ctrl.catalog.catalogId}}/{{$ctrl.catalogVersion.version}}\"\n" +
    "        data-translate=\"se.cms.cataloginfo.pagelist\"\n" +
    "    ></a>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageList/pageListLinkTemplate.html',
    "<page-list-link\n" +
    "    data-catalog=\"$ctrl.catalog\"\n" +
    "    data-catalog-version=\"$ctrl.catalogVersion\"\n" +
    "    data-site-id=\"$ctrl.siteId\"\n" +
    "></page-list-link>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageList/pageListTemplate.html',
    "<div class=\"se-page-list\">\n" +
    "    <se-toolbar\n" +
    "        css-class=\"se-toolbar--shell\"\n" +
    "        image-root=\"imageRoot\"\n" +
    "        toolbar-name=\"smartEditHeaderToolbar\"\n" +
    "    ></se-toolbar>\n" +
    "    <se-toolbar\n" +
    "        css-class=\"se-toolbar--shell se-toolbar--shortcut\"\n" +
    "        image-root=\"imageRoot\"\n" +
    "        toolbar-name=\"smartEditPagesToolbar\"\n" +
    "    ></se-toolbar>\n" +
    "\n" +
    "    <div data-ng-if=\"pageListCtl.isReady\">\n" +
    "        <div class=\"se-page-list__header\">\n" +
    "            <span class=\"se-page-list__catalog-name\" data-translate=\"se.cms.pagelist.title\"></span>\n" +
    "            <p class=\"se-page-list__sub-title\">\n" +
    "                {{pageListCtl.catalogName | l10n}} - {{pageListCtl.catalogVersion}}\n" +
    "            </p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"se-page-list__body\">\n" +
    "            <div class=\"se-page-list__table-header\">\n" +
    "                <span class=\"se-paged-list__page-count-wrapper\">\n" +
    "                    <span\n" +
    "                        class=\"span-page-list__page-count-text\"\n" +
    "                        data-translate=\"se.pagelist.countsearchresult\"\n" +
    "                    ></span>\n" +
    "                    <span class=\"se-page-list__page-count\"> ({{ pageListCtl.count }}) </span>\n" +
    "                </span>\n" +
    "                <div class=\"se-page-list__table-header--right\">\n" +
    "                    <div class=\"fd-form__group se-page-list__search\">\n" +
    "                        <div class=\"se-input-group\">\n" +
    "                            <input\n" +
    "                                type=\"search\"\n" +
    "                                class=\"se-input-group__input-area ySEPage-list-search-input \"\n" +
    "                                placeholder=\"{{ 'se.cms.pagelist.searchplaceholder' | translate }}\"\n" +
    "                                data-ng-model=\"pageListCtl.query.value\"\n" +
    "                                maxlength=\"255\"\n" +
    "                                data-ng-model-options=\"pageListCtl.searchOptions\"\n" +
    "                                name=\"query\"\n" +
    "                            />\n" +
    "                            <span class=\"sap-icon--search se-input-group__addon\"></span>\n" +
    "                            <div\n" +
    "                                data-ng-show=\"pageListCtl.query.value\"\n" +
    "                                aria-label=\"clear\"\n" +
    "                                class=\"se-input-group__addon se-input-group__clear-btn\"\n" +
    "                                data-ng-click=\"pageListCtl.reset()\"\n" +
    "                            >\n" +
    "                                <span class=\"sap-icon--decline\"></span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <button\n" +
    "                        class=\"fd-button se-page-list__add\"\n" +
    "                        data-ng-click=\"pageListCtl.openAddPageWizard()\"\n" +
    "                    >\n" +
    "                        {{'se.cms.addpagewizard.addpage' | translate}}\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"se-page-list__table-body\">\n" +
    "                <se-dynamic-paged-list\n" +
    "                    [config]=\"pageListCtl.pageListConfig\"\n" +
    "                    [mask]=\"pageListCtl.query.value\"\n" +
    "                    (get-api)=\"pageListCtl.getApi($event);\"\n" +
    "                    (on-items-update)=\"pageListCtl.onPageItemsUpdate($event.pagination)\"\n" +
    "                >\n" +
    "                </se-dynamic-paged-list>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pageRestrictionsInfoMessage/pageRestrictionsInfoMessageTemplate.html',
    "<se-message\n" +
    "    [message-id]=\"yMsgInfoId\"\n" +
    "    [type]=\"'info'\"\n" +
    "    class=\"se-restrictions-editor--y-message--modal-adjusted\"\n" +
    ">\n" +
    "    <ng-container se-message-title\n" +
    "        >{{ 'se.cms.restrictions.editor.ymessage.title' | translate }}</ng-container\n" +
    "    >\n" +
    "    <ng-container se-message-description\n" +
    "        >{{ 'se.cms.restrictions.editor.ymessage.description' | translate }}</ng-container\n" +
    "    >\n" +
    "</se-message>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pagesLink/pagesLinkTemplate.html',
    "<div class=\"se-page-list__page-link--left\" data-ng-click=\"$ctrl.backToPagelist()\">\n" +
    "    <span class=\"se-page-list__page-link-icon icon-navigation-left-arrow\"></span>\n" +
    "    <a class=\"se-page-list__page-link-ancor\">{{ 'se.cms.back.to.pagelist' | translate }}</a>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/pagesLink/pagesLinkWrapperTemplate.html',
    "<pages-link></pages-link>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/restrictionsPageListIcon/restrictionsPageListIconTemplate.html',
    "<img\n" +
    "    class=\"restrictionPageListIcon\"\n" +
    "    data-ng-src=\"{{ $ctrl.imageSrc }}\"\n" +
    "    data-y-popover\n" +
    "    data-placement=\"bottom\"\n" +
    "    data-trigger=\"'hover'\"\n" +
    "    data-template=\"$ctrl.title\"\n" +
    "/>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/restrictionsViewer/restrictionsViewerTemplate.html',
    "<div data-ng-if=\"$ctrl.restrictions.length > 0\">\n" +
    "    <a data-ng-click=\"$ctrl.showRestrictions($ctrl.restrictions)\">{{$ctrl.restrictions.length}}</a>\n" +
    "</div>\n" +
    "<div data-ng-if=\"$ctrl.restrictions.length == 0\">-</div>"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/trashedPageList/trashedpageListTemplate.html',
    "<div class=\"se-trash-list\">\n" +
    "    <se-toolbar\n" +
    "        css-class=\"se-toolbar--shell\"\n" +
    "        image-root=\"imageRoot\"\n" +
    "        toolbar-name=\"smartEditHeaderToolbar\"\n" +
    "    ></se-toolbar>\n" +
    "    <se-toolbar\n" +
    "        css-class=\"se-toolbar--shell ySmartEditTrashPageToolbar\"\n" +
    "        image-root=\"imageRoot\"\n" +
    "        toolbar-name=\"smartEditTrashPageToolbar\"\n" +
    "    ></se-toolbar>\n" +
    "\n" +
    "    <div class=\"se-page-list__header\">\n" +
    "        <span\n" +
    "            class=\"se-page-list__catalog-name\"\n" +
    "            data-translate=\"se.cms.trashedpagelist.title\"\n" +
    "        ></span>\n" +
    "        <p class=\"se-page-list__sub-title\">\n" +
    "            {{trashedPageListCtl.catalogName | l10n}} - {{trashedPageListCtl.catalogVersion}}\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"se-page-list__body\">\n" +
    "        <div class=\"se-page-list__table-header\">\n" +
    "            <span class=\"se-paged-list__page-count-wrapper\">\n" +
    "                <span\n" +
    "                    class=\"span-page-list__page-count-text\"\n" +
    "                    data-translate=\"se.pagelist.countsearchresult\"\n" +
    "                ></span>\n" +
    "                <span class=\"se-page-list__page-count\"> ({{ trashedPageListCtl.count }}) </span>\n" +
    "            </span>\n" +
    "\n" +
    "            <div class=\"fd-form__group se-page-list__search\">\n" +
    "                <div class=\"se-input-group\">\n" +
    "                    <input\n" +
    "                        type=\"search\"\n" +
    "                        class=\"se-input-group__input-area ySEPage-list-search-input \"\n" +
    "                        placeholder=\"{{ 'se.cms.pagelist.searchplaceholder' | translate }}\"\n" +
    "                        data-ng-model=\"trashedPageListCtl.mask\"\n" +
    "                        data-ng-model-options=\"{debounce: 500}\"\n" +
    "                        name=\"mask\"\n" +
    "                    />\n" +
    "                    <span class=\"sap-icon--search se-input-group__addon\"></span>\n" +
    "                    <div\n" +
    "                        data-ng-show=\"trashedPageListCtl.mask\"\n" +
    "                        aria-label=\"clear\"\n" +
    "                        class=\"se-input-group__addon se-input-group__clear-btn\"\n" +
    "                        data-ng-click=\"trashedPageListCtl.reset()\"\n" +
    "                    >\n" +
    "                        <span class=\"sap-icon--decline\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"se-page-list__table-body\">\n" +
    "            <se-dynamic-paged-list\n" +
    "                class=\"se-trashed-pages\"\n" +
    "                [config]=\"trashedPageListCtl.trashedPageListConfig\"\n" +
    "                [mask]=\"trashedPageListCtl.mask\"\n" +
    "                (get-api)=\"trashedPageListCtl.getApi($event);\"\n" +
    "                (on-items-update)=\"trashedPageListCtl.onPageItemsUpdate($event.pagination)\"\n" +
    "            >\n" +
    "            </se-dynamic-paged-list>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/trashLink/trashLinkTemplate.html',
    "<div\n" +
    "    data-ng-if=\"$ctrl.isNonActiveCatalog\"\n" +
    "    data-ng-click=\"$ctrl.goToTrash()\"\n" +
    "    class=\"se-page-list__page-link--right\"\n" +
    ">\n" +
    "    <a\n" +
    "        data-translate=\"se.cms.pagelist.trashcan.link.text\"\n" +
    "        class=\"se-page-list__page-link-ancor\"\n" +
    "        data-translate-values=\"$ctrl.trashedPagesTranslationData\"\n" +
    "    ></a>\n" +
    "    <span class=\"se-page-list__page-link-icon sap-icon--navigation-right-arrow\"></span>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/pages/trashLink/trashLinkWrapperTemplate.html',
    "<trash-link></trash-link>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/restrictions/restrictionManagement/flavours/restrictionManagementEditTemplate.html',
    "<div data-ng-if=\"$ctrl.ready\" class=\"se-restriction-management-edit\">\n" +
    "    <div data-ng-if=\"$ctrl.isTypeSupported\" class=\"se-restriction-management-supported-edit\">\n" +
    "        <div class=\"se-restriction-management-edit__header\">\n" +
    "            <div class=\"se-restriction-management-edit__name\">{{ $ctrl.restriction.name }}</div>\n" +
    "            <div class=\"se-restriction-management-edit__code\">{{ $ctrl.restriction.typeCode }}</div>\n" +
    "        </div>\n" +
    "        <div class=\"se-restriction-management-edit__data\">\n" +
    "            <item-manager\n" +
    "                data-item=\"$ctrl.restriction\"\n" +
    "                data-mode=\"$ctrl.itemManagementMode\"\n" +
    "                data-structure-api=\"$ctrl.structureApi\"\n" +
    "                data-content-api=\"$ctrl.contentApi\"\n" +
    "                data-uri-context=\"$ctrl.uriContext\"\n" +
    "                data-component-type=\"$ctrl.restriction.itemtype\"\n" +
    "                data-submit-function=\"$ctrl.submitInternal\"\n" +
    "                data-is-dirty=\"$ctrl.isDirtyFn\"\n" +
    "            />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div data-ng-if=\"!$ctrl.isTypeSupported\">\n" +
    "        <div class=\"se-restrictions-list--content\">\n" +
    "            <div>\n" +
    "                {{ 'se.cms.restriction.management.select.type.not.supported.warning' | translate }}\n" +
    "            </div>\n" +
    "            <p class=\"se-restriction__item-name\">{{ $ctrl.restriction.name }}</p>\n" +
    "            <div class=\"se-restriction__item-description\">{{ $ctrl.restriction.description }}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/restrictions/restrictionManagement/flavours/restrictionManagementItemNameTemplate.html',
    "<span class=\"se-restriction-management-item-name\" data-ng-bind-html=\"item.name | l10n\"> </span>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/restrictions/restrictionManagement/flavours/restrictionManagementSelectTemplate.html',
    "<div class=\"se-restriction-management-select\">\n" +
    "    <se-message\n" +
    "        data-ng-show=\"$ctrl.selectModel.getRestriction() && !$ctrl.selectModel.isTypeSupported()\"\n" +
    "        [message-id]=\"yMsgWarningId\"\n" +
    "        [type]=\"'warning'\"\n" +
    "        class=\"se-restriction-management-select--y-message--modal-adjusted\"\n" +
    "    >\n" +
    "        <ng-container se-message-title\n" +
    "            >{{ 'se.cms.restriction.management.select.type.not.supported.warning' | translate }}\n" +
    "        </ng-container>\n" +
    "    </se-message>\n" +
    "\n" +
    "    <div class=\"se-restriction-management-select__y-select\">\n" +
    "        <label class=\"se-control-label\"\n" +
    "            >{{ 'se.cms.restriction.management.select.type.label' | translate }}</label\n" +
    "        >\n" +
    "\n" +
    "        <y-select\n" +
    "            data-id=\"restriction-type\"\n" +
    "            data-fetch-strategy=\"{ fetchAll: $ctrl.selectModel.getRestrictionTypes }\"\n" +
    "            data-item-template=\"::$ctrl.itemTemplateUrl\"\n" +
    "            data-placeholder=\"'se.cms.restriction.management.select.type.placeholder'\"\n" +
    "            data-ng-model=\"$ctrl.selectModel.selectedIds.restrictionType\"\n" +
    "            data-on-change=\"$ctrl.selectRestrictionType\"\n" +
    "            data-search-enabled=\"false\"\n" +
    "        >\n" +
    "        </y-select>\n" +
    "    </div>\n" +
    "\n" +
    "    <div\n" +
    "        data-recompile-dom=\"$ctrl.resetSelector\"\n" +
    "        class=\"se-restriction-management-select__restriction\"\n" +
    "    >\n" +
    "        <div\n" +
    "            data-ng-if=\"$ctrl.controllerModel.showRestrictionSelector\"\n" +
    "            class=\"se-restriction-management-select__restriction__info\"\n" +
    "        >\n" +
    "            <label\n" +
    "                class=\"se-control-label se-restriction-management-select__restriction__info__label\"\n" +
    "            >\n" +
    "                {{ 'se.cms.restriction.management.select.restriction.label' | translate }}\n" +
    "            </label>\n" +
    "            <y-select\n" +
    "                data-id=\"restriction-name\"\n" +
    "                data-fetch-strategy=\"$ctrl.fetchOptions\"\n" +
    "                data-ng-model=\"$ctrl.selectModel.selectedIds.restriction\"\n" +
    "                data-placeholder=\"'se.cms.restriction.management.select.restriction.placeholder'\"\n" +
    "                data-on-change=\"$ctrl.selectRestriction\"\n" +
    "                data-disable-choice-fn=\"$ctrl.disableRestrictionChoice\"\n" +
    "                data-item-template=\"::$ctrl.itemTemplateUrl\"\n" +
    "                data-results-header-template=\"$ctrl.getResultsHeaderTemplate()\"\n" +
    "                data-results-header-label=\"::$ctrl.resultsHeaderLabel\"\n" +
    "            >\n" +
    "            </y-select>\n" +
    "        </div>\n" +
    "\n" +
    "        <div\n" +
    "            data-recompile-dom=\"$ctrl.resetEditor\"\n" +
    "            class=\"se-restriction-management-select__restriction__editor\"\n" +
    "            data-ng-if=\"$ctrl.controllerModel.showRestrictionEditor\"\n" +
    "        >\n" +
    "            <p class=\"se-restriction-management-select__new-restriction-message\">\n" +
    "                {{ $ctrl.editorHeader | translate }}\n" +
    "            </p>\n" +
    "            <div data-ng-if=\"$ctrl.selectModel.isTypeSupported()\">\n" +
    "                <item-manager\n" +
    "                    data-item=\"$ctrl.selectModel.getRestriction()\"\n" +
    "                    data-mode=\"$ctrl.controllerModel.mode\"\n" +
    "                    data-structure-api=\"$ctrl.controllerModel.structureApi\"\n" +
    "                    data-content-api=\"$ctrl.controllerModel.contentApi\"\n" +
    "                    data-uri-context=\"$ctrl.uriContext\"\n" +
    "                    data-component-type=\"$ctrl.selectModel.getRestrictionTypeCode()\"\n" +
    "                    data-submit-function=\"$ctrl.submitInternal\"\n" +
    "                    data-is-dirty=\"$ctrl.isDirtyInternal\"\n" +
    "                />\n" +
    "            </div>\n" +
    "            <div\n" +
    "                class=\"se-restriction__list-item\"\n" +
    "                data-ng-if=\"!$ctrl.selectModel.isTypeSupported()\"\n" +
    "            >\n" +
    "                <p class=\"se-restriction__item-name\">\n" +
    "                    {{ $ctrl.selectModel.getRestriction().name }}\n" +
    "                </p>\n" +
    "                <div class=\"se-restriction__item-description\">\n" +
    "                    {{ $ctrl.selectModel.getRestriction().description }}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/restrictions/restrictionManagement/restrictionManagementTemplate.html',
    "<div data-ng-if=\"$ctrl.isInitialized\">\n" +
    "    <div\n" +
    "        data-ng-if=\"$ctrl.editMode\"\n" +
    "        class=\"se-restriction-management se-restriction-management-edit\"\n" +
    "    >\n" +
    "        <restriction-management-edit\n" +
    "            data-restriction=\"$ctrl.restriction\"\n" +
    "            data-get-supported-restriction-types-fn=\"$ctrl.getSupportedRestrictionTypesFn\"\n" +
    "            data-uri-context=\"$ctrl.uriContext\"\n" +
    "            data-is-dirty-fn=\"$ctrl.isDirtyFn\"\n" +
    "            data-submit-fn=\"$ctrl.submitInternal\"\n" +
    "        >\n" +
    "        </restriction-management-edit>\n" +
    "    </div>\n" +
    "    <div\n" +
    "        data-ng-if=\"!$ctrl.editMode\"\n" +
    "        class=\"se-restriction-management se-restriction-management-select\"\n" +
    "    >\n" +
    "        <restriction-management-select\n" +
    "            data-existing-restrictions=\"$ctrl.existingRestrictions\"\n" +
    "            data-get-restriction-types-fn=\"$ctrl.getRestrictionTypesFn()\"\n" +
    "            data-get-supported-restriction-types-fn=\"$ctrl.getSupportedRestrictionTypesFn\"\n" +
    "            data-uri-context=\"$ctrl.uriContext\"\n" +
    "            data-is-dirty-fn=\"$ctrl.isDirtyFn\"\n" +
    "            data-submit-fn=\"$ctrl.submitInternal\"\n" +
    "        >\n" +
    "        </restriction-management-select>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/restrictions/restrictionsEditor/restrictionsEditorTemplate.html',
    "<div class=\"se-restrictions-container\">\n" +
    "    <div\n" +
    "        class=\"se-restrictions-container__header\"\n" +
    "        data-ng-class=\"{'se-restrictions-container__header--empty': $ctrl.restrictions.length === 0}\"\n" +
    "    >\n" +
    "        <label class=\"se-restrictions__sub-header\">\n" +
    "            {{ 'se.cms.restrictions.list.title' | translate }}</label\n" +
    "        >\n" +
    "\n" +
    "        <div class=\"se-restrictions-container__header--right\">\n" +
    "            <div data-ng-if=\"$ctrl.restrictions.length > 1\">\n" +
    "                <div data-ng-if=\"$ctrl.editable\">\n" +
    "                    <ui-select\n" +
    "                        on-select=\"$ctrl.matchCriteriaChanged($item)\"\n" +
    "                        data-ng-model=\"$ctrl.criteria\"\n" +
    "                        class=\"fd-form-control se-restriction__select\"\n" +
    "                        search-enabled=\"false\"\n" +
    "                        theme=\"select2\"\n" +
    "                        data-dropdown-auto-width=\"false\"\n" +
    "                    >\n" +
    "                        <ui-select-match\n" +
    "                            placeholder=\"{{ 'se.cms.restrictions.picker.type.placeholder' | translate }}\"\n" +
    "                        >\n" +
    "                            {{$select.selected.editLabel | translate}}\n" +
    "                        </ui-select-match>\n" +
    "                        <ui-select-choices\n" +
    "                            repeat=\"criteriaOption in $ctrl.criteriaOptions\"\n" +
    "                            position=\"down\"\n" +
    "                        >\n" +
    "                            {{ criteriaOption.editLabel | translate }}\n" +
    "                        </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "                </div>\n" +
    "                <div class=\"se-restriction-criteria\" data-ng-if=\"!$ctrl.editable\">\n" +
    "                    {{ 'se.cms.restrictions.criteria' | translate }} {{ $ctrl.criteria.label |\n" +
    "                    translate }}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <button\n" +
    "                data-ng-if=\"$ctrl.showRemoveAllButton()\"\n" +
    "                class=\"cms-clean-btn se-restriction__clear-all__btn fd-button--light fd-button--compact\"\n" +
    "                data-ng-click=\"$ctrl.removeAllRestrictions()\"\n" +
    "                data-translate=\"se.cms.restrictions.list.clear.all\"\n" +
    "            ></button>\n" +
    "            <button\n" +
    "                data-ng-show=\"!$ctrl.showRestrictionPicker\"\n" +
    "                type=\"button\"\n" +
    "                class=\"se-restrictions__add-restriction-btn fd-button--compact\"\n" +
    "                data-ng-disabled=\"!$ctrl.editable\"\n" +
    "                data-ng-click=\"$ctrl.onClickOnAdd()\"\n" +
    "            >\n" +
    "                <span\n" +
    "                    class=\"se-restrictions__add-restriction-btn-text\"\n" +
    "                    data-translate=\"se.cms.restrictions.editor.button.add.new\"\n" +
    "                ></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <se-slider-panel\n" +
    "        [slider-panel-configuration]=\"$ctrl.sliderPanelConfiguration\"\n" +
    "        [(slider-panel-hide)]=\"$ctrl.sliderPanelHide\"\n" +
    "        [(slider-panel-show)]=\"$ctrl.sliderPanelShow\"\n" +
    "        class=\"se-add-restriction-panel\"\n" +
    "    >\n" +
    "    </se-slider-panel>\n" +
    "\n" +
    "    <div data-ng-if=\"$ctrl.errors.length > 0\">\n" +
    "        <span\n" +
    "            data-ng-repeat=\"error in $ctrl.errors\"\n" +
    "            class=\"se-help-block--has-error help-block fd-form__message fd-form__message--error\"\n" +
    "        >\n" +
    "            {{ error.message | translate}}\n" +
    "        </span>\n" +
    "    </div>\n" +
    "\n" +
    "    <restrictions-table\n" +
    "        data-ng-if=\"$ctrl.isRestrictionsReady\"\n" +
    "        data-editable=\"$ctrl.editable\"\n" +
    "        data-restrictions=\"$ctrl.restrictions\"\n" +
    "        data-on-click-on-edit=\"$ctrl.onClickOnEdit\"\n" +
    "        data-restriction-criteria=\"$ctrl.criteria\"\n" +
    "        data-errors=\"$ctrl.errors\"\n" +
    "        data-custom-class=\"'ySERestrictionListLink'\"\n" +
    "    >\n" +
    "    </restrictions-table>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/restrictions/restrictionsTable/restrictionsTableTemplate.html',
    "<div class=\"se-restriction-table-wrapper se-restriction-table-left {{$ctrl.customClass}}\">\n" +
    "    <div\n" +
    "        class=\"se-restrictions-list fd-menu__list fd-menu__list--separated\"\n" +
    "        data-ng-if=\"$ctrl.restrictions.length > 0\"\n" +
    "    >\n" +
    "        <div\n" +
    "            id=\"restriction-{{$index+1}}\"\n" +
    "            data-ng-repeat=\"restriction in $ctrl.restrictions\"\n" +
    "            class=\"se-restriction__item fd-menu__item\"\n" +
    "        >\n" +
    "            <div class=\"se-restrictions-list--content\" data-ng-click=\"$ctrl.onSelect(restriction)\">\n" +
    "                <p\n" +
    "                    class=\"se-restriction__item-name ng-class:{'error-input':$ctrl.isInError($index)}\"\n" +
    "                >\n" +
    "                    {{ restriction.name }}\n" +
    "                </p>\n" +
    "                <div\n" +
    "                    class=\"se-restriction__item-type-and-id\"\n" +
    "                    data-ng-class=\"{'error-input':$ctrl.isInError($index)}\"\n" +
    "                >\n" +
    "                    {{ restriction.typeCode }}\n" +
    "                </div>\n" +
    "                <div\n" +
    "                    class=\"se-restriction__item-description ng-class:{'error-input':$ctrl.isInError($index)}\"\n" +
    "                    title=\"{{ restriction.description }}\"\n" +
    "                >\n" +
    "                    {{ restriction.description }}\n" +
    "                </div>\n" +
    "\n" +
    "                <div\n" +
    "                    id=\"restrictionPartOfWorkflow\"\n" +
    "                    data-ng-if=\"!restriction.$$canBeEdited\"\n" +
    "                    data-translate=\"se.cms.restrictions.editor.part.of.workflow\"\n" +
    "                ></div>\n" +
    "            </div>\n" +
    "            <div data-ng-if=\"$ctrl.editable\">\n" +
    "                <se-dropdown-menu\n" +
    "                    [dropdown-items]=\"restriction.$$actions || $ctrl.defaultActions\"\n" +
    "                    [selected-item]=\"restriction\"\n" +
    "                    [placement]=\"'bottom-start'\"\n" +
    "                    class=\"se-restriction__item-more-btn\"\n" +
    "                ></se-dropdown-menu>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div data-ng-if=\"$ctrl.restrictions.length === 0\" class=\"se-restrictions-list--empty\">\n" +
    "        <span\n" +
    "            class=\"se-restrictions-list--empty__message\"\n" +
    "            data-translate=\"se.cms.restrictions.emptylist.message\"\n" +
    "        ></span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/slots/revertToSharedSlotConfirmationTemplate.html',
    "<se-message [type]=\"'info'\" [message-id]=\"'revertToSharedSlotYMessage'\">\n" +
    "    <ng-container se-message-description>\n" +
    "        <translate>se.cms.slot.unshared.revert.to.shared.sync.ymessage</translate>\n" +
    "    </ng-container>\n" +
    "</se-message>\n" +
    "<div\n" +
    "    data-translate=\"se.cms.slot.unshared.revert.to.shared.description\"\n" +
    "    class=\"fd-has-margin-top-small\"\n" +
    "></div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/synchronize/catalogs/catalogDetailsSyncTemplate.html',
    "<synchronize-catalog\n" +
    "    data-catalog=\"$ctrl.catalog\"\n" +
    "    data-catalog-version=\"$ctrl.catalogVersion\"\n" +
    "    data-active-catalog-version=\"$ctrl.activeCatalogVersion\"\n" +
    ">\n" +
    "</synchronize-catalog>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/synchronize/catalogs/synchronizeCatalogTemplate.html',
    "<div class=\"se-synchronize-catalog\">\n" +
    "    <div class=\"se-synchronize-catalog__item se-synchronize-catalog__sync-info\">\n" +
    "        <div data-ng-if=\"ctrl.isSyncJobFinished()\">\n" +
    "            <label\n" +
    "                class=\"se-synchronize-catalog__sync-info__sync-label\"\n" +
    "                data-ng-if=\"ctrl.catalogVersion.active\"\n" +
    "            >\n" +
    "                <span data-translate=\"se.cms.cataloginfo.lastsyncedfrom\"></span>\n" +
    "                <span class=\"se-synchronize-catalog__sync-info__sync-cata-name\"\n" +
    "                    >{{ctrl.getSyncFromLabels().sourceCatalogVersion}}</span\n" +
    "                >\n" +
    "            </label>\n" +
    "            <label\n" +
    "                class=\"se-synchronize-catalog__sync-info__sync-label\"\n" +
    "                data-ng-if=\"!ctrl.catalogVersion.active\"\n" +
    "                data-translate=\"se.cms.cataloginfo.lastsynced\"\n" +
    "            ></label>\n" +
    "            <span class=\"catalog-last-synced\"\n" +
    "                >{{ctrl.syncJobStatus.syncEndTime| date:'short'}}</span\n" +
    "            >\n" +
    "        </div>\n" +
    "        <span\n" +
    "            data-ng-if=\"ctrl.isSyncJobInProgress()\"\n" +
    "            class=\"se-synchronize-catalog__in-progress\"\n" +
    "            data-translate=\"se.sync.status.synced.inprogress\"\n" +
    "        ></span>\n" +
    "        <span\n" +
    "            data-ng-if=\"ctrl.isSyncJobFailed()\"\n" +
    "            class=\"label-error se-synchronize-catalog__sync-failed\"\n" +
    "            data-translate=\"se.sync.status.synced.syncfailed\"\n" +
    "        ></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div\n" +
    "        class=\"se-synchronize-catalog__item se-synchronize-catalog__sync-btn\"\n" +
    "        data-ng-if=\"!ctrl.catalogVersion.active && ctrl.syncCatalogPermission\"\n" +
    "        data-has-operation-permission=\"ctrl.syncCatalogPermission\"\n" +
    "    >\n" +
    "        <button\n" +
    "            class=\"fd-button--emphasized\"\n" +
    "            data-ng-disabled=\"!ctrl.isButtonEnabled()\"\n" +
    "            data-ng-click=\"ctrl.syncCatalog()\"\n" +
    "        >\n" +
    "            {{ 'se.cms.cataloginfo.btn.sync' | translate }}\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/synchronize/pages/pageListSyncIcon/pageListSyncIconTemplate.html',
    "<span\n" +
    "    class=\"sap-icon--message-warning se-sync-button__sync\"\n" +
    "    data-ng-class=\"$ctrl.classes[$ctrl.syncStatus.status]\"\n" +
    "    data-sync-status=\"{{$ctrl.syncStatus.status}}\"\n" +
    ">\n" +
    "</span>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/synchronize/pages/pageSynchronizationHeaderComponentTemplate.html',
    "<div data-ng-if=\"$ctrl.ready\">\n" +
    "    <div class=\"se-sync-panel-header\">\n" +
    "        <span\n" +
    "            class=\"se-sync-panel__sub-header\"\n" +
    "            data-ng-if=\"$ctrl.isDefaultSubHeader()\"\n" +
    "            data-translate=\"se.cms.synchronization.page.header\"\n" +
    "        >\n" +
    "        </span>\n" +
    "\n" +
    "        <div\n" +
    "            data-ng-if=\"!$ctrl.isSyncOldHomeHeader()\"\n" +
    "            class=\"se-sync-panel__sub-header\"\n" +
    "            data-translate=\"se.cms.synchronization.page.header.old.homepage\"\n" +
    "        ></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div data-ng-if=\"$ctrl.isNewPage()\" class=\"se-sync-panel-header__new-page-message\">\n" +
    "        <div\n" +
    "            data-translate=\"se.cms.synchronization.page.new.header\"\n" +
    "            class=\"se-sync-panel__message--new-page\"\n" +
    "        ></div>\n" +
    "        <div class=\"se-sync-panel__message\" data-ng-bind-html=\"$ctrl.headerText\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"se-sync-panel-header__timestamp\" data-ng-if=\"!$ctrl.isNewPage()\">\n" +
    "        <div data-translate=\"se.cms.synchronization.panel.lastsync.text\"></div>\n" +
    "        <span class=\"se-sync-panel-header__timestamp-text\">\n" +
    "            {{$ctrl.syncStatus.lastSyncStatus | date:'short'}}\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/synchronize/pages/pageSynchronizationPanelTemplate.html',
    "<page-synchronization-header\n" +
    "    class=\"se-sync-panel__sync-status \"\n" +
    "    data-sync-status=\"$ctrl.syncStatus\"\n" +
    "    data-page-sync-conditions=\"$ctrl.pageSyncConditions\"\n" +
    "    data-show-detailed-info=\"$ctrl.showDetailedInfo\"\n" +
    "></page-synchronization-header>\n" +
    "<synchronization-panel\n" +
    "    data-ng-if=\"!$ctrl.showSyncButton\"\n" +
    "    data-item-id=\"$ctrl.cmsPage.uuid\"\n" +
    "    data-get-sync-status=\"$ctrl.getSyncStatus\"\n" +
    "    data-perform-sync=\"$ctrl.performSync\"\n" +
    "    data-sync-items=\"$ctrl.syncItems\"\n" +
    "    data-on-selected-items-update=\"$ctrl.onSelectedItemsUpdate\"\n" +
    "    data-on-sync-status-ready=\"$ctrl.onSyncStatusReady($syncStatus)\"\n" +
    "    data-get-api=\"$ctrl.getApi($api)\"\n" +
    ">\n" +
    "</synchronization-panel>\n" +
    "<synchronization-panel\n" +
    "    data-ng-if=\"$ctrl.showSyncButton\"\n" +
    "    data-item-id=\"$ctrl.cmsPage.uuid\"\n" +
    "    data-get-sync-status=\"$ctrl.getSyncStatus\"\n" +
    "    data-perform-sync=\"$ctrl.performSync\"\n" +
    "    data-on-sync-status-ready=\"$ctrl.onSyncStatusReady($syncStatus)\"\n" +
    "    data-get-api=\"$ctrl.getApi($api)\"\n" +
    ">\n" +
    "</synchronization-panel>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/synchronize/pages/syncMenu/pageSyncMenuToolbarItemTemplate.html',
    "<div data-has-operation-permission=\"'se.sync.catalog'\">\n" +
    "    <div\n" +
    "        class=\"toolbar-action\"\n" +
    "        data-uib-dropdown\n" +
    "        data-auto-close=\"outsideClick\"\n" +
    "        data-is-open=\"$ctrl.toolbarItem.isOpen\"\n" +
    "        data-item-key=\"{{ $ctrl.toolbarItem.key }}\"\n" +
    "    >\n" +
    "        <button\n" +
    "            type=\"button\"\n" +
    "            class=\"btn toolbar-action--button\"\n" +
    "            data-uib-dropdown-toggle\n" +
    "            aria-pressed=\"false\"\n" +
    "        >\n" +
    "            <span class=\"icon-synchronize se-toolbar-menu-ddlb--button__icon\">\n" +
    "                <span\n" +
    "                    data-ng-if=\"$ctrl.isNotInSync\"\n" +
    "                    class=\"hyicon hyicon-caution se-toolbar-menu-ddlb--button__caution\"\n" +
    "                ></span>\n" +
    "            </span>\n" +
    "            <span\n" +
    "                class=\"toolbar-action-button__txt\"\n" +
    "                data-ng-class=\"{'se-toolbar-menu-ddlb--button__txt': $ctrl.isNotInSync }\"\n" +
    "            >\n" +
    "                {{ $ctrl.toolbarItem.name | translate }}\n" +
    "            </span>\n" +
    "        </button>\n" +
    "        <div\n" +
    "            data-uib-dropdown-menu\n" +
    "            class=\"dropdown-menu-left toolbar-action--include se-sync-menu-content__dropdown\"\n" +
    "        >\n" +
    "            <div ng-if=\"$ctrl.toolbarItem.isOpen && $ctrl.isReady\">\n" +
    "                <se-prevent-vertical-overflow>\n" +
    "                    <div class=\"se-sync-menu-content__header\">\n" +
    "                        <span\n" +
    "                            data-translate=\"se.cms.synchronization.page.title\"\n" +
    "                            class=\"se-sync-menu-content__header-title\"\n" +
    "                        ></span>\n" +
    "                        <se-help\n" +
    "                            class=\"se-page-sync__y-help\"\n" +
    "                            data-ng-if=\"!$ctrl.syncPageConditions.canSyncHomepage && !$ctrl.syncPageConditions.pageHasNoDepOrNoSyncStatus\"\n" +
    "                            [template]=\"$ctrl.helpTemplate\"\n" +
    "                        ></se-help>\n" +
    "                    </div>\n" +
    "                    <page-synchronization-panel\n" +
    "                        data-cms-page=\"$ctrl.cmsPage\"\n" +
    "                        data-uri-context=\"$ctrl.uriContext\"\n" +
    "                    ></page-synchronization-panel>\n" +
    "                </se-prevent-vertical-overflow>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/synchronize/pages/syncMenu/pageSyncMenuToolbarItemWrapperTemplate.html',
    "<page-sync-menu-toolbar-item data-item=\"item\"></page-sync-menu-toolbar-item>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/versioning/context/versionItemContextTemplate.html',
    "<div class=\"se-version-item-context\">\n" +
    "    <span class=\"sap-icon--navigation-right-arrow\"></span>\n" +
    "    <div\n" +
    "        class=\"se-version-item-context__info\"\n" +
    "        data-y-popover\n" +
    "        data-placement=\"'bottom'\"\n" +
    "        data-template=\"$ctrl.getPopoverTemplate()\"\n" +
    "        data-trigger=\"'hover'\"\n" +
    "    >\n" +
    "        <div class=\"se-version-item-context__info-label\" title=\"{{ $ctrl.getPageVersion().label }}\">\n" +
    "            {{ $ctrl.getPageVersion().label }}\n" +
    "        </div>\n" +
    "        <div class=\"se-version-item-context__info-date\">\n" +
    "            {{ $ctrl.getPageVersion().creationtime | date:'short' }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <button\n" +
    "        type=\"button\"\n" +
    "        data-uib-dropdown-toggle\n" +
    "        data-ng-click=\"$ctrl.deselectPageVersion()\"\n" +
    "        class=\"se-version-item-context__remove-btn fd-button--light sap-icon--decline\"\n" +
    "    ></button>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/versioning/context/versionItemContextWrapperTemplate.html',
    "<version-item-context></version-item-context>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/versioning/pageVersionsMenuTemplate.html',
    "<div\n" +
    "    class=\"se-toolbar-menu-content se-toolbar-menu-content--versions\"\n" +
    "    data-ng-if=\"$ctrl.actionItem.isOpen\"\n" +
    ">\n" +
    "    <versions-panel data-page-uuid=\"$ctrl.pageUuid\"></versions-panel>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/versioning/pageVersionsMenuWrapperTemplate.html',
    "<page-versions-menu data-action-item=\"item\"></page-versions-menu>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/versioning/panel/itemMenu/versionItemMenuItemsTemplate.html',
    "<div class=\"se-version-item-menu fd-menu\">\n" +
    "    <div\n" +
    "        class=\"se-version-item-menu__item fd-menu__list\"\n" +
    "        data-ng-repeat=\"dropdownItem in $ctrl.menuItems\"\n" +
    "        data-ng-click=\"$ctrl.executeItemCallback(dropdownItem, $event)\"\n" +
    "    >\n" +
    "        <span class=\"se-version-item-menu__item-link fd-menu__item\">\n" +
    "            {{ dropdownItem.i18nKey | translate }}\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/versioning/panel/itemMenu/versionItemMenuTemplate.html',
    "<se-popup-overlay\n" +
    "    [popup-overlay]=\"$ctrl.popupConfig\"\n" +
    "    [popup-overlay-trigger]=\"$ctrl.isMenuOpen\"\n" +
    "    (popup-overlay-on-hide)=\"$ctrl.onMenuHide()\"\n" +
    "    data-ng-class=\"{ 'se-version-item-menu__popup-anchor--open': $ctrl.isMenuOpen }\"\n" +
    "    class=\"se-version-item-menu__popup-anchor\"\n" +
    ">\n" +
    "    <div\n" +
    "        data-ng-if=\"$ctrl.menuItems.length > 0\"\n" +
    "        data-ng-click=\"$ctrl.onButtonClick($event)\"\n" +
    "        class=\"sap-icon--overflow se-version-item-menu__toggle\"\n" +
    "    ></div>\n" +
    "</se-popup-overlay>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/versioning/panel/versionItemTemplate.html',
    "<div\n" +
    "    class=\"se-version-item\"\n" +
    "    data-ng-class=\"{ 'se-version-item--selected': $ctrl.isSelectedVersion() }\"\n" +
    ">\n" +
    "    <div class=\"se-version-item__header\" title=\"{{ $ctrl.pageVersion.label }}\">\n" +
    "        <div class=\"se-version-item__label\" data-ng-click=\"$ctrl.selectVersion()\">\n" +
    "            {{ $ctrl.pageVersion.label }}\n" +
    "        </div>\n" +
    "        <version-item-menu\n" +
    "            data-ng-if=\"$ctrl.isVersionMenuEnabled()\"\n" +
    "            data-item=\"$ctrl.pageVersion\"\n" +
    "        ></version-item-menu>\n" +
    "    </div>\n" +
    "    <div class=\"se-version-item__date\">{{ $ctrl.pageVersion.creationtime | date:'short' }}</div>\n" +
    "    <div class=\"se-version-item__description\" data-ng-if=\"$ctrl.pageVersion.description\">\n" +
    "        <div\n" +
    "            class=\"se-version-item__description-text\"\n" +
    "            data-ng-class=\"{'se-version-item__description-text--truncated': $ctrl.isTruncated()}\"\n" +
    "        >\n" +
    "            {{$ctrl.pageVersion.description}}\n" +
    "        </div>\n" +
    "        <div\n" +
    "            class=\"se-more-text__toggle\"\n" +
    "            data-ng-if=\"$ctrl.hasMoreText()\"\n" +
    "            data-ng-click=\"$ctrl.toggleTruncate()\"\n" +
    "            data-translate=\"{{$ctrl.getLinkLabel()}}\"\n" +
    "        ></div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/versioning/panel/versionsPanelTemplate.html',
    "<div class=\"se-toolbar-menu-content--wrapper\">\n" +
    "    <div class=\"se-toolbar-menu-content__header\">\n" +
    "        <div\n" +
    "            class=\"se-toolbar-menu-content__header-title\"\n" +
    "            data-translate=\"se.cms.actionitem.page.versions\"\n" +
    "        ></div>\n" +
    "        <button\n" +
    "            class=\"se-version-panel__manage-btn fd-button fd-button--compact\"\n" +
    "            data-ng-click=\"$ctrl.switchToVersioningMode()\"\n" +
    "            data-translate=\"se.cms.toolbaritem.versioning.manageversions.name\"\n" +
    "            data-ng-if=\"$ctrl.showManageButton()\"\n" +
    "        ></button>\n" +
    "    </div>\n" +
    "    <div\n" +
    "        class=\"se-version-toolbar-menu-content__body\"\n" +
    "        data-ng-class=\"{'se-version-toolbar-menu-content__body--narrow': $ctrl.showManageButton()}\"\n" +
    "    >\n" +
    "        <versions-search\n" +
    "            data-versions-found=\"$ctrl.versionsFound\"\n" +
    "            data-on-search-term-changed=\"$ctrl.onSearchTermChanged(newSearchTerm)\"\n" +
    "            data-show-search-controls=\"$ctrl.pageHasVersions()\"\n" +
    "        ></versions-search>\n" +
    "        <div>\n" +
    "            <se-infinite-scrolling\n" +
    "                [page-size]=\"$ctrl.pageSize\"\n" +
    "                [mask]=\"$ctrl.searchTerm\"\n" +
    "                [fetch-page]=\"$ctrl.loadVersions\"\n" +
    "                [context]=\"$ctrl\"\n" +
    "                data-ng-if=\"$ctrl.pageHasVersionsOrIsLoading()\"\n" +
    "                class=\"se-version-panel__infinite-scroll\"\n" +
    "            >\n" +
    "                <div\n" +
    "                    data-ng-repeat=\"item in $ctrl.items track by $index\"\n" +
    "                    data-ng-class=\"{'se-version-item--last': $index === $ctrl.items.length-1}\"\n" +
    "                >\n" +
    "                    <version-item data-page-version=\"item\"></version-item>\n" +
    "                </div>\n" +
    "            </se-infinite-scrolling>\n" +
    "            <div\n" +
    "                data-ng-if=\"!$ctrl.pageHasVersionsOrIsLoading()\"\n" +
    "                class=\"se-version-panel__empty-list\"\n" +
    "            >\n" +
    "                <img src=\"static-resources/images/emptyVersions.svg\" alt=\"no versions\" />\n" +
    "                <span class=\"se-version-panel__no-versions-message\">\n" +
    "                    {{ 'se.cms.toolbaritem.versioning.noversionsfound' | translate }}</span\n" +
    "                >\n" +
    "                <a\n" +
    "                    class=\"se-version-panel__manage-link fd-link\"\n" +
    "                    data-ng-click=\"$ctrl.switchToVersioningMode()\"\n" +
    "                    data-translate=\"se.cms.toolbaritem.versioning.manageversionslink.name\"\n" +
    "                    data-ng-if=\"$ctrl.showManageLink()\"\n" +
    "                >\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/versioning/panel/versionsSearchTemplate.html',
    "<div class=\"se-version-panel__search\" data-ng-if=\"$ctrl.showSearchControls\">\n" +
    "    <div class=\"se-input-group\">\n" +
    "        <input\n" +
    "            type=\"text\"\n" +
    "            class=\"se-input-group__input-area\"\n" +
    "            name=\"search-term\"\n" +
    "            data-ng-model=\"$ctrl.searchTerm\"\n" +
    "            data-ng-model-options=\"{debounce: 500}\"\n" +
    "            placeholder=\"{{'se.cms.versions.search.placeholder' | translate}}\"\n" +
    "        />\n" +
    "\n" +
    "        <span class=\"sap-icon--search se-input-group__addon\"></span>\n" +
    "        <div\n" +
    "            data-ng-show=\"$ctrl.showResetButton\"\n" +
    "            class=\"se-input-group__addon se-input-group__clear-btn\"\n" +
    "            data-ng-click=\"$ctrl.resetSearchBox()\"\n" +
    "        >\n" +
    "            <span class=\"sap-icon--decline\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <span class=\"se-version-panel__count\">\n" +
    "        {{ 'se.cms.versions.search.versions.found' | translate:\n" +
    "        $ctrl.getVersionsFoundTranslationData() }}\n" +
    "    </span>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/components/pageApprovalSelector/pageApprovalSelectorTemplate.html',
    "<div\n" +
    "    data-uib-dropdown\n" +
    "    class=\"se-page-approval\"\n" +
    "    data-is-open=\"$ctrl.isOpen\"\n" +
    "    data-ng-if=\"$ctrl.showDropdown\"\n" +
    "    auto-close=\"outsideClick\"\n" +
    ">\n" +
    "    <button\n" +
    "        class=\"fd-button--light sap-icon--navigation-down-arrow se-page-approval__btn\"\n" +
    "        data-uib-dropdown-toggle\n" +
    "        data-ng-click=\"$ctrl.onDropdownClick()\"\n" +
    "        data-ng-disabled=\"disabled\"\n" +
    "        aria-pressed=\"false\"\n" +
    "    ></button>\n" +
    "    <ul class=\"dropdown-menu bottom btn-block se-page-approval--list\" role=\"menu\">\n" +
    "        <li\n" +
    "            ng-repeat=\"choice in $ctrl.getPageApprovalOptions()\"\n" +
    "            class=\"item se-page-approval--item\"\n" +
    "        >\n" +
    "            <a href data-ng-click=\"$ctrl.selectApprovalStatus(choice);\">\n" +
    "                <div\n" +
    "                    data-ng-class=\"{'se-page-approval__icon--ready-to-sync': choice.key==='APPROVED', 'se-page-approval__icon--draft': choice.key==='CHECK'}\"\n" +
    "                ></div>\n" +
    "                {{choice.i18nKey | translate}}</a\n" +
    "            >\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/components/pageApprovalSelector/pageApprovalSelectorWrapperTemplate.html',
    "<page-approval-selector></page-approval-selector>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/components/pageDisplayStatus/pageDisplayStatusTemplate.html',
    "<div data-ng-if=\"!$ctrl.showLastSyncTime\" class=\"se-page-status\">\n" +
    "    <div class=\"se-page-status-icon\" data-ng-class=\"[$ctrl.getStatusIconCssClass()]\"></div>\n" +
    "    <div class=\"se-page-status-label\">{{$ctrl.getCurrentStatusKey() | translate}}</div>\n" +
    "</div>\n" +
    "\n" +
    "<div\n" +
    "    data-ng-if=\"$ctrl.showLastSyncTime\"\n" +
    "    class=\"se-page-status\"\n" +
    "    data-y-popover\n" +
    "    data-placement=\"'left'\"\n" +
    "    data-template=\"$ctrl.getTooltipTemplate()\"\n" +
    "    data-trigger=\"'hover'\"\n" +
    ">\n" +
    "    <div class=\"se-page-status-icon\" data-ng-class=\"[$ctrl.getStatusIconCssClass()]\"></div>\n" +
    "    <div class=\"se-page-status-label\">{{$ctrl.getCurrentStatusKey() | translate}}</div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/components/pageDisplayStatus/pageDisplayStatusWrapperTemplate.html',
    "<div class=\"se-page-status-toolbar-container\"><page-display-status></page-display-status></div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/inbox/components/workflowInboxTaskTemplate.html',
    "<div>\n" +
    "    <div class=\"se-workflow-inbox-task-header se-cms-dev-workflow-inbox-task-header\">\n" +
    "        <a data-ng-click=\"$ctrl.onClick()\">{{$ctrl.getTaskName()}}</a>\n" +
    "    </div>\n" +
    "    <div class=\"se-workflow-inbox-task-desc se-cms-dev-workflow-inbox-task-desc\">\n" +
    "        {{$ctrl.getTaskDescription()}}\n" +
    "    </div>\n" +
    "    <div class=\"se-workflow-inbox-task-body se-cms-dev-workflow-inbox-task-body\">\n" +
    "        {{$ctrl.getTaskCreatedAgo()}}\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/inbox/headerToolbarInboxTemplate.html',
    "<workflow-inbox data-action-item=\"item\"></workflow-inbox>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/inbox/workflowInboxBadgeTemplate.html',
    "<div data-ng-if=\"$ctrl.inboxCount > 0\" aria-label=\"Notifications\">\n" +
    "    <div class=\"fd-counter fd-counter--notification se-inbox-badge\" aria-label=\"Unread count\">\n" +
    "        {{ $ctrl.displayCount }}\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/inbox/workflowInboxMultipleTasksAnnouncementTemplate.html',
    "<div data-ng-click=\"$announcementCtrl.onClick($event)\" class=\"se-announcement__message--multi\">\n" +
    "    {{ 'se.cms.workflow.tasks.announcement' | translate: $announcementCtrl.getCount() }}\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/inbox/workflowInboxSingleTaskAnnouncementTemplate.html',
    "<div data-ng-click=\"$announcementCtrl.onClick($event)\">\n" +
    "    <div class=\"se-announcement__title\">{{$announcementCtrl.task.action.name}}</div>\n" +
    "    <div class=\"se-announcement__message\">\n" +
    "        {{$announcementCtrl.task.attachments[0].catalogName}} |\n" +
    "        {{$announcementCtrl.task.attachments[0].pageName}}\n" +
    "    </div>\n" +
    "    <div class=\"se-announcement__time-stamp\">{{$announcementCtrl.getStartedAgo()}}</div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/inbox/workflowInboxTemplate.html',
    "<div\n" +
    "    class=\"toolbar-action se-workflow-inbox-container\"\n" +
    "    data-uib-dropdown\n" +
    "    data-auto-close=\"outsideClick\"\n" +
    "    data-is-open=\"$ctrl.actionItem.isOpen\"\n" +
    "    data-item-key=\"{{ $ctrl.actionItem.key }}\"\n" +
    "    data-on-toggle=\"$ctrl.onDropdownToggle(open)\"\n" +
    ">\n" +
    "    <button\n" +
    "        type=\"button\"\n" +
    "        class=\"se-workflow-inbox-toggle toolbar-action--button--compact\"\n" +
    "        data-uib-dropdown-toggle\n" +
    "        aria-pressed=\"false\"\n" +
    "    >\n" +
    "        <span class=\"se-toolbar-actions__icon sap-icon--task\"></span>\n" +
    "        <workflow-inbox-badge></workflow-inbox-badge>\n" +
    "    </button>\n" +
    "    <div\n" +
    "        data-uib-dropdown-menu\n" +
    "        data-ng-class=\"{\n" +
    "            'se-toolbar__dropdown--right': $ctrl.actionItem.dropdownPosition==='right',\n" +
    "            'se-toolbar__dropdown--center': $ctrl.actionItem.dropdownPosition==='center',\n" +
    "            'se-toolbar__dropdown--left': $ctrl.actionItem.dropdownPosition==='left'}\"\n" +
    "        class=\"toolbar-action--include--compact\"\n" +
    "    >\n" +
    "        <div data-ng-if=\"$ctrl.actionItem.isOpen\" class=\"se-workflow-inbox\">\n" +
    "            <div class=\"se-workflow-inbox-header\">\n" +
    "                <div\n" +
    "                    class=\"se-workflow-inbox-header__title\"\n" +
    "                    data-translate=\"se.cms.workflow.toolbar.inbox\"\n" +
    "                ></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"se-workflow-inbox-tasks se-cms-dev-workflow-inbox-tasks fd-panel__body\">\n" +
    "                <div\n" +
    "                    data-ng-if=\"!$ctrl.tasksNotReady && $ctrl.totalNumberOfTasks === 0\"\n" +
    "                    class=\"se-workflow-inbox-tasks__no-tasks\"\n" +
    "                >\n" +
    "                    <img src=\"static-resources/images/Inbox.svg\" alt=\"empty-inbox\" img />\n" +
    "                    <span\n" +
    "                        class=\"se-workflow-inbox__empty-inbox-message\"\n" +
    "                        data-translate=\"se.cms.workflow.toolbar.inbox.emptyinbox.message\"\n" +
    "                    ></span>\n" +
    "                    <span\n" +
    "                        class=\"se-workflow-inbox__empty-inbox-message-alt\"\n" +
    "                        data-translate=\"se.cms.workflow.toolbar.inbox.emptyinbox.message.alt\"\n" +
    "                    ></span>\n" +
    "                </div>\n" +
    "                <div data-ng-if=\"$ctrl.tasksNotReady\">\n" +
    "                    <div class=\"spinner-sm spinner-light\">Loading...</div>\n" +
    "                </div>\n" +
    "                <se-infinite-scrolling\n" +
    "                    class=\"se-version-panel__infinite-scroll\"\n" +
    "                    [page-size]=\"$ctrl.pageSize\"\n" +
    "                    [fetch-page]=\"$ctrl.loadInboxTasks\"\n" +
    "                    [context]=\"$ctrl\"\n" +
    "                >\n" +
    "                    <div\n" +
    "                        class=\"se-workflow-inbox-task se-cms-dev-workflow-inbox-task\"\n" +
    "                        data-ng-repeat=\"item in $ctrl.items track by $index\"\n" +
    "                    >\n" +
    "                        <workflow-inbox-task\n" +
    "                            id=\"workflow-inbox-task-{{$index}}\"\n" +
    "                            data-task=\"item\"\n" +
    "                        ></workflow-inbox-task>\n" +
    "                    </div>\n" +
    "                </se-infinite-scrolling>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/notification/pageInWorkflowNotificationTemplate.html',
    "<div><span data-translate=\"se.cms.workflow.page.in.workflow\"></span></div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/components/workflowActionCommentTemplate.html',
    "<!-- Decision Comment Template-->\n" +
    "<div data-ng-if=\"$ctrl.isDecisionComment\" class=\"se-workflow-action-comment\">\n" +
    "    <div class=\"fd-tile\">\n" +
    "        <div class=\"fd-tile__content\">\n" +
    "            <h2\n" +
    "                class=\"fd-tile__title se-workflow-action-comment__header\"\n" +
    "                data-ng-class=\"{'sap-icon--workflow-tasks sap-icon--m': $ctrl.isIncomingDecision(), 'sap-icon--workflow-tasks sap-icon--m sap-icon--flip-h': !$ctrl.isIncomingDecision()}\"\n" +
    "            >\n" +
    "                {{$ctrl.actionComment.decisionName}}\n" +
    "            </h2>\n" +
    "            <p class=\"fd-has-type-minus-1\">\n" +
    "                {{$ctrl.actionComment.authorName}} | {{$ctrl.getCreatedAgo()}}\n" +
    "            </p>\n" +
    "            <p data-ng-if=\"!!$ctrl.actionComment.text\">\n" +
    "                <strong>{{'se.cms.page.workflow.action.item.comment.header' | translate}}:</strong>\n" +
    "                <se-more-text\n" +
    "                    [limit]=\"$ctrl.textLimit\"\n" +
    "                    [ellipsis]=\"'...'\"\n" +
    "                    [text]=\"$ctrl.actionComment.text\"\n" +
    "                    class=\"se-version-item__y-more-text\"\n" +
    "                ></se-more-text>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- General Comment Template -->\n" +
    "<div data-ng-if=\"!$ctrl.isDecisionComment\" class=\"se-workflow-action-comment\">\n" +
    "    <div class=\"fd-tile\">\n" +
    "        <div class=\"fd-tile__content\">\n" +
    "            <h2 class=\"fd-panel__title\">\n" +
    "                {{'se.cms.page.workflow.action.item.comment.header' | translate}}\n" +
    "            </h2>\n" +
    "            <p>{{$ctrl.getCreatedAgo()}}</p>\n" +
    "            <p>{{$ctrl.actionComment.authorName}}</p>\n" +
    "            <br />\n" +
    "            <p>\n" +
    "                <se-more-text\n" +
    "                    [limit]=\"$ctrl.textLimit\"\n" +
    "                    [ellipsis]=\"'...'\"\n" +
    "                    [text]=\"$ctrl.actionComment.text\"\n" +
    "                    class=\"se-version-item__y-more-text\"\n" +
    "                ></se-more-text>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/components/WorkflowActionItemMultipleDecisionsTemplate.html',
    "<div\n" +
    "    class=\"fd-popover__body fd-popover__body--right fd-popover__body--no-arrow  se-workflow-action-item-decisions-list\"\n" +
    ">\n" +
    "    <nav class=\"fd-menu\">\n" +
    "        <ul class=\"fd-menu__list \">\n" +
    "            <li data-ng-repeat=\"decision in $ctrl.workflowAction.decisions\">\n" +
    "                <a\n" +
    "                    class=\"fd-menu__item se-workflow-action-item-decisions-list__item\"\n" +
    "                    data-ng-click=\"$ctrl.onMainButtonClick($event, decision)\"\n" +
    "                >\n" +
    "                    {{ decision.name }}\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </nav>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/components/workflowActionItemTemplate.html',
    "<div data-ng-class=\"$ctrl.getWorkflowActionStatusClass()\">\n" +
    "    <se-collapsible-container\n" +
    "        data-ng-if=\"$ctrl.isReady\"\n" +
    "        class=\"se-catalog-details__collapse fd-panel\"\n" +
    "        id=\"{{$ctrl.workflowAction.code}}\"\n" +
    "        (get-api)=\"$ctrl.getCollapsibleContainerApi($event)\"\n" +
    "    >\n" +
    "        <se-collapsible-container-header>\n" +
    "            <div class=\"fd-panel__header\">\n" +
    "                <div class=\"fd-panel__head\">\n" +
    "                    <h1 class=\"fd-panel__title\">{{$ctrl.workflowAction.name}}</h1>\n" +
    "                    <p class=\"fd-panel__description\">\n" +
    "                        {{$ctrl.getReadableStatus()}} {{$ctrl.getActiveSince()}}\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"fd-panel__body\">\n" +
    "                {{$ctrl.workflowAction.description}}\n" +
    "\n" +
    "                <!-- Decision Button(s) -->\n" +
    "                <div\n" +
    "                    data-ng-if=\"$ctrl.displayDecisionsButtons()\"\n" +
    "                    class=\"fd-dropdown se-workflow-action-item__decision-btn\"\n" +
    "                >\n" +
    "                    <div class=\"fd-popover\">\n" +
    "                        <div class=\"fd-popover__control\">\n" +
    "                            <div\n" +
    "                                data-ng-class=\"{ 'fd-button-split': $ctrl.workflowAction.decisions.length > 1 }\"\n" +
    "                            >\n" +
    "                                <button\n" +
    "                                    class=\"fd-button--compact\"\n" +
    "                                    id=\"{{$ctrl.workflowAction.code}}-decision-button\"\n" +
    "                                    data-ng-click=\"$ctrl.onMainButtonClick($event, $ctrl.workflowAction.decisions[0])\"\n" +
    "                                    type=\"button\"\n" +
    "                                >\n" +
    "                                    {{$ctrl.workflowAction.decisions[0].name}}\n" +
    "                                </button>\n" +
    "                                <se-popup-overlay\n" +
    "                                    [popup-overlay]=\"$ctrl.popupConfig\"\n" +
    "                                    [popup-overlay-trigger]=\"$ctrl.isMenuOpen\"\n" +
    "                                    (popup-overlay-on-hide)=\"$ctrl.onMenuHide()\"\n" +
    "                                >\n" +
    "                                    <button\n" +
    "                                        id=\"{{$ctrl.workflowAction.code}}-decision-split-button\"\n" +
    "                                        data-ng-if=\"$ctrl.workflowAction.decisions.length > 1\"\n" +
    "                                        class=\"fd-button--compact menu-button sap-icon--slim-arrow-down\"\n" +
    "                                        data-ng-click=\"$ctrl.onSplitButtonClick($event)\"\n" +
    "                                    ></button>\n" +
    "                                </se-popup-overlay>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </se-collapsible-container-header>\n" +
    "        <se-collapsible-container-content>\n" +
    "            <div class=\"se-workflow-action-item__content\" data-ng-if=\"$ctrl.showComments()\">\n" +
    "                <span\n" +
    "                    data-ng-if=\"$ctrl.hasNoComments\"\n" +
    "                    class=\"se-workflow-action-item__comments-list fd-has-font-style-italic fd-has-color-text-4\"\n" +
    "                    data-translate=\"se.cms.actionitem.page.workflow.action.no.comments.available\"\n" +
    "                ></span>\n" +
    "                <se-infinite-scrolling\n" +
    "                    [page-size]=\"$ctrl.pageSize\"\n" +
    "                    [fetch-page]=\"$ctrl.loadComments\"\n" +
    "                    [context]=\"$ctrl\"\n" +
    "                >\n" +
    "                    <div data-ng-repeat=\"item in $ctrl.items track by $index\">\n" +
    "                        <workflow-action-comment\n" +
    "                            data-workflow-action=\"$ctrl.workflowAction\"\n" +
    "                            data-action-comment=\"item\"\n" +
    "                        >\n" +
    "                        </workflow-action-comment>\n" +
    "                    </div>\n" +
    "                </se-infinite-scrolling>\n" +
    "            </div>\n" +
    "        </se-collapsible-container-content>\n" +
    "    </se-collapsible-container>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/pageWorkflowMenuTemplate.html',
    "<div data-ng-if=\"$ctrl.isReady\">\n" +
    "    <div data-ng-if=\"!$ctrl.pageHasWorkflow\" has-operation-permission=\"'se.start.page.workflow'\">\n" +
    "        <!-- Workflow not started -->\n" +
    "        <button\n" +
    "            type=\"button\"\n" +
    "            class=\"btn toolbar-action--button\"\n" +
    "            data-ng-click=\"$ctrl.startWorkflow()\"\n" +
    "            id=\"smartEditPerspectiveToolbar_option_se.cms.startWorkflow_btn\"\n" +
    "            aria-expanded=\"false\"\n" +
    "        >\n" +
    "            <span\n" +
    "                class=\"toolbar-action-button__txt\"\n" +
    "                id=\"smartEditPerspectiveToolbar_option_se.cms.startWorkflow_btn_lbl\"\n" +
    "                data-translate=\"se.cms.workflow.toolbar.start.workflow\"\n" +
    "            ></span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div has-operation-permission=\"'se.view.page.workflowMenu'\">\n" +
    "        <!-- Workflow has started -->\n" +
    "        <div\n" +
    "            data-ng-if=\"$ctrl.pageHasWorkflow\"\n" +
    "            class=\"toolbar-action\"\n" +
    "            data-uib-dropdown\n" +
    "            data-is-open=\"$ctrl.actionItem.isOpen\"\n" +
    "            data-auto-close=\"outsideClick\"\n" +
    "            data-item-key=\"{{ $ctrl.actionItem.key }}\"\n" +
    "            data-on-toggle=\"$ctrl.onDropdownToggle(open)\"\n" +
    "        >\n" +
    "            <button\n" +
    "                type=\"button\"\n" +
    "                class=\"toolbar-action--button btn-page-tasks\"\n" +
    "                data-uib-dropdown-toggle\n" +
    "                aria-pressed=\"false\"\n" +
    "            >\n" +
    "                <span class=\"sap-icon--workflow-tasks\"></span>\n" +
    "                <span\n" +
    "                    class=\"toolbar-action--button--txt\"\n" +
    "                    data-translate=\"se.cms.workflow.toolbar.view.workflow.menu\"\n" +
    "                ></span>\n" +
    "            </button>\n" +
    "\n" +
    "            <div\n" +
    "                data-uib-dropdown-menu\n" +
    "                class=\"btn-block toolbar-action--include se-page-workflow-menu\"\n" +
    "            >\n" +
    "                <div class=\"\" ng-if=\"$ctrl.actionItem.isOpen\">\n" +
    "                    <div class=\"se-page-workflow-menu__header\">\n" +
    "                        <div\n" +
    "                            class=\"se-page-workflow-menu__header-text\"\n" +
    "                            data-translate=\"se.cms.workflow.toolbar.view.workflow.menu\"\n" +
    "                        ></div>\n" +
    "                        <div class=\"se-page-workflow-menu__header-menu\">\n" +
    "                            <workflow-item-menu\n" +
    "                                data-workflow-info=\"$ctrl.workflow\"\n" +
    "                            ></workflow-item-menu>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"se-version-toolbar-menu-content__body\">\n" +
    "                        <div class=\"se-page-workflow-menu-tabs\">\n" +
    "                            <div data-ng-if=\"!$ctrl.isComponentReady\">\n" +
    "                                <div class=\"spinner-sm spinner-light\">Loading...</div>\n" +
    "                            </div>\n" +
    "                            <se-tabs\n" +
    "                                data-ng-if=\"$ctrl.isComponentReady\"\n" +
    "                                [tabs-list]=\"$ctrl.tabsList\"\n" +
    "                                [model]=\"$ctrl\"\n" +
    "                                [num-tabs-displayed]=\"2\"\n" +
    "                            >\n" +
    "                            </se-tabs>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/pageWorkflowMenuWrapperTemplate.html',
    "<page-workflow-menu data-action-item=\"item\"></page-workflow-menu>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/tabs/allTasksTabWrapperTemplate.html',
    "<div class=\"se-page-workflow-tasks-wrapper\">\n" +
    "    <div data-ng-repeat=\"action in model.allActions\">\n" +
    "        <div class=\"se-page-workflow-task fd-panel\">\n" +
    "            <div>\n" +
    "                <workflow-action-item\n" +
    "                    data-workflow=\"model.workflow\"\n" +
    "                    data-workflow-action=\"action\"\n" +
    "                    data-can-make-decisions=\"false\"\n" +
    "                ></workflow-action-item>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br />\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/tabs/currentTasksTabWrapperTemplate.html',
    "<div class=\"se-page-workflow-tasks-wrapper\">\n" +
    "    <div data-ng-repeat=\"action in model.activeActions\">\n" +
    "        <div class=\"se-page-workflow-task fd-panel\">\n" +
    "            <div>\n" +
    "                <workflow-action-item\n" +
    "                    data-workflow=\"model.workflow\"\n" +
    "                    data-workflow-action=\"action\"\n" +
    "                    data-can-make-decisions=\"true\"\n" +
    "                ></workflow-action-item>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br />\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/workflowItemMenu/cancelWorkflowItemTemplate.html',
    "<div\n" +
    "    id=\"cancel-workflow-item-menu\"\n" +
    "    class=\"se-cancel-workflow-item-menu__item-link fd-has-color-status-3\"\n" +
    "    data-translate=\"{{dropdownItem.i18nKey}}\"\n" +
    "    data-ng-click=\"$ctrl.executeItemCallback(dropdownItem, $event)\"\n" +
    "></div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/workflowItemMenu/descriptionWorkflowItemTemplate.html',
    "<div id=\"workflow-description-item-menu\" class=\"workflow-description-item-menu\">\n" +
    "    <div class=\"se-dropdown-item--label\">\n" +
    "        <div class=\"workflow-description-item-menu__label fd-has-type-1 fd-has-margin-bottom-tiny\">\n" +
    "            <div data-translate=\"{{dropdownItem.i18nKey}}\"></div>\n" +
    "            <div data-has-operation-permission=\"'se.edit.workflow.workflowMenu'\">\n" +
    "                <a\n" +
    "                    id=\"edit-workflow-item-menu\"\n" +
    "                    class=\"sap-icon--edit fd-has-float-right\"\n" +
    "                    data-ng-click=\"$ctrl.executeItemCallback(dropdownItem, $event)\"\n" +
    "                >\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div\n" +
    "            ng-if=\"$ctrl.workflowInfo.description\"\n" +
    "            class=\"workflow-description-item-menu__description\"\n" +
    "        >\n" +
    "            {{$ctrl.workflowInfo.description}}\n" +
    "        </div>\n" +
    "        <div\n" +
    "            ng-if=\"!$ctrl.workflowInfo.description\"\n" +
    "            data-translate=\"se.cms.actionitem.page.workflow.no.description\"\n" +
    "        ></div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/workflowItemMenu/workflowItemMenuItemsTemplate.html',
    "<div class=\"se-version-item-menu\">\n" +
    "    <div class=\"se-version-item-menu__item\" data-ng-repeat=\"dropdownItem in $ctrl.menuItems\">\n" +
    "        <div data-ng-include=\"dropdownItem.templateUrl\"></div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('web/features/cmssmarteditContainer/components/workflow/pageWorkflowMenu/workflowItemMenu/workflowItemMenuTemplate.html',
    "<se-popup-overlay\n" +
    "    class=\"se-version-item-menu__popup-anchor\"\n" +
    "    data-ng-class=\"{ 'se-version-item-menu__popup-anchor--open': $ctrl.isMenuOpen }\"\n" +
    "    [popup-overlay]=\"$ctrl.popupConfig\"\n" +
    "    [popup-overlay-trigger]=\"$ctrl.isMenuOpen\"\n" +
    "    (popup-overlay-on-hide)=\"$ctrl.onMenuHide()\"\n" +
    ">\n" +
    "    <span\n" +
    "        data-ng-click=\"$ctrl.onButtonClick($event)\"\n" +
    "        data-ng-if=\"$ctrl.menuItems.length > 0\"\n" +
    "        class=\"sap-icon--overflow se-version-item-menu__toggle\"\n" +
    "    ></span>\n" +
    "</se-popup-overlay>\n"
  );

}]);
